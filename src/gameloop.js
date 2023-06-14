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
  if (object.bool) {
    const newPosition = parseInt(
      `${object.left ? hero.pos.left + 5 : hero.pos.left - 5}`
    );
    return { ...hero, pos: { top: hero.pos.top, left: newPosition } };
  }
  return {
    ...hero,
    pos: { top: hero.pos.top + 0, left: hero.pos.left + hero.speed },
  };
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
  const size = 48;

  const borderObj = {
    bool: gameObject.pos.left > width - size || gameObject.pos.left <= 0,
    right: gameObject.pos.left > width - size,
    left: gameObject.pos.left <= 0,
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
