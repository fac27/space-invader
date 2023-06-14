export function moveVillains(villains) {
  return villains.villainArray.map((object) => {
    return {
      ...object,
      pos: {
        left: villains.direction === 'left' ? object.pos.left + 0.5 : object.pos.left - 0.5,
        top: object.pos.top,
      },
    };
  });
}

export function moveHero(hero, width) {
  const object = isAtBorder(hero, width)
  if (object.bool){
    const newPosition = parseInt(`${object.left ? hero.pos.left + 5 : hero.pos.left - 5}`);
    return { ...hero, pos: { top: hero.pos.top, left: newPosition } };}
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
      villains.direction = changeDirection(villains.direction);
      villain.pos.top = width
        ? console.log("I'm dead")
        : (villain.pos.top += 10);
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
