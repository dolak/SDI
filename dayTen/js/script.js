/*
Alexander Dolak
SDI

 */

if(false) {
    var returnedNumber;

    function yearsBetween() {

        var yearEntered = parseInt(prompt("What year would you like to use?"));

        var today = new Date();

        today = today.getFullYear();

        var difference = today - yearEntered;

        return difference;

    }


    returnedNumber = yearsBetween();
    console.log("The difference in years is " + returnedNumber);
}

var numArray = [3, 6, 7, 9, 23, 42, 22, 50];
var currentNum = 21;
var returnedNumber;


function findNumber(ardArray, argNumber){
    var nextGreatest = 0;
    ardArray = argArray.sort();
    for (var i = 0; i < argArray.length; i++){


        if(argNumber < argArray[i]){



            if(nextGreatest < argArray[i]) {

                nextGreatest = argArray[i];

            }


        }


    }

    return nextGreatest;
}

returnedNumber = findNumber(numArray, currentNumber);
console.log("The next highest number is " + returnedNumber);