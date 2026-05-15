// Problem Statement:

// Write a JavaScript code to make online booking of theatre tickets and calculate the total price based on the below conditions: 

// If seats to be booked are not more than 2, the cost per ticket remains $9.  

// If seats are 6 or more, booking is not allowed.  

// If seats to be booked are more than 2 but less than 5, based on the number of seats booked, do the following:

// Calculate total cost by applying a discount of 5, 7, 9, 11 percent, and so on for customer 1,2,3 till 5.

// Try the code with different values for the number of seats. 

// Write the following custom functions to implement given requirements:  

// calculateCost(seats): Calculate and display the total cost to be paid by the customer for the tickets he has bought. 

// calculateDiscount(seats): Calculate discount on the tickets bought by the customer. Invoke this function only when the user clicks on a link. 



let ticketPrice = 9;

// Function to calculate total cost
function calculateCost(seats) {

    // Booking not allowed for 6 or more seats
    if (seats >= 6) {
        console.log("Booking not allowed");
        return;
    }

    let totalCost = seats * ticketPrice;

    // Apply discount if seats are more than 2
    if (seats > 2 && seats < 6) {

        let discount = calculateDiscount(seats);

        totalCost = totalCost - (totalCost * discount / 100);

        console.log("Seats Booked: " + seats);
        console.log("Discount Applied: " + discount + "%");
        console.log("Total Cost: $" + totalCost);
    }
    else {
        console.log("Seats Booked: " + seats);
        console.log("Total Cost: $" + totalCost);
    }
}

// Function to calculate discount
function calculateDiscount(seats) {

    let discount = 0;

    // Discounts for customers 1 to 5
    for (let i = 1; i <= seats; i++) {
        discount += (2 * i + 3);  
    }

    return discount;
}

// Try with different values
calculateCost(2);
console.log("----------------");

calculateCost(3);
console.log("----------------");

calculateCost(4);
console.log("----------------");

calculateCost(6);