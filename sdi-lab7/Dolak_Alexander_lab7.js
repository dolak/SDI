/*
Alexander Dolak
SDI

 */

var returnedArrayOne = [];
var returnedArrayTwo = [];
var returnedArrayThree = [];


var Set1 = [10, 6, 7, 3, 12, 5];

function arrayOne(argArrayOne) {

    var newArrayOne = [];
    var modNum;
    var zeroOrOne;
    //var newArgArray =  new Array(argArray);


    for (var i = 0; i < argArrayOne.length; i++) {
        for (var k = 1; k < argArrayOne.length; k++) {
            if (i >= k) {
                k = i + 1;
            }

            if (argArrayOne[i] > argArrayOne[k]) {
                modNum = argArrayOne[k];
                argArrayOne[k] = argArrayOne[i];
                argArrayOne[i] = modNum;
            }

        }
    }
    return newArrayOne;
}

var Set2 = [25, 100, 4, 22, 16, 105, 2, 7];

function arrayTwo(argArrayTwo) {

    var newArrayTwo = [];
    var modNum;
    var zeroOrOne;
    //var newArgArray =  new Array(argArray);


    for (var i = 0; i < argArrayTwo.length; i++) {
        for (var k = 1; k < argArrayTwo.length; k++) {
            if (i >= k) {
                k = i + 1;
            }

            if (argArrayTwo[i] > argArrayTwo[k]) {
                modNum = argArrayTwo[k];
                argArrayTwo[k] = argArrayTwo[i];
                argArrayTwo[i] = modNum;
            }

        }
    }
    return newArrayTwo;
}

var Set3 = [2, 3, 4, 1, 10, 27, 32, 51, 6, 100, 8, 42];

function arrayThree(argArrayThree) {

    var newArrayThree = [];
    var modNum;
    var zeroOrOne;
    //var newArgArray =  new Array(argArray);


    for (var i = 0; i < argArrayThree.length; i++) {
        for (var k = 1; k < argArrayThree.length; k++) {
            if (i >= k) {
                k = i + 1;
            }

            if (argArrayThree[i] > argArrayThree[k]) {
                modNum = argArrayThree[k];
                argArrayThree[k] = argArrayThree[i];
                argArrayThree[i] = modNum;
            }

        }
    }
    return newArrayThree;
}

returnedArrayOne = arrayOne(Set1);
console.log(Set1)

returnedArrayTwo = arrayTwo(Set2);
console.log(Set2)

returnedArrayThree = arrayThree(Set3);
console.log(Set3)



/* This is the code before I used a function
 Set1 = [10, 6, 7, 3, 12, 5];
 Set2 = [25, 100, 4, 22, 16, 105, 2, 7];
 Set3 = [2, 3, 4, 1, 10, 27, 32, 51, 6, 100, 8, 42];

//This is to choose the set to sort
var user = prompt("Type in 'set1', 'set2', or 'set3' to sort the set.");
//This is to get the set the user verified.
if(user === "set1"){
    user = Set1
} else if (user === "set2"){
    user = Set2
} else if (user === "set3"){
    user = Set3
} else{
    console.log("I am sorry I do not understand.");
}
//This is so i will increment
    for (var i = 0; i < user.length; i++) {
//This is so k will increment
        for (var k = 1; k < user.length; k++) {
//This is to swap the numbers so they will be in order
            if(i >= k){
                k=i+1;
            }

            if (user[i] > user[k]) {
                dump = user[k];
                user[k] = user[i];
                user[i] = dump;
                //This is so I can see what is going on with my code.

                console.log("i " + i);
                console.log("k " + k);
                console.log("dump " + dump);

                console.log(user);

            }
        }
    }

console.log(user);
*/

