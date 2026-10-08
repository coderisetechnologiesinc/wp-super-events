import { ToastContainer } from "react-toastify";
import { Fragment, useEffect } from "react";
import Spinner from "../Menu/Spinner";
import styles from "./PageWrapper.module.scss";

// `flush` drops the wrapper's own side padding for pages that already frame
// themselves with <PageContent>, so the reference's 32px gutter is not doubled.
const PageWrapper = (props) => {
  const useNativeNavigation = Boolean(window.servvData?.nativeAdmin);
  useEffect(() => {
    if (window.Intercom) {
      window.Intercom("update", { hide_default_launcher: true });
    }
  }, []);
  return (
    <Fragment>
      {props.withBackground && !useNativeNavigation && (
        <div className={styles.backdrop} />
      )}

      <div
        className={[styles.root, props.flush ? "" : styles.gutterLeft]
          .filter(Boolean)
          .join(" ")}
      >
        {/* centered spinner */}
        <div className={styles.spinner}>
          {props.loading && !props.withoutSpinner && <Spinner loading={true} />}
        </div>

        {/* MAIN CONTENT WINDOW */}
        <div
          className={[
            styles.content,
            props.flush ? "" : styles.gutterRight,
            // `loading` is a legacy global (input.css) blur, not a module class.
            props.loading ? "loading" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <ToastContainer position="bottom-right" />
          {props.children}
        </div>
      </div>
    </Fragment>
  );
};

export default PageWrapper;
