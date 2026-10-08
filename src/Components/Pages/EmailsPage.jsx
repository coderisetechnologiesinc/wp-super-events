import IntegrationLayout, {
  IntegrationSection,
  IntegrationAccount,
} from "./Integrations/IntegrationLayout";
import styles from "./Integrations/IntegrationLayout.module.scss";
import { useEffect, useState } from "react";
import ConnectServiceModalContent from "../Modals/ConnectServiceModalContent";
import Banner from "../Containers/Banner";
import { toast } from "react-toastify";
import {
  getGmailAccount as getGmailAccountUtil,
  disconnectGmailAccount,
  getGmailConnectURL,
} from "../../utilities/accounts";
import {
  getSMTPAccount,
  saveSMTPAccount,
  deleteSMTPAccount,
} from "../../utilities/mails";
import { saveSettings } from "../../utilities/settings";
import { useServvStore } from "../../store/useServvStore";
import ModalShell from "../Modals/ModalShell";
import PageActionButton from "../Controls/PageActionButton";
import NewInputFieldControl from "../Controls/NewInputFieldControl";
import NewSelectControl from "../Controls/NewSelectControl";
const EmailsPage = ({ onPageSelect = () => {} }) => {
  const settings = useServvStore((s) => s.settings);

  const [loading, setLoading] = useState(false);
  const [account, setAccount] = useState(null);
  const [smtpAccount, setSmtpAccount] = useState(null);
  const [isAccountFetched, setAccountFetched] = useState(false);
  const [isSMTPAccountFetched, setSMTPAccountFetched] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [gmailConfirmed, setGmailConfirmed] = useState(false);
  const [defaultProvider, setDefaultProvider] = useState("gmail");
  const [smtpForm, setSmtpForm] = useState({
    email: "",
    host: "",
    port: "",
    username: "",
    password: "",
  });
  const [smtpErrors, setSmtpErrors] = useState({});

  const SMTP_VALIDATORS = {
    email: {
      regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Enter a valid email address",
    },
    host: {
      regex:
        /^(([a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}|localhost)$/,
      message: "Enter a valid hostname (e.g. smtp.example.com)",
    },
    port: {
      regex:
        /^([1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/,
      message: "Port must be a number between 1 and 65535",
    },
    username: {
      regex: /\S+/,
      message: "Username is required",
    },
  };

  const validateSmtpField = (field, value) => {
    const validator = SMTP_VALIDATORS[field];
    if (!validator) return null;
    return validator.regex.test(value) ? null : validator.message;
  };

  const validateSmtpForm = () => {
    const errors = {};
    Object.keys(SMTP_VALIDATORS).forEach((field) => {
      const error = validateSmtpField(field, smtpForm[field]);
      if (error) errors[field] = error;
    });
    if (!smtpForm.password) errors.password = "Password is required";
    setSmtpErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSmtpFieldChange = (field, value) => {
    setSmtpForm((f) => ({ ...f, [field]: value }));
    if (smtpErrors[field]) {
      const error = validateSmtpField(field, value);
      setSmtpErrors((e) => ({ ...e, [field]: error }));
    }
  };

  useEffect(() => {
    const provider = settings?.settings?.email_provider;
    if (!provider) return;
    if (provider === "smtp" || provider === "gmail") {
      setDefaultProvider(provider);
    } else {
      setDefaultProvider("gmail");
    }
  }, [settings?.settings?.email_provider]);
  const getGmailAccount = async () => {
    const { data } = await getGmailAccountUtil();
    if (data) {
      if (data.email) setAccount(data);
      setAccountFetched(true);
    }
  };
  const handleRemoveAccount = async () => {
    await disconnectGmailAccount();
    setAccount(null);
  };
  const handleRemoveSMTPAccount = async () => {
    const res = await deleteSMTPAccount();
    if (res && res.status === 200) {
      console.log(res);
      setSmtpAccount(null);
      setSmtpForm({
        email: "",
        host: "",
        port: "",
        username: "",
        password: "",
      });
      setSmtpErrors({});
      toast.success("SMTP account has been successfully disconnected");
    }
  };
  const handleSaveSettings = async () => {
    let newSettings = {
      ...settings,
      settings: { ...settings.settings, email_provider: defaultProvider },
    };
    const res = await saveSettings(newSettings);
    if (res && res?.settings?.email_provider === defaultProvider) {
      toast.success("Default provider saved successfully.");
    }
  };
  const handleSaveSMTPAccount = async () => {
    if (!validateSmtpForm()) return;
    const res = await saveSMTPAccount(smtpForm);
    if (res && res.is_valid) {
      toast.success("SMTP account has been connected successfully");
      setSMTPAccountFetched(true);
      setSmtpAccount(res);
    } else if (res?.error) {
      toast.error(
        "Couldn't connect SMTP account. Check your credentials and make sure your provider allows plain password authentication.",
      );
    }
  };
  const handleGetConnectURL = async () => {
    await getGmailConnectURL();
  };
  const handleSyncSMTPAccount = async () => {
    const res = await getSMTPAccount();
    if (res && res.id) {
      setSMTPAccountFetched(true);
      setSmtpAccount(res);
    }
  };
  const getConnectedAccounts = async () => {
    setLoading(true);
    await getGmailAccount();
    await handleSyncSMTPAccount();
    setLoading(false);
  };
  useEffect(() => {
    getConnectedAccounts();
  }, []);
  const activeAccount = defaultProvider === "gmail" ? account : smtpAccount;
  return (
    <IntegrationLayout
      title="Email"
      glyph="M"
      description="Send event notifications and reminders through Gmail or your SMTP account."
      connected={Boolean(activeAccount)}
      accountLabel={activeAccount?.email}
      loading={loading}
      actions={
        <PageActionButton
          text="Save"
          onAction={handleSaveSettings}
          disabled={
            defaultProvider === settings?.settings?.email_provider ||
            (defaultProvider === "gmail" && !account?.email) ||
            (defaultProvider === "smtp" && !smtpAccount?.is_valid)
          }
        />
      }
    >
      {smtpAccount?.id && smtpAccount.is_valid === false && (
        <Banner tone="warning" title="Verify account settings">
          <p>
            Your SMTP account needs to be reconnected. Please update your
            credentials below.
          </p>
        </Banner>
      )}
      <IntegrationSection
        title="Email provider"
        description="Choose the account used for event emails."
      >
        <div className={styles.field}>
          <label>Email provider</label>
          <NewSelectControl
            value={defaultProvider}
            options={[
              {
                value: "gmail",
                label: account?.email ? `Gmail · ${account.email}` : "Gmail",
              },
              {
                value: "smtp",
                label: smtpAccount?.email
                  ? `SMTP · ${smtpAccount.email}`
                  : "SMTP",
              },
            ]}
            onChange={setDefaultProvider}
            style={{ width: "100%" }}
          />
        </div>
      </IntegrationSection>
      <IntegrationSection
        title={defaultProvider === "gmail" ? "Gmail" : "SMTP"}
        description="Automate email notifications and reminders through your account."
      >
        <IntegrationAccount
          label={activeAccount?.email}
          status={
            defaultProvider === "smtp" && activeAccount?.is_valid === false
              ? "Needs attention"
              : "Connected"
          }
        />
        {defaultProvider === "gmail" ? (
          isAccountFetched && (
            <div className={styles.actions}>
              {account ? (
                <PageActionButton
                  text="Disconnect"
                  type="danger-secondary"
                  onAction={handleRemoveAccount}
                />
              ) : (
                <PageActionButton
                  text="Connect"
                  onAction={() => setShowModal(true)}
                />
              )}
            </div>
          )
        ) : (
          <>
            {isSMTPAccountFetched && !smtpAccount && (
              <div className={styles.fieldGrid}>
                {[
                  ["email", "Email", "email", "user@example.com"],
                  ["host", "Host", "text", "smtp.example.com"],
                  ["port", "Port", "number", "587"],
                  ["username", "Username", "text", "user@example.com"],
                  ["password", "Password", "password", "••••••••"],
                ].map(([key, label, type, placeholder]) => (
                  <div className={styles.field} key={key}>
                    <label htmlFor={`smtp-${key}`}>{label}</label>
                    <NewInputFieldControl
                      id={`smtp-${key}`}
                      value={smtpForm[key]}
                      type={type}
                      placeholder={placeholder}
                      width="100%"
                      onChange={(value) =>
                        key === "password"
                          ? (setSmtpForm((previous) => ({
                              ...previous,
                              password: value,
                            })),
                            setSmtpErrors((previous) => ({
                              ...previous,
                              password: value ? null : "Password is required",
                            })))
                          : handleSmtpFieldChange(key, value)
                      }
                      error={Boolean(smtpErrors[key])}
                    />
                    {smtpErrors[key] && (
                      <span className={styles.error} role="alert">
                        {smtpErrors[key]}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}
            {isSMTPAccountFetched && (
              <div className={styles.actions}>
                <PageActionButton
                  text={smtpAccount ? "Disconnect" : "Connect"}
                  type={smtpAccount ? "danger-secondary" : "primary"}
                  onAction={
                    smtpAccount
                      ? handleRemoveSMTPAccount
                      : handleSaveSMTPAccount
                  }
                />
              </div>
            )}
          </>
        )}
      </IntegrationSection>
      {showModal && (
        <ModalShell title="Connect Gmail" onClose={() => setShowModal(false)}>
          <ConnectServiceModalContent
            service="gmail"
            confirmed={gmailConfirmed}
            setConfirmed={setGmailConfirmed}
            onConnect={handleGetConnectURL}
            closeModal={() => setShowModal(false)}
          />
        </ModalShell>
      )}
    </IntegrationLayout>
  );
};
export default EmailsPage;
