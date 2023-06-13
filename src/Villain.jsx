/* eslint-disable react/prop-types */

export default function Villain(props) {
  const objectId = props.index;
  const object = props.villains[objectId];
  console.log(object);
  return <div style={object.pos} className="game-object" />;
}
