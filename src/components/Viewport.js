import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Canvas, useFrame } from "react-three-fiber";

const radians = (degrees) => (degrees * Math.PI) / 180;

const ViewportContainer = styled.div`
  border: 1px solid blue;
  border-radius: 5px;
  width: 100%;
`;

function Cell(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <mesh
      {...props}
      ref={mesh}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <planeBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial
        attach="material"
        color={hovered ? "black" : "hotpink"}
      />
    </mesh>
  );
}

export default function Viewport({ isPlaying }) {
  return (
    <ViewportContainer>
      <Canvas width={"400px"} height={"400px"}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Cell position={[1, 0, -7.5]} />
      </Canvas>
    </ViewportContainer>
  );
}
