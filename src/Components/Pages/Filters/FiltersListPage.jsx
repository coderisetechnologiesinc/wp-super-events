import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { PlusIcon } from "@heroicons/react/24/outline";
import BreadCrumbs from "../../Menu/BreadCrumbs";
import { useServvStore } from "../../../store/useServvStore";
import axios from "../../../utilities/adminApi";
import FiltersList from "./FiltersList";
import PageWrapper from "../PageWrapper";
import PageContent from "../../Containers/PageContent";
import PageHeader from "../../Containers/PageHeader";
import PageActionButton from "../../Controls/PageActionButton";
import FiltersEmptyState from "./FiltersEmptyState";
import { FILTER_TYPES } from "./CreateFilterMenu";
import { useFilterLimits } from "./useFilterLimits";
import styles from "./FiltersPage.module.scss";
const EMPTY = [];

export default function FiltersListPage() {
  const navigate = useNavigate();
  const { type: routeType } = useParams();
  const type = Object.keys(FILTER_TYPES).find(
    (key) => key.toLowerCase() === routeType?.toLowerCase(),
  );
  const settings = useServvStore((s) => s.settings);
  const filtersList = useServvStore((s) => s.filtersList);
  const getFilters = useServvStore((s) => s.syncFiltersFromServer);
  const storeLoading = useServvStore((s) => s.loading);
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(false);
  const { isLimitReached, filterCategories } = useFilterLimits(
    settings,
    filtersList,
  );
  const filters = filtersList[type?.toLowerCase()] || EMPTY;
  const canCreate = Boolean(
    settings && filterCategories.includes(type) && !isLimitReached,
  );
  useEffect(() => {
    setSelected((previous) =>
      previous.filter((id) => filters.some((filter) => filter.id === id)),
    );
  }, [filters, type]);
  const handleSelect = (id) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((value) => value !== id) : [...prev, id],
    );
  const handleSelectAll = () =>
    setSelected(
      selected.length === filters.length
        ? []
        : filters.map((filter) => filter.id),
    );
  const handleDelete = async (_, ids) => {
    setLoading(true);
    try {
      const results = await Promise.allSettled(
        ids.map((id) =>
          axios.delete(
            `/wp-json/servv-plugin/v1/filters/${type.toLowerCase()}/${id}`,
            { headers: { "X-WP-Nonce": window.servvData.nonce } },
          ),
        ),
      );
      const deleted = ids.filter(
        (id, index) => results[index].status === "fulfilled",
      );
      setSelected((prev) => prev.filter((id) => !deleted.includes(id)));
      await getFilters();
      if (deleted.length)
        toast.success(
          `${deleted.length} ${
            deleted.length === 1 ? "filter" : "filters"
          } deleted.`,
        );
      if (deleted.length < ids.length)
        toast.error("Some filters could not be deleted. Please try again.");
    } catch {
      toast.error("Unable to refresh filters. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const create = (
    <PageActionButton
      text="Create filter"
      icon={<PlusIcon />}
      onAction={() => navigate(`/filters/new/${type}`)}
      disabled={!canCreate || loading}
    />
  );
  return (
    <PageWrapper flush loading={loading || storeLoading}>
      <PageContent>
        <BreadCrumbs
          breadcrumbs={[
            { label: "Filters", to: "/filters" },
            { label: type || "Unknown filter type" },
          ]}
        />
        <PageHeader
          title={type || "Filters"}
          description={`Manage your ${
            type?.toLowerCase() || "filters"
          } — view, edit, and delete entries.`}
          actions={type && create}
        />
        <div className={styles.divider} />
        {!type ? (
          <p>
            Unknown filter type. <Link to="/filters">Return to Filters</Link>
          </p>
        ) : !filters.length && !storeLoading ? (
          <FiltersEmptyState type={type}>{create}</FiltersEmptyState>
        ) : (
          <FiltersList
            title={type}
            loading={loading || storeLoading}
            filters={filters}
            selected={selected}
            onSelect={handleSelect}
            onSelectAll={handleSelectAll}
            onClearSelection={() => setSelected([])}
            onDelete={handleDelete}
          />
        )}
      </PageContent>
    </PageWrapper>
  );
}
