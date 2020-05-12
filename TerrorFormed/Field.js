import React from "react";
import Select from "./Fields/Select";
import Number from "./Fields/Number";
import TextArea from "./Fields/TextArea";
import Text from "./Fields/Text";
import Checkbox from "./Fields/Checkbox";

const kebabCase = (str) =>
  str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();

const camelCase = (str) => {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    if (+match === 0) return "";
    return index == 0 ? match.toLowerCase() : match.toUpperCase();
  });
};

const Field = ({ field, type, options }) => {
  return (
    <>
      {(() => {
        switch (type) {
          case "select":
            return <Select options={options} field={field} />;

          case "textarea":
            return <TextArea field={field} />;
          case "number":
            return <Number field={field} />;

          case "checkbox":
            return <Checkbox field={field} />;

          default:
            return <Text field={field} />;
        }
      })()}
    </>
  );
};

export default Field;
