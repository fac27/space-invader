/* eslint-disable react/prop-types */

export default function Projectile(props) {
  const objectId = props.index;
  const object = props.projectiles[objectId];

  return <div style={object.pos} className="game-object" />;
}
