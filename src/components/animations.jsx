import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
const AnimationPlayer = ({ link }) => {
  return (
    <Player
      autoplay
      loop
      src={link}
      style={{ height: "100px", width: "100px" }}
    ></Player>
  );
};

export default AnimationPlayer;
