import React from "react";
import styled from "styled-components";
import Playbutton from "./Playbutton.js";

const BottomBarWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2.5vh;
  z-index: 4;
  display: flex;
  align-items: flex-end;
`;
const BottomBar = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: grey;
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-around;
  padding: 2.5vh;
`;

function InterfacePanel({ isPlaying, setIsPlaying }) {
  return (
    <BottomBarWrapper>
      <BottomBar>
        <Playbutton
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        ></Playbutton>
      </BottomBar>
    </BottomBarWrapper>
  );
}

export default InterfacePanel;
