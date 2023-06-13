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
export function checkBoardBoundary(gameObject) {
  // check left/right/top/bottom
  // return bool
}
