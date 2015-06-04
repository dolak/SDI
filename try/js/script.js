/*
 Alexander Dolak
 SDI
 5/28/15
 */


//globals
var probArray = [1, "pickles", 3, "onions", 5, "10", 6, "SDI"];
var returnedNum;
//function
function findNum(argArray){
    //public variables
    var array = argArray;
    var total = 0;
    var dump = 0;

//for loop to try to get only numbers from the array
    for(var i = 0; i < array.length; i++) {

        dump = array[i];

        dump
    }
    console.log(dump);
}


returnedNum = findNum(probArray);

console.log("The total of the numbers in the array is: " + returnedNum);
