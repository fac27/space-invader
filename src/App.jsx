import "./styles/App.css";
import { useState } from "react";

import GameObject from "./GameObject.jsx";

function App() {
  const [gameObject, setGameObject] = useState([
    { pos: { left: 20, top: 20 } },
    { pos: { left: 50, top: 20 } },
  ]);

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
