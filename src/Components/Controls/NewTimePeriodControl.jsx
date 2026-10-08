import React from "react";
import moment from "moment";
import styles from "./NewTimePeriodControl.module.scss";

const NewTimePeriodControl = ({
  time,
  disabled = false,
  onChange = () => {},
}) => {
  const period = time ? moment(time).format("a") : "am";

  const handleToggle = () => {
    onChange(period === "am" ? "pm" : "am");
  };

  return (
    <button
      type="button"
      className={`${styles.period} ${period === "pm" ? styles.night : ""}`}
      aria-label={`Time period: ${period.toUpperCase()}. Switch to ${
        period === "am" ? "PM" : "AM"
      }`}
      onClick={handleToggle}
      disabled={disabled}
    >
      {period}
    </button>
  );
};

export default NewTimePeriodControl;
