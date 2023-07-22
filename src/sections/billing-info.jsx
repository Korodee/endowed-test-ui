import React from "react";
import { InputField } from "../components/input-field";
import { InputSelect } from "../components/input-select";
import { Button } from "../components/button";
import { usePaymentInputs } from "react-payment-inputs";
const cards = [
  {
    name: "Visa",
    value: "visa",
  },
  {
    name: "Master Card",
    value: "master-card",
  },
];

export const BillingInfo = ({ handlePreviousStep, handleNextStep }) => {
  const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps } =
    usePaymentInputs();
  return (
    <form onSubmit={handleNextStep}>
      <InputField label={"Name on Card"} required />
      <InputSelect label={"Card type"} required options={cards} />
      <div className="states">
        <div className="cardDetails">
          <InputField
            label={"Card details"}
            customInput={<input {...getCardNumberProps()} />}
          />
        </div>
        <div className="expiryDate">
          <InputField
            label={"Expiry date"}
            customInput={<input {...getExpiryDateProps()} />}
          />
        </div>
        <div className="cvc">
          <InputField
            label={"CVV"}
            customInput={<input {...getCVCProps()} />}
          />
        </div>
      </div>
      {meta.isTouched && meta.error && <span>Error: {meta.error}</span>}

      <div className="bottomNavigation">
        <Button name={"Next"} type={"submit"} />
        <p onClick={handlePreviousStep}>Cancel Payment</p>
      </div>
    </form>
  );
};
