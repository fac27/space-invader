/* eslint-disable react/prop-types */
import { useRef } from "react";
import "./styles/Villain.css";

export default function Villain(props) {
  const villainRef = useRef();

  return (
    <div style={props.pos} className="game-object villain" ref={villainRef} />
  );
}
