import "./styles/App.css";
import { useState, useEffect, useRef } from "react";
import Villain from "./Villain.jsx";
import { moveVillains, handleBoundary } from "./gameloop.js";

function App() {
  const [villains, setVillains] = useState([
    { pos: { left: 20, top: 350 }, direction: true },
    { pos: { left: 50, top: 350 }, direction: true },
  ]);

  const gameBoardRef = useRef(null);
  const [villainRight, setVillainRight] = useState(true);

  useEffect(() => {
    const gameLoop = setInterval(() => {
      setVillains((prevVillains) => {
        const newVillains = moveVillains(prevVillains);
        handleBoundary(newVillains, gameBoardRef.current.offsetWidth);
        return newVillains;
      });
    }, 1000 / 60);

    return () => clearInterval(gameLoop);
  }, []);

  return (
    <div className="game-board" ref={gameBoardRef}>
      {villains.map((object, index) => {
        return (
          <Villain
            className="game-object"
            key={index}
            index={index}
            villains={villains}
            setVillains={setVillains}
            villainRight={villainRight}
            setVillainRight={setVillainRight}
          />
        );
      })}
    </div>
  );
}

export default App;
