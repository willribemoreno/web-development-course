import generateName from "sillyname";
import superheroes from "superheroes";

// var generateName = require("sillyname");
var sillyName = generateName();
var superHeroName = superheroes.random();

console.log(`My name is ${sillyName}.`);
console.log(`I'm ${superHeroName}!`);

