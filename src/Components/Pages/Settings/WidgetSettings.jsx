import styles from "./SettingsForm.module.scss";
// components/Settings/WidgetSettings.jsx
import BlockStack from "../../Containers/BlockStack";
import InlineStack from "../../Containers/InlineStack";
import AnnotatedSection from "../../Containers/AnnotatedSection";
import NewSelectControl from "../../Controls/NewSelectControl";
import CheckboxItem from "../../Controls/CheckboxItem";
import NewInputFieldControl from "../../Controls/NewInputFieldControl";

const WidgetSettings = ({
  settings,
  responsiveBlockStack,
  responsiveInlineStack,
  responsiveInput,
  availableViewMods,
  selectedView,
  availablePageSizes,
  selectedPageSize,
  handleViewModeChange,
  handleChangeFluidGrid,
  handleDescriptionLengthChange,
  handlePageSizeChange,
  renderAvailableFilters,
  handleAdditionalPropertyChange,
}) => {
  return (
    <BlockStack gap={0} className={styles.rows}>
      <AnnotatedSection
        variant="settings"
        title="Display mode options"
        description="These settings let you choose how your widget appears on the page. Each mode offers a unique experience, tailored to your needs."
        className={responsiveBlockStack}
      >
        <BlockStack gap={8} cardsLayout={true} className={responsiveBlockStack}>
          <NewSelectControl
            label=""
            options={availableViewMods.map((option) => ({
              value: option,
              label: option,
            }))}
            value={selectedView}
            onChange={handleViewModeChange}
          />
          {settings?.settings?.widget_style_settings?.ew_events_list_view ===
            "grid" && (
            <CheckboxItem
              label="Fluid grid"
              checked={
                settings?.settings?.widget_style_settings
                  ?.ew_events_grid_fluid_mode || false
              }
              onChange={handleChangeFluidGrid}
            />
          )}
        </BlockStack>
      </AnnotatedSection>

      <AnnotatedSection
        variant="settings"
        title="Item settings"
        description="Configure the display limits and default page sizes for various items."
        className={responsiveBlockStack}
      >
        <BlockStack gap={8} cardsLayout={true} className={responsiveBlockStack}>
          <InlineStack
            gap={4}
            cardsLayout={true}
            align={"left"}
            className={responsiveInlineStack}
          >
            <BlockStack
              gap={2}
              cardsLayout={true}
              className={responsiveBlockStack}
            >
              <span className="font-semibold">
                Grid item description display limit
              </span>
              <div className="flex items-center gap-2">
                <NewInputFieldControl
                  width="100%"
                  value={
                    settings?.settings?.widget_style_settings
                      ?.ew_card_description_display_words_limit ?? ""
                  }
                  type="number"
                  align="left"
                  onChange={(newVal) =>
                    handleDescriptionLengthChange(
                      "ew_card_description_display_words_limit",
                      newVal,
                    )
                  }
                />
                <span className="text-sm text-gray-500">words</span>
              </div>
            </BlockStack>
            <BlockStack
              gap={2}
              cardsLayout={true}
              className={responsiveBlockStack}
            >
              <span className="font-semibold">
                List item description display limit
              </span>
              <div className="flex items-center gap-2">
                <NewInputFieldControl
                  width="100%"
                  value={
                    settings?.settings?.widget_style_settings
                      ?.ew_list_item_description_display_words_limit ?? ""
                  }
                  type="number"
                  align="left"
                  onChange={(newVal) =>
                    handleDescriptionLengthChange(
                      "ew_list_item_description_display_words_limit",
                      newVal,
                    )
                  }
                />
                <span className="text-sm text-gray-500">words</span>
              </div>
            </BlockStack>
          </InlineStack>
          <BlockStack
            gap={1}
            cardsLayout={true}
            className={responsiveBlockStack}
          >
            <span className="font-semibold">Default page size</span>
            <NewSelectControl
              label=""
              options={availablePageSizes.map((option) => ({
                value: option,
                label: option,
              }))}
              value={selectedPageSize}
              onChange={handlePageSizeChange}
            />
          </BlockStack>
        </BlockStack>
      </AnnotatedSection>

      <AnnotatedSection
        variant="settings"
        title="Filter settings"
        description="Select the filters to be displayed on the event widget."
        className={responsiveBlockStack}
      >
        {settings?.settings?.widget_style_settings && (
          <BlockStack gap={8} className={responsiveBlockStack}>
            {renderAvailableFilters()}
          </BlockStack>
        )}
      </AnnotatedSection>

      <AnnotatedSection
        variant="settings"
        title="Additional widget display settings"
        description="Select which parts of the events widget users can see. Also, adjust the visibility of different components"
        className={responsiveBlockStack}
      >
        <BlockStack gap={8} cardsLayout={true} className={responsiveBlockStack}>
          <span className="font-semibold border-b pb-1">Widget elements</span>
          <CheckboxItem
            label="Show language selector"
            checked={
              settings?.settings?.widget_style_settings
                ?.ew_show_language_selector || false
            }
            onChange={() =>
              handleAdditionalPropertyChange("ew_show_language_selector")
            }
          />
          <CheckboxItem
            label="Display calendar permanently"
            checked={
              settings?.settings?.widget_style_settings
                ?.permanently_open_calendar || true
            }
            onChange={() =>
              handleAdditionalPropertyChange("permanently_open_calendar")
            }
          />
          <CheckboxItem
            label="Show events counter"
            checked={
              settings?.settings?.widget_style_settings?.ew_events_counter ||
              false
            }
            onChange={() => handleAdditionalPropertyChange("ew_events_counter")}
          />
          <CheckboxItem
            label="View mode switch"
            checked={
              !settings?.settings?.widget_style_settings
                ?.ew_hide_view_mode_switch || false
            }
            onChange={() =>
              handleAdditionalPropertyChange("ew_hide_view_mode_switch")
            }
          />
          <span className="font-semibold border-b pb-1">Item elements</span>
          <CheckboxItem
            label="Show event images"
            checked={
              settings?.settings?.widget_style_settings?.show_event_images ||
              false
            }
            onChange={() => handleAdditionalPropertyChange("show_event_images")}
          />
          <CheckboxItem
            label="Show images as square"
            checked={
              settings?.settings?.widget_style_settings?.ew_image_aspect ||
              false
            }
            onChange={() => handleAdditionalPropertyChange("ew_image_aspect")}
          />
          <CheckboxItem
            label="Show separator badges"
            checked={
              settings?.settings?.widget_style_settings
                ?.show_events_list_separator_badge || false
            }
            onChange={() =>
              handleAdditionalPropertyChange("show_events_list_separator_badge")
            }
          />
          <CheckboxItem
            label="Share button"
            checked={
              settings?.settings?.widget_style_settings?.ew_show_share_button ||
              false
            }
            onChange={() =>
              handleAdditionalPropertyChange("ew_show_share_button")
            }
          />
          <CheckboxItem
            label="Event type badge"
            checked={
              settings?.settings?.widget_style_settings
                ?.ew_show_event_type_badge || false
            }
            onChange={() =>
              handleAdditionalPropertyChange("ew_show_event_type_badge")
            }
          />
        </BlockStack>
      </AnnotatedSection>
    </BlockStack>
  );
};

export default WidgetSettings;
