import React from "react";
import { CheckIcon } from "@heroicons/react/16/solid";
import InteractiveCard from "./InteractiveCard";

const GRADIENT = "linear-gradient(74.06deg, #583DFF -11.67%, #9B25F8 47.12%)";

// The "connect a service" card: framed icon, gradient title, optional badge and
// a Connect button that flips to a Connected state. Shared by the onboarding
// integrations step and the event form's venue step.
const IntegrationCard = ({
  icon: Icon,
  title,
  description,
  optional,
  connected,
  onConnect,
  disabled,
}) => (
  <InteractiveCard
    style={{ minHeight: 0 }}
    subtitle={
      <div className="flex flex-col items-center gap-2">
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-[6.25%] bg-[#F4EBFF] rounded-lg" />
          <div className="absolute inset-0 border-2 border-[#E9EAEB] rounded-[10.67px]" />
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#6941C6] bg-[#6941C6]/20">
            <Icon className="w-full h-full text-[#6941C6] z-10" />
          </div>
        </div>
      </div>
    }
    title={
      <>
        <h2
          className="text-2xl font-bold"
          style={{
            background: GRADIENT,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {title}
        </h2>
        {optional && (
          <span
            className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full"
            style={{ background: "#F3F4F6", color: "#6B7280" }}
          >
            Optional
          </span>
        )}
      </>
    }
    text={
      <p className="text-sm" style={{ color: "#717680" }}>
        {description}
      </p>
    }
    action={
      connected ? (
        <div className="flex justify-center">
          <button
            type="button"
            className="servv_button servv_button--secondary w-full"
          >
            <CheckIcon className="w-4 h-4 mr-1" />
            Connected
          </button>
        </div>
      ) : (
        <button
          type="button"
          className="w-full rounded-lg text-sm font-extrabold py-2.5 px-6 transition-opacity hover:opacity-90 disabled:opacity-50"
          style={{
            background: GRADIENT,
            border: "3px solid rgba(255, 255, 255, 0.35)",
            boxShadow:
              "0px 4px 8px -2px rgba(10, 13, 18, 0.1), 0px 2px 4px -2px rgba(10, 13, 18, 0.06)",
            color: "#FFFFFF",
          }}
          onClick={onConnect}
          disabled={disabled}
        >
          Connect
        </button>
      )
    }
  />
);

export default IntegrationCard;
