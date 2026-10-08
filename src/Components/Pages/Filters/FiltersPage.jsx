import { useNavigate } from "react-router-dom";
import { useServvStore } from "../../../store/useServvStore";
import PageWrapper from "../PageWrapper";
import PageContent from "../../Containers/PageContent";
import PageHeader from "../../Containers/PageHeader";
import { useFilterLimits } from "./useFilterLimits";
import CreateFilterMenu, { FILTER_TYPES } from "./CreateFilterMenu";
import PageActionButton from "../../Controls/PageActionButton";

import styles from "./FiltersPage.module.scss";

export default function FiltersPage() {
  const filters = useServvStore((s) => s.filtersList);
  const settings = useServvStore((s) => s.settings);
  const loading = useServvStore((s) => s.loading);
  const { maxFiltersNumber, isLimitReached, filterCategories } =
    useFilterLimits(settings, filters);
  const navigate = useNavigate();
  return (
    <PageWrapper flush loading={loading}>
      <PageContent>
        <PageHeader
          title="Filters"
          description="Attributes visitors can filter your public event list by."
          actions={
            <CreateFilterMenu
              types={filterCategories}
              disabled={isLimitReached || !settings}
            />
          }
        />
        <div className={styles.divider} />
        {isLimitReached && (
          <p className={styles.limit}>
            Filter limit reached ({maxFiltersNumber}). Upgrade your plan to add
            more.
          </p>
        )}
        <div className={styles.typeGrid}>
          {filterCategories.map((type) => {
            const { note, Icon } = FILTER_TYPES[type];
            const values = filters[type.toLowerCase()] || [];
            return (
              <section className={styles.typeCard} key={type}>
                <header className={`${styles.cardHeader} ${styles.typeHeader}`}>
                  <span className={styles.mark} aria-hidden="true"><Icon /></span>
                  <h2 className={styles.name}>{type}</h2>
                </header>
                <div className={styles.cardBody}>
                  <p className={styles.secondary}>{note}</p>
                  <div className={styles.typeFooter}>
                    <span className={styles.count}>
                      {values.length}{" "}
                      {values.length === 1 ? "filter" : "filters"}
                    </span>
                    <PageActionButton
                      text="View"
                      ariaLabel={`View ${type.toLowerCase()}`}
                      onAction={() => navigate(`/filters/list/${type}`)}
                    />
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </PageContent>
    </PageWrapper>
  );
}
