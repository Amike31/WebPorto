import React from "react";
import { ThemeProvider } from "styled-components";
import { Theme } from "./utils/Theme";
import { MainBody, Container, FadeImage } from "./styles/Global.style";

// import Components
import Showcase from "./components/Showcase";
import MySkills from "./components/MySkills";
import MyProjects from "./components/MyProjects";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// import assets
import TopFadeImage from "./assets/scroll/top.png";
import LeftFadeImage from "./assets/scroll/left.png";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <MainBody>
        <Navbar />
        <Container>
          <Showcase />
          <MySkills />
          <MyProjects />
          <Footer />
        </Container>

        <FadeImage src={TopFadeImage} top='0' />
        <FadeImage src={LeftFadeImage} top='30vh' />
      </MainBody>
    </ThemeProvider>
  );
}

export default App;
