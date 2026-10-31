import React from "react";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import styles from "./LiveChatButton.module.scss";

// The launcher Intercom attaches to via custom_launcher_selector, so the id
// matters: injectIntercom points the widget at #servv_live_chat and clicking is
// handled by Intercom itself, not by an onClick here.
const LiveChatButton = () => (
  <button id="servv_live_chat" type="button" className={styles.button}>
    <ChatBubbleLeftRightIcon />
    <span>Live Chat</span>
  </button>
);

export default LiveChatButton;
