import React from "react";

import { ThemeProvider } from "./contexts/theme/ThemeContext";
import MainRouter from "./router/MainRouter";

// Global Styles
import "./styles/main.scss";

const App = () => {
  return (
    <ThemeProvider>
      <MainRouter />
    </ThemeProvider>
  );
};

export default App;
