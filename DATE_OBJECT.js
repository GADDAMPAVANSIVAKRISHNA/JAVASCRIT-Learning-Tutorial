//creating the current date and current time by using the built in date object

let currentdate = new Date();
console.log(currentdate);

// creating the custome date

let dateobj  = new Date(2026,5,118,10,30,45);
console.log(dateobj);

// accessing the date and time bu using hte date methonds which is built in date object
let dateObject1 = new Date(); 
console.log("Date is: " + dateObject1.getDate()); 
console.log("Day is: " + dateObject1.getDay()); 
console.log("Year is: " + dateObject1.getYear()); 
console.log("Horrs: " + dateObject1.getHours()); 
console.log("Month is: " + dateObject1.getMonth()); 
console.log("Time is: " + dateObject1.getTime()); 
console.log("Millisecond: " + dateObject1.getMilliseconds()); 
/* 
OUTPUT: 
Date is: 18 
Day is: 4 
Year is: 120 
Horrs: 22 
Month is: 5 
Time is: 1592499518512 
Millisecond: 512 
*/ 


//Setter methods available on object Date are listed below: 

let dateObject1 = new Date(); 
dateObject1.setDate(3); 
dateObject1.setYear(1996); 
dateObject1.setHours(8); 
dateObject1.setMonth(7); 
dateObject1.setMilliseconds(2000); 
 
console.log("Date is: " + dateObject1.getDate()); 
console.log("Year is: " + dateObject1.getYear()); 
console.log("Hours: " + dateObject1.getHours()); 
console.log("Month is: " + dateObject1.getMonth()); 
console.log("Millisecond: " + dateObject1.getMilliseconds()); 
/* 
OUTPUT: 
Date is: 3 
Year is: 96 
Hours: 8 
Month is: 7 
Millisecond: 0 
*/ 
