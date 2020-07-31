import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Canvas, useThree } from "react-three-fiber";

import Cellgrid from "./cellgrid/Cellgrid.js";

const radians = (degrees) => (degrees * Math.PI) / 180;

const ViewportContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  width: 100%;
  border: 0.5px solid #bcc4e3;
`;

const Description = styled.p`
  position: absolute;
  z-index: 100;
  width: 100%;
  top: 30%;
  text-align: center;
  font-family: "Mulish", sans-serif;
  pointer-events: none;
`;

export default function Viewport({ isPlaying, cellMap, setCellMap }) {
  return (
    <ViewportContainer>
      {Object.keys(cellMap).length === 0 ? (
        <Description>
          If a cell has two neighbors it lives on. <br />
          <br />
          If an empty cell has three neighbors it is born. <br />
          <br />
          Click to add some cells.
        </Description>
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
