import axios from "./adminApi";

const headers = () => ({ "X-WP-Nonce": servvData.nonce });

export const getEvent = async (postId, occurrenceId = null) => {
  const response = await axios.get(`/wp-json/servv-plugin/v1/event/${postId}`, {
    params: occurrenceId ? { occurrence_id: occurrenceId } : {},
    headers: headers(),
  });
  return response.data;
};

export const createEvent = async (location, data) => {
  const response = await axios.post(
    `/wp-json/servv-plugin/v1/events/${location}`,
    data,
    { headers: headers() },
  );
  return response.data;
};

export const generateEventData = async (data) => {
  const response = await axios.post(
    `/wp-json/servv-plugin/v1/event/data/generate`,
    data,
    { headers: headers() },
  );
  return response.data;
};

export const updateEvent = async (postId, data, occurrenceId = null) => {
  let url = `/wp-json/servv-plugin/v1/event/${postId}`;
  if (occurrenceId) url += `?occurrence_id=${occurrenceId}`;
  const response = await axios.patch(url, data, { headers: headers() });
  return response.data;
};

export const getFeaturedImage = async (postId, signal = null) => {
  const WP_API_BASE = `/wp-json/wp/v2/posts`;
  const res = await fetch(`${WP_API_BASE}/${postId}?_embed`, { signal });
  console.log(res);
  if (!res.ok) throw new Error("Failed to fetch post");
  const post = await res.json();
  return post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
};

// Opens the public post an event is published as. The events endpoint only
// knows the post id, so the permalink has to come from WordPress itself.
export const openEventPost = (postId) => {
  if (!postId) return;

  fetch(`/wp-json/wp/v2/posts/${postId}`)
    .then((res) => res.json())
    .then((post) => {
      if (post?.link) open(post.link, "_blank");
    })
    .catch((e) => console.log(e));
};

// One event can appear as its series and as a single occurrence, so neither id
// alone identifies a row.
export const eventKey = (event) => `${event.id}${event.occurrence_id || ""}`;

// The shape Dashboard's handleOpenEvent expects. Kept in one place so every
// view — cards, rows, rail — navigates identically.
export const eventRoutePayload = (event, { registrants = false } = {}) => ({
  id: event.post_id,
  occurrence_id: event.occurrence_id,
  ...(registrants ? { registrants_view: true } : {}),
});
