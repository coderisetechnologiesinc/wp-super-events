import { useState, useEffect } from "react";
import { EnvelopeIcon } from "@heroicons/react/16/solid";
import LiveChatButton from "../Controls/LiveChatButton";
import { injectIntercom } from "../../utilities/intercom";
const ValidationScreen = ({ message, troubleshoot }) => {
  const [intercomLaded, setIntercomLoaded] = useState(false);
  useEffect(() => {
    setIntercomLoaded(injectIntercom());
  }, []);
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-transparent to-[#ECE4F6] border-brand-800 gap-4">
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-gray-900 text-display-sm">Installation & Setup</h2>
      </div>
      <p className="text-2xl font-regular text-gray-900 px-[10%] py-[2%]">
        {message}
      </p>
      {troubleshoot && (
        <div className="pb-[2%]">
          <ol>
            <li className="text-xl font-regular text-gray-900">
              Review our{" "}
              <a
                className="text-brand-500 hover:text-brand-400"
                href="https://support.servv.ai/getting-started/troubleshooting/faq/"
              >
                Troubleshooting Guide
              </a>{" "}
              to resolve common setup issues.
            </li>
            <li className="text-xl font-regular text-gray-900">
              Watch the WP Super Events{" "}
              <a
                className="text-brand-500 hover:text-brand-400"
                href="https://wpsuperevents.com/demo"
              >
                Demo
              </a>{" "}
              to see how the platform works.
            </li>
            <li className="text-xl font-regular text-gray-900">
              Explore our WP Super Events{" "}
              <a
                className="text-brand-500 hover:text-brand-400"
                href="https://www.youtube.com/channel/UCiUGsW6_-iTqUw-tebA9CEQ"
              >
                Video Library
              </a>{" "}
              to learn more.
            </li>
          </ol>
        </div>
      )}
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-gray-900 text-display-sm">Need help?</h2>
      </div>
      <div className="flex flex-row gap-2 justify-center">
        <a
          href="mailto:support@servv.ai"
          className="rounded-[0.625rem] border no-underline border-gray-300 bg-white shadow-sm flex flex-row gap-2 justify-between px-[14px] py-[10px]"
        >
          <EnvelopeIcon className="w-[20px] fill-gray-700" />
          <span className="text-sm text-gray-700 font-semibold">Email Us</span>
        </a>

        {intercomLaded && (
          <LiveChatButton />
        )}
      </div>
    </div>
  );
};

export default ValidationScreen;
