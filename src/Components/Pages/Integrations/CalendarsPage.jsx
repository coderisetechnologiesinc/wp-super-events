import ConnectedServicePage from "./ConnectedServicePage";

const CalendarsPage = () => (
  <ConnectedServicePage
    service="calendar"
    title={t("Calendars")}
    breadcrumbLabel="Calendar"
    heading={t("Google Calendar")}
    description="Keep your team and attendees aligned by syncing events directly with Google Calendar"
    resolveAccount={(data) => Boolean(data?.id)}
    getAccountLabel={(account) => account.google_calendar_email}
  />
);

export default CalendarsPage;
