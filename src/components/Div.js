// ./src/components/Div.js
import React from "react";
import StyledDiv from "./styled/Div";

export const Div = ({ style = {}, type }) => {
  return (
    <StyledDiv style={style} type={type}>
      <h1>React: Styled Components</h1>
      <p>Lorem ipsum dolor sit amet.</p>
    </StyledDiv>
  );
};

export default Div;
