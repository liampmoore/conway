import React from "react";
import styled from "styled-components";
import Playbutton from "./Playbutton.js";
import TemplatePicker from "./TemplatePicker.js";

const ControlBar = styled.div`
  position: absolute;
  z-index: 4;
  top: 1.25vh;
  left: 1.25vh;
  right: 1.25vh;
  box-sizing: border-box;
  background-color: #efefef;
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1.25vh;
  border: 1px solid blue;
`;

function InterfacePanel({ isPlaying, setIsPlaying, setCurrentTemplate }) {
  return (
    <ControlBar>
      <Playbutton
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      ></Playbutton>
      <TemplatePicker setCurrentTemplate={setCurrentTemplate} />
    </ControlBar>
  );
}

export default InterfacePanel;
