/* eslint-disable react/prop-types */

export default function Villain(props) {
  const objectId = props.index;
  const object = props.villains[objectId];
  console.log(object);

  const stylesObj = {
    top: object.pos.top,
    left: object.pos.left,
  };

  return <div style={stylesObj} className="game-object" />;
}
