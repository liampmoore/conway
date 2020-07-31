import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: block;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  border: none;
  padding: none;
  margin: none;
  :focus {
  }
`;

export default function Clearbutton({
  setIsPlaying,
  setCellMap,
  setGeneration,
  setSpeed,
}) {
  const handleClick = () => {
    setIsPlaying(false);
    setCellMap({});
    setGeneration(0);
    setSpeed(0);
  };
  return (
    <Button onClick={() => handleClick()}>
      <svg
        width={"5vh"}
        height={"5vh"}
        viewBox={`0 0 324 370`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M247 30H62C44.3269 30 30 44.3269 30 62V299C30 316.673 44.3269 331 62 331H247C264.673 331 279 316.673 279 299V62C279 44.3269 264.673 30 247 30Z"
          fill="#2C2C2C"
          stroke="#2C2C2C"
          stroke-width="59"
        />
      </svg>
    </Button>
  );
}