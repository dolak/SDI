/*
Alexander Dolak
SDI
5/16/15
 */
//re calculator. teacher explanation of last night's hw
if(false) {
//globals
    var num1;
    var num2;
    var operation;
    var finalAnswer;

//math functions
    function add(add1, add2) {

        return add1 + add2;

    };
    function subtract(sub1, sub2) {

        return sub1 - sub2;

    };
    function multiply(mult1, mult2) {

        return mult1 * mult2;

    };
    function divide(divi1, divi2) {

        var outcome;

        if (div2 === 0) {
            outcome = "Error: can't divide by 0";

        } else {
            outcome = divi1 / divi2

        }
        return outcome;

    };
    function finalOutput() {
        console.log(num1 + " " + operation + " " + num2 + " = " + finalAnswer);
    }

//main code
    num1 = parseFloat(prompt("Enter your first number: "));
    num2 = parseFloat(prompt("Enter your second number: "));
    operation = prompt("Enter the math operation you would lie to perform", "+,-,*,/")

    if (operation === "+") {
        finalAnswer = add(num1, num2);
        finalOutput()

    } else if (operation === "-") {
        finalAnswer = subtract(num1, num2);
        finalOutput()

    } else if (operation === "*") {
        finalAnswer = multiply(num1, num2);
        finalOutput()

    } else if (operation === "/") {
        finalAnswer = divide(num1, num2);
        finalOutput()

    } else {
        console.log("I do not understand. Try again.")
    }

}

//arrays
if(false) {
    function myFirstArray() {
        var poppedItem;
        var pirateNames = ["Blackbeard", "Captain Kidd", "Captain Morgan", "Captain Jack Sparrow"];

        for (var i = 0; i < pirateNames.length; i++) {
            if (pirateNames[i] === "Captain Jack Sparrow") {
                console.log(pirateNames[i] + " is my favorite pirate.")
            }
        }


        //this is how to add to the last position in the array at this point of the code
        console.log("The length of the array is " + pirateNames.length);
        pirateNames[pirateNames.length] = "Barbosa";

        //.push() adds to the end .unshift() adds to the beginning
        pirateNames.push("William Turner");

        pirateNames.unshift("Elizabeth Turner");

        console.log(pirateNames);

        //removes last element and returns it.
        poppedItem = pirateNames.pop();

        console.log(pirateNames);
        console.log("The popped item name is: " + poppedItem);
    }


    myFirstArray();
}

//in class problem
    //done alone
if(false) {
    var returned

    function array() {
        var holder = 0;
        var average = 0;
        var numbers = [5, 6, 7, 8, 10, 12, 14, 23, 35, 50];

        for (var i = 0; i < numbers.length; i++) {
            holder += numbers[i];

        }
        average = holder / numbers.length;

        return average;
    }

    returned = array();
    console.log(returned);
}

    //done with teacher
if(false) {

//globals
    var returnedAverage;

//function
    function myAverageFunction() {

        //local var
        var average = 0;
        var addNum = 0;
        var numberArray = [5, 6, 7, 8, 10, 12, 14, 23, 35, 50];

        //for loop
        for (var i = 0; i < numberArray.length; i++) {
            addNum += numberArray[i];

        }

        //average of total
        average = addNum / numberArray.length;

        //return the final average
        return average

    }

    returnedAverage = myAverageFunction();

    console.log("The average is " + returnedAverage + ".");
}

