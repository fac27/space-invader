import "./styles/App.css";
import { useState, useEffect } from "react";

import Villain  from "./Villain.jsx";
import { moveObjects, checkBoardBoundary } from "./gameloop.js";

function App() {
  const [villains, setVillains] = useState([
    { pos: { left: 20, top: 20 } },
    { pos: { left: 50, top: 20 } },
  ]);

  useEffect(() => {
    const gameLoop = setInterval(() => {
      moveObjects(setVillains);
      // for objects check collision
      // checkBoardBoundary();
    }, 1000/60);

    return () => clearInterval(gameLoop);
  }, []);

  return (
    <div className="game-board">
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
