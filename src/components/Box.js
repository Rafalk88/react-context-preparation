// ./src/components/Box.js
import React from 'react';
import Div from './Div';

export default class Box extends React.Component {
    render() {
        const divStyle = {
          padding: "100px",
        };

        return (
          <>
            <Div type="dark" />
            <Div style={divStyle} />
          </>
        );
    }
}