import React, { useState } from "react";

import { PersonalInfo } from "./personal-info";
import { BillingInfo } from "./billing-info";
import { ConfirmPayment } from "./confirm-payment";
import { PurchaseCompleted } from "./purchase-completed";

export const MainContainer = () => {
  const [step, setStep] = useState(1);
  const handleNextStep = () => {
    setStep(step + 1);
  };
  const handlePreviousStep = () => {
    if (step <= 1) return;
    setStep(step - 1);
  };
  return (
    <>
      {step === 4 ? (
        <PurchaseCompleted setStep={setStep} />
      ) : (
        <div className="mainContainer">
          <div className="container">
            <h3>Complete your Purchase </h3>
            <div className="tab">
              <div className="tabContent">
                <h5 className={`${step === 1 && "active"}`}>Personal Info</h5>
                <h5 className={`${step === 2 && "active"}`}>Billing Info</h5>
                <h5 className={`${step === 3 && "active"}`}>Confirm Payment</h5>
              </div>
            </div>

            <div className="formContainer">
              {step === 1 && <PersonalInfo handleNextStep={handleNextStep} />}
              {step === 2 && (
                <BillingInfo
                  handleNextStep={handleNextStep}
                  handlePreviousStep={handlePreviousStep}
                />
              )}
              {step === 3 && (
                <ConfirmPayment
                  handlePreviousStep={handlePreviousStep}
                  handleNextStep={handleNextStep}
                />
              )}
            </div>
          </div>
        </div>
      )}{" "}
    </>
  );
};
