import React from "react";

export const InputField = ({
  label,
  type,
  info,
  required,
  customInput,
  placeholder,
}) => {
  return (
    <div className="inputField">
      <div className="labelField">
        <label>{label}</label>
        {required && <p className="asteric">*</p>}
      </div>
      {info && <p>{info}</p>}

      {customInput ? (
        customInput
      ) : (
        <input type={type ?? "text"} required placeholder={placeholder} />
      )}
    </div>
  );
};
