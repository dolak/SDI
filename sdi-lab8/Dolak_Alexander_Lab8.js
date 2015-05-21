//alert("JavaScript works!");



var email = prompt("Please type in the email you would like to register: ", "JohnSmith@gmail.com");

function emailVarifiation(emailStr){
    var emailAsk = emailStr;

    while(emailStr.indexOf() != "@" && email.indexOf() != "."){

        emailStr = prompt("I am sorry. We did not get the right email. Please enter again:");

    }
    console.log("Thank you for entering your email: " + emailAsk);

    

}

emailVarifiation();