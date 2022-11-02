const superheroes = require('superheroes'); // Loading superheroes module
superheroes.all; //=> ['3-D
console.log("One of mine Superhero is: " + superheroes.random()); //=> 'Spider-Ham'

//______________________________________________________________________________________________

var names = require('marvel-comics-characters'); // Loading marvel-comics-characters module
var allNames = names.all;
var randomName = names.random(); // random name
var threeRandomNames = names.random(3); // returns an array of 3 random names
// console.log("Here's the list of all the Marvel Comics character: \n"+ allNames);  
console.log("\nRandom pick-up amongst the ones: "+ randomName);  
console.log("\nThe Random Trio: "+ threeRandomNames);  // Prints 3 random names in list format


//______________________________________________________________________________________________

const supervillians = require('supervillains'); // Loading supervillians module
supervillians.all;
// console.log(supervillians.random()); //=> 'Agent Smith'
console.log("\nThe Super Villian I don't wanna spit upon: " + supervillians.random()); //=> 'Agent Smith'