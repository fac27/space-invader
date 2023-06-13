

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

export function handleBoundary(object){
  // handleHeroes(heroes);
  handleVillains(object);
  // handleProjectiles(projectiles);
}

function handleVillains(object){
  for (let villain of object.villains){
    const bool = checkBoardBoundary(villain, object.ref)
    if (bool){
      console.log("hit a boundary");
    }

  }
}

function checkBoardBoundary(gameObject, ref) {
  //helper function, returns bool
  console.log(gameObject.pos);
  //const boundaries = 350;
  return gameObject.pos.left > 350;
}