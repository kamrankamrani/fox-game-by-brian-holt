import { ICONS } from "./constansts";

const toggleHighlighted = (icon, show) => document.querySelector(`.${ICONS[icon]}-icon`).classList.toggle("highlighted", show);

export default function initButtons(handleUserAction) {
  let selectedIcon = 0;
  let len = ICONS.length;

  function buttonClick({ target }) {
    if (target.classList.contains("left-btn")) {
      toggleHighlighted(selectedIcon, false);
      selectedIcon = (selectedIcon - 1 + len) % len;
      toggleHighlighted(selectedIcon, true);
    }
    else if (target.classList.contains("right-btn")) {
      toggleHighlighted(selectedIcon, false);
      selectedIcon = (selectedIcon + 1) % len;
      toggleHighlighted(selectedIcon, true);
    }
    else if (target.classList.contains("middle-btn")) {
      handleUserAction(ICONS[selectedIcon]);
    }
  }

  document.querySelector('.buttons').addEventListener('click', buttonClick);
}
