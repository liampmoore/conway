import React, { useState, useRef } from "react";
import styled from "styled-components";
import InterfacePanel from "./components/InterfacePanel.js";

const Viewport = styled.div`
  position: absolute;
  bottom: 0;
  background-color: red;
`;

// Notes: The interface panel uses a total of 10vh of the screen.
function App() {
  let canvasRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTemplate, setCurrentTemplate] = useState();
  const [ySize, setySize] = useState(0);
  const [xSize, setxSize] = useState(0);
  return (
    <>
      <InterfacePanel
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        setCurrentTemplate={setCurrentTemplate}
      />
      <Viewport>
        <canvas
          ref={canvasRef}
          height={(window.innerHeight * 8) / 9}
          width={window.innerWidth}
          position="absolute"
          bottom="0"
          left="0"
          right="0"
        />
      </Viewport>
    </>
  );
}

export default App;
