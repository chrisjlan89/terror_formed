import React, { useState, createContext } from "react";
import styled from "styled-components";
import { StyledInput } from "../../Pages/SubPages/ContactUs";
import Field from "./Field";

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

export const FormContext = createContext({});

const MakePaymentStyles = styled.div`
  border: solid 1px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 92%;
  margin: 10px auto;
  grid-gap: 16px;

  h1 {
    text-align: left;
    margin-left: 6px;
  }
`;

const TerrorFormedStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: row;
  grid-gap: 10px;
  margin: 4px;

  color: ${(props) => props.theme.formGrey};

  input,
  select,
  textarea,
  .fresh-input {
    background-color: transparent;
    box-sizing: border-box;
    box-shadow: none;
    max-width: 100%;
    border-width: 2px;
    border-style: solid;
    border-image: initial;
    border-color: inherit;
    border-radius: 3px;
    font: inherit;
    margin: 0.5em 0px;
    padding: 0.75em;
    transition: border-color 0.2s ease 0s;
    padding: 14px;
    border-radius: 8px;
    font-size: 18px;
    border-style: solid;
    border-color: #8c8c8c;

    grid-column: ${(props) => props.full === "true" && 1 / -1};
  }

  option {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    padding-right: 30px;
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23000000%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"),
      linear-gradient(transparent 0%, transparent 100%);
    background-repeat: no-repeat, repeat;
    background-position: right 0.7em top 50%, 0 0;
    background-size: 0.65em auto, 100%;
    &::-ms-expand {
      display: none;
    }
  }

  /* Select Field */
  .fresh-input-select {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    padding-right: 30px;
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23000000%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"),
      linear-gradient(transparent 0%, transparent 100%);
    background-repeat: no-repeat, repeat;
    background-position: right 0.7em top 50%, 0 0;
    background-size: 0.65em auto, 100%;
    &::-ms-expand {
      display: none;
    }
  }

  #submit {
    grid-column: 1/ -1;
  }
`;

const InputAndLabel = styled.div`
  display: grid;
  grid-column: ${(props) => props.full === "true" && `1 / -1`};
  text-align: left;
  grid-row-gap: 8px;

  h3 {
    margin: 0;
    margin-left: 6px;
    color: ${(props) => props.theme.formGrey};
    color: #8c8c8c;
  }
`;

const TerrorFormed = ({ values, onSubmit }) => {
  //  console.log(values.map((item) =>  Object.values(item)));
  const initialState = values.reduce((prev, curr) => {
    console.log(curr.type);
    prev = {
      ...prev,
      [curr["field"]]: curr.type === "checkbox" ? false : "",
    };
    return prev;
  }, {});

  console.log(initialState);

  const [formState, setFormState] = useState(initialState);

  const onSubmitForm = (e) => {
    e.preventDefault();

    onSubmit(formState);
  };

  return (
    <FormContext.Provider
      value={{
        formState,
        setFormState,
      }}
    >
      <form onSubmit={(e) => onSubmitForm(e)}>
        <MakePaymentStyles>
          <TerrorFormedStyles>
            {/* {Object.keys(values).map((value) => <input> </input>)} */}
            {values
              .filter(({ position }) => position === "left")
              .map(({ field, label, full, type, options }) => (
                <InputAndLabel key={field} full={full}>
                  <h3> {label} </h3>
                  <Field options={options} field={field} type={type} />
                </InputAndLabel>
              ))}
            <input id="submit" type="submit" value="Submit" />
          </TerrorFormedStyles>
          <TerrorFormedStyles>
            {/* {Object.keys(values).map((value) => <input> </input>)} */}
            {values
              .filter(({ position }) => position === "right")
              .map(({ field, label, full, type, options }) => (
                <InputAndLabel key={field} full={full}>
                  <h3> {label} </h3>
                  <Field options={options} field={field} type={type} />
                </InputAndLabel>
              ))}
            <input id="submit" type="submit" value="Submit" />
          </TerrorFormedStyles>
        </MakePaymentStyles>
      </form>
    </FormContext.Provider>
  );
};

export default TerrorFormed;
