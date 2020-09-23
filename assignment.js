const memory = require('./memory');

// PUSH () METHOD
//goal of the function is to add 
//item to the array using a provided 
//function

function mainPush() {
    Array.SIZE_RATIO = 3

    //creating a new instance of the array for the 
    //added item
    //new without parenthesis is a method used to:
    //create a blank object 
    //passes the new object as "this context"
    //returns "this" if the function doesn't return an object.
    let arr = new Array();
    //then use the issue to create an array class
    arr.push(3);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    //proposition: the current length of the array is three
    console.log(arr);
}
console.log(mainPush());

// POP() METHOD
// removes data from the end of the array
function mainPop() {
    Array.SIZE_RATIO = 3
    let arr = new Array()
    arr.push(3);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    arr.pop();
    arr.pop();
    arr.pop();
    console.log(arr)
}
console.log(mainPop())