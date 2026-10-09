// The cover image travels to the API as base64 inside the event payload, both
// on create and on update. A raw photo therefore inflates the JSON body by a
// third, and hosting stacks reject or truncate such bodies long before the
// 5 MB a file picker happily accepts (nginx client_max_body_size, PHP
// post_max_size, WAFs). Every picked file is re-encoded here so the payload
// stays small enough to survive production, and so unsupported camera formats
// fail with a message instead of a 415 from the server.

// What inc/helpers.php accepts after decoding the base64.
export const COVER_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
];
export const COVER_IMAGE_ACCEPT = COVER_IMAGE_TYPES.join(",");
// Read from disk; anything larger is a camera original the browser would also
// struggle to decode.
const MAX_FILE_BYTES = 15 * 1024 * 1024;
// Sent to the API. 400 KB of base64 is ~534 KB on the wire, which fits inside
// the 1 MB body limit nginx ships with by default.
const MAX_PAYLOAD_BYTES = 400 * 1024;
const MAX_DIMENSION = 1600;

const base64Bytes = (dataUrl) =>
  Math.ceil(((dataUrl.length - dataUrl.indexOf(",") - 1) * 3) / 4);

const readFile = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("Unable to read this image."));
    reader.readAsDataURL(file);
  });

const loadImage = (dataUrl) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () =>
      reject(
        new Error(
          "This image could not be processed. Save it as JPG, PNG, GIF or WEBP and try again.",
        ),
      );
    image.src = dataUrl;
  });

// Scales down to MAX_DIMENSION and then searches for the highest JPEG quality
// that still fits the payload budget.
const compress = (image) => {
  const scale = Math.min(
    1,
    MAX_DIMENSION / Math.max(image.naturalWidth, image.naturalHeight),
  );
  const width = Math.max(1, Math.round(image.naturalWidth * scale));
  const height = Math.max(1, Math.round(image.naturalHeight * scale));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  // JPEG has no alpha channel, so transparency has to land on something.
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, width, height);
  context.drawImage(image, 0, 0, width, height);

  const top = canvas.toDataURL("image/jpeg", 0.9);
  if (base64Bytes(top) <= MAX_PAYLOAD_BYTES) return top;

  let low = 0.3;
  let high = 0.9;
  let best = null;
  for (let step = 0; step < 8; step += 1) {
    const quality = (low + high) / 2;
    const candidate = canvas.toDataURL("image/jpeg", quality);
    if (base64Bytes(candidate) <= MAX_PAYLOAD_BYTES) {
      best = candidate;
      low = quality;
    } else {
      high = quality;
    }
  }
  return best || canvas.toDataURL("image/jpeg", 0.3);
};

// Resolves with a data URL ready for event.image_content, or rejects with a
// message that can be shown as-is.
export const readCoverImage = async (file) => {
  if (!COVER_IMAGE_TYPES.includes(file.type))
    throw new Error("Choose a JPG, PNG, GIF or WEBP image.");
  if (file.size > MAX_FILE_BYTES)
    throw new Error("Choose an image smaller than 15 MB.");

  const dataUrl = await readFile(file);
  // Small files are forwarded untouched: that keeps PNG transparency and
  // animated GIFs intact, which a canvas round-trip would flatten.
  if (base64Bytes(dataUrl) <= MAX_PAYLOAD_BYTES) return dataUrl;

  const compressed = compress(await loadImage(dataUrl));
  if (base64Bytes(compressed) > MAX_PAYLOAD_BYTES * 2)
    throw new Error(
      "This image is too large to upload. Try a smaller or less detailed image.",
    );
  return compressed;
};
