//alert("JavaScript works!");

//problem 1
var originalNum     = 0;
var decimalPlace    = 5;
var returnedNum

originalNum     = parseFloat(prompt("What number would you like to format?", 5.01234567890));
decimalPlace    = parseInt(prompt("How many decimal places would you like for that number?", "1, 2, 3, 4, 5, 6, 7, 8, 9, etc."))

function formatNumber(origNum, deciPlace){

    var newNum = origNum.toFixed(deciPlace);


    return newNum;
}

returnedNum = formatNumber(originalNum, decimalPlace);

console.log(returnedNum);


//problem 2
var numberInput = prompt("Please enter a number:", 12345);
var returnedNumber;

while(isNaN(numberInput)){

    numberInput = prompt("Please enter a NUMBER:", 12345);

}

function stringNum(numInp){
    var strToNum = parseFloat(numInp);

    return strToNum;
}
returnedNumber = stringNum(numberInput);
console.log(returnedNumber);



//problem 3
var promptOne = prompt("enter in a date:", "2001/4/20");
var promptTwo = prompt("enter in a date:", "2002/4/20");

var dateOne = new Date(promptOne);
var dateTwo = new Date(promptTwo);

var dayHour = prompt("Would you like the comparison in hours or days?", "days or hours");

var returnedDay;


while(dayHour.toLowerCase() != "days" && dayHour.toLowerCase() != "hours"){
    dayHour = prompt("please enter days or hours", "days or hours");
}


function goodDates(one, two, hourDay){

    var firstDate = one;
    var secondDate = two;
    var time = hourDay;

if(time === "days"){
    var timeDiff = Math.abs(secondDate.getTime() - firstDate.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    return diffDays;
} else {
    var timeDiff = Math.abs(secondDate.getTime() - firstDate.getTime());
    var diffHours = Math.ceil(timeDiff / (1000 * 3600));

    return diffHours
}



}
returnedDay = goodDates(dateOne, dateTwo, dayHour);

console.log("The difference between " + dateOne.toDateString() + " and " + dateTwo.toDateString() + " in " + dayHour.toLowerCase() + " is: " + returnedDay);