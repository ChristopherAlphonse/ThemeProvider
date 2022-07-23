import React, { useState } from "react";
import  { ThemeProvider } from "styled-components";
import Splash from "./components/Splash";

const DarkTheme = {
  backgroundColor: "#0D0F11",
  cardColor: "#242526",
  hoverColor: "#323A46",
  primaryText: "#fff",
  secondaryText: "#2C2C2C",
};
const LightTheme = {
  backgroundColor: "#ffff",
  cardColor: "#E7EAEE",
  hoverColor: "#D0D5DD",
  primaryText: "#2D2D2D",
  secondaryText: "#72777B",
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeProvider theme={themes[theme]}>
      <Splash theme={theme} setTheme={setTheme} />
    </ThemeProvider>
  );
};

export default App;
