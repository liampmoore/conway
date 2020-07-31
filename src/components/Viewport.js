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
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

const TitleScreen = styled.div`
  position: absolute;
  z-index: 100;
  width: 100%;
  top: 20%;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  text-align: center;
  font-family: "Mulish", sans-serif;
`;

const Link = styled.a`
  color: black;
  text-decoration: none;
  display: block;
  :active {
    color: #ffaaff;
    text-decoration: underline;
  }
  :visited {
    color: #ffaaff;
    text-decoration: underline;
  }
`;

const ImgLink = styled.a`
  width: 32px;
  color: black;
  display: block;
  align-self: center;
  margin: 0 auto;
  img {
    width: 32px;
    text-align: center;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  width: 100%;
  text-align: center;
  font-family: "Mulish", sans-serif;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
`;

export default function Viewport({
  isPlaying,
  setIsPlaying,
  cellMap,
  setCellMap,
}) {
  const handleClick = () => {
    setCellMap({
      "1409": {
        y: 14,
        x: 9,
      },
      "1310": {
        y: 13,
        x: 10,
      },
      "1210": {
        y: 12,
        x: 10,
      },
      "1209": {
        y: 12,
        x: 9,
      },
      "1208": {
        y: 12,
        x: 8,
      },
    });
  };
  return (
    <ViewportContainer>
      {Object.keys(cellMap).length === 0 ? (
        <TitleScreen>
          <Title>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
            >
              Conway's Game of Life
            </Link>
          </Title>
          <Description onClick={() => handleClick()}>
            Click empty space to add cells. <br />
            <br />
            Click on a cell to remove it. <br />
            <br />
            Press <span style={{ color: "#70FFAF" }}>play</span> to start the
            game.
            <br />
            <br />
          </Description>
          <ImgLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/liampmoore/conway"
          >
            <img src="github.png"></img>
          </ImgLink>
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
