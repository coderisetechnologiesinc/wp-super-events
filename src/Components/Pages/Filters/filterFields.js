// What a new filter value needs, per collection. Shared by anything that
// creates one without the full filter page: the fields a value cannot be
// created without, and nothing else. Priority is deliberately absent — the
// pages only offer it while editing — and so are a location's operational
// hours, which have their own time controls there.

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE = /^\+?[\d\s\-().]{7,20}$/;

const NAME = {
  key: "name",
  required: true,
  maxLength: 100,
  fullWidth: true,
  hint: "This name identifies the value in your event filters.",
};
const DETAILS = {
  key: "details",
  label: "Details",
  maxLength: 200,
  textarea: true,
  rows: 3,
  fullWidth: true,
};

export const FILTER_FORMS = {
  locations: {
    label: "Location",
    description: "Where the event happens. Hours can be set afterwards.",
    fields: [{ ...NAME, label: "Location name" }, DETAILS],
  },
  categories: {
    label: "Category",
    description: "Groups events in the public list.",
    fields: [{ ...NAME, label: "Category name" }, DETAILS],
  },
  languages: {
    label: "Language",
    description: "The language the session is held in.",
    fields: [{ ...NAME, label: "Language name" }],
  },
  members: {
    label: "Member",
    description: "The host shown to attendees.",
    fields: [
      { ...NAME, label: "Member name" },
      {
        key: "email",
        label: "Email",
        maxLength: 150,
        validate: (value) =>
          !value || EMAIL.test(value) ? "" : "Invalid email address",
      },
      {
        key: "phone",
        label: "Phone",
        maxLength: 30,
        validate: (value) =>
          !value || PHONE.test(value) ? "" : "Invalid phone number",
      },
      {
        key: "description",
        label: "Description",
        maxLength: 200,
        textarea: true,
        rows: 3,
        fullWidth: true,
      },
    ],
  },
};

export const filterFormErrors = (type, values = {}) => {
  const errors = {};

  (FILTER_FORMS[type]?.fields || []).forEach((field) => {
    const value = values[field.key];

    if (field.required && !String(value || "").trim())
      errors[field.key] = `${field.label} is required.`;
    else if (field.validate) {
      const error = field.validate(value);
      if (error) errors[field.key] = error;
    }
  });

  return errors;
};
