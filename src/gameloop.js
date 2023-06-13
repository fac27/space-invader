export function moveVillains(villains) {
  return villains.map((object) => {
    return {
      ...object,
      pos: {
        left: object.direction ? object.pos.left + 0.5 : object.pos.left - 0.5,
        top: object.direction ? object.pos.top + 0 : object.pos.top - 0,
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
    }
  }
}


function checkBoardBoundary(gameObject, width) {
  return gameObject.pos.left > width || gameObject.pos.left < 0;
}