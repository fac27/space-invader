export function moveVillains(villains) {
  return villains.map((object) => {
    return {
      ...object,
      pos: {
        left: object.direction ? object.pos.left + 0.5 : object.pos.left - 0.5,
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

export function handleBoundary(villains, width){
  handleVillains(villains, width);
}

function handleVillains(villains, width){
  for (let villain of villains){
    if (isAtBorder(villain, width).bool) {
      villain.direction = !villain.direction; //setVillainRight !!!
      villain.pos.top = width
        ? console.log("I'm dead")
        : (villain.pos.top += 10);
    }
  }
}


function isAtBorder(gameObject, width) {
  if (gameObject.speed){
    //console.log(gameObject.pos.left);
  }

  const size = 48;

  const borderObj = {
    bool: gameObject.pos.left > width - size || gameObject.pos.left <= 0,
    right: gameObject.pos.left > width - size,
    left: gameObject.pos.left <= 0
  }
  
  return borderObj;
}
