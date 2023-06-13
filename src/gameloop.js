// MOVING THINGS

export function moveObjects(setVillains) {
  moveVillains(setVillains);
}

function moveVillains(setVillains) {
  setVillains((prevState) =>
  prevState.map((object) => {
    return {
      ...object,
      pos: {
        left: object.pos.left + .5,
        top: object.pos.top + 0,
      },
    };
  })
  );
}

// BOUNCING THINGS

export function handleBoundary(array){
  // handleHeroes(heroes);
  handleVillains(array);
  // handleProjectiles(projectiles);
}

function handleVillains(array){
  console.log(array);
  for (let villain of array){
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