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

        if (isNaN(dump)) {

            dump = null;

        } else {

            total = total + parseFloat(dump);

        }


    }

    return total;

}


returnedNum = findNum(probArray);

console.log("The total of the numbers in the array is: " + returnedNum);

//comments on what I tried and things going through my head while coding this. *Do not have to read* mostly me complaining
//about my code and wondering why it was not working.
/*
 Not sure how to get the string based numbers to not be added to the total. Everything I have tried does not work.
 I have tried a while/if loop/statement with the .indexOf and the .lastIndexOf statements to check for '"' or "\"" and the
 javascript output tells me that it is not a function /exa: while(dump.indexOf('"') < 0){}/. This is starting to grate on
 me, because not only that won't work but also comparing the number values to the parseFloat or Int versions of themselves
 witch should work because they are already number values don't end up working and everything turns to 0. There is nothing
 in my knowledge base that I have not tried to get this right. Also I read that by using the isNaN it is automatically
 converting string based numbers into int based numbers so while I tried to make things work I commented out the isNaN
 part of my code. It is just really weird that all of the things I am trying from class to make this work is going out
 onto the console and coming back as not a function. All of the things I have tried have failed so this is all that I
 can turn in. if it is any consolation I will put some of the things I tried commented out below, because this is just
 ridiculous.
 */
/*
these belong inside the for loop instead of my if statement.

while(dump.indexOf('"') < 0){
total = total + dump
}

if(dump.indexOf('"') === -1 && dump.lastIndexOf("\"") === -1){
total = total + dump
} else {
dump = null
}

while(dump == parseInt(dump)){
total = total + dump
}

 if(dump == parseInt(dump)){
 total = total + dump
 }else{
 dump = null
 }

 */


