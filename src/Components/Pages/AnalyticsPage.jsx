import useCacheRefresh from "../../hooks/useCacheRefresh";
import { Fragment, useEffect, useState } from "react";
import { getSettings } from "../../utilities/settings";
import {
  getAnalyticsRevenue,
  getAnalyticsRegistrants,
  getAnalyticsTypes,
  getAnalyticsEvents,
} from "../../utilities/analytics";
import PageWrapper from "./PageWrapper";
import PageContent from "../Containers/PageContent";
import TabsComponent from "../Containers/TabsComponent";
import BlockStack from "../Containers/BlockStack";
import InlineStack from "../Containers/InlineStack";
import NewSelectControl from "../Controls/NewSelectControl";
import PageActionButton from "../Controls/PageActionButton";
import {
  StackedBarChart,
  StackedBarSeries,
  Bar,
  LinearXAxis,
  LinearYAxis,
  LinearXAxisTickLabel,
  LinearXAxisTickSeries,
  LinearYAxisTickSeries,
  GridlineSeries,
  Gridline,
  Gradient,
  GradientStop,
  Count,
  PieChart,
  PieArcSeries,
} from "reaviz";
import NewDatePickerControl from "../Controls/NewDatePickerControl";
import moment from "moment-timezone";
import SpinnerLoader from "./SpinnerLoader";

const AnalyticsPage = () => {
  const [loading, setLoading] = useState(false);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [filteredByDateRevenue, setFilteredByDateRevenue] = useState(null);
  const [settings, setSettings] = useState({});
  const [registrants, setRegistrants] = useState(null);
  const [registrantsTotal, setTotalRegistrants] = useState(null);

  const tabsList = [
    { label: "Revenue", value: 0 },
    { label: "Registrants", value: 1 },
    { label: "Events", value: 2 },
    { label: "Filters", value: 3 },
  ];
  const [selectedTab, setSelectedTab] = useState(0);

  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [isMonthSelected, setIsMonthSelected] = useState(false);

  const [eventsStatistic, setEventsStatistic] = useState(null);
  const [filtersStatistic, setFiltersStatistic] = useState(null);
  const [filtersStatisticFilteredByDate, setFiltersStatisticFilteredByDate] =
    useState(null);

  const [revenueDates, setRevenueDates] = useState({
    startDate: null,
    endDate: null,
  });

  // Tab change handler
  const handleSelectTabChange = (val) => {
    setSelectedTab(val);
    if (val === 1 && !registrantsTotal) {
      setIsMonthSelected(false);
      setSelectedMonth("");
      setSelectedYear("");
      fetchTotalRegistrants();
    }
    if (val === 2 && !eventsStatistic) {
      fetchEventsAnalytics();
    }
    if (val === 3 && !filtersStatistic) {
      setIsMonthSelected(false);
      setSelectedMonth("");
      setSelectedYear("");
      fetchFiltersStatistic();
    }
  };

  // Settings fetch
  const loadSettings = async () => {
    setLoading(true);
    try {
      const data = await getSettings();
      if (data) {
        setSettings(data);
      }
    } catch (e) {
      console.error("Failed to fetch settings", e);
    }
    setLoading(false);
  };

  // Total revenue fetch (fixed logic)
  const fetchTotalRevenue = async (from = null, to = null) => {
    setLoading(true);
    try {
      const data = await getAnalyticsRevenue(from, to);
      if (data) {
        if (!from && !to) {
          setTotalRevenue(data.total || 0);
        } else {
          setFilteredByDateRevenue(data.total || 0);
        }
      }
    } catch (e) {
      console.error("Error fetching revenue", e);
    }
    setLoading(false);
  };

  // Registrants fetch
  const fetchTotalRegistrants = async (month = null, forceTotal = false) => {
    setLoading(true);
    try {
      const useMonth = !forceTotal && (isMonthSelected || month);
      const year = useMonth ? selectedYear : null;
      const monthIndex = useMonth ? monthOptions.indexOf(selectedMonth) : null;
      const data = await getAnalyticsRegistrants(year, monthIndex);
      if (data) {
        if (!useMonth) {
          setTotalRegistrants(data);
        } else {
          setRegistrants(data);
        }
      }
    } catch (e) {
      console.error("Error fetching registrants", e);
    }
    setLoading(false);
  };

  // Month/year toggle for registrants/filters
  useEffect(() => {
    if (isMonthSelected) {
      if (selectedTab === 1) fetchTotalRegistrants(true);
      if (selectedTab === 3) fetchFiltersStatistic(true);
    }
  }, [isMonthSelected, selectedMonth, selectedYear]);

  // Registrants total
  const getRegistrantsTotal = () => {
    let total = { unique: 0, total: 0 };
    const dataSource = isMonthSelected ? registrants : registrantsTotal;
    if (dataSource) {
      total = Object.values(dataSource).reduce(
        (acc, curr) => {
          acc.unique += curr.unique;
          acc.total += curr.total;
          return acc;
        },
        { unique: 0, total: 0 },
      );
    }
    return total;
  };

  // Registrants diagram data
  const getDataForRegistrants = () => {
    let dataForDiagram = [];
    const dataSource = isMonthSelected ? registrants : registrantsTotal;
    if (dataSource) {
      dataForDiagram = [
        {
          key: "Events",
          data: [
            { key: "Unique", data: dataSource?.offline?.unique || 0 },
            { key: "Total", data: dataSource?.offline?.total || 0 },
          ],
        },
        {
          key: "Zoom Events",
          data: [
            { key: "Unique", data: dataSource?.online_zoom?.unique || 0 },
            { key: "Total", data: dataSource?.online_zoom?.total || 0 },
          ],
        },
      ];
    }
    return dataForDiagram;
  };

  // Filters analytics fetch (from your provided code)
  const fetchFiltersStatistic = async (month = null, forceTotal = false) => {
    setLoading(true);
    const useMonth = !forceTotal && (isMonthSelected || month);
    const year = useMonth ? selectedYear : null;
    const monthIndex = useMonth ? monthOptions.indexOf(selectedMonth) : null;
    const data = await getAnalyticsTypes(year, monthIndex).catch((error) =>
      console.log(error),
    );
    if (data) {
      if (!useMonth) setFiltersStatistic(data);
      else setFiltersStatisticFilteredByDate(data);
      setLoading(false);
      return data;
    }
    setLoading(false);
    return null;
  };

  // Events analytics fetch
  const fetchEventsAnalytics = async () => {
    setLoading(true);
    let statistic = eventsStatistic ? { ...eventsStatistic } : {};
    try {
      const { happened, cancelled, active } = await getAnalyticsEvents();
      if (happened) statistic = { ...statistic, happened };
      if (cancelled) statistic = { ...statistic, cancelled };
      if (active) statistic = { ...statistic, active };
      setEventsStatistic(statistic);
    } catch (e) {
      console.error("Error fetching events analytics", e);
    }
    setLoading(false);
  };

  // Event counts
  const getActiveEvents = () => {
    return eventsStatistic?.active
      ? eventsStatistic.active.offline + eventsStatistic.active.online_zoom
      : 0;
  };
  const getHappenedEvents = () => {
    return eventsStatistic?.happened
      ? eventsStatistic.happened.offline + eventsStatistic.happened.online_zoom
      : 0;
  };
  const getCanceledEvents = () => {
    return eventsStatistic?.cancelled
      ? eventsStatistic.cancelled.offline +
          eventsStatistic.cancelled.online_zoom
      : 0;
  };

  // Month/year select handlers
  const handleMonthSelect = (val) => {
    if (val === "") return;
    setSelectedMonth(val);
    if (selectedYear === "") {
      setSelectedYear(new Date().getFullYear());
    }
  };
  const handleYearSelect = (val) => {
    if (val === "") return;
    setSelectedYear(val);
    if (selectedMonth === "") {
      setSelectedMonth(monthOptions[1]);
    }
  };

  // Pie chart helpers for filter analytics
  const getCategoriesData = () => {
    const filtersData =
      isMonthSelected !== null
        ? filtersStatistic
        : filtersStatisticFilteredByDate;

    if (!filtersData || !filtersData.offline || !filtersData.online_zoom)
      return null;

    const categoryNames = filtersData.offline.categories.map((cat) => cat.name);

    const categoriesStatistic = categoryNames.map((categoryName) => {
      const offlineCategory = filtersData.offline.categories.find(
        (cat) => cat.name === categoryName,
      );
      const onlineCategory = filtersData.online_zoom.categories.find(
        (cat) => cat.name === categoryName,
      );

      return {
        key: categoryName,
        data: (offlineCategory?.value || 0) + (onlineCategory?.value || 0),
      };
    });

    if (categoriesStatistic.filter((cat) => cat.data > 0).length > 0)
      return categoriesStatistic;
    else return null;
  };

  const getLanguagesData = () => {
    const filtersData =
      isMonthSelected !== null
        ? filtersStatistic
        : filtersStatisticFilteredByDate;

    if (!filtersData || !filtersData.offline || !filtersData.online_zoom)
      return null;

    const languageNames = filtersData.offline.languages.map(
      (lang) => lang.name,
    );

    const languagesStatistic = languageNames.map((languageName) => {
      const offlineLang = filtersData.offline.languages.find(
        (lang) => lang.name === languageName,
      );
      const onlineLang = filtersData.online_zoom.languages.find(
        (lang) => lang.name === languageName,
      );

      return {
        key: languageName,
        data: (offlineLang?.value || 0) + (onlineLang?.value || 0),
      };
    });

    return languagesStatistic.some((lang) => lang.data > 0)
      ? languagesStatistic
      : null;
  };

  const getMembersData = () => {
    const filtersData =
      isMonthSelected !== null
        ? filtersStatistic
        : filtersStatisticFilteredByDate;

    if (!filtersData || !filtersData.offline || !filtersData.online_zoom)
      return null;

    const memberNames = filtersData.offline.members.map((mem) => mem.name);

    const membersStatistic = memberNames.map((memberName) => {
      const offlineMem = filtersData.offline.members.find(
        (mem) => mem.name === memberName,
      );
      const onlineMem = filtersData.online_zoom.members.find(
        (mem) => mem.name === memberName,
      );

      return {
        key: memberName,
        data: (offlineMem?.value || 0) + (onlineMem?.value || 0),
      };
    });

    return membersStatistic.some((mem) => mem.data > 0)
      ? membersStatistic
      : null;
  };

  const getLocationsData = () => {
    const filtersData =
      isMonthSelected !== null
        ? filtersStatistic
        : filtersStatisticFilteredByDate;

    if (!filtersData || !filtersData.offline || !filtersData.online_zoom)
      return null;

    const locationNames = filtersData.offline.locations.map((loc) => loc.name);

    const locationsStatistic = locationNames.map((locationName) => {
      const offlineLoc = filtersData.offline.locations.find(
        (loc) => loc.name === locationName,
      );
      const onlineLoc = filtersData.online_zoom.locations.find(
        (loc) => loc.name === locationName,
      );

      return {
        key: locationName,
        data: (offlineLoc?.value || 0) + (onlineLoc?.value || 0),
      };
    });

    return locationsStatistic.some((loc) => loc.data > 0)
      ? locationsStatistic
      : null;
  };

  // Pie chart block
  const renderPieBlock = (title, data) => {
    return (
      <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col gap-4 min-w-0">
        <h2 className="font-semibold text-gray-700 text-lg border-b pb-2">
          {title}
        </h2>
        <div className="w-full h-64 md:h-80 lg:h-96 min-w-0">
          {data ? (
            <PieChart
              id={title.toLowerCase()}
              height="100%"
              data={data}
              series={
                <PieArcSeries
                  colorScheme={["#B692F6", "#7319C6", "#8217E5", "#9D49EC"]}
                />
              }
            />
          ) : (
            <p className="text-gray-500">
              {t("No data available for")}
              {title.toLowerCase()}
              {t(".")}
            </p>
          )}
        </div>
      </div>
    );
  };

  // Filters analytics rendering
  const renderFiltersStatistic = () => {
    const membersData = getMembersData();
    const locationsData = getLocationsData();
    const languagesData = getLanguagesData();
    const categoriesData = getCategoriesData();

    return (
      <Fragment>
        <div className="flex flex-col md:flex-row flex-wrap gap-8 w-full min-w-0">
          {categoriesData && renderPieBlock(t("Categories"), categoriesData)}
          {locationsData && renderPieBlock(t("Locations"), locationsData)}
          {languagesData && renderPieBlock(t("Languages"), languagesData)}
          {membersData && renderPieBlock(t("Members"), membersData)}
        </div>
        {!membersData &&
          !locationsData &&
          !languagesData &&
          !categoriesData && (
            <div className="w-full h-64 bg-gradient-to-b from-transparent to-[#ECE4F6] rounded-lg flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-start">
                {<p>{t("You don’t have Filter Statistics yet.")}</p>}
              </div>
            </div>
          )}
      </Fragment>
    );
  };

  // Revenue datepicker effect
  useEffect(() => {
    if (revenueDates.startDate && revenueDates.endDate) {
      fetchTotalRevenue(
        moment(revenueDates.startDate).format("YYYY-MM-DD"),
        moment(revenueDates.endDate).format("YYYY-MM-DD"),
      );
    }
  }, [revenueDates]);

  useCacheRefresh(["analytics"], async () => {
    await fetchTotalRevenue();
    if (revenueDates.startDate && revenueDates.endDate) {
      await fetchTotalRevenue(moment(revenueDates.startDate).format("YYYY-MM-DD"), moment(revenueDates.endDate).format("YYYY-MM-DD"));
    }
    if (registrantsTotal || selectedTab === 1) {
      await fetchTotalRegistrants(null, true);
      if (isMonthSelected) await fetchTotalRegistrants(true);
    }
    if (eventsStatistic || selectedTab === 2) await fetchEventsAnalytics();
    if (filtersStatistic || selectedTab === 3) {
      await fetchFiltersStatistic(null, true);
      if (isMonthSelected) await fetchFiltersStatistic(true);
    }
  });

  // Initial load
  const getData = async () => {
    await fetchTotalRevenue();
    await loadSettings();
  };
  useEffect(() => {
    getData();
  }, []);

  const monthOptions = [
    "",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const yearOptions = ["", 2025, 2026];

  const { unique, total } = getRegistrantsTotal();

  // Month + year selects with a Reset, shown above both the registrants and the
  // filters charts. The two differ only in how the Reset aligns in the row.
  const renderPeriodFilters = (resetAlign, rowAlign = "") => {
    const periodOptions = (values) =>
      values.map((option) => ({ value: option, label: String(option) }));

    const markSelected = (handler) => (val) => {
      handler(val);
      setIsMonthSelected(true);
    };

    return (
      <InlineStack
        gap={4}
        className={`flex-col sm:flex-row w-full ${rowAlign} min-w-0`}
      >
        <div className="w-full sm:w-48">
          <NewSelectControl
            options={periodOptions(monthOptions)}
            value={selectedMonth}
            onChange={markSelected(handleMonthSelect)}
          />
        </div>
        <div className="w-full sm:w-48">
          <NewSelectControl
            options={periodOptions(yearOptions)}
            value={selectedYear}
            onChange={markSelected(handleYearSelect)}
          />
        </div>
        <PageActionButton
          text="Reset"
          icon={null}
          type="primary"
          className={`p-3 ${resetAlign} w-full sm:w-auto`}
          onAction={() => {
            setIsMonthSelected(false);
            setSelectedMonth("");
            setSelectedYear("");
          }}
        />
      </InlineStack>
    );
  };

  return (
    <PageWrapper loading={false} withBackground={true}>
      <div className="dashboard-card">
        <div className="servv-dashboard-header">
          <div className="dashboard-heading">
            <h1 className="dashboard-title">{`Analytics`}</h1>
            <p className="dashboard-description mt-4">
              Access analytics for your revenue, registrants, events, and
              filters
            </p>
          </div>
        </div>
        <PageContent>
          <BlockStack gap={8} cardsLayout={true} className="w-full min-w-0">
            {/* Tabs: always horizontally scrollable on mobile */}
            <div className="w-full min-w-0 overflow-x-auto">
              <TabsComponent
                tabsList={tabsList}
                value={selectedTab}
                handleSelectChange={handleSelectTabChange}
                fullWidth={true}
              />
            </div>
            {/* Responsive content blocks */}
            <SpinnerLoader isLoading={loading}>
              {selectedTab === 0 && (
                <BlockStack gap={8} className="w-full min-w-0">
                  <div className="flex flex-col md:flex-row justify-end items-end min-w-0 w-full">
                    <div className="w-full md:w-72">
                      <NewDatePickerControl
                        value={revenueDates}
                        label="Select Dates"
                        fullWidth
                        onChange={setRevenueDates}
                      />
                    </div>
                  </div>
                  <div className="w-full h-64 md:h-80 bg-gradient-to-b from-transparent to-[#ECE4F6] rounded-lg flex flex-col items-center justify-center min-w-0">
                    <div className="flex flex-col items-center justify-start">
                      <h2 className="font-semibold text-brand-700 text-display-md">
                        <Count
                          from={0}
                          to={
                            !revenueDates.startDate
                              ? totalRevenue || 0
                              : filteredByDateRevenue || 0
                          }
                          className="font-semibold text-brand-700 text-display-md"
                        />
                      </h2>
                      {totalRevenue === 0 && (
                        <p>{t("You haven’t made any Sales yet.")}</p>
                      )}
                    </div>
                  </div>
                </BlockStack>
              )}

              {selectedTab === 1 && (
                <BlockStack gap={8} className="w-full min-w-0">
                  {renderPeriodFilters("self-center", "items-start")}
                  <div className="w-full h-64 md:h-80 bg-gradient-to-b from-transparent to-[#ECE4F6] rounded-lg flex flex-col items-center justify-center min-w-0">
                    <h2 className="font-semibold text-brand-700 text-3xl">
                      <Count
                        from={0}
                        to={unique + total}
                        className="font-semibold"
                      />
                      {` Registrants`}
                    </h2>
                    {unique + total === 0 && (
                      <p className="text-gray-500 mt-2">
                        {t("You don’t have any Registrants yet.")}
                      </p>
                    )}
                  </div>
                </BlockStack>
              )}

              {selectedTab === 2 && (
                <>
                  {eventsStatistic ? (
                    <div className="w-full h-64 bg-gradient-to-b from-transparent to-[#ECE4F6] rounded-lg flex flex-col md:flex-row items-center justify-between p-4 md:p-8 gap-4 min-w-0">
                      <div className="w-full md:w-1/3 flex flex-col items-center gap-2 min-w-0">
                        <h2 className="font-semibold text-brand-700 text-lg">
                          {t("Active Events")}
                        </h2>
                        <Count
                          from={0}
                          to={getActiveEvents()}
                          className="font-semibold text-brand-700 text-3xl"
                        />
                      </div>
                      <div className="w-full md:w-1/3 flex flex-col items-center gap-2 min-w-0">
                        <h2 className="font-semibold text-brand-700 text-lg">
                          {t("Events Happened")}
                        </h2>
                        <Count
                          from={0}
                          to={getHappenedEvents()}
                          className="font-semibold text-brand-700 text-3xl"
                        />
                      </div>
                      <div className="w-full md:w-1/3 flex flex-col items-center gap-2 min-w-0">
                        <h2 className="font-semibold text-brand-700 text-lg">
                          {t("Events Cancelled")}
                        </h2>
                        <Count
                          from={0}
                          to={getCanceledEvents()}
                          className="font-semibold text-brand-700 text-3xl"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-64 flex items-center justify-center text-gray-500 min-w-0">
                      {t("No event analytics to display.")}
                    </div>
                  )}
                </>
              )}

              {selectedTab === 3 && (
                <BlockStack gap={8} className="w-full min-w-0">
                  {renderPeriodFilters("self-end")}
                  {filtersStatistic && renderFiltersStatistic()}
                </BlockStack>
              )}
            </SpinnerLoader>
          </BlockStack>
        </PageContent>
      </div>
    </PageWrapper>
  );
};

export default AnalyticsPage;
