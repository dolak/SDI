//alert("JavaScript works!");

Set1 = [10, 6, 7, 3, 12, 5]
Set2 = [25, 100, 4, 22, 16, 105, 2, 7]
Set3 = [2, 3, 4, 1, 10, 27, 32, 51, 6, 100, 8, 42]

var dump;

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
    console.log("I am sorry I do not understand.")
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
                console.log("i " + i)
                console.log("k " + k)
                console.log("dump " + dump)

                console.log(user)
            }
        }
    }

//console.log(user);
