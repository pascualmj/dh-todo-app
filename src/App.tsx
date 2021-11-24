import React from "react";

import { ThemeProvider } from "./contexts/theme/ThemeContext";

// Global Styles
import "./styles/main.scss";

const App = () => {
  return (
    <ThemeProvider>
      <h1>DH Todo App by Manuel Pascual</h1>
    </ThemeProvider>
  );
};

export default App;
