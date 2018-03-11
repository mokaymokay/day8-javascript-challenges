// Javascript Functions & Scope


// Function with no arguments
// Declare a function called bestTeacher that takes no arguments and logs to the
// console "{Your Teacher} is the best teacher in the world" to the console. ;)
let bestTeacher = () => {
  console.log("David is the best teacher in the world.")
};

bestTeacher();

// Function with one argument
// NYCDA needs a simple welcome program for registered students.
// Create a function called nycdaWelcome that will take in a student's name as a
// function argument and console log a string that looks like : "Welcome to NYCDA
// {Students Name}. Enjoy your stay"
let nycdaWelcome = name => {
  console.log(`Welcome to NYCDA, ${name}. Enjoy your stay.`);
};

nycdaWelcome("Kay");

// Function with multiple arguments
// Create a simple calculator function called simpleCalc that given two arguments
// will perform addition and return the result.
let simpleCalc = (a, b) => a + b;
console.log(simpleCalc(5, 2));

// Function with arguments and logic
// Declare a function called magicDoor that receives an input of 1, 2 or 3.
// Depending upon which virtual "door" was entered create logic that will tell
// user they've received a different "prize" in an alert based on their selection
// Door 1 will give the user a brand new car
// Door 2 will give the user a nycda t-shirt
// Door 3 will turn into a blackhole and teleport you to antarctica
let magicDoor = doorNum => {
  if (doorNum === 1) {
    console.log("You get a car!");
  } else if (doorNum === 2) {
    console.log("You get a t-shirt!");
  } else if (doorNum === 3) {
    console.log("You have entered a blackhole. You will be teleported to Antaractica.");
  } else {
    console.log("Sorry, you get nothing.");
  }
}

magicDoor(1);
magicDoor(2);
magicDoor(3);
magicDoor(4);

// Function that modifies input
// Define a function greaterOfThree that takes three integers and returns the larger
// of the three.
let greaterOfThree = (integerOne, integerTwo, integerThree) => {
  if (integerOne > integerTwo && integerOne > integerThree) {
    return integerOne;
  } else if (integerTwo > integerThree) {
    return integerTwo;
  } else {
    return integerThree;
  }
};

console.log(greaterOfThree(5,2,0));

// Function that modifies input
// Define a function lineThemUp that takes three integers as arguments and returns
// the integers as an array.
let lineThemUp = (integerOne, integerTwo, integerThree) => {
  let integers = [];
  integers.push(integerOne, integerTwo, integerThree);
  return integers;
};

console.log(lineThemUp(5,2,0));

// Function that modifies input
// Define a function called knighter that takes a name and returns it after being
// knighted.
// ex : Knighter("Andy") returns "Royal Knight Sir Andy"
let knighter = name => {
  return `Royal Knight Sir ${name}`;
};

console.log(knighter("Andy"));

// Function with Logic
// Define a function called royalizer that takes a gender and name as arguments,
// and returns a title based on the gender.
// ex : royalizer("male", "David") returns "His Majesty David" , for female it
// would be "Her Majesty X".
let royalizer = (gender, name) => {
  return gender == "female" ? `Her Majesty ${name}` : `His Majesty ${name}`;
};

console.log(royalizer("male", "David"));
console.log(royalizer("female", "Elizabeth"));

// JavaScript Workshop

// 1 - Calculator Function
// Make a function that takes in a word, and two numbers. The supported words
// would be “add”, “subtract”, “multiply” & “divide”. This function should perform
// the appropriate calculator action on the numbers and return the answer. Your
// calculator function should work for all of the following examples.

let calculator = (operation, a, b) => {
  if (typeof a === "number" && typeof b === "number") {
    switch (operation) {
      case "add"      : return a + b;
      case "subtract" : return a - b;
      case "divide"   : return a / b;
      case "multiply" : return a * b;
      default         : return "please enter a valid operation: add, subtract, multiply, or divide."
    }
  } else {
    return "please make sure your numbers are valid."
  }
};

var answer = calculator("add", 4, 2);
console.log(answer) // 6
answer = calculator("subtract", 4, 2);
console.log(answer) // 2
answer = calculator("divide", 4, 2);
console.log(answer) // 2
answer = calculator("multiply", 4, 2);
console.log(answer) // 8

// 2 - Kardashian Quiz
// Let’s build a simple quiz program, this is the perfect use of a function to
// take care of the repetitive task of reading from a collection of questions.
// First off you should build a function that takes in a question and an answer
// then returns 1 or 0 depending on if the person got it right.
// You can make use of the prompt function in JavaScript to get user input.
// Here’s some starter code:

alert("Welcome to the Kardashian Quiz to find out which Kardashian you are!");

const quiz = {
  "Was Kim born in 1985?" : "yes",
  "Will Rob get out of jail?" : "no",
  "Does North seem happy?" : "no",
  "Did Kanye release 'Heartless' in 2008?" : "yes"
};

var point = 0;

let ask = (question, answer) => {
  for (let question in quiz) {
    let answer = prompt(question, "type 'yes' or 'no'");
    if (answer === quiz[question]) point++;
  }

  switch (point) {
    case 0 : return `You scored ${point} points!\nYou are Rob!`;
    case 1 : return `You scored ${point} point!\nYou are Kylie!`;
    case 2 : return `You scored ${point} points!\nYou are Kim!`;
    case 3 : return `You scored ${point} points!\nYou are Kanye!`;
    default: return `You scored ${point} points!\nYou are Kendall!`;
  }
};

ask();


// After making your function:
// - create an array of questions, and an array of answers
// - use a loop and those arrays to ask the user questions.
// - keep a running total of the user’s score.
// - console.log the user’s score after the loop.

// Bonus:
// If you got through The Kardashian quiz with your sanity, try to make your quiz
// more complex. Maybe make a version that tells you which Kardashian you are.
