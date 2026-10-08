import IntegrationLayout, {
  IntegrationSection,
  IntegrationAccount,
} from "./IntegrationLayout";
import PageActionButton from "../../Controls/PageActionButton";
import useCacheRefresh from "../../../hooks/useCacheRefresh";
import { useEffect, useState } from "react";
import axios from "../../../utilities/adminApi";
import { useNavigate } from "react-router-dom";

import ModalShell from "../../Modals/ModalShell";
import ConnectServiceModalContent from "../../Modals/ConnectServiceModalContent";
import { openServiceConnectURL } from "../../../utilities/accounts";

// Shared "connect / disconnect a third-party account" page. Zoom and Google
// Calendar differ only in endpoints, copy and whether connecting is gated
// behind a confirmation modal.
const ConnectedServicePage = ({
  title,
  breadcrumbLabel,
  heading,
  description,
  service,
  resolveAccount,
  getAccountLabel,
  confirmService = null,
  manageRoute = null,
}) => {
  const navigate = useNavigate();
  const [account, setAccount] = useState(null);
  const [isAccountFetched, setAccountFetched] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const accountUrl = `/wp-json/servv-plugin/v1/${service}/account`;

  const getAccount = async () => {
    const response = await axios({
      method: "GET",
      url: accountUrl,
      headers: { "X-WP-Nonce": servvData.nonce },
    });

    if (response && response.status === 200) {
      setAccount(resolveAccount(response.data) ? response.data : null);
    }

    setAccountFetched(true);
  };

  const handleRemoveAccount = async () => {
    await axios({
      method: "DELETE",
      url: accountUrl,
      headers: { "X-WP-Nonce": servvData.nonce },
    });
    setAccount(null);
  };

  const handleGetConnectURL = () => openServiceConnectURL(service);

  useEffect(() => {
    getAccount();
  }, []);

  useCacheRefresh(["accounts"], getAccount);

  const onConnectClick = (e) => {
    e?.preventDefault();

    if (confirmService) setShowConfirmationModal(true);
    else handleGetConnectURL();
  };

  return (
    <IntegrationLayout
      title={heading || title}
      description={description}
      glyph={service === "zoom" ? "Z" : "G"}
      connected={Boolean(account)}
      status={!isAccountFetched ? "Loading…" : undefined}
      accountLabel={account ? getAccountLabel(account) : undefined}
      actions={
        isAccountFetched && (
          <>
            {account ? (
              <>
                <PageActionButton
                  text="Disconnect"
                  type="danger-secondary"
                  onAction={handleRemoveAccount}
                />
                {manageRoute && (
                  <PageActionButton
                    text="Manage"
                    onAction={() => navigate(manageRoute)}
                  />
                )}
              </>
            ) : (
              <PageActionButton text="Connect" onAction={onConnectClick} />
            )}
          </>
        )
      }
    >
      <IntegrationSection title="Account" description={description}>
        <IntegrationAccount
          label={account ? getAccountLabel(account) : undefined}
        />
      </IntegrationSection>
      {confirmService && showConfirmationModal && (
        <ModalShell
          title={`Connect ${breadcrumbLabel}`}
          onClose={() => setShowConfirmationModal(false)}
        >
          <ConnectServiceModalContent
            service={confirmService}
            confirmed={confirmed}
            setConfirmed={setConfirmed}
            onConnect={handleGetConnectURL}
            closeModal={() => setShowConfirmationModal(false)}
          />
        </ModalShell>
      )}
    </IntegrationLayout>
  );
};
export default ConnectedServicePage;
