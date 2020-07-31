import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Controls from "./components/controls/Controls.js";
import Viewport from "./components/Viewport.js";
import "./app.css";

import generateCells from "./generateCells";

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

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== 0) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [cellMap, setCellMap] = useState({});
  const [generation, setGeneration] = useState(0);
  const [speed, setSpeed] = useState(1);

  useInterval(() => {
    const nextMap = generateCells(cellMap);
    setGeneration(generation + 1);
    setCellMap(nextMap);
  }, (1000 - speed * 100 - speed * 10) * isPlaying);

  return (
    <>
      <AppContainer>
        <Controls
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          cellMap={cellMap}
          setCellMap={setCellMap}
          generation={generation}
          setGeneration={setGeneration}
          speed={speed}
          setSpeed={setSpeed}
        />
        <Viewport
          isPlaying={isPlaying}
          cellMap={cellMap}
          setCellMap={setCellMap}
        />
      </AppContainer>
    </>
  );
}

export default App;
