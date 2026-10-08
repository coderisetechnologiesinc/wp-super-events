import styles from "./SettingsForm.module.scss";
// components/Settings/TranslationsSettings.jsx
import BlockStack from "../../Containers/BlockStack";
import AnnotatedSection from "../../Containers/AnnotatedSection";
import NewSelectControl from "../../Controls/NewSelectControl";

const TranslationsSection = ({
  responsiveBlockStack,
  responsiveInput,
  getLangsSelectOptions,
  getDefaultWidgetLanguageName,
  handleDefaultLanguageChange,
  langForEdit,
  handleSelectLanguageforEdit,
  renderTranslations,
}) => {
  return (
    <BlockStack gap={0} cardsLayout={true} className={styles.rows}>
      <AnnotatedSection
        variant="settings"
        title="Default language for widgets"
        description="Translate text in widgets to any language"
        className={responsiveBlockStack}
      >
        <NewSelectControl
          label={"Default language"}
          options={getLangsSelectOptions().map((lang) => ({
            value: lang.label,
            label: lang.label,
          }))}
          onChange={handleDefaultLanguageChange}
          value={getDefaultWidgetLanguageName()}
        />
      </AnnotatedSection>

      <AnnotatedSection
        variant="settings"
        title="Language for translate"
        description="Before choosing the default language, select one from the list. Then, edit the widget fields and save the changes"
        className={responsiveBlockStack}
      >
        <NewSelectControl
          label="Language"
          options={getLangsSelectOptions().map((lang) => ({
            value: lang.label,
            label: lang.label,
          }))}
          onChange={handleSelectLanguageforEdit}
          value={getLangsSelectOptions()
            .map((lang) => lang.label)
            .find((label) => label.startsWith(langForEdit))}
        />
      </AnnotatedSection>

      <AnnotatedSection
        variant="settings"
        title="Global Widgets Translations"
        className={responsiveBlockStack}
      >
        {renderTranslations()}
      </AnnotatedSection>

      <AnnotatedSection
        variant="settings"
        title="Events Widget Translations"
        className={responsiveBlockStack}
      >
        {renderTranslations("mainWidget")}
      </AnnotatedSection>

      <AnnotatedSection
        variant="settings"
        title="Filters Translations"
        className={responsiveBlockStack}
      >
        {renderTranslations("customFilters")}
      </AnnotatedSection>

      <AnnotatedSection
        variant="settings"
        title="Registration Translations"
        className={responsiveBlockStack}
      >
        {renderTranslations("onProductWidget")}
      </AnnotatedSection>
    </BlockStack>
  );
};

export default TranslationsSection;
