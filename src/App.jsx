import "./styles/App.css";
import { useState, useEffect } from "react";

import GameObject from "./GameObject.jsx";

function App() {
  const [gameObject, setGameObject] = useState([
    { pos: { left: 20, top: 20 } },
    { pos: { left: 50, top: 20 } },
  ]);

  useEffect(() => {
    const gameLoop = setInterval(() => {
      setGameObject((prevState) =>
        prevState.map((object, index) => {
          return {
            ...object,
            pos: {
              left: object.pos.left + 5,
              top: object.pos.top + 5,
            },
          };
        })
      );
    }, 20);

    return () => clearInterval(gameLoop);
  }, []);

  return (
    <div className="game-board">
      {gameObject.map((object, index) => {
        return (
          <GameObject
            className="game-object"
            key={index}
            index={index}
            gameObject={gameObject}
            setGameObject={setGameObject}
          />
        );
      })}
    </div>
  );
}

export default App;
