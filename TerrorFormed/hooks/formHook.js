import { useContext, useEffect } from "react";
import { FormContext } from "../TerrorFormed";

const useField = (field) => {
  const { formState, setFormState } = useContext(FormContext);

  const handleChange = (e) => {
    const {
      target: { value },
    } = e;
    console.log(value, field);
    const handleValue = (value) => {
      console.log(typeof value);
      if (typeof value === Boolean) return !value;
      if (typeof value === "string") return value;
    };

    setFormState({
      ...formState,
      [field]: handleValue(value),
    });
  };

  return { value: formState[field], handleChange };
};

export default useField;
