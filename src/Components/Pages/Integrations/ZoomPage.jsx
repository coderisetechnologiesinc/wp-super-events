import ConnectedServicePage from "./ConnectedServicePage";

const ZoomPage = () => (
  <ConnectedServicePage
    service="zoom"
    title="Zoom"
    breadcrumbLabel="Zoom"
    heading={t("Zoom")}
    description={t("Host and manage Zoom events effortlessly by integrating Zoom")}
    resolveAccount={(data) => Boolean(data?.email)}
    getAccountLabel={(account) => account.email}
    confirmService="zoom"
    manageRoute="settings"
  />
);

export default ZoomPage;
