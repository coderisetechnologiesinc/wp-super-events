const assert = require("node:assert/strict");
const { test } = require("node:test");
const path = require("node:path");
const babel = require("@babel/core");
const file = path.resolve(
  __dirname,
  "../src/Components/Pages/Filters/filterFields.js",
);
const loader = require.extensions[".js"];
require.extensions[".js"] = (mod, filename) => {
  if (filename !== file) return loader(mod, filename);
  mod._compile(
    babel.transformFileSync(filename, {
      babelrc: false,
      configFile: false,
      plugins: ["@babel/plugin-transform-modules-commonjs"],
    }).code,
    filename,
  );
};
const { FILTER_FORMS, filterFormErrors } = require(file);

test("every filter collection can be created by name alone", () => {
  for (const type of ["locations", "categories", "languages", "members"]) {
    const form = FILTER_FORMS[type];
    assert.equal(form.fields[0].key, "name");
    assert.equal(form.fields[0].required, true);
    // Name is the only thing a value cannot be created without.
    assert.deepEqual(
      form.fields.filter((field) => field.required).map((field) => field.key),
      ["name"],
    );
    assert.deepEqual(
      Object.keys(filterFormErrors(type, { name: "Berlin" })),
      [],
    );
  }
});

test("a missing or blank name is reported per collection", () => {
  assert.deepEqual(filterFormErrors("categories", {}), {
    name: "Category name is required.",
  });
  assert.deepEqual(filterFormErrors("languages", { name: "   " }), {
    name: "Language name is required.",
  });
});

test("member contact details are validated only when filled in", () => {
  const member = (values) => filterFormErrors("members", values);
  assert.deepEqual(member({ name: "Ada" }), {});
  assert.deepEqual(member({ name: "Ada", email: "", phone: "" }), {});
  assert.deepEqual(member({ name: "Ada", email: "ada@example.test" }), {});
  assert.deepEqual(member({ name: "Ada", phone: "+1 (555) 010-2030" }), {});
  assert.deepEqual(member({ name: "Ada", email: "ada@" }), {
    email: "Invalid email address",
  });
  assert.deepEqual(member({ name: "Ada", phone: "12345" }), {
    phone: "Invalid phone number",
  });
});

test("an unknown collection asks for nothing", () => {
  assert.equal(FILTER_FORMS.teams, undefined);
  assert.deepEqual(filterFormErrors("teams", {}), {});
});
