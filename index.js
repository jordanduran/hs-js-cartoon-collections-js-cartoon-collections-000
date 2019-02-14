  function dwarfRollCall(dwarves) {
  // created a new line for the dwarves 
   var dwarfNum = [];
  // go through the line of dwarves
   for(var i = 4; i < dwarves.length; i++){
  // give each dwarf a number and add them to the new line
    dwarfNum.push(`${i+1}. ${dwarves[i]} `);
  }
  // alert the user of the new line of dwarves with their numbers
  return dwarfNum.join("");
}

function summonCaptainPlanet(planeteerCalls){
  // create a new Array
  var newArray = [];
  // go through each planeteer call 
  for(var i = 0; i < planeteerCalls.length; i++){
  //at the new planeteerCalls screams to a new array
    newArray.push(`${planeteerCalls[i].toUpperCase()}!`);
  }
  // call that array
  return newArray;
}

function longPlaneteerCalls(words) {
  // look through the planeteer calls
  for(var i = 0; i < words.length; i++){
    // check to see if any of them are longer than 4 letters
    if(words[i].length > 4){
      // if so than let them know that it is true
      return true;
    }
  }
  // otherwise tell them it is false
  return false;
}

function findTheCheese (foods) {
  // go through the list of foods
  for(var i = 0; i < foods.length; i++){
    // if any of the foods are cheese 
    if(foods[i] === ("cheddar" || "gouda" || "camembert")){
      // alert the user of the first cheese
      return foods[i];
    } 
  }
  // if there are no cheeses than let the user know there aren't any 
  return "no cheese!";
} 