import React from "react";
import styled from "styled-components";

// Define the StyledBox component
const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => (props.$isBlack ? "black" : "green")};
  margin: 2rem;

  &:hover {
    background-color: red;
  }
`;

// Define the BoxWithStyledComponents component
export default function BoxWithStyledComponents({ $isBlack }) {
  return <StyledBox $isBlack={$isBlack} />;
}
