/* eslint-disable react/prop-types */
import { useRef } from "react";

export default function Villain(props) {
  const objectId = props.index;
  const object = props.villains.villainArray[objectId];

  const villainRef = useRef();

  return <div style={object.pos} className="game-object" ref={villainRef} />;
}
