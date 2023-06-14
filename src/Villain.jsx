/* eslint-disable react/prop-types */
import { useRef } from "react";

export default function Villain(props) {
  const villainRef = useRef();

  return <div style={props.pos} className="game-object" ref={villainRef} />;
}
