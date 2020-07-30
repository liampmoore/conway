import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Canvas, useThree } from "react-three-fiber";

import Cellgrid from "./cellgrid/Cellgrid.js";

const radians = (degrees) => (degrees * Math.PI) / 180;

const ViewportContainer = styled.div`
  border: 1px solid blue;
  border-radius: 5px;
  width: 100%;
`;

const cameraFactor = 7.673269879789604;

export default function Viewport({ isPlaying, cellMap }) {
  return (
    <ViewportContainer>
      <Canvas width={"400px"} height={"400px"}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Cellgrid cellMap={cellMap} />
      </Canvas>
    </ViewportContainer>
  );
}
