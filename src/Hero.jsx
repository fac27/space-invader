import { useRef } from "react";

export default function Hero(props) {
  return (
    <span
      className="game-object"
      style={{ top: props.hero.pos.top, left: props.hero.pos.left }}
    >
      🐶
    </span>
  );
}
