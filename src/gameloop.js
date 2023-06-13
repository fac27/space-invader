export function moveObjects(villains) {
  return moveVillains(villains);
}

function moveVillains(villains) {
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

export function handleBoundary(villains, width){
  handleVillains(villains, width);
}

function handleVillains(villains, width){
  for (let villain of villains){
    const bool = checkBoardBoundary(villain, width)
    if (bool){
      console.log("hit a boundary");
    }
  }
}


function checkBoardBoundary(gameObject, width) {
  return gameObject.pos.left > width || gameObject.pos.left < 0;
}