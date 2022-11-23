import { button } from "./modules/getElements.mjs";
import { insertColour } from "./modules/insertColour.mjs";
import { generateColour } from "./modules/generateColour.mjs";

button.addEventListener("click", () => {
  insertColour(generateColour());
});