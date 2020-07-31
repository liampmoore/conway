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
    outline: none;
  }
  :hover {
    cursor: pointer;
  }
`;
function Playbutton({ isPlaying, setIsPlaying }) {
  return (
    <Button onClick={() => setIsPlaying(!isPlaying)}>
      {isPlaying ? (
        <svg
          width={"5vh"}
          height="5vh"
          viewBox="0 0 324 370"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 323V30M281 30V323"
            stroke="#FFAAFF"
            strokeWidth="59"
            strokeLinecap="round"
            strokeLinejoin="bevel"
          />
        </svg>
      ) : (
        <svg
          width={"5vh"}
          height={"5vh"}
          viewBox={`0 0 324 370`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M308.535 157.238L42.9219 5.02399C24.2553 -5.67315 1 7.8033 1 29.3177V340.595C1 362.349 24.7225 375.794 43.3856 364.617L308.999 205.554C327.355 194.561 327.099 167.876 308.535 157.238Z"
            fill="#70FFAF"
            stroke="#70FFAF"
          />
        </svg>
      )}
    </Button>
  );
}

export default Playbutton;
