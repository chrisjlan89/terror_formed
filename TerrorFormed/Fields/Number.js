import React from "react";
import useField from "../hooks/formHook";

const Number = ({ field }) => {
  const { value, handleChange } = useField(field);
  return (
    <input
      type="number"
      onChange={(e) => handleChange(e)}
      value={value || ""}
    ></input>
  );
};

export default Number;
