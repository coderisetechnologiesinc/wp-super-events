const assert = require('node:assert/strict');
const { test } = require('node:test');
const fs = require('node:fs');
const path = require('node:path');
const babel = require('@babel/core');
const root = path.resolve(__dirname, '..');
const targets = new Set(['translations/widget/index.js','src/utilities/translations.js','widget/servicesShared/translations.js'].map(file=>path.join(root,file)));
const original = require.extensions['.js'];
require.extensions['.js'] = (mod, file) => {
  if (!targets.has(file)) return original(mod,file);
  mod._compile(babel.transformFileSync(file,{babelrc:false,configFile:false,plugins:['@babel/plugin-transform-modules-commonjs']}).code,file);
};
const {getTranslationsTpl,mergeTranslations,defaultTranslationLanguages,prepareWidgetTranslations} = require('../translations/widget');
const admin = require('../src/utilities/translations');
const legacy = require('../widget/servicesShared/translations');
const en = require('../translations/widget/en.json');
test('all twelve JSON dictionaries contain every key and preserve placeholders', () => {
  assert.equal(defaultTranslationLanguages.length,12);
  for(const locale of defaultTranslationLanguages){
    const data = JSON.parse(fs.readFileSync(path.join(root,'translations/widget',locale+'.json'),'utf8'));
    assert.deepEqual(Object.keys(data),Object.keys(en));
    let count = 0;
    for(const [section,fields] of Object.entries(en)){
      assert.deepEqual(Object.keys(data[section]),Object.keys(fields),locale+' '+section);
      for(const [key,value] of Object.entries(fields)){
        const translated=data[section][key];count++;
        assert.equal(typeof translated,'string');assert(translated.trim(),locale+' '+key);
        assert.equal((translated.match(/###/g)||[]).length,(value.match(/###/g)||[]).length,locale+' '+key);
        assert(!/Additional Registrant/.test(translated));
      }
    }
    assert.equal(count,143);
  }
});
test('dictionaries use translated labels rather than the English template for all languages',()=>{
  const data=getTranslationsTpl();
  for(const locale of defaultTranslationLanguages.filter(locale=>locale!=='en')){
    assert.notEqual(data[locale].mainWidget.bookButtonLabel,en.mainWidget.bookButtonLabel,locale);
    assert.notEqual(data[locale].onProductWidget.registrationCompletedMessageDescription,en.onProductWidget.registrationCompletedMessageDescription,locale);
    assert.notEqual(data[locale].onProductWidget.memberFormMember,en.onProductWidget.memberFormMember,locale);
  }
});
test('editing one language cannot change another language or future reset defaults',()=>{
  const data=getTranslationsTpl();data.fr.mainWidget.bookButtonLabel='Custom';
  assert.equal(data.en.mainWidget.bookButtonLabel,'Book now');
  assert.equal(getTranslationsTpl().fr.mainWidget.bookButtonLabel,'Réserver maintenant');
});
test('partial saved overrides preserve native defaults and accept deliberate blank labels',()=>{
  const result=mergeTranslations(getTranslationsTpl(),{fr:{mainWidget:{bookButtonLabel:'Custom',shareEventPanelTitle:''}},de:null});
  assert.equal(result.fr.mainWidget.bookButtonLabel,'Custom');
  assert.equal(result.fr.mainWidget.shareEventPanelTitle,'');
  assert.equal(result.fr.globalWidgetsTranslations.languageLabel,'Langue');
  assert.equal(result.de.globalWidgetsTranslations.languageLabel,'Sprache');
  assert.equal(result.ja.globalWidgetsTranslations.languageLabel,'言語');
});
test('invalid saved translations cannot discard default dictionaries',()=>{
  for(const value of [null,'invalid',[],undefined]) assert.deepEqual(mergeTranslations(getTranslationsTpl(),value),getTranslationsTpl());
});
test('admin and legacy widget use the same JSON defaults and reset removes custom values',()=>{
  assert.deepEqual(admin.getTranslationsTpl(),legacy.getTranslationsTpl());
  const saved=mergeTranslations(getTranslationsTpl(),{en:{onProductWidget:{memberFormMember:'Custom'}}});
  assert.equal(saved.en.onProductWidget.memberFormMember,'Custom');
  assert.equal(getTranslationsTpl().en.onProductWidget.memberFormMember,'Registrant');
});
test('save and reset preserve other widget settings and remove Russian',()=>{
  const style={widgets_default_language:'fr',ew_events_list_view:'grid',translations:{fr:{mainWidget:{bookButtonLabel:'Custom'}},ru:{mainWidget:{bookButtonLabel:'Russian'}},uk:{mainWidget:{bookButtonLabel:'Custom Ukrainian'}}}};
  const saved=prepareWidgetTranslations(style);
  assert.equal(saved.translations.fr.mainWidget.bookButtonLabel,'Custom');
  assert.equal(saved.translations.uk.mainWidget.bookButtonLabel,'Custom Ukrainian');
  assert(!saved.translations.ru);
  const reset=prepareWidgetTranslations(style,true);
  assert.deepEqual(reset.translations,getTranslationsTpl());
  assert.equal(reset.widgets_default_language,'fr');assert.equal(reset.ew_events_list_view,'grid');
  assert.equal(prepareWidgetTranslations({...style,widgets_default_language:'ru-RU'}).widgets_default_language,'en');
  assert(!defaultTranslationLanguages.includes('ru'));assert(!fs.existsSync(path.join(root,'translations/widget/ru.json')));
});
