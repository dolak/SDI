/*
Alexander Dolak
Scalable Data Structures
5/9/15
 */

alert("JavaScript Works");
var firstName = "Alex";
var newName = "";
var lastName = "";

//prompt for user input
newName = prompt("Please enter your name: ");

if(newName === firstName) {
    //this will run if it is true
    lastName = prompt("Please enter your last name: ");

    if (lastName === "Dolak") {
        console.log("Hello " + firstName + " " + lastName + ".");

    } else {
        console.log("You are only half a person!");
    }


} else if (newName === "Code0") {

    console.log("Welcome to the world of 9r39");

} else {
    console.log("You have no authority on this machine!");

}

var myNumber = 0;
var secondNumber = 5;
//when adding the parseInt you are converting the string they type to a number.
myNumber = parseInt(prompt("Enter the number 5."));

//doing the === with different datatypes will make it not match == will compare the characters and not the datatypes
if (myNumber === secondNumber) {
    console.log("They matched")
} else {
    console.log("They did not match")

}