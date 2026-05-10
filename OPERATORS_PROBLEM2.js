const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let seat_price = 9;
let festive_discount = 10;

rl.question("Enter the number of seats you want to book: ", (answer) => {
    let no_of_seats_selected = Number(answer);

    let total_price = seat_price * no_of_seats_selected;

    let discount_amount = (total_price * festive_discount) / 100;

    let final_price = total_price - discount_amount;

    console.log("Your Ticket Details:");
    console.log(`Total no of seats booked: ${no_of_seats_selected}`);
    console.log(`Total cost of tickets: $${total_price}`);
    console.log(`Festive season discount: ${festive_discount}%`);
    console.log(`Discount amount: $${discount_amount}`);
    console.log(`Total cost after discount: $${final_price}`);

    rl.close();
});
