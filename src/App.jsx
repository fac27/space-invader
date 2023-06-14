import "./styles/App.css";
import { useState, useEffect, useRef } from "react";
import Villain from "./Villain.jsx";
import {
  moveVillains,
  moveHero,
  handleBoundary,
  moveProjectiles,
} from "./gameloop.js";
import Hero from "./Hero";
import Projectile from "./Projectile";

function App() {
  const gameBoardRef = useRef(null);

  const [villains, setVillains] = useState({
    villainArray: [
      { pos: { left: 500, top: 100 } },
      { pos: { left: 400, top: 100 } },
    ],
    villainDirection: "left",
  });

  const [hero, setHero] = useState({
    pos: {
      top: 0,
      left: 0,
    },
    speedX: 0,
    speedY: 0,
  });
  const [projectiles, setProjectiles] = useState([]);

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
      setProjectiles((prevProjectiles) => {
        const newProjectiles = moveProjectiles(prevProjectiles);
        return newProjectiles;
      });
    }, 1000 / 60);

    return () => clearInterval(gameLoop);
  }, [villains, projectiles]);

  useEffect(() => {
    //sets the Heroes initial position
    const heroSize = 100;
    setHero({
      pos: {
        top: gameBoardRef.current.offsetWidth - heroSize,
        left: gameBoardRef.current.offsetWidth / 2,
      },
      speedX: 0,
      speedY: 0,
    });
  }, []);

  useEffect(() => {
    const handleKeyPress = (event) => {
      const keyCodeActions = {
        32: () =>
          setProjectiles((prevProjectiles) => [
            ...prevProjectiles,
            { pos: hero.pos },
          ]),
        37: () => setHero((prevHero) => ({ ...prevHero, speedX: -5 })),
        38: () => setHero((prevHero) => ({ ...prevHero, speedY: -5 })),
        39: () => setHero((prevHero) => ({ ...prevHero, speedX: 5 })),
        40: () => setHero((prevHero) => ({ ...prevHero, speedY: 5 })),
      };

      const action = keyCodeActions[event.keyCode];

      if (action) {
        action();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    // Cleanup function
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [hero.pos]);

  return (
    <div className="game-board" ref={gameBoardRef}>
      {villains.villainArray.map((villain, index) => {
        return <Villain key={index} index={index} pos={villain.pos} />;
      })}
      <Hero hero={hero} setHero={setHero} />
      {projectiles.map((projectile, index) => {
        return (
          <Projectile
            className="game-object"
            pos={projectile.pos}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default App;
