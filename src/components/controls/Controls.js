import React from "react";
import styled from "styled-components";
import Playbutton from "./Playbutton.js";
// import TemplatePicker from "./TemplatePicker.js";

const ControlBar = styled.div`
  box-sizing: border-box;
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem 1.25rem;
  border: 1px solid blue;
  width: 100%;
  margin: 0;
`;

function Controls({ isPlaying, setIsPlaying, setCurrentTemplate }) {
  return (
    <ControlBar>
      <Playbutton
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      ></Playbutton>
    </ControlBar>
  );
}

export default Controls;
