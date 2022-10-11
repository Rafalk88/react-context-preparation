// ./src/components/Div.js
import React from "react";
import classNames from "classnames";

const Row = (props) => {
  const { type, space } = props;

  const className = classNames("Row", {
    [`Row--${type}`]: type,
    [`Row--space-${space}`]: space,
  });

  return <div className={className}>React Styling, className</div>;
};

export default Row;
