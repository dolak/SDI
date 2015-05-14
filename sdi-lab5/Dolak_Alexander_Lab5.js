/*
Alexander Dolak
Lab 5
5/14/15
 */

//These are asking the user first what they want to do. Then what 2 numbers they would like to use.
var choice = prompt("Would you like addition, subtraction, multiplication, or division?", "+, -, *, /");;
var numOne = parseFloat(prompt("Please enter a number", "Enter your first number here:"));
var numTwo = parseFloat(prompt("Please enter a number", "Enter your second number here:"));;

//This function is using the user's numbers and adding them together. Then returns the solution.
function addition(){
    var solution;

    solution = (numOne + numTwo);

    return(solution);
}

//This function is using the user's numbers and subtracting them from each other. Then returns the solution.
function subtraction(){
    var solution;

    solution = (numOne - numTwo);

    return(solution);
}

//This function is using the user's numbers and multiplying them to each other. Then returns the solution.
function multiplication(){
    var solution;

    solution = (numOne * numTwo);

    return(solution);
}

//This function is using the user's numbers and dividing them. Then returns the solution.
function division(){
    var solution;

    if(numOne === 0 || numTwo === 0){
        solution = "You have opened up a worm hole somewhere for trying to divide nothing.";
    } else {
        solution = (numOne / numTwo);
    }
    return(solution);
}

//These variables are catching the return values of the functions.
var add     = addition();
var sub     = subtraction();
var multi   = multiplication();
var divi    = division();

//This if statement takes what function the user wanted, runs it and prints out the results
if(choice === "+"){
    addition();
    console.log(add);

} else if(choice === "-") {
    subtraction();
    console.log(sub);

} else if(choice === "*"){
    multiplication();
    console.log(multi);

} else if(choice === "/") {
    division();
    console.log(divi);

//this is if they decide to mess with the choice and ask for something the program does not support
} else {
    console.log("I am sorry I don't understand. Please re-run the program to try again.");
}