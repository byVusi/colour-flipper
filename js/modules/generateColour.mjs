const characterArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

export function generateColour() {

  let colour = "#";
  let range = characterArray.length;
  let index;
  
  for (let i = 0; i < 6; i++) {
   index = Math.floor(Math.random() * range);
   colour += characterArray[index];
  }

  return colour;
}