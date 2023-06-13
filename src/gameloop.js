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

export function handleBoundary(villains){
  handleVillains(villains);
}

function handleVillains(villains){
  for (let villain of villains){
    const bool = checkBoardBoundary(villain)
    if (bool){
      console.log("hit a boundary");
    }
  }
}


function checkBoardBoundary(gameObject) {
  //helper function, returns bool
  const boundaries = 350;
  return gameObject.pos.left > boundaries;
}