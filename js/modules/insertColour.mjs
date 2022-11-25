import { colourName } from "./getElements.mjs";
import { colour } from "./colour.mjs";

export function insertColour(hexadecimal) {
  if (colour.get(hexadecimal) === undefined) {
    colourName.innerHTML = hexadecimal;
  } else {
    colourName.innerHTML = `${colour.get(hexadecimal)}`;
  }

  colourName.style.color = hexadecimal;
  document.body.style.backgroundColor = hexadecimal;
}
