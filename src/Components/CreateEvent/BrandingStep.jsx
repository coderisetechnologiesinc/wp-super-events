import { toast } from "react-toastify";
import StepActions from "./StepActions";
import { uploadMedia } from "../../utilities/media";
import { BrushIcon, UploadIcon } from "../../assets/icons";
import NewInputControl from "../Controls/NewInputControl";
import RadioGroup from "../Controls/RadioGroup";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const VISIBILITY_OPTIONS = [
  { value: true, label: "On" },
  { value: false, label: "Off" },
];

const EMAIL_NOTIFICATION_OPTIONS = [
  { value: false, label: "On" },
  { value: true, label: "Off" },
];

const BrandingStep = ({
  attributes,
  setAttributes,
  settings,
  changeStep,
  handleFormSubmit,
  isNew = false,
  calendarConnected,
}) => {
  const navigate = useNavigate();
  const { google_calendar, disable_emails } = attributes.notifications || {};
  const [warning, setWarning] = useState(false);
  const { topic, agenda } = attributes.meeting;
  const fileInputRef = useRef(null);
  const resolveImagePreview = (value) => {
    if (!value) return "";

    if (value.startsWith("data:image")) return value;
    if (value.startsWith("http") || value.startsWith("/")) return value;

    return `data:image/jpeg;base64,${value}`;
  };

  const [imagePreview, setImagePreview] = useState(
    resolveImagePreview(attributes?.image_content),
  );

  const [uploading, setUploading] = useState(false);
  useEffect(() => {
    setImagePreview(resolveImagePreview(attributes?.image_content));
  }, [attributes?.image_content]);

  const updateField = (key, value) => {
    if (warning === true && key === "topic") {
      setWarning(false);
    }
    if (key === "google_calendar" || key === "disable_emails") {
      setAttributes({
        notifications: {
          ...attributes.notifications,
          [key]: value,
        },
      });
    } else {
      setAttributes({
        meeting: {
          ...attributes.meeting,
          [key]: value,
        },
      });
    }
  };

  // const uploadImageToMediaLibrary = async (file) => {
  //   try {
  //     return await uploadMedia(file);
  //   } catch (err) {
  //     console.error(err);
  //     alert("Image upload failed");
  //     return null;
  //   }
  // };
  const compressImage = (dataUrl) =>
    new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        let { width, height } = img;
        const MAX_DIM = 1200;
        if (width > MAX_DIM || height > MAX_DIM) {
          const ratio = Math.min(MAX_DIM / width, MAX_DIM / height);
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        }
        canvas.width = width;
        canvas.height = height;
        canvas.getContext("2d").drawImage(img, 0, 0, width, height);

        const b64Bytes = (url) =>
          Math.ceil(((url.length - url.indexOf(",") - 1) * 3) / 4);
        let lo = 0.05,
          hi = 0.9,
          best = canvas.toDataURL("image/jpeg", 0.7);
        for (let i = 0; i < 10; i++) {
          const mid = (lo + hi) / 2;
          const out = canvas.toDataURL("image/jpeg", mid);
          const size = b64Bytes(out);
          best = out;
          if (size > 100 * 1024) hi = mid;
          else if (size < 50 * 1024) lo = mid;
          else break;
        }
        resolve(best);
      };
      img.src = dataUrl;
    });

  const handleImageChange = (file) => {
    if (!file) return;

    setUploading(true);

    const reader = new FileReader();

    reader.onloadend = async () => {
      let dataUrl = reader.result;

      if (file.size > 100 * 1024) {
        dataUrl = await compressImage(dataUrl);
      }

      setImagePreview(dataUrl);
      setAttributes({ image_content: dataUrl });
      setUploading(false);
    };

    reader.readAsDataURL(file);
  };

  // The first step has no previous step: go back where the user came from, or
  // fall back to the events list.
  const handleGoBack = () => {
    const from = location.state?.from;
    const allowed = ["/dashboard", "/events"];
    const canGoBack = from && allowed.some((path) => from.includes(path));

    canGoBack ? navigate(-1) : navigate("/events");
  };

  const handleContinue = () => {
    if (attributes?.meeting?.topic?.length > 0) {
      changeStep("date");
      return;
    }
    setWarning(true);
    toast.warning("Please enter the title");
  };

  return (
    <div className="step__wrapper">
      {/* Header */}
      <div className="step__header step__header--centered">
        <BrushIcon className="step__header_icon" />
        <div className="step__heading step__heading--centered">
          <h4 className="step__header_title">Event details</h4>
          <p className="step__description">Add event information and image</p>
        </div>
      </div>

      {/* Content */}
      <div className="step__content">
        <div className="step__content_block">
          <span className="step__content_title">Title</span>
          {/* Title */}
          <NewInputControl
            // label="Title"
            placeholder="Enter a title"
            value={topic}
            onChange={(val) => updateField("topic", val)}
            error={warning}
          />
        </div>
        <div className="step__content_block">
          {/* Subtitle */}
          <span className="step__content_title">Description</span>
          <NewInputControl
            // label="Subtitle"
            placeholder="Enter description"
            textarea={true}
            value={agenda}
            onChange={(val) => updateField("agenda", val)}
          />
        </div>

        {/* Image upload */}
        <div className="step__content_block">
          <span className="step__content_title">Image</span>

          {/* hidden input */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) => handleImageChange(e.target.files[0])}
          />

          <div
            className="servv_upload"
            onClick={() => fileInputRef.current?.click()}
            style={{ cursor: "pointer" }}
          >
            <div className="servv_upload__icon">
              <UploadIcon />
            </div>

            <div className="servv_upload__text">
              <button type="button" className="servv_upload__action">
                {uploading ? "Uploading..." : "Click to upload"}
              </button>
              {/* <span className="servv_upload__hint">or drag and drop</span> */}
            </div>

            <div className="servv_upload__support">
              Supports PNG and JPG files up to 5 MB.
            </div>
            <div className="servv_upload__support">
              Recommended aspect ratio is 16:11
            </div>
          </div>

          {/* Preview */}
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className={`mt-3 w-full max-h-[180px] object-cover rounded-lg ${
                uploading ? "opacity-60" : "opacity-100"
              }`}
            />
          )}
        </div>

        <div className="step__content_delimeter" />

        {/* Visibility */}
        {calendarConnected && (
          <div className="step__content_block">
            <span className="step__content_title">Calendar</span>

            <RadioGroup
              name="Calendar"
              value={calendarConnected ? google_calendar : false}
              options={VISIBILITY_OPTIONS}
              onChange={(val) => updateField("google_calendar", val)}
              disabled={!calendarConnected}
            />
          </div>
        )}

        {/* Email notifications */}
        {/* <div className="step__content_block">
          <span className="step__content_title">Email notifications</span>

          <RadioGroup
            name="email_notifications"
            value={disable_emails}
            options={EMAIL_NOTIFICATION_OPTIONS}
            onChange={() => updateField("disable_emails", !disable_emails)}
          />
        </div> */}
        <StepActions
          className=""
          onSaveAndExit={isNew ? undefined : () => handleFormSubmit(true)}
          onPrevious={handleGoBack}
          onPrimary={handleContinue}
        />
      </div>
    </div>
  );
};

export default BrandingStep;
