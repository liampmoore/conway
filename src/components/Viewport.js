import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Canvas, useThree } from "react-three-fiber";

import Cellgrid from "./cellgrid/Cellgrid.js";

const radians = (degrees) => (degrees * Math.PI) / 180;

const ViewportContainer = styled.div`
  border-radius: 5px;
  width: 100%;
`;

export default function Viewport({ isPlaying, cellMap, setCellMap }) {
  return (
    <ViewportContainer>
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
