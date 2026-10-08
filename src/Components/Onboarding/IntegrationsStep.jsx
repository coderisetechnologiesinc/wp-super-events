import React, { useState } from "react";
import ConnectServiceModalContent from "../Modals/ConnectServiceModalContent";
import { EnvelopeIcon, LinkIcon } from "@heroicons/react/24/outline";
import { CalendarIcon } from "@heroicons/react/16/solid";
import IntegrationCard from "../Containers/IntegrationCard";
import ModalShell from "../Modals/ModalShell";
// import { useServvStore } from "../../store/useServvStore";
import { getCalendarConnectURL } from "../../utilities/accounts";

const IntegrationsStep = ({
  goToNextStep,
  isGmailConnected,
  zoomConnected,
  stripeConnected,
  checkingEmail,
  loading,
  onConnectGmail,
  onConnectZoom,
  onConnectStripe,
}) => {
  const [showGmailModal, setShowGmailModal] = useState(false);
  const [showZoomModal, setShowZoomModal] = useState(false);
  const [gmailConfirmed, setGmailConfirmed] = useState(false);
  const [zoomConfirmed, setZoomConfirmed] = useState(false);
  const calendarConnected = useServvStore((s) => s.calendarConnected);
  return (
    <div className="step__wrapper">
      <div className="step__header">
        <LinkIcon className="step__header_icon settings-icon" />
        <div className="step__heading">
          <h4 className="step__header_title">Integrations</h4>
          <p className="step__description">
            Connect your services to enable notifications, video calls, and
            payments.
          </p>
        </div>
      </div>

      <div className="step__content w-full max-w-[640px]">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          {/* <IntegrationCard
            icon={EnvelopeIcon}
            title="Gmail"
            description="Connect for email notifications and reminders"
            optional={false}
            connected={isGmailConnected}
            onConnect={() => setShowGmailModal(true)}
            disabled={checkingEmail}
          /> */}

          <IntegrationCard
            icon={CalendarIcon}
            title="Calendar"
            description="Connect Google Calendar to keep track of your event schedule"
            optional={true}
            connected={calendarConnected}
            onConnect={() => {
              localStorage.setItem(
                "redirectToOnboarding",
                window.location.href,
              );
              getCalendarConnectURL();
            }}
            disabled={loading}
          />

          {/* <IntegrationCard
            icon={<CreditCardIcon className="w-7 h-7 text-white" />}
            iconBg="#635BFF"
            title="Stripe"
            description="Accept payments for your events"
            optional={true}
            connected={stripeConnected}
            onConnect={onConnectStripe}
            disabled={loading}
          /> */}
        </div>

        <div className="servv_actions mt-auto">
          <button
            type="button"
            className="servv_button servv_button--primary"
            onClick={goToNextStep}
            disabled={loading}
          >
            Continue
          </button>
        </div>
      </div>

      {showGmailModal && (
        <ModalShell
          title="Connect Gmail"
          onClose={() => setShowGmailModal(false)}
        >
          <ConnectServiceModalContent
            service="gmail"
            confirmed={gmailConfirmed}
            setConfirmed={setGmailConfirmed}
            onConnect={onConnectGmail}
            closeModal={() => setShowGmailModal(false)}
          />
        </ModalShell>
      )}

      {/* {showZoomModal && (
        <ModalShell
          title="Connect Zoom"
          onClose={() => setShowZoomModal(false)}
        >
          <ConnectServiceModalContent
            service="zoom"
            confirmed={zoomConfirmed}
            setConfirmed={setZoomConfirmed}
            onConnect={onConnectZoom}
            closeModal={() => setShowZoomModal(false)}
          />
        </ModalShell>
      )} */}
    </div>
  );
};

export default IntegrationsStep;
