import React, { useState, useRef } from "react";
import { useFrame, useThree } from "react-three-fiber";

const hashFunction = (y, x) => {
  return String(y * 100 + x);
};
function toggleCell(y, x, currentMap) {
  const cellKey = hashFunction(y, x);
  const keys = Object.keys(currentMap);
  const newMap = {};
  if (currentMap.hasOwnProperty(cellKey)) {
    for (let key of keys) {
      if (cellKey !== key) {
        newMap[key] = currentMap[key];
      }
    }
  } else {
    for (let key of keys) {
      newMap[key] = currentMap[key];
    }
    newMap[cellKey] = { y: y, x: x };
  }
  return newMap;
}

// Getting some kind of memory leak warning, might have to do with this
// https://github.com/facebook/react/pull/15157
function Cell(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();


  useFrame(() => {
    if (mesh.current.scale.z === 0) {
      if (mesh.current.scale.y < 1.25) {
        mesh.current.scale.y += 0.0005;
        mesh.current.scale.x += 0.0005;
      } else {
        mesh.current.scale.z = 1;
      }
    } else {
      if (mesh.current.scale.y > 1) {
        mesh.current.scale.y -= 0.00075;
        mesh.current.scale.x -= 0.00075;
      } else {
        mesh.current.scale.z = 0;
      }
    }
  });

  return (
    <mesh
      {...props}
      ref={mesh}
    >
      <planeBufferGeometry attach="geometry" args={[0.3, 0.3, 0]} />
      <meshStandardMaterial
        attach="material"
        color={"black"}
      />
    </mesh>
  );
}

export default function Cellgrid({ cellMap, setCellMap, isPlaying }) {
  // Now we can use the mouse click event to add cells
  const { mouse } = useThree();

  // This handleclick takes the mouse vector event from Three JS
  // and converts it to the simple grid coordinate integers
  const handleClick = (mouse) => {
    if (!isPlaying) {
      const y = Math.floor(((mouse.y - 1) / 2) * -25);
      const x = Math.floor(((mouse.x + 1) / 2) * 25);
      const newMap = toggleCell(y, x, cellMap);
      setCellMap(newMap);
    }
  };
  // This spread factor determines the space between cells on the canvas
  const spread = 0.3065;
  return (
    <>
      <group>
        <mesh onClick={(e) => handleClick(mouse)}>
          {/* This is a big invisible mesh behind the rest that I added since
        the click event needed something to click on when there aren't any living cells in an area. */}
          <planeBufferGeometry attach="geometry" args={[50, 50, 50]} />
        </mesh>
        {Object.values(cellMap).map((item) => (
          <Cell
            key={item.y * 100 + item.x}
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
