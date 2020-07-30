import React, { useState, useRef } from "react";
import styled from "styled-components";

const ViewportContainer = styled.div`
  background-color: red;
  width: 100%;
`;

export default function Viewport({ isPlaying }) {
  const canvasRef = useRef();
  return (
    <ViewportContainer>
      <canvas ref={canvasRef} width={"400px"} height={"400px"} />
    </ViewportContainer>
  );
}
