//alert("JavaScript works!");

var returnedValue;
var userPick = prompt("Are you going to choose the Powerball or the Florida lottery?, Powerball or Florida lottery");
var numUsed;
var limitNum

while(userPick.toLowerCase() != "powerball" && userPick.toLowerCase() != "florida lottery"){

    userPick = prompt("Are you going to choose the Powerball or the Florida lottery?, Powerball or Florida lottery");

}
if (userPick.toLowerCase() === "powerball"){

    numUsed = [5];
    limitNum = 59;

} else {

    numUsed = [6];
    limitNum = 35;

}


function lottoNum(nums, limNum){

    var rand = parseInt(Math.random() * limNum + 1);



}

returnedValue = lottoNum(numUsed, limitNum);

console.log(returnedValue)