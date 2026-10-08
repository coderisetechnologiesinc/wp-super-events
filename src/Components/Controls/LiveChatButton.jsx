import React from "react";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/16/solid";

// The launcher Intercom attaches to via custom_launcher_selector, so the id
// matters: injectIntercom points the widget at #servv_live_chat and clicking is
// handled by Intercom itself, not by an onClick here.
const LiveChatButton = () => (
  <button
    id="servv_live_chat"
    className="rounded-[0.625rem] border border-white bg-brand-600 shadow-sm flex flex-row gap-2 justify-between px-[14px] py-[10px]"
  >
    <ChatBubbleLeftRightIcon className="w-[20px] fill-white" />
    <span className="text-sm text-white font-semibold">Live Chat</span>
  </button>
);

export default LiveChatButton;
