import React, { useState, useContext, useRef } from "react";
import { InputField } from "../components/input-field";
import { InputSelect } from "../components/input-select";
import { Button } from "../components/button";
import { usePaymentInputs } from "react-payment-inputs";
import Context from "../store/Context";

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

export const BillingInfo = ({
  handlePreviousStep,
  handleNextStep,
  refresh,
}) => {
  const [isCvcValid, setIsCvcValid] = useState(true);

  const handleCvcBlur = (event) => {
    const value = event.target.value;
    setIsCvcValid(/^\d{3}$/.test(value)); // Ensure exactly 3 digits
  };

  const context = useContext(Context);
  const billingFormRef = useRef(null);

  const resetForm = () => {
    billingFormRef.current.reset();
  };
  context.resetForm = resetForm;

  const { meta, getExpiryDateProps, getCVCProps } = usePaymentInputs();

  return (
    <form ref={billingFormRef} onSubmit={handleNextStep}>
      <InputField label={"Name on Card"} required />
      <InputSelect label={"Card type"} required options={cards} />
      <div className="states">
        <div className="cardDetails">
          <InputField
            label={"Card details"}
            customInput={<FormattedCardNumberInput onBlur={() => {}} />}
          />
        </div>
        <div className="expiryDate">
          <InputField
            label={"Expiry date"}
            customInput={
              <input
                {...getExpiryDateProps({
                  onBlur: () => {},
                })}
              />
            }
          />
        </div>
        <div className="cvc">
          <InputField
            label={"CVV"}
            customInput={<input {...getCVCProps({ onBlur: handleCvcBlur })} />}
          />
          {!isCvcValid && (
            <p className="errorText">CVC must be exactly 3 digits.</p>
          )}
        </div>
      </div>
      {meta.isTouched && meta.error && <span>Error: {meta.error}</span>}

      <div className="bottomNavigation">
        <Button name={"Next"} type={"submit"} />
        <p onClick={refresh}>Cancel Payment</p>
      </div>
      <div className="goHome">
        <p onClick={handlePreviousStep}>Go back</p>
      </div>
    </form>
  );
};

const FormattedCardNumberInput = ({ onBlur }) => {
  const [cardNumber, setCardNumber] = useState("");

  const handleCardNumberChange = (event) => {
    const value = event.target.value;
    const formattedValue = formatCardNumber(value);
    setCardNumber(formattedValue);
    if (formattedValue.replace(/\s/g, "").length >= 16) {
      onBlur(); // Trigger the onBlur callback to blur the input
    }
  };

  return (
    <input
      type="text"
      value={cardNumber}
      onChange={handleCardNumberChange}
      onBlur={onBlur}
      maxLength={19} // 16 digits + 3 spaces
    />
  );
};

function formatCardNumber(input) {
  const digits = input.replace(/\D/g, "");
  const parts = [];
  for (let i = 0; i < digits.length; i += 4) {
    parts.push(digits.substr(i, 4));
  }
  return parts.join(" ");
}
