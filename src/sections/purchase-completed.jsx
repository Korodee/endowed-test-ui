import React from "react";
import { ReactComponent as Check } from "../assets/svg/check.svg";

export const PurchaseCompleted = ({ setStep }) => {
  return (
    <div className="completedContainer">
      <div className="purchaseCompleted">
        <div className="icon">
          <Check />
        </div>
        <h2>Purchase Completed</h2>
        <p>Please check your email for details concerning this transaction</p>
        <p className="goHome" onClick={() => setStep(1)}>
          Return Home
        </p>
      </div>
    </div>
  );
};
