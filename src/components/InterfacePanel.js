import React from "react";
import styled from "styled-components";
import Playbutton from "./Playbutton.js";
import TemplatePicker from "./TemplatePicker.js";

const BottomBarWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.25vh;
  z-index: 4;
  display: flex;
  align-items: flex-start;
`;
const ControlBar = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: #efefef;
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1.25vh;
  border: 1px solid blue;
`;

function InterfacePanel({ isPlaying, setIsPlaying }) {
  return (
    <BottomBarWrapper>
      <ControlBar>
        <Playbutton
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        ></Playbutton>
        <TemplatePicker />
      </ControlBar>
    </BottomBarWrapper>
  );
}

export default InterfacePanel;
