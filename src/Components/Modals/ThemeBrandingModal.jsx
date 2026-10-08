import React, { Fragment } from "react";

import BlockStack from "../Containers/BlockStack";
import InlineStack from "../Containers/InlineStack";
import NewInputFieldControl from "../Controls/NewInputFieldControl";
import PageActionButton from "../Controls/PageActionButton";
import UploadBars from "../Shared/UploadBars";
import StepBlock from "../Shared/StepBlock";
import SortableItem from "../Shared/SortableItem";

import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/24/outline";
import { v4 as uuidv4 } from "uuid";
const ThemeBrandingModal = ({
  /* ---------------- PAGE BACKGROUND ---------------- */
  bgType,
  setBgType,
  backgroundColor,
  setBackgroundColor,
  backgroundOpacity,
  setBackgroundOpacity,
  backgroundGradient,
  setBackgroundGradient,
  backgroundImagePreview,
  handleBackgroundImageChange,
  bgUploading,

  /* ---------------- TEXT ---------------- */
  textColor,
  setTextColor,
  textOpacity,
  setTextOpacity,
  headerTextColor,
  setHeaderTextColor,
  headerTextOpacity,
  setHeaderTextOpacity,

  /* ---------------- WIDGET BACKGROUND ---------------- */
  widgetBgType,
  setWidgetBgType,
  widgetBgColor,
  setWidgetBgColor,
  widgetBgGradient,
  setWidgetBgGradient,

  /* ---------------- IMAGES ---------------- */
  bannerUploading,
  bannerImagePreview,
  handleBannerChange,

  responsiveBlock,
  order,
  setOrder,
}) => {
  return (
    <Fragment>
      {/* ===================================================== */}
      {/* ✅ PAGE BACKGROUND */}
      {/* ===================================================== */}
      <StepBlock
        title="Page background"
        description="Customize the main background behind your widget"
      >
        <BlockStack gap={5} className={responsiveBlock}>
          {/* Background Type */}
          <div>
            <p className="text-sm font-medium text-gray-800 mb-1">
              Background type
            </p>
            <InlineStack gap={2}>
              {[
                { key: "color", label: "Color" },
                { key: "gradient", label: "Gradient" },
                { key: "image", label: "Image" },
              ].map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setBgType(item.key)}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium transition
                    ${
                      bgType === item.key
                        ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                        : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </InlineStack>
            <p className="text-xs text-gray-500 mt-1">
              Choose how your page background appears.
            </p>
          </div>

          {/* Text Color */}
          <div>
            <p className="text-sm font-medium text-gray-800 mb-1">
              Widget text color
            </p>
            <InlineStack gap={3} align="center">
              <input
                type="color"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                className="w-12 h-12 rounded-lg border border-gray-300 cursor-pointer"
              />
              <NewInputFieldControl
                width="100%"
                align="center"
                placeholder="#111827"
                value={textColor}
                onChange={setTextColor}
              />
            </InlineStack>

            {/* Text Opacity Slider */}
            <div className="mt-3">
              <p className="text-sm font-medium text-gray-700 mb-1">
                Text opacity: {Math.round(textOpacity * 100)}%
              </p>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={textOpacity}
                onChange={(e) => setTextOpacity(parseFloat(e.target.value))}
                className="w-full"
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Adjust the color and opacity of widget text.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-800 mb-1">
              Header text color
            </p>
            <InlineStack gap={3} align="center">
              <input
                type="color"
                value={headerTextColor}
                onChange={(e) => setHeaderTextColor(e.target.value)}
                className="w-12 h-12 rounded-lg border border-gray-300 cursor-pointer"
              />
              <NewInputFieldControl
                width="100%"
                align="center"
                placeholder="#111827"
                value={headerTextColor}
                onChange={setHeaderTextColor}
              />
            </InlineStack>

            {/* Text Opacity Slider */}
            <div className="mt-3">
              <p className="text-sm font-medium text-gray-700 mb-1">
                Text opacity: {Math.round(headerTextOpacity * 100)}%
              </p>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={headerTextOpacity}
                onChange={(e) =>
                  setHeaderTextOpacity(parseFloat(e.target.value))
                }
                className="w-full"
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Adjust the header text’s color and opacity.
            </p>
          </div>

          {/* Color Background */}
          {bgType === "color" && (
            <div>
              <p className="text-sm font-medium text-gray-800 mb-1">
                Background color
              </p>
              <InlineStack gap={3} align="center">
                <input
                  type="color"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  className="w-12 h-12 rounded-lg border border-gray-300 cursor-pointer"
                />
                <NewInputFieldControl
                  width="100%"
                  align="center"
                  placeholder="#ffffff"
                  value={backgroundColor}
                  onChange={setBackgroundColor}
                />
              </InlineStack>

              {/* Opacity Slider */}
              <div className="mt-3">
                <p className="text-sm font-medium text-gray-700 mb-1">
                  Background opacity: {Math.round(backgroundOpacity * 100)}%
                </p>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={backgroundOpacity}
                  onChange={(e) =>
                    setBackgroundOpacity(parseFloat(e.target.value))
                  }
                  className="w-full"
                />
              </div>

              {/* Color Presets */}
              <div className="flex gap-2 flex-wrap mt-2">
                {[
                  "#ffffff",
                  "#f3f4f6",
                  "#d1d5db",
                  "#111827",
                  "#4338ca",
                  "#4f46e5",
                  "#ec4899",
                  "#10b981",
                ].map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setBackgroundColor(c)}
                    className="w-9 h-9 rounded-lg border border-gray-300 cursor-pointer hover:scale-110 transition-transform"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>

              <p className="text-xs text-gray-500 mt-1">
                Select a solid color or use the color picker.
              </p>
            </div>
          )}

          {/* Gradient Background */}
          {bgType === "gradient" && (
            <div>
              <p className="text-sm font-medium text-gray-800 mb-1">
                Gradient preset
              </p>
              <div className="flex gap-3 flex-wrap">
                {[
                  "linear-gradient(135deg,#4f46e5,#9333ea)",
                  "linear-gradient(135deg,#06b6d4,#3b82f6)",
                  "linear-gradient(135deg,#f97316,#ef4444)",
                  "linear-gradient(135deg,#10b981,#059669)",
                ].map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setBackgroundGradient(g)}
                    className="w-[120px] h-[50px] rounded-lg border border-gray-300 hover:scale-105 transition-transform cursor-pointer"
                    style={{ background: g }}
                  />
                ))}
              </div>

              <div className="mt-3">
                <p className="text-sm font-medium text-gray-800 mb-1">
                  Custom gradient
                </p>
                <NewInputFieldControl
                  width="100%"
                  align="center"
                  placeholder="linear-gradient(...)"
                  value={backgroundGradient}
                  onChange={setBackgroundGradient}
                />
              </div>

              <p className="text-xs text-gray-500 mt-1">
                Choose a preset or enter a custom CSS gradient.
              </p>
            </div>
          )}

          {/* Image Background */}
          {bgType === "image" && (
            <div>
              <p className="text-sm font-medium text-gray-800 mb-1">
                Background image
              </p>
              <input
                id="backgroundUploadInput"
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => handleBackgroundImageChange(e.target.files[0])}
              />

              <PageActionButton
                text={bgUploading ? "Uploading..." : "Upload background"}
                type="secondary"
                disabled={bgUploading}
                className="w-[200px]"
                onAction={() =>
                  document.getElementById("backgroundUploadInput").click()
                }
              />

              <UploadBars visible={bgUploading} />

              {backgroundImagePreview && (
                <img
                  src={backgroundImagePreview}
                  alt="Background preview"
                  className="mt-3 w-full max-w-[280px] h-[120px] rounded-xl border object-cover self-center"
                />
              )}

              <p className="text-xs text-gray-500 mt-1">
                Recommended size: 1920×1080px or higher. JPG or PNG.
              </p>
            </div>
          )}

          {/* Live Preview */}
          <div>
            <p className="text-sm font-medium text-gray-800 mb-1">
              Live preview
            </p>
            <div
              className="w-full h-[110px] rounded-xl border border-gray-200"
              style={{
                background:
                  bgType === "color"
                    ? backgroundColor
                    : bgType === "gradient"
                    ? backgroundGradient
                    : `url(${backgroundImagePreview}) center/cover`,
                opacity: bgType === "color" ? backgroundOpacity : 1,
              }}
            />
            <p className="text-xs text-gray-500 mt-1">
              Preview of your selected background.
            </p>
          </div>
        </BlockStack>
      </StepBlock>

      <div className="step__content_delimeter mt-4" />

      {/* ===================================================== */}
      {/* ✅ WIDGET BACKGROUND */}
      {/* ===================================================== */}
      <StepBlock
        title="Widget container background"
        description="Background color/gradient for the widget content area"
      >
        <BlockStack gap={5}>
          {/* Type Selector */}
          <div>
            <p className="text-sm font-medium text-gray-800 mb-1">
              Background type
            </p>
            <InlineStack gap={2}>
              {["color", "gradient"].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setWidgetBgType(type)}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium transition
                    ${
                      widgetBgType === type
                        ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                        : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                    }`}
                >
                  {type === "color" ? "Color" : "Gradient"}
                </button>
              ))}
            </InlineStack>
            <p className="text-xs text-gray-500 mt-1">
              Style the widget container background.
            </p>
          </div>

          {/* Color Option */}
          {widgetBgType === "color" && (
            <div>
              <p className="text-sm font-medium text-gray-800 mb-1">
                Widget background color
              </p>
              <InlineStack gap={3} align="center">
                <input
                  type="color"
                  value={widgetBgColor}
                  onChange={(e) => setWidgetBgColor(e.target.value)}
                  className="w-12 h-12 rounded-lg border border-gray-300 cursor-pointer"
                />
                <NewInputFieldControl
                  width="100%"
                  align="center"
                  placeholder="#ffffff"
                  value={widgetBgColor}
                  onChange={setWidgetBgColor}
                />
              </InlineStack>
              <p className="text-xs text-gray-500 mt-1">
                Solid color for the widget container.
              </p>
            </div>
          )}

          {/* Gradient Option */}
          {widgetBgType === "gradient" && (
            <div>
              <p className="text-sm font-medium text-gray-800 mb-1">
                Widget background gradient
              </p>
              <NewInputFieldControl
                width="100%"
                align="center"
                placeholder="linear-gradient(...)"
                value={widgetBgGradient}
                onChange={setWidgetBgGradient}
              />
              <p className="text-xs text-gray-500 mt-1">
                Enter a CSS gradient value.
              </p>
            </div>
          )}

          {/* Widget Preview */}
          <div>
            <p className="text-sm font-medium text-gray-800 mb-1">
              Widget preview
            </p>
            <div
              className="h-[80px] rounded-xl border border-gray-200"
              style={{
                background:
                  widgetBgType === "color" ? widgetBgColor : widgetBgGradient,
              }}
            />
            <p className="text-xs text-gray-500 mt-1">
              Preview of your widget background.
            </p>
          </div>
        </BlockStack>
      </StepBlock>

      <div className="step__content_delimeter mt-4" />
      {/* ===================================================== */}
      {/* ✅ ORDER SETTINGS */}
      {/* ===================================================== */}
      <div className="step__content_block">
        <span className="step__content_title">Order</span>
        <p className="text-sm text-gray-500 mb-4">
          Drag and reorder widget sections
        </p>

        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={(e) => {
            const { active, over } = e;
            if (!over || active.id === over.id) return;

            setOrder((items) => {
              const oldIndex = items.indexOf(active.id);
              const newIndex = items.indexOf(over.id);
              return arrayMove(items, oldIndex, newIndex);
            });
          }}
        >
          <SortableContext items={order} strategy={verticalListSortingStrategy}>
            <BlockStack gap={2}>
              {order.map((item) => (
                <SortableItem key={item} id={item}>
                  <span className="capitalize font-medium">{item}</span>
                </SortableItem>
              ))}
            </BlockStack>
          </SortableContext>
        </DndContext>
      </div>

      <div className="step__content_delimeter mt-4" />

      {/* ===================================================== */}
      {/* ✅ CARD BACKGROUND */}
      {/* ===================================================== */}
      <StepBlock
        title="Card background"
        description="Upload a banner image for the widget header area"
      >
        <BlockStack gap={5} className={responsiveBlock}>
          <div className="w-full">
            <p className="text-sm font-medium text-gray-800 mb-1">
              Banner image
            </p>

            {/* ✅ Hidden input stays here */}
            <input
              id="themeBannerUploadInput"
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => handleBannerChange(e.target.files?.[0])}
            />

            {/* ✅ Loader */}
            <UploadBars visible={bannerUploading} />

            {/* ✅ Preview */}
            {bannerImagePreview && (
              <img
                src={bannerImagePreview}
                alt="Banner preview"
                className="mt-3 w-full h-[120px] rounded-xl border object-cover"
              />
            )}
          </div>
        </BlockStack>
      </StepBlock>
    </Fragment>
  );
};

export default ThemeBrandingModal;
