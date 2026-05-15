// Problem Statement:

// Observe the output which helps to understand the concept of class and inheritance.

// Activity:

// You are suggested to create one more class and implement inheritance and observe your output by creating more objects of the class.

// Note: You can execute this tryout in your Visual Studio Code IDE or any other editor in case of any issue in executing/viewing response in the below- given pane.

// <!DOCTYPE html>
// <html>

// <head>
//     <title>Classes Demo</title>
//     <script>
        class Vehicle {
            constructor(make, model) {
                this.make = make;
                this.model = model;
            }
        }

        class Car extends Vehicle {
            constructor(make, model, regNo, fuelType) {
                super(make, model);
                this.regNo = regNo;
                this.fuelType = fuelType;
            }
            getDetails() {
                console.log(`${this.make},${this.model},${this.regNo},${this.fuelType}`);
            }
        }

        let cObj1 = new Car("Hundai", "i10", "KA01-6447", "Petrol");
        cObj1.getDetails();
//     </script>
// </head>

// </html>