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

export function handleBoundary(villains, width){
  handleVillains(villains, width);
}

function handleVillains(villains, width){
  for (let villain of villains){
    const bool = checkBoardBoundary(villain, width)
    if (bool){
      villain.direction = !villain.direction;
      villain.pos.top = width ? console.log("I'm dead") : villain.pos.top += 10;
    }
  }
}


function checkBoardBoundary(gameObject, width) {
  return gameObject.pos.left > width || gameObject.pos.left < 0;
}