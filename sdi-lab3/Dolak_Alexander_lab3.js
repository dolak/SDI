alert("JavaScript works!");

/*
 Alexander Dolak
 Scalable Data Structures
 5/9/15
 */

var dialog  =   "It\'s ";
var number  =   0;
var bool    =   true;
var suit_p   =  "hearts, diamonds, clubs, spades.";



console.log(dialog);
console.log(suit_p);
console.log(number);
console.log(bool);





bool = confirm("I am thinking of the suit of your card.  OK for red and cancel for black.");

if(bool === true){
    number = parseInt(prompt("Type in any number over 1000.  please use the characters such as: 1,2,3,4,5."));

    if(number % 2 === 1){
        console.log("Your suit is Hearts.");
    } else {
        console.log("Your suit is Diamonds");
    }

} else {

    suit_p = prompt("What color was your suit again?");

    if(suit_p === null || suit_p.toLowerCase() === "black"){
        console.log(dialog + "spades.");

    } else {
        console.log("Your answer was " + "\"" + suit_p + "\"." + "   I am guessing you were thinking clubs.");

    }
}
