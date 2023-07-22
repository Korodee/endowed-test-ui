import React from "react";

export const Button = ({ name, onClick, type }) => {
  return (
    <button className="button" onClick={onClick} type={type}>
      {name}
    </button>
  );
};
