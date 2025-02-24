import React, { useState } from "react";
import "./Stepper.css";

const Stepper = () => {
  const steps = ["Address", "Shipping", "Payment", "Summary"];
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep <= steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="stepper-container">
      <div className="stepper">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep; // ✅ Ahora el último paso también se completa correctamente
          const isActive = stepNumber === currentStep;

          return (
            <div key={step} className="step-wrapper">
              <div
                className={`step-circle ${isCompleted ? "completed" : ""} ${
                  isActive ? "active" : ""
                }`}
              >
                {isCompleted || currentStep > steps.length ? "✓" : stepNumber}
              </div>
              {index < steps.length - 1 && <div className="step-line"></div>}
              <span className="step-label">{step}</span>
            </div>
          );
        })}
      </div>

      <div className="stepper-buttons">
        <button onClick={handlePrevious} disabled={currentStep === 1}>
          Previous
        </button>
        <button onClick={handleNext} disabled={currentStep > steps.length}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Stepper;
