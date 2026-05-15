// Problem Statement:

// Create an Employee class extending from a base class Person.  

// Approach to the solution:

// Create a class Person with name and age as attributes  

// Add a constructor to initialize the values 

// Create a class Employee extending Person with additional attributes role and contact  

// The constructor of the Employee to accept the name, age, role and contact where name and age are initialized through a call to super to invoke the base class constructor  

// Add a method getDetails() to display all the details of Employee. 


// <!DOCTYPE html>
// <html>
// <head>
//     <title>Employee Details</title>
// </head>
// <body>

// <script>

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Employee extends Person {
    constructor(name, age, role, contact) {
        super(name, age); // calling parent class constructor
        this.role = role;
        this.contact = contact;
    }

    getDetails() {
        document.write("<h2>The details of the Employee are:</h2>");
        document.write("Name: " + this.name + "<br>");
        document.write("Age: " + this.age + "<br>");
        document.write("Role: " + this.role + "<br>");
        document.write("Phone: " + this.contact);
    }
}

let emp = new Employee(
    "Beron",
    24,
    "Technology Analyst",
    9001234567
);

emp.getDetails();

// </script>

// </body>
// </html>