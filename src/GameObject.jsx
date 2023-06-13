/* eslint-disable react/prop-types */

export default function GameObject(props) {
  const objectId = props.index;
  const object = props.gameObject[objectId];

  const stylesObj = {
    top: object.pos.top,
    left: object.pos.left,
  };

  return <div style={stylesObj} className="game-object" />;
}
