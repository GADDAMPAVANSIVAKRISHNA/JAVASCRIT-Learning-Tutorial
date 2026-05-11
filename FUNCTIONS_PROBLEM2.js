// Problem Statement:

// Write a JavaScript code to do online booking of theatre tickets and calculate the total price based on the below conditions:

// If seats to be booked are not more than 2, the cost per ticket remains $9.

// If seats are 6 or more, booking is not allowed.

// If seats to be booked are more than 2 but less than 5, based on the number of seats booked, do the following:

// Calculate total cost by applying a discount of 5, 7, 9, 11 percent, and so on for customer 1,2,3 till 5.

// Try the code with different values for the number of seats.

// Write the following custom functions to implement given requirements:

// calculateCost(seats): Calculate and display the total cost to be paid by the customer for the tickets they have bought.

// calculateDiscount(seats): Calculate discount on the tickets bought by the customer. Implement using arrow functions.

let seat_cost = 9;
let seats = Number(prompt("Please enter the number of seats you want to book:"));

const calculateDiscount = (seats) => {
    if (seats >2 && seats <5)  {
        let discount = 5 + (seats - 1) * 2;
        return discount;
    }
    else {
        return 0;
    }
}
const calculateCost = (seats) => {
    if (seats <= 2) {
        return seats * seat_cost;

    }
    else if (seats > 2 && seats < 5) {
        let discount = calculateDiscount(seats);
        let total_cost = seats * seat_cost;
        let discounted_cost = total_cost - (total_cost * discount / 100);
        return discounted_cost;

    }
    
}
