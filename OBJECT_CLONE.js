let originalObj = { one: 1, two: 2, three: 3 };
let clonedObj = { ...originalObj };
/*
Here spreading the object into a list of parameters happens 
which return the result as a new object 
checking whether the objects hold the same contents or not 
*/
alert(JSON.stringify(originalObj) === JSON.stringify(clonedObj)); // true 
//checking whether both the objects are equal 
alert(originalObj === clonedObj); // false (not same reference) 
//to show that modifying the original object does not alter the copy made 
originalObj.four = 4;
alert(JSON.stringify(originalObj)); // {"one":1,"two":2,"three":3,"four":4} 
alert(JSON.stringify(clonedObj)); // {"one":1,"two":2,"three":3} 
