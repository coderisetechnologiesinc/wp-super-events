import { Fragment } from "react";
import { Link } from "react-router-dom";
import { t } from "../../utilities/textResolver";

const BackChevron = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m14 6-6 6 6 6" />
  </svg>
);

const Separator = () => (
  <svg
    className="sv-crumbs__sep"
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#B4BCCE"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m9 6 6 6-6 6" />
  </svg>
);

const BreadCrumbs = ({ breadcrumbs = [], onBreadCrumbClick = () => {} }) => {
  const items = breadcrumbs.filter(Boolean);
  const trail = items.slice(0, -1);
  const current = items[items.length - 1];
  const parent = trail[trail.length - 1];

  const announce = (item) => onBreadCrumbClick(item.label);

  const crumb = (item, className, children, extra = {}) => {
    const shared = { className, ...extra };

    if (item.to) {
      return (
        <Link to={item.to} {...shared} onClick={() => announce(item)}>
          {children}
        </Link>
      );
    }

    return (
      <button
        type="button"
        {...shared}
        onClick={() => {
          item.action?.();
          announce(item);
        }}
      >
        {children}
      </button>
    );
  };

  return (
    <nav
      className={`sv-crumbs${items.length > 1 ? "" : " sv-crumbs--idle"}`}
      aria-label={t("Breadcrumb")}
    >
      {parent &&
        crumb(parent, "sv-crumbs__back", <BackChevron />, {
          title: `${t("Back to")} ${parent.label}`,
          "aria-label": `${t("Back to")} ${parent.label}`,
        })}

      <div className="sv-crumbs__track">
        {trail.map((item) => (
          <Fragment key={item.label}>
            {crumb(item, "sv-crumbs__link", item.label)}
            <Separator />
          </Fragment>
        ))}

        {current && (
          <span className="sv-crumbs__current" aria-current="page">
            {current.label}
          </span>
        )}
      </div>
    </nav>
  );
};

export default BreadCrumbs;
