// Javascript Functions & Scope


// Function with no arguments
// Declare a function called bestTeacher that takes no arguments and logs to the console "{Your Teacher} is the best teacher in the world" to the console. ;)
let bestTeacher = () => {
  console.log("David is the best teacher in the world.")
};

bestTeacher();

// Function with one argument
// NYCDA needs a simple welcome program for registered students.
// Create a function called nycdaWelcome that will take in a student's name as a function argument and console log a string that looks like : "Welcome to NYCDA {Students Name}. Enjoy your stay"
let nycdaWelcome = (name) => {
  console.log(`Welcome to NYCDA, ${name}. Enjoy your stay.`);
};

nycdaWelcome("Kay");

// Function with multiple arguments
// Create a simple calculator function called simpleCalc that given two arguments will perform addition and return the result.
let simpleCalc = (a, b) => a + b;
console.log(simpleCalc(5, 2));

// Function with arguments and logic
// Declare a function called magicDoor that receives an input of 1, 2 or 3. Depending upon which virtual "door" was entered create logic that will tell user they've received a different "prize" in an alert based on their selection
// Door 1 will give the user a brand new car
// Door 2 will give the user a nycda t-shirt
// Door 3 will turn into a blackhole and teleport you to antarctica
let magicDoor = door => {
  if (door == 1) {
    console.log("You get a car!");
  } else if (door == 2) {
    console.log("You get a t-shirt!");
  } else if (door == 3) {
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
// Define a function greaterOfThree that takes three integers and returns the larger of the three.
let greaterOfThree = (integerOne, integerTwo, integerThree) => {
  let biggest = integerOne;
  if (integerOne > integerTwo && integerOne > integerThree) {
    biggest = biggest;
  } else {
    if (integerTwo > integerThree) {
      biggest = integerTwo;
    } else {
      biggest = integerThree;
    }
  }
  return biggest;
};

console.log(greaterOfThree(5,2,0));

// Function that modifies input
// Define a function lineThemUp that takes three integers as arguments and returns the integers as an array.
let lineThemUp = (integerOne, integerTwo, integerThree) => {
  let integers = [];
  integers.push(integerOne, integerTwo, integerThree);
  return integers;
};

console.log(lineThemUp(5,2,0));

// Function that modifies input
// Define a function called knighter that takes a name and returns it after being knighted.
// ex : Knighter("Andy") returns "Royal Knight Sir Andy"
let knighter = (name) => {
  return `Royal Knight Sir ${name}`;
};

console.log(knighter("Andy"));

// Function with Logic
// Define a function called royalizer that takes a gender and name as arguments, and returns a title based on the gender.
// ex : royalizer("male", "David") returns "His Majesty David" , for female it would be "Her Majesty X".
let royalizer = (gender, name) => {
  if (gender = "female") {
    return `Her Majesty ${name}`
  } else {
    return `His Majesty ${name}`
  }
};

console.log(royalizer("male", "David"));
console.log(royalizer("female", "Elizabeth"));
