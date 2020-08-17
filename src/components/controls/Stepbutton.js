import React from "react";
import styled from "styled-components";
import generateCells from "../../generateCells.js";

const Button = styled.button`
  display: block;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  border: none;
  padding: .8rem .4rem;
  margin: none;
  :focus {
    border: 1px solid black;
    border-radius: 5px;
  }
  :hover {
    cursor: pointer;
  }
`;
export default function Stepbutton({
  isPlaying,
  generation,
  setGeneration,
  cellMap,
  setCellMap,
  speed,
  setSpeed,
}) {
  const handleClick = () => {
    if (!isPlaying && cellMap) {
      const newMap = generateCells(cellMap);
      setCellMap(newMap);
      setGeneration(generation + 1);
    } else {
      if (speed === 0) {
        setSpeed(5);
      } else if (speed === 5) {
        setSpeed(8);
      } else if (speed === 8) {
        setSpeed(9);
      } else {
        setSpeed(0);
      }
    }
  };
  return (
    <Button alt={isPlaying ? "Speed up generations.":"Step forward one generation."} aria-label={isPlaying ? "Speed up generations.":"Step forward one generation."}  onClick={() => handleClick()}>
      <svg
        width={"5vh"}
        height={"4vh"}
        viewBox="0 0 371 418"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M332.639 184.205L184.518 40.1982C166.769 22.9416 137 35.5185 137 60.2741V204V352.402C137 377.347 167.16 389.84 184.799 372.201L332.92 224.08C343.964 213.036 343.838 195.092 332.639 184.205Z"
          fill="#929292"
        />
        <path
          d="M30 30V388M137 204V352.402C137 377.347 167.16 389.84 184.799 372.201L332.92 224.08C343.964 213.036 343.838 195.092 332.639 184.205L184.518 40.1982C166.769 22.9416 137 35.5185 137 60.2741V204Z"
          stroke="#929292"
          stroke-width="59"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </Button>
  );
}
