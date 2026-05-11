// Define a Student class to demonstrate the "this" keyword in JavaScript
class Student {
    constructor(name, age) {
        // "this" inside the constructor refers to the new instance being created
        this.name = name;
        this.age = age;
    }

    display() {
        // "this.name" and "this.age" access the instance properties
        console.log('Name: ' + this.name);
        console.log('Age: ' + this.age);
        // Call another instance method on the same object
        this.message();
    }

    message() {
        // This method is also called with the current instance as its context
        console.log('Welcome to Javascript');
    }
}

// Create a new Student instance and call its display method
const student = new Student('pavan', 22);
student.display();

