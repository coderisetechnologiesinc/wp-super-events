import { useParams, useSearchParams } from "react-router-dom";
import BreadCrumbs from "../../Menu/BreadCrumbs";
import PageContent from "../../Containers/PageContent";
import PageHeader from "../../Containers/PageHeader";
import PageActionButton from "../../Controls/PageActionButton";
import PageWrapper from "../PageWrapper";
import { FILTER_TYPES } from "./CreateFilterMenu";
import { useServvStore } from "../../../store/useServvStore";
import shared from "./FiltersPage.module.scss";
import styles from "./FilterForm.module.scss";
import { useFilterLimits } from "./useFilterLimits";

const FilterFormLayout = ({
  title,
  description,
  onSave,
  onCancel,
  saveDisabled = false,
  loading = false,
  editing = false,
  children,
}) => {
  const { type } = useParams();
  const kind = FILTER_TYPES[type];
  const settings = useServvStore((store) => store.settings);
  const filtersList = useServvStore((store) => store.filtersList);
  const { isLimitReached, isMembersLimitReached, filterCategories } = useFilterLimits(settings, filtersList);
  const creationBlocked = !editing && (!settings || isLimitReached ||
    !filterCategories.includes(type) || (type === "Members" && isMembersLimitReached));
  const filters = useServvStore(
    (store) => store.filtersList[type?.toLowerCase()],
  );
  const [searchParams] = useSearchParams();
  const currentId = searchParams.get("id");
  return (
    <PageWrapper flush loading={loading}>
      <PageContent>
        <BreadCrumbs
          breadcrumbs={[
            { label: "Filters", to: "/filters" },
            type && { label: type, to: `/filters/list/${type}` },
            { label: title },
          ]}
        />
        <div>
          <PageHeader
            title={title}
            description={description}
            actions={
              <>
                <PageActionButton
                  text="Cancel"
                  type="secondary"
                  disabled={loading}
                  onAction={onCancel}
                />
                <PageActionButton
                  text={
                    loading
                      ? "Saving…"
                      : editing
                      ? "Save changes"
                      : "Create filter"
                  }
                  onAction={() => !creationBlocked && onSave()}
                  disabled={saveDisabled || loading || creationBlocked}
                />
              </>
            }
          />
        </div>
        <div className={shared.divider} />
        <div className={styles.layout}>
          <div className={styles.sections}>{children}</div>
          <aside className={styles.preview}>
            <section className={styles.card}>
              <header className={styles.previewHeader}>Existing filters</header>
              <div className={styles.cardBody}>
                <span className={styles.eyebrow}>{kind?.label || type}</span>
                {filters?.length ? (
                  <ul className={styles.existingFilters}>
                    {filters.map((filter) => (
                      <li
                        key={filter.id}
                        className={
                          String(filter.id) === currentId
                            ? styles.currentFilter
                            : undefined
                        }
                      >
                        {filter.name}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className={styles.hint}>No existing filters yet.</p>
                )}
              </div>
            </section>
          </aside>
        </div>
      </PageContent>
    </PageWrapper>
  );
};
export default FilterFormLayout;
