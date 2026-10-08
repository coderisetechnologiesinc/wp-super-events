import React, { Fragment } from "react";

import BlockStack from "../Containers/BlockStack";
import NewInputFieldControl from "../Controls/NewInputFieldControl";
import CheckboxItem from "../Controls/CheckboxItem";

import StepBlock from "../Shared/StepBlock";
import ImageUploadField from "../Shared/ImageUploadField";
import UploadBars from "../Shared/UploadBars";
const ProfileBrandingModal = ({
  /* ---------------- BUSINESS DETAILS ---------------- */
  title,
  setTitle,
  description,
  setDescription,
  address,
  setAddress,
  email,
  setEmail,

  /* ---------------- AVATAR ---------------- */
  hideAvatar,
  setHideAvatar,
  avatarUploading,
  avatarPreview,
  handleAvatarChange,
  handleSave,
  responsiveBlock,
}) => {
  // console.log(avatarUploading);
  return (
    <Fragment>
      {/* ===================================================== */}
      {/* ✅ BUSINESS DETAILS */}
      {/* ===================================================== */}
      <StepBlock
        title="Business details"
        description="Update your title, description, and contact information"
      >
        <BlockStack gap={5} className={responsiveBlock}>
          {/* Title */}
          <div>
            <p className="text-sm font-medium text-gray-800 mb-1">
              Business title
            </p>
            <NewInputFieldControl
              width="100%"
              placeholder="Enter business title"
              value={title}
              onChange={setTitle}
              align="left"
              maxLength="30"
            />
            <p className="text-xs text-gray-500 mt-1">
              This will appear at the top of your widget.
            </p>
          </div>

          {/* Description */}
          <div>
            <p className="text-sm font-medium text-gray-800 mb-1">
              Short description
            </p>
            <NewInputFieldControl
              width="100%"
              placeholder="Tell visitors what you offer"
              value={description}
              onChange={setDescription}
              align="left"
              maxLength="70"
            />
            <p className="text-xs text-gray-500 mt-1">
              Keep it short and clear (1–2 sentences).
            </p>
          </div>

          {/* Address */}
          <div>
            <p className="text-sm font-medium text-gray-800 mb-1">
              Business address
            </p>
            <NewInputFieldControl
              width="100%"
              placeholder="Business address"
              value={address}
              onChange={setAddress}
              align="left"
              maxLength="30"
            />
            <p className="text-xs text-gray-500 mt-1">
              Optional — shown only if you provide one.
            </p>
          </div>

          {/* Email */}
          <div>
            <p className="text-sm font-medium text-gray-800 mb-1">
              Contact email
            </p>
            <NewInputFieldControl
              width="100%"
              placeholder="example@email.com"
              value={email}
              onChange={setEmail}
              align="left"
              type="email"
            />
            <p className="text-xs text-gray-500 mt-1">
              Used for customer inquiries.
            </p>
          </div>
        </BlockStack>
      </StepBlock>
      <div className="step__content_delimeter mt-4" />
      {/* ===================================================== */}
      {/* ✅ AVATAR */}
      {/* ===================================================== */}
      <StepBlock
        title="Avatar"
        description="Upload a profile image shown in your widget header"
      >
        <BlockStack gap={5} className={responsiveBlock}>
          {/* Hide Toggle */}
          <CheckboxItem
            label="Hide avatar"
            checked={hideAvatar}
            onChange={() => setHideAvatar(!hideAvatar)}
          />

          {/* Upload Field */}
          {/* {!hideAvatar && (
            <ImageUploadField
              id="avatarUploadInput"
              label="Avatar image"
              buttonText="Upload avatar"
              uploading={avatarUploading}
              preview={avatarPreview}
              onChange={handleAvatarChange}
              shape="circle"
            />
          )} */}
          <UploadBars visible={avatarUploading} />
          {avatarPreview && (
            <img
              src={avatarPreview}
              alt="Preview"
              className={
                "w-[120px] h-[120px] rounded-full border object-cover self-center"
              }
            />
          )}

          {/* Helper */}
          {!hideAvatar && (
            <p className="text-xs text-gray-500">
              {/* Recommended size: 400×400px. PNG or JPG. */}
            </p>
          )}
        </BlockStack>
      </StepBlock>
    </Fragment>
  );
};

export default ProfileBrandingModal;
