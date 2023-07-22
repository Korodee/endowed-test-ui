import React from "react";

export const InputSelect = ({ label, options, info, required }) => {
  return (
    <div className="inputField">
      <div className="labelField">
        <label>{label}</label>
        {required && <p>*</p>}
      </div>
      {info && <p>{info}</p>}
      <select required>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};
