import React from "react";
import Spinner from "../Menu/Spinner";
import styles from "./SpinnerLoader.module.scss";

// `customStyling` is a pass-through for the overlay's box — call sites use it
// to give the spinner a height when there are no children to cover.
const SpinnerLoader = ({ isLoading, children, customStyling = "" }) => {
  return (
    <div className={styles.root}>
      <div className={isLoading ? styles.blurred : ""}>{children}</div>
      {isLoading && (
        <div
          className={[styles.overlay, customStyling].filter(Boolean).join(" ")}
        >
          <Spinner loading={true} />
        </div>
      )}
    </div>
  );
};

export default SpinnerLoader;
