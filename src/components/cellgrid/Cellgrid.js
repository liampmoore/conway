import React, { useState, useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "react-three-fiber";

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
      <planeBufferGeometry attach="geometry" args={[0.65, 0.65, 0.65]} />
      <meshStandardMaterial
        attach="material"
        color={hovered ? "black" : "hotpink"}
      />
    </mesh>
  );
}

export default function Cellgrid({ cellMap }) {
  const size = 0.74;

  return (
    <>
      (
      {Object.values(cellMap).map((item) => (
        <Cell
          key={item.y * 10 + item.x}
          position={[
            -7.673269879789604 / 2 + 0.5 + item.x * size,
            7.673269879789604 / 2 - 0.5 - item.y * size,
            0,
          ]}
        />
      ))}
      )
    </>
  );
}
