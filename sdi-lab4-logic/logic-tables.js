//  NAME:  Enter your name here
//  DATE:  Enter the current date
// Scalable Data Infrastructures
// Day 4 Lab
//  Assignment 1
//  Using logical operators

var p;
var q;
var r;
var s; //this will be my data dump so that I can store some variables.
/*
I used an if statement to make sure i was not running unnecessary code while keeping everything.
If you want to run a certain piece of the code just make the if statement true and make the code
you do not want running false.
*/



//this is for table 1
if(false) {
    p = confirm("First value:  Click OK for true or Cancel for false.");
    q = confirm("Second value:  Click OK for true or Cancel for false.");

    if (p && q) {
        console.log("With " + p + " and " + q + ", the outcome is TRUE.");
    } else {
        console.log("With " + p + " and " + q + ", the outcome is FALSE.");
    }

}

//this is for table 2
if(false) {
    p = confirm("First value:  Click OK for true or Cancel for false.");
    q = confirm("Second value:  Click OK for true or Cancel for false.");

    if (p || q) {
        console.log("With " + p + " or " + q + ", the outcome is TRUE.");
    } else {
        console.log("With " + p + " or " + q + ", the outcome is FALSE.");
    }

}

//this is for table 3
if(false) {
    p = confirm("First value:   Click OK for true or Cancel for false.");
    q = confirm("Second value:  Click OK for true or Cancel for false.");
    r = confirm("Third value:   Click OK for true or Cancel for false.");

    if (q || r) {
        s = true
            console.log("With " + q + " or " + r + ", the outcome is TRUE.");
            if (p && s) {
                console.log("With " + p + " and " + s + ", the outcome is TRUE.");
            } else {
                console.log("With " + p + " and " + s + ", the outcome is FALSE.");
            }
    } else {
        s = true
            console.log("With " + q + " or " + r + ", the outcome is FALSE.");
            if (p && s) {
                console.log("With " + p + " and " + s + ", the outcome is TRUE.");
            } else {
                console.log("With " + p + " and " + s + ", the outcome is FALSE.");
            }
    }


}

//this is for table 4
if(false) {
    p = confirm("First value:   Click OK for true or Cancel for false.");
    q = confirm("Second value:  Click OK for true or Cancel for false.");
    r = confirm("Third value:   Click OK for true or Cancel for false.");

    if (p && !q) {
        s = true
            console.log("With " + p + " and " + !q + ", the outcome is TRUE.");
        if (s || r) {
            console.log("With " + s + " or " + r + ", the outcome is TRUE.");
        } else {
            console.log("With " + s + " or " + r + ", the outcome is FALSE.");
        }
    } else {
        s = false
            console.log("With " + p + " and " + !q + ", the outcome is FALSE.");
        if (s || r) {
            console.log("With " + s + " or " + r + ", the outcome is TRUE.");
        } else {
            console.log("With " + s + " or " + r + ", the outcome is FALSE.");
        }
    }


}

//this is for table 5
if(false) {
    p = confirm("First value:   Click OK for true or Cancel for false.");
    q = confirm("Second value:  Click OK for true or Cancel for false.");
    r = confirm("Third value:   Click OK for true or Cancel for false.");

    if (q || r) {
        s = true
            console.log("With " + q + " or " + r + ", the outcome is TRUE.");
        if (p || s) {
            console.log("With " + p + " or " + s + ", the outcome is TRUE.");
        } else {
            console.log("With " + p + " or " + s + ", the outcome is FALSE.");
        }
    } else {
        s = false
            console.log("With " + q + " or " + r + ", the outcome is FALSE.");
        if (p || s) {
            console.log("With " + p + " or " + s + ", the outcome is TRUE.");
        } else {
            console.log("With " + p + " or " + s + ", the outcome is FALSE.");
        }
    }


}


// Problem 1
if(false) {
    var age;
    var ticket = "$12.00";
    var ticketDiscounted = "$7.00";

    age = prompt("What is your age?", "Type your age here:");

    if (age < 10 || age >= 55) {
        console.log("You must pay: " + ticketDiscounted + " for a ticket.");
    } else {
        console.log("You must pay: " + ticket + " for a ticket.");
    }
}

//problem 2
if(true) {
    var fTire1;
    var fTire2;
    var bTire1;
    var bTire2;

    fTire1 = prompt("What is the tire pressure of your front left tire?", "Type here: ");
    fTire2 = prompt("What is the tire pressure of your front right tire?", "Type here: ");
    bTire1 = prompt("What is the tire pressure of your back left tire?", "Type here: ");
    bTire2 = prompt("What is the tire pressure of your back right tire?", "Type here: ");

    if(fTire1 === fTire2 && bTire1 === bTire2) {
        console.log("Your car is up to standard.")
    } else {
        console.log("Your car is not up to standard")
    }
}