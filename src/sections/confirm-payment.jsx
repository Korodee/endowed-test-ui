import React from "react";
import { Button } from "../components/button";

export const ConfirmPayment = ({ handlePreviousStep, handleNextStep }) => {
  return (
    <div>
      <div className="confirmPayment">
        <div className="header">
          <p>Item Name</p>
          <p>N Price</p>
        </div>
        <div className="paymentDetails">
          <p>Data science and usability</p>
          <p className="bold">50,000.00</p>
        </div>
        <div className="paymentDetails">
          <p>Shipping</p>
          <p className="bold">0.00</p>
        </div>
        <hr />
        <div className="paymentDetails rounded">
          <p>Total</p>
          <p className="bold">50,000.00</p>
        </div>
      </div>
      <div className="bottomNavigation">
        <Button name={"Pay"} onClick={handleNextStep} />
        <p onClick={handlePreviousStep}>Cancel Payment</p>
      </div>
    </div>
  );
};
