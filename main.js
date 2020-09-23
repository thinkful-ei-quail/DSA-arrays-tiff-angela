const Array = require('./array')
// PUSH () METHOD
//goal of the function is to add 
//item to the array using a provided 
//function

function main() {
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
    newZ = arr.get(0)
    console.log('arr 0', newZ)
    newA = arr.get(1)  // 3
    console.log(newA)
    newB = arr.get(2)  // 5
    console.log(newB)
    newC = arr.get(3)  // 15
    console.log(newC)
    newD = arr.get(4)  //19
    console.log(newD)
    newE = arr.get(5)  // 45
    console.log(newE)
    
}
console.log(main());

