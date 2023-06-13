export function moveObjects(villains) {
  return moveVillains(villains);
}

export function moveVillains(villains) {
  return villains.map((object) => {
    return {
      ...object,
      pos: {
        left: object.pos.left + .5,
        top: object.pos.top + 0,
      },
    };
  });
}

export function moveHero(hero, width) {
  if (isAtBorder(hero, width)) return {...hero, pos:{ top: hero.pos.top, left: hero.pos.left - 5}}
  return {...hero, pos:{ top: hero.pos.top + 0 , left: hero.pos.left + hero.speed}}
}

export function handleBoundary(villains, width){
  handleVillains(villains, width);
}

function handleVillains(villains, width){
  for (let villain of villains){
    if (isAtBorder(villain, width)){
      console.log("hit a boundary");
    }
  }
}


function isAtBorder(gameObject, width) {
  if (gameObject.speed){
    console.log(gameObject.pos.left);
  }
  
  return gameObject.pos.left > width || gameObject.pos.left < 0;
}