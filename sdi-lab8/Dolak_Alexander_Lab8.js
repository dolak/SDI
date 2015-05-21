//alert("JavaScript works!");



var email = prompt("Please type in the email you would like to register: ", "JohnSmith@gmail.com");
var returnedOne = "";

function emailVarifiation(emailStr){
    var emailAsk = emailStr;
    var emailPart;
    while(emailAsk.indexOf("@") < 0 && emailAsk.indexOf(".") < 0){
        console.log(emailAsk.indexOf("@"))
        console.log(emailAsk.indexOf("."))
        emailAsk = prompt("I am sorry. We did not get the right email. Please enter again:");

    }
    console.log("Thank you for entering your email: " + emailAsk);
    console.log("");

    emailAsk.split("@");
    emailPart = emailAsk[0]
    return emailPart;
}

returnedOne = emailVarifiation(email);
console.log("You are now agent " + returnedOne + ". Welcome to the MIB.")

