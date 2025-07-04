import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Java Full-Stack Developer",
          "Passionate Java Developer",
          "Effective Problem Solver",
          "Good at Maths",
          "Good at Dsa"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

export default Type