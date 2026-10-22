/* JAVASCRIPT MAD LIBS — FULL-BLOCK STARTER
   Write your OWN prompt questions and story. This file deliberately does not contain a completed answer.
   Keep your JavaScript here, not inside index.html.
*/

// PART 1 — INPUTS AND VARIABLES
// TODO: Ask for AT LEAST 6 words/text responses and 2 numbers with prompt().
// TODO: Save all responses in meaningfully named variables using let or const.
// Hint: let animal = prompt("Enter an animal:");
// Hint: let age = Number(prompt("Enter an age:"));

// PART 2 — DATA TYPES
// TODO: Declare a real Boolean: const isRidiculous = true; (true is NOT "true").
// TODO: Log typeof for a string, a number and a Boolean with labels.
// Hint: console.log("Animal type:", typeof animal);

// PART 3 — VARIABLE CHANGES AND CONCATENATION
// TODO: Reassign one let variable after its first value (use the updated value).
// TODO: Combine a quoted string and a variable with +; show the result.
// Hint: let message = "Meet " + animal;

// PART 4 — MATH OPERATORS
// TODO: Use ALL six operators with numeric values: +  -  *  /  %  **
// TODO: Store each result in a clearly named variable.
// TODO: Use at least TWO math results in your final story.
// NOTE: prompt() returns text; use Number(...) before doing math. Avoid division by zero.

// PART 5 — STORY (TEMPLATE LITERAL)
// TODO: Build one original story with BACKTICKS and ${variableName}.
// TODO: Include ALL eight prompt responses, plus at least two math results.
// Hint (not a whole story): let story = `Once, ${animal} arrived...`;

// PART 6 — DISPLAY ON THE WEBPAGE
// TODO: Uncomment and complete the line below once your story variable exists.

// FINAL: Add at least three meaningful comments describing your code.
// TEST: Try TWO sets of answers and check the browser console for errors.

let name1 = prompt("Give a name!");
let country1 = prompt ("Give me a country!");
let adj1 = prompt("Give me an adjective!");
let stolenItem = prompt("Give me an item!");
let num1 = Number(prompt("Give me a number! (DONT SAY 67)"));
let time = prompt("Give a time of day");

let name2 = prompt ("Give me another name!")
let years1 = Number(prompt("Give me an amount of year!"))
let hidingspot = prompt("Give me a super random hiding spot!")
let transportation = prompt("Give me a fun type of transportation!")
let money =Number(prompt("Give me an amount of money!"))

// story starts
let myStory = `${name1} was a CIA agent who went to ${country1} to steal a ${adj1} ${stolenItem}. He stole ${num1**2} ${stolenItem}s at ${time}. ${name1}'s accomplice was ${name2} whom he had known for ${years1 * 10} years. Eventually, the cops arrived and they had to hide in ${hidingspot}. After the cops left, they escaped on a ${transportation}, heading back to base. They turn in the ${stolenItem} to the government in exchange for money and they split, so both of them got $${money/2}. They celebrated at a candy store and was left with $${money%2}`;

// story ends

document.getElementById("madlib-output").innerHTML = myStory;