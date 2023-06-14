import "./styles/Hero.css";

export default function Hero(props) {
  return (
    <span
      className="hero"
      style={{ top: props.hero.pos.top, left: props.hero.pos.left }}
    >
      🐶
    </span>
  );
}
