import { getVmin } from "./getVmin.js";

const objectSize = getVmin();

export function moveVillains(villains) {
  return {
    villainArray: villains.villainArray.map((object) => {
      return {
        ...object,
        pos: {
          left:
            villains.villainDirection === "left"
              ? object.pos.left + 0.5
              : object.pos.left - 0.5,
          top: object.pos.top,
        },
      };
    }),
    villainDirection: villains.villainDirection,
  };
}

export function moveHero(hero, width) {
  const object = isAtBorder(hero, width);
  if (object.left || object.right) {
    const newPosition = parseInt(
      `${object.left ? hero.pos.left + 2 : hero.pos.left - 2}`
    );
    return { ...hero, pos: { top: hero.pos.top, left: newPosition } };
  }
  if (object.top || object.bottom) {
    const newPosition = parseInt(
      `${object.top ? hero.pos.top + objectSize : hero.pos.top - objectSize}`
    );
    return { ...hero, pos: { top: newPosition, left: hero.pos.left } };
  }
  return {
    ...hero,
    pos: { top: hero.pos.top + hero.speedY, left: hero.pos.left + hero.speedX },
  };
}

export function moveProjectiles(projectiles) {
  const newProjectiles = projectiles.filter(
    (projectile) => projectile.pos.top > 0
  );
  return newProjectiles.map((projectile) => {
    return {
      ...projectile,
      pos: { top: projectile.pos.top - 10, left: projectile.pos.left },
    };
  });
}

export function handleBoundary(villains, width) {
  handleVillains(villains, width);
}

function handleVillains(villains, width) {
  for (let villain of villains.villainArray) {
    if (isAtBorder(villain, width).bool) {
      // turn in the opposite direction when they hit a border
      villains.villainDirection = changeDirection(villains.villainDirection);
      // advance one line at the end of a loop
      moveForward(villains.villainArray, width);
    }
  }
}

function isAtBorder(gameObject, width) {
  const borderObj = {
    bool: gameObject.pos.left > width - objectSize || gameObject.pos.left <= 0,
    right: gameObject.pos.left > width - objectSize,
    left: gameObject.pos.left <= 0,
    top: gameObject.pos.top <= 0,
    bottom: gameObject.pos.top > width - objectSize,
  };

  return borderObj;
}

function changeDirection(value) {
  switch (value) {
    case "right":
      return "left";
    case "left":
      return "right";
  }
}

function moveForward(allVillains, width) {
  allVillains.forEach((villain) => {
    villain.pos.top === width
      ? console.log("I'M DEAD")
      : (villain.pos.top = villain.pos.top + 10);
  });
}
