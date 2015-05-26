//alert("JavaScript works!");

var returnedValue;
var userPick = prompt("Are you going to choose the Powerball or the Florida lottery?, Powerball or Florida lottery");
var numUsed;
var limitNum

while(userPick.toLowerCase() != "powerball" && userPick.toLowerCase() != "florida lottery"){

    userPick = prompt("Are you going to choose the Powerball or the Florida lottery?, Powerball or Florida lottery");

}
if (userPick.toLowerCase() === "powerball"){

    numUsed = [0, 1, 2, 3, 4];
    limitNum = 59;

} else {

    numUsed = [0, 1, 2, 3, 4, 5];
    limitNum = 35;

}


function lottoNum(nums, limNum){
    var numbersArray = nums;
    var rand = parseInt(Math.random() * limNum + 1);

    for(var i = 0; i < numbersArray.length; i++){
    numbersArray[i] = rand;

    console.log(rand);
    }
    console.log(numbersArray);
}

returnedValue = lottoNum(numUsed, limitNum);

console.log(returnedValue)