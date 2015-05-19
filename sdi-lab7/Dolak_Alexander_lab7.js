//alert("JavaScript works!");

Set1 = [10, 6, 7, 3, 12, 5]
Set2 = [25, 100, 4, 22, 16, 105, 2, 7]
Set3 = [2, 3, 4, 1, 10, 27, 32, 51, 6, 100, 8, 42]
var dump;
var user = prompt("Type in 'set1', 'set2', or 'set3' to sort the set.");

if(user === "set1"){
    user = Set1
} else if (user === "set2"){
    user = Set2
} else if (user === "set3"){
    user = Set3
} else{
    console.log("I am sorry I do not understand.")
}

for(var i = 0; i < user.length; i ++){

    for(var k = 0; k < user.length; k++){

        if(user[i] > user[k + 1]){
            dump = user[k+1];
            user[k+1] = user[i];
            user[i] = dump;
        }
    }
}
console.log(user);