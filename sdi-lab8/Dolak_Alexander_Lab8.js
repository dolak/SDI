//alert("JavaScript works!");

//problem 1

var email = prompt("Please type in the email you would like to register: ", "JohnSmith@gmail.com");
var returnedOne = "";

function emailVerification(emailStr) {
    var emailAsk = emailStr;
    var emailPart;
    while (emailAsk.indexOf("@") < 0 && emailAsk.indexOf(".") < 0) {

        emailAsk = prompt("I am sorry. We did not get the right email. Please enter again:");

    }
    console.log("Thank you for entering your email: " + emailAsk);
    console.log("");

    emailPart = emailAsk[0]
    return emailPart;
}

returnedOne = emailVerification(email);
console.log("... Wiping records ...");
console.log(" You are now agent " + returnedOne + ". Welcome to the MIB.");

console.log("");
console.log("");

//problem 2

var strOne;
var strTwo;
var strThree;

strOne = "Rock-Scissors-Paper";
strTwo = "-";
strThree = "<";

function nameSeparator(lineOne, lineTwo, lineThree){
    var newName;
    var sepNames;
    var currentWord;
    var newNameSep = "";

    newName = lineOne;

    sepNames = newName.split(lineTwo);

    for(var all in sepNames){

        currentWord = sepNames[all];

        for(var char in sepNames[all]){

            if (char != 0){

                var currentChar = currentWord[char].toLowerCase();
                newNameSep = newNameSep + currentChar;


            } else {
                newNameSep = newNameSep + currentWord[0];

            }

        }
        newNameSep = newNameSep + lineThree;

    }
    return newNameSep;

}

nameSeparator(strOne, strTwo, strThree);

var returnedStr = nameSeparator(strOne, strTwo, strThree);

console.log("These are what beats what in a game of Rock-Paper-Scissors:    " + returnedStr);
