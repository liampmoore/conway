import React from "react";
import styled from "styled-components";
import { Canvas } from "react-three-fiber";

import Cellgrid from "./cellgrid/Cellgrid.js";

const ViewportContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  width: 100%;
  border: 0.5px solid #bcc4e3;
`;

const TitleScreen = styled.div`
  position: absolute;
  z-index: 100;
  width: 100%;
  top: 25%;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  text-align: center;
  font-family: "Mulish", sans-serif;
  width: 100%;
`;

const Link = styled.a`
  color: black;
  text-decoration: none;
  :active {
    color: #ffaaff;
    text-decoration: underline;
  }
  :visited {
    color: #ffaaff;
    text-decoration: underline;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  width: 100%;
  text-align: center;
  font-family: "Mulish", sans-serif;
  pointer-events: none;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
`;

export default function Viewport({ isPlaying, cellMap, setCellMap }) {
  return (
    <ViewportContainer>
      {Object.keys(cellMap).length === 0 ? (
        <TitleScreen>
          <Title>
            <Link href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">
              Conway's Game of Life
            </Link>
          </Title>
          <Description>
            Click empty space to add cells. <br />
            <br />
            Click on a cell to remove it. <br />
            <br />
            Press play to start the game.
          </Description>
        </TitleScreen>
      ) : (
        <></>
      )}
      <Canvas width={"400px"} height={"400px"}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Cellgrid
          cellMap={cellMap}
          setCellMap={setCellMap}
          isPlaying={isPlaying}
        />
      </Canvas>
    </ViewportContainer>
  );
}
