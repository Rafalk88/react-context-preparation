// ./src/components/App.js
import React from 'react';
import { ThemeProvider } from "styled-components";

import ResetStyle from "./styled/Reset";
import GlobalStyle from "./styled/Global";
import LoginPanel from "./LoginPanel";

const themeSettings = {
  colorAlfa: "green",
};

export default class App extends React.Component {
  render() {
    return (
      <>
        <ResetStyle />
        <GlobalStyle />
        <ThemeProvider theme={themeSettings}>
          <LoginPanel />
        </ThemeProvider>
      </>
    );
  }
}