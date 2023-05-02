/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import Backpack from "./Backpack.js";
import Dev from "./Dev.js";

const theBag = new Backpack("Dev", 69, "Grey", 56, 16, 4, true);

const theDev = new Dev("Javascript", "unmarried", 0, 20, true, "Chess");
const theGod = new Dev(
  "world creator",
  "only god knows",
  "all living and non-living beings",
  "infintie",
  "holiest",
  "he is the creator of game called world"
);

console.log(theDev.sub);
console.log(theBag.strapLength);

console.log(theDev.friends);

theDev.changeMarriedStatus("married");

console.log(theDev.marriedStatus);

theDev.toggleAge(10);
console.log(theDev.age);

console.log(theGod.friends);

theGod.toggleAge(0);
console.log(theGod.age);
