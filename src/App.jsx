import "./styles/App.css";
import { useState, useEffect, useRef } from "react";
import Villain from "./Villain.jsx";
import { moveVillains, moveHero, handleBoundary } from "./gameloop.js";
import Hero from "./Hero";

function App() {
  const gameBoardRef = useRef(null);

  const [villains, setVillains] = useState({
    villainArray: [
      { pos: { left: 20, top: 350 }, direction: true },
      { pos: { left: 50, top: 350 }, direction: true },
    ],
    villainDirection: "left",
  });
  const [hero, setHero] = useState({
    pos: {
      top: 0,
      left: 0,
    },
    speed: 0,
  });

  useEffect(() => {
    const gameLoop = setInterval(() => {
      setVillains((prevVillains) => {
        const newVillains = moveVillains(prevVillains);
        handleBoundary(newVillains, gameBoardRef.current.offsetWidth);
        return newVillains;
      });
      setHero((prevHero) => {
        const newHero = moveHero(prevHero, gameBoardRef.current.offsetWidth);
        return newHero;
      });
    }, 1000 / 60);

    return () => clearInterval(gameLoop);
  }, []);

  useEffect(() => {
    //sets the Heroes initial position
    const heroSize = 100;
    setHero({
      pos: {
        top: gameBoardRef.current.offsetWidth - heroSize,
        left: gameBoardRef.current.offsetWidth / 2,
      },
      speed: 0,
    });
  }, []);

  useEffect(() => {
    const handleKeyPress = (event) => {
      const keyCodeActions = {
        37: () => setHero((prevHero) => ({ ...prevHero, speed: -5 })),
        39: () => setHero((prevHero) => ({ ...prevHero, speed: 5 })),
      };

      const action = keyCodeActions[event.keyCode];

      if (action) {
        action();
      }
    };

    const handleKeyUp = (event) => {
      const keyCodeActions = {
        //forgot to set speed in this function and spent an hour trying to fix it
        37: () => setHero((prevHero) => ({ ...prevHero, speed: 0 })),
        39: () => setHero((prevHero) => ({ ...prevHero, speed: 0 })),
      };

      const action = keyCodeActions[event.keyCode];

      if (action) {
        action();
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    document.addEventListener("keyup", handleKeyUp);

    // Cleanup function
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div className="game-board" ref={gameBoardRef}>
      {villains.villainArray.map((object, index) => {
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
      <Hero hero={hero} setHero={setHero} />
    </div>
  );
}

export default App;
