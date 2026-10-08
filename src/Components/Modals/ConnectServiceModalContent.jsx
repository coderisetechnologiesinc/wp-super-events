import React, { Fragment } from "react";

import BlockStack from "../Containers/BlockStack";
import CheckboxItem from "../Controls/CheckboxItem";
import StepBlock from "../Shared/StepBlock";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

const SUPPORT_URL =
  "https://support.servv.ai/pages/getting-started/integrations/integrations/";

const emphasis = (text) => (
  <span className="font-medium text-gray-900">{text}</span>
);

// Per-service copy for the confirmation step shown before an OAuth redirect.
const SERVICES = {
  zoom: {
    noticeTitle: "Paid Zoom account required",
    notes: [
      <Fragment key="paid">
        To connect Zoom, you must use a {emphasis("paid Zoom account")}. Free
        Zoom accounts are not supported for this integration.
      </Fragment>,
      <Fragment key="shared">
        Please make sure that {emphasis("shared access permission")} is enabled
        for the Zoom account, as it is required for proper integration and
        meeting management.
      </Fragment>,
    ],
    image: "ZoomPermission.png",
    imageAlt: "Zoom permission",
    confirmLabel:
      "I understand and confirm that I am using a paid Zoom account",
    connectLabel: "Connect Zoom",
  },
  gmail: {
    description: "Before connecting, please confirm the required permission.",
    noticeTitle: "Important note",
    notes: [
      <Fragment key="send">
        Please ensure that you select the checkbox for the{" "}
        {emphasis("“Send email on your behalf”")} permission when
        connecting Gmail.
      </Fragment>,
    ],
    image: "GmailPermission.png",
    imageAlt: "Gmail permission",
    confirmLabel: "I have read the note above",
    connectLabel: "Connect",
  },
};

const ConnectServiceModalContent = ({
  service,
  confirmed,
  setConfirmed,
  onConnect,
  closeModal,
}) => {
  const copy = SERVICES[service];

  if (!copy) return null;

  return (
    <StepBlock description={copy.description}>
      <BlockStack gap={5}>
        <div className="flex flex-col gap-3 p-4 border border-gray-200 rounded-xl bg-gray-50 shadow-sm">
          <p className="text-sm font-semibold text-gray-900">
            {copy.noticeTitle}
          </p>

          {copy.notes.map((note, index) => (
            <p
              key={index}
              className="text-sm text-gray-600 leading-relaxed"
            >
              {note}
            </p>
          ))}

          <img
            alt={copy.imageAlt}
            src={`${servvData.pluginUrl}/public/assets/images/${copy.image}`}
            className="w-full rounded-lg border object-cover"
          />
        </div>

        <CheckboxItem
          label={copy.confirmLabel}
          checked={confirmed}
          onChange={() => setConfirmed(!confirmed)}
        />

        <div
          className="flex flex-row gap-2 items-center hover:cursor-pointer hover:bg-gray-100 py-2 w-fit px-2 -ml-2 rounded-[6px]"
          onClick={() => open(SUPPORT_URL, "_blank")}
        >
          <QuestionMarkCircleIcon className="w-[16px] h-[16px]" />
          <span className="text-sm text-gray-600 leading-relaxed">
            Learn more
          </span>
        </div>

        <div className="flex justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={closeModal}
            className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
          >
            Cancel
          </button>

          <button
            type="button"
            disabled={!confirmed}
            onClick={() => {
              onConnect();
              closeModal();
            }}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
              confirmed
                ? "bg-[#7a5af8] text-white hover:bg-[#6845f5]"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            {copy.connectLabel}
          </button>
        </div>
      </BlockStack>
    </StepBlock>
  );
};

export default ConnectServiceModalContent;
