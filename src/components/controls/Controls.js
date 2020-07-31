import React from "react";
import styled from "styled-components";
import Playbutton from "./Playbutton.js";
import Stepbutton from "./Stepbutton.js";
import Clearbutton from "./Clearbutton";
// import TemplatePicker from "./TemplatePicker.js";

const ControlBar = styled.div`
  box-sizing: border-box;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem 1.25rem;
  border: 0.5px solid #bcc4e3;
  border-bottom: none;
  width: 100%;
  margin: 0;
`;

const Counter = styled.p`
  display: block;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  border: none;
  padding: none;
  margin: none;
  font-size: 2.6rem;
  font-family: "Mulish", sans-serif;
  line-height: 0rem;
  position: relative;
  bottom: 0.16rem;
  pointer-events: none;
`;
function Controls({
  isPlaying,
  setIsPlaying,
  cellMap,
  setCellMap,
  generation,
  setGeneration,
  speed,
  setSpeed,
}) {
  return (
    <ControlBar>
      <Playbutton
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      ></Playbutton>
      <Stepbutton
        isPlaying={isPlaying}
        cellMap={cellMap}
        setCellMap={setCellMap}
        generation={generation}
        setGeneration={setGeneration}
        speed={speed}
        setSpeed={setSpeed}
      />
      <Clearbutton
        setCellMap={setCellMap}
        setIsPlaying={setIsPlaying}
        setGeneration={setGeneration}
        setSpeed={setSpeed}
      />
      <Counter>{generation}</Counter>
    </ControlBar>
  );
}

export default Controls;
