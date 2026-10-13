# Standard widget translations

Each JSON file contains all 143 widget messages for one supported language:
Simplified Chinese (`zh-cn`), Dutch (`nl`), English (`en`), French (`fr`),
German (`de`), Hindi (`hi`), Italian (`it`), Japanese (`ja`), Korean (`ko`),
Norwegian Bokmål (`no`), Spanish (`es`), and Swedish (`sv`).

The admin, legacy widget and new events widget share these dictionaries through
`index.js`. JSON keys remain the existing API translation keys. Preserve `###`
placeholders: they are replaced with numeric values in the widget. Duration
abbreviations are localized; example usernames and email addresses stay literal.

`getTranslationsTpl()` returns independent editable copies. Normal saves merge
custom texts with the native defaults, fill missing messages, and exclude Russian.
`Reset all translations` in Settings → Translations replaces every saved language
with the bundled dictionaries and saves through the existing shop settings API.
Other widget settings and the selected default language are preserved; a removed
Russian default language falls back to English.

The new widget uses these dictionaries when the API returns no translations.
Existing saved texts override matching standard texts until edited or reset.
Changes to JSON files require rebuilding the admin and both widget bundles.
