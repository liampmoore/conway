import React, { useState, useEffect } from "react";
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
  const [cellMap, setCellMap] = useState({ 23: { y: 2, x: 3 } });

  return (
    <>
      <AppContainer>
        <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        <Viewport isPlaying={isPlaying} cellMap={cellMap} />
      </AppContainer>
    </>
  );
}

export default App;
