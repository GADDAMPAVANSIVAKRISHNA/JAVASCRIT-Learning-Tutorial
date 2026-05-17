// Function to generate random stock price
function getStockPrice() {
    return Math.floor(Math.random() * 1000) + 100;
}

// Promise to simulate stock updates
let stockPromise = new Promise(function (resolve, reject) {

    let count = 0;

    let interval = setInterval(function () {

        let stockPrice = getStockPrice();

        console.log("Current Stock Price: " + stockPrice);

        count++;

        // Stop after 5 times
        if (count === 5) {

            clearInterval(interval);

            resolve("Stock price updates completed");
        }

    }, 3000);

});

// Success callback
stockPromise.then(function (message) {
    console.log(message);
});