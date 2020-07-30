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
      <planeBufferGeometry attach="geometry" args={[0.325, 0.325, 0]} />
      <meshStandardMaterial
        attach="material"
        color={hovered ? "black" : "hotpink"}
      />
    </mesh>
  );
}

export default function Cellgrid({ cellMap }) {
  // Now we can use the mouse click event to add cells
  const { mouse } = useThree();

  // This handleclick takes the mouse vector event from Three JS
  // and converts it to the simple grid coordinate integers
  const handleClick = (mouse) => {
    const y = Math.floor(((mouse.y - 1) / 2) * -25);
    const x = Math.floor(((mouse.x + 1) / 2) * 25);
    console.log(x, y);
  };
  // This spread factor determines the space between cells on the canvas
  const spread = 0.3065;
  return (
    <>
      <group onClick={(e) => handleClick(mouse)}>
        <mesh>
          {/* This is a big invisible mesh behind the rest that I added since
        the click event needed something to click on when there aren't any living cells in an area. */}
          <planeBufferGeometry attach="geometry" args={[50, 50, 50]} />
        </mesh>
        {Object.values(cellMap).map((item) => (
          <Cell
            key={item.y * 10 + item.x}
            position={[
              // I found a guide online to calculate the bounds of the camera and just kept that value static
              // It could probably be calculated automatically if I ever wanted to make this responsive
              -7.673269879789604 / 2 + 0.1575 + item.x * spread,
              7.673269879789604 / 2 - 0.1575 - item.y * spread,
              0,
            ]}
          />
        ))}
        )
      </group>
    </>
  );
}
