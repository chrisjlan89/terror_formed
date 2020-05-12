import styled from "styled-components";

export const StyledInput = styled.input`
  padding: 14px;
  border-radius: 8px;
  font-size: 18px;
  border-style: solid;
  border-color: #8c8c8c;

  grid-column: ${(props) => props.full === "true" && 1 / -1};
`;
