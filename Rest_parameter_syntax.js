//syntax of REST parameter :
// function(a, …args) {
    //…
// }
  

//The rest of the parameters can be included in the function definition by using three dots ( … ) followed by the name of the array that will hold them. 

function showNumbers(x, y, …z) {
    return z;
}
console.log(showNumbers(1, 2, 3, 4, 5)); // [3,4,5]
console.log(showNumbers(3, 4, 5, 6, 7, 8, 9, 10)); // [5,6,7,8,9,10]


//The rest parameter should always be the last parameter in the function definition.

