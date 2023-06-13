import "./styles/App.css";
import { useState, useEffect, useRef } from "react";
import Villain from "./Villain.jsx";
import { moveObjects, handleBoundary } from "./gameloop.js";

function App() {
  const [villains, setVillains] = useState([
    { pos: { left: 20, top: 20 } },
    { pos: { left: 50, top: 20 } },
  ]);

  const gameBoardRef = useRef(null);

  useEffect(() => {
    const gameLoop = setInterval(() => {
      setVillains((prevVillains) => {
        const newVillains = moveObjects(prevVillains);
        handleBoundary(newVillains);
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
          />
        );
      })}
    </div>
  );
}

export default App;
