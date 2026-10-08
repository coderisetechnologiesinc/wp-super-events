import React from "react";

// The footer every event-form and onboarding step ends with: an optional
// Save and Exit, an optional Previous, and the step's primary action.
//
// A handler left undefined drops its button, which is how the steps express
// "no Save and Exit while creating" or "nothing to continue to yet" — the call
// sites used to wrap each button in its own conditional for that.
const StepActions = ({
  onSaveAndExit,
  onPrevious,
  onPrimary,
  primaryText = "Continue",
  previousText = "Previous",
  saveAndExitText = "Save and Exit",
  primaryDisabled = false,
  className = "mt-auto",
}) => (
  <div className={`servv_actions ${className}`}>
    {onSaveAndExit && (
      <button
        type="button"
        className="servv_button servv_button--secondary"
        onClick={onSaveAndExit}
      >
        {saveAndExitText}
      </button>
    )}

    {onPrevious && (
      <button
        type="button"
        className="servv_button servv_button--secondary"
        onClick={onPrevious}
      >
        {previousText}
      </button>
    )}

    {onPrimary && (
      <button
        type="button"
        className="servv_button servv_button--primary"
        onClick={onPrimary}
        disabled={primaryDisabled}
      >
        {primaryText}
      </button>
    )}
  </div>
);

export default StepActions;
