const superheroes = require('superheroes'); // Loading superheroes module
superheroes.all; //=> ['3-D
console.log(superheroes.random()); //=> 'Spider-Ham'

//______________________________________________________________________________________________

var names = require('marvel-comics-characters'); // Loading marvel-comics-characters module
var allNames = names.all;
var randomName = names.random(); // random name
var threeRandomNames = names.random(3); // returns an array of 3 random names
console.log(threeRandomNames);  // Prints 3 random names in list format