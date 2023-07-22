import React from "react";
import { InputField } from "../components/input-field";
import { InputSelect } from "../components/input-select";
import { Button } from "../components/button";

const states = [
  {
    name: "Lagos State",
    value: "lagos",
  },
  {
    name: "Ogun State",
    value: "ogun",
  },
];

export const PersonalInfo = ({ handleNextStep }) => {
  return (
    <form onSubmit={handleNextStep}>
      <InputField label={"Name"} />
      <InputField
        required={true}
        type={"email"}
        label={"Email Address"}
        info={"The purchase reciept would be sent to this address"}
      />
      <InputField label={"Address 1"} />
      <InputField label={"Address 2"} />
      <div className="states">
        <div className="lga">
          <InputField label={"Local Government"} />
        </div>
        <div className="state">
          <InputSelect label={"State"} options={states} />
        </div>
      </div>

      <div className="bottomNavigation">
        <Button name={"Next"} type={"submit"} />
        <p>Cancel Payment</p>
      </div>
    </form>
  );
};
