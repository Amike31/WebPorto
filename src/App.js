import React from "react";
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { Theme } from "./utils/Theme";
import Home from "./pages/Home";
import DeniedAccess from "./pages/DeniedAccess";
import OnDeployment from "./pages/OnDeployment";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="~" element={<DeniedAccess />} />
        <Route path="!" element={<OnDeployment />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
