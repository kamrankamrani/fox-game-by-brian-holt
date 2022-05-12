import gameState, { handleUserAction } from "./gameState";
import { TICK_RATE } from "./constansts";
import initButtons from "./buttons";

async function init() {
  console.log("starting game...");
  initButtons(handleUserAction);
  let nextTimeToTick = Date.now();

  function nextAnimationFrame() {
    let now = Date.now();
    if (nextTimeToTick <= now) {
      nextTimeToTick = now + TICK_RATE;
      gameState.tick();
    }
    requestAnimationFrame(nextAnimationFrame);
  }

  requestAnimationFrame(nextAnimationFrame);
}

init();
