import { Contacts } from "../../assets/icons";
import StepActions from "./StepActions";
import NewInputControl from "../Controls/NewInputControl";
import DashboardPagination from "../Shared/DashboardPagination";
import Registrant from "./Registrant";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useParams, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import SpinnerLoader from "../Pages/SpinnerLoader";
import {
  fetchRegistrants,
  fetchRegistrantsWithToken,
  deleteRegistrant,
  resendRegistrantNotification,
  resendAllNotifications,
} from "../../utilities/registrants";

const RegistrantsStep = ({
  settings,
  attributes,
  setAttributes,
  changeStep,
  handleFormSubmit,
  registrantsView,
}) => {
  const registrants = attributes.registrants || [];
  const [firstNameValue, setFirstName] = useState("");
  const [lastNameValue, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [showError, setShowError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRegistrants, setSelectedRegistrants] = useState([]);
  const [zoomPageTokens, setZoomPageTokens] = useState({
    1: null,
  });
  const [registrantsLoading, setRegistrantsLoading] = useState(false);
  const PAGE_SIZE = 20;

  const visibleRegistrants = registrants.filter(
    (reg) => reg.status !== "delete",
  );

  const totalPages = attributes?.regPagination?.pageCount || 1;
  const totalRecords =
    attributes?.regPagination?.total_records || totalPages * PAGE_SIZE;

  const paginatedRegistrants = visibleRegistrants;
  const isAddRegistrantDisabled =
    settings?.current_plan?.id === 1 || !settings.current_plan;
  const { id } = useParams();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const occurrenceId = searchParams.get("occurrence_id");

  const postID = Number(id);

  const getRegistrantId = (reg) => reg.id || reg.tempId;

  const handleSelectRegistrant = (id) => {
    setSelectedRegistrants((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [totalRecords, totalPages]);

  useEffect(() => {
    const visibleIds = visibleRegistrants.map(getRegistrantId);

    setSelectedRegistrants((prev) =>
      prev.filter((id) => visibleIds.includes(id)),
    );
  }, [visibleRegistrants.length]);

  /* ------------------ helpers ------------------ */

  const updateRegistrants = (next) => {
    setAttributes({ ...attributes, registrants: next });
  };

  const handleRegistransSave = async () => {
    const registrantsForDelete = registrants.filter(
      (reg) => reg.id && reg.status === "delete",
    );

    try {
      setRegistrantsLoading(true);

      await Promise.all(
        registrantsForDelete.map((reg) =>
          deleteRegistrant({
            postID,
            occurrenceId,
            registrantID: reg.id,
          }),
        ),
      );
      await handleFormSubmit();
      const cleanedRegistrants = registrants
        .filter((reg) => reg.status !== "delete")
        // .filter((reg) => !reg.status)
        .map((reg) => {
          const cleaned = { ...reg };
          delete cleaned.status;
          delete cleaned.tempId;
          return cleaned;
        });

      setAttributes({
        ...attributes,
        registrants: cleanedRegistrants,
      });

      // changeStep("branding");
    } catch (error) {
      console.error("Failed to save registrants", error);
    } finally {
      setRegistrantsLoading(false);
    }
  };

  const loadRegistrants = async (page = 1) => {
    if (!postID) return;

    setRegistrantsLoading(true);

    try {
      const isZoom = attributes?.location === "zoom";

      // ---------------- NON-ZOOM (page-based) ----------------
      if (!isZoom) {
        const res = await fetchRegistrants({
          postID,
          occurrenceId,
          page,
        });

        setAttributes({
          ...attributes,
          registrants: res.registrants || [],
          regPagination: {
            pageCount: res.pagination?.pageCount || 1,
            pageNumber: page,
            total_records:
              res.pagination?.totalRecords ||
              (res.pagination?.pageCount || 1) * PAGE_SIZE,
          },
        });

        return;
      }

      // ---------------- ZOOM (token-based) ----------------
      const res = await fetchRegistrantsWithToken({
        postID,
        occurrenceId,
        next_page_token: zoomPageTokens[page] || null,
        pageSize: PAGE_SIZE,
      });

      setAttributes({
        ...attributes,
        registrants: res.registrants || [],
        regPagination: {
          pageCount: res.pagination?.nextPageToken ? page + 1 : page, // fake pages for UI
          pageNumber: page,
          total_records: res.pagination?.totalRecords || 0,
        },
      });

      if (res.pagination?.nextPageToken) {
        setZoomPageTokens((prev) => ({
          ...prev,
          [page + 1]: res.pagination.nextPageToken,
        }));
      }
    } catch (e) {
      console.error("Failed to fetch registrants", e);
    } finally {
      setRegistrantsLoading(false);
    }
  };

  /* ------------------ add ------------------ */

  const handleRegistrantAdd = () => {
    if (!firstNameValue || !lastNameValue || !email) {
      setShowError(true);
      return;
    }

    const newRegistrant = {
      tempId: uuidv4(),
      firstName: firstNameValue,
      lastName: lastNameValue,
      email,
      status: "create",
    };

    updateRegistrants([...registrants, newRegistrant]);

    setFirstName("");
    setLastName("");
    setEmail("");
    setShowError(false);
  };

  useEffect(() => {
    loadRegistrants(currentPage);
  }, [currentPage]);

  useEffect(() => {
    loadRegistrants(1);
  }, []);

  /* ------------------ delete / toggle ------------------ */

  const onStatusChange = (id) => {
    const next = registrants.map((reg) => {
      const regId = reg.id || reg.tempId;
      if (regId !== id) return reg;

      // existing → soft delete
      if (reg.id) {
        return {
          ...reg,
          status: reg.status === "delete" ? undefined : "delete",
        };
      }

      // new → hard delete
      return null;
    });

    updateRegistrants(next.filter(Boolean));
  };

  /* ------------------ render ------------------ */

  const renderRegistrants = () => {
    if (!paginatedRegistrants.length) {
      return <p>This event doesn't have any registrants yet</p>;
    }

    return paginatedRegistrants.map((registrant) => {
      const id = getRegistrantId(registrant);

      return (
        <Registrant
          key={id}
          id={id}
          firstName={registrant.firstName}
          lastName={registrant.lastName}
          email={registrant.email}
          status={registrant.status}
          selected={selectedRegistrants.includes(id)}
          onSelect={handleSelectRegistrant}
          onStatusChange={onStatusChange}
        />
      );
    });
  };
  /* ------------------ resend notifications ------------------ */

  const resend = async () => {
    if (selectedRegistrants.length === 0) return;

    try {
      setRegistrantsLoading(true);

      await Promise.all(
        selectedRegistrants.map((registrantID) =>
          resendRegistrantNotification({
            postID,
            registrantID,
            occurrenceId,
          }),
        ),
      );

      toast.success(
        `Notifications resent to ${selectedRegistrants.length} registrant${
          selectedRegistrants.length > 1 ? "s" : ""
        }.`,
      );

      await loadRegistrants(currentPage);
    } catch (e) {
      console.error("Failed to resend notifications to selected", e);

      toast.error("Failed to resend notifications to selected registrants.");
    } finally {
      setRegistrantsLoading(false);
    }
  };

  const resendAll = async () => {
    try {
      setRegistrantsLoading(true);

      await resendAllNotifications({
        postID,
        occurrenceId,
      });

      toast.success("Notifications have been resent to all registrants.");

      await loadRegistrants(currentPage);
    } catch (e) {
      console.error("Failed to resend notifications to all", e);

      toast.error("Failed to resend notifications to all registrants.");
    } finally {
      setRegistrantsLoading(false);
    }
  };
  const exportToCSV = (rows, filename = "registrants.csv") => {
    const headers = ["First Name", "Last Name", "Email"];

    const csvContent = [
      headers.join(","),
      ...rows.map((row) =>
        row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(","),
      ),
    ].join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = filename;
    link.style.display = "none";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  const handleExportRegistrants = async () => {
    if (!postID) return;

    setRegistrantsLoading(true);

    try {
      const isZoom = attributes?.location === "zoom";
      let allRegistrants = [];

      /* ---------------- NON-ZOOM (page-based) ---------------- */
      if (!isZoom) {
        let page = 1;
        let pageCount = 1;

        do {
          const res = await fetchRegistrants({
            postID,
            occurrenceId,
            page,
          });

          allRegistrants.push(...(res.registrants || []));
          pageCount = res.pagination?.pageCount || 1;
          page++;
        } while (page <= pageCount);
      }

      /* ---------------- ZOOM (token-based) ---------------- */
      if (isZoom) {
        let nextToken = null;

        do {
          const res = await fetchRegistrantsWithToken({
            postID,
            occurrenceId,
            next_page_token: nextToken,
            pageSize: PAGE_SIZE,
          });

          allRegistrants.push(...(res.registrants || []));
          nextToken = res.pagination?.nextPageToken || null;
        } while (nextToken);
      }

      if (!allRegistrants.length) {
        toast.info("No registrants to export.");
        return;
      }

      /* ---------------- EXPORT ---------------- */
      const rows = allRegistrants.map((r) => [
        r.firstName || "",
        r.lastName || "",
        r.email || "",
      ]);

      exportToCSV(rows, "registrants.csv");

      toast.success(`Exported ${allRegistrants.length} registrants.`);
    } catch (e) {
      console.error("Export registrants failed", e);
      toast.error("Failed to export registrants.");
    } finally {
      setRegistrantsLoading(false);
    }
  };

  /* ------------------ UI ------------------ */

  return (
    <div className={`step__wrapper`}>
      {/* Header */}
      <div className="step__header">
        <Contacts className="step__header_icon" />
        <div className="step__heading">
          <h4 className="step__header_title">Registrants</h4>
          <p className="step__description">Manage registrants</p>
        </div>
      </div>

      {/* Content */}
      <div className="step__content">
        {/* Add form */}
        {/* First name */}
        <div className="step__content_block">
          <span className="step__content_title">First name</span>

          <NewInputControl
            placeholder="Enter first name"
            value={firstNameValue}
            disabled={isAddRegistrantDisabled}
            onChange={setFirstName}
          />
        </div>

        {/* Last name */}
        <div className="step__content_block">
          <span className="step__content_title">Last name</span>

          <NewInputControl
            placeholder="Enter last name"
            value={lastNameValue}
            disabled={isAddRegistrantDisabled}
            onChange={setLastName}
          />
        </div>

        {/* Email + action */}
        <div className="step__content_block">
          <span className="step__content_title">Email</span>

          <NewInputControl
            type="email"
            placeholder="Enter email address"
            value={email}
            disabled={isAddRegistrantDisabled}
            onChange={setEmail}
          />

          {showError && (
            <p className="text-sm text-error-500 mt-2">
              Please fill in all fields
            </p>
          )}
          <div className="step__content_block">
            <button
              type="button"
              className="servv_button servv_button--primary mt-3"
              onClick={handleRegistrantAdd}
              disabled={
                email.length === 0 ||
                firstNameValue.length === 0 ||
                lastNameValue.length === 0 ||
                isAddRegistrantDisabled
              }
            >
              Add registrant
            </button>
          </div>
        </div>

        <div className="step__content_delimeter" />
        {/* List */}
        <div className={`step__content_block`}>
          <div className="flex flex-row justify-between items-center">
            <span className="step__content_title">Registrants list</span>
            <div className="servv_actions">
              <div className={`servv_actions flex items-center gap-2 ml-auto `}>
                {registrants.length > 0 && selectedRegistrants.length > 0 && (
                  <button
                    type="button"
                    className="servv_button servv_button--secondary servv_button--sm"
                    onClick={() => resend(id)}
                  >
                    Resend to selected
                  </button>
                )}

                {registrants.length > 0 && selectedRegistrants.length === 0 && (
                  <button
                    type="button"
                    className="servv_button servv_button--secondary servv_button--sm"
                    onClick={() => resendAll(id)}
                  >
                    Resend notifications
                  </button>
                )}
                {registrants.length > 0 && (
                  <button
                    type="button"
                    className="servv_button servv_button--secondary servv_button--sm"
                    onClick={() => handleExportRegistrants()}
                  >
                    Export
                  </button>
                )}
              </div>
            </div>
          </div>
          <SpinnerLoader isLoading={registrantsLoading}>
            {renderRegistrants()}
          </SpinnerLoader>

          {totalPages > 1 && (
            <DashboardPagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalRecords={totalRecords}
              pageSize={PAGE_SIZE}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
      </div>

      {/* Actions */}
      <StepActions
        onPrevious={
          registrantsView ? undefined : () => changeStep("branding")
        }
        onPrimary={handleRegistransSave}
        primaryText="Save"
        primaryDisabled={
          registrants.filter(
            (reg) =>
              reg.status &&
              (reg.status === "create" || reg.status === "delete"),
          ).length === 0
        }
      />
    </div>
  );
};

export default RegistrantsStep;
