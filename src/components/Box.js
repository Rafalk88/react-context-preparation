// ./src/components/Box.js
import React from 'react';
import Row from "./Row";
import Div from "./Div";

export default class Box extends React.Component {
  render() {
    return (
      <>
        <Row type="dark" />
        <Row space="medium" />
        <Div type="dark" />
      </>
    );
  }
}