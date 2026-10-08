import React from "react";
import NewInputFieldControl from "./NewInputFieldControl";
import styles from "./NewInputControl.module.scss";

// A labelled field: NewInputFieldControl plus a label and error message.
const NewInputControl = ({
  label = "",
  helpText = "",
  placeholder = "",
  error,
  style = {},
  width = "100%",
  ...inputProps
}) => {
  let errorMessage = "";

  if (typeof error === "string") {
    errorMessage = error;
  } else if (error) {
    errorMessage = "This field is required.";
  }

  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}

      <NewInputFieldControl
        {...inputProps}
        placeholder={placeholder || helpText}
        error={Boolean(error)}
        width={width}
        style={style}
      />

      {errorMessage && (
        <div className={styles.errorText} role="alert">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default NewInputControl;
