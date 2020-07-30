import React, { useState } from "react";
import styled from "styled-components";
import Controls from "./components/controls/Controls.js";
import Viewport from "./components/Viewport.js";
import "./app.css";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0;
  max-width: 400px;
  height: 100%;
`;

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTemplate, setCurrentTemplate] = useState();
  return (
    <>
      <AppContainer>
        <Controls
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          setCurrentTemplate={setCurrentTemplate}
        />
        <Viewport isPlaying={isPlaying} />
      </AppContainer>
    </>
  );
}

export default App;
