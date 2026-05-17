// Problem Statement:

// Create a login module to validate the user.

// Approach to the solution:

// Create a file login.js with a User class.

// Create a validate method with username and password as arguments.

// If the username and password are equal it will return "Login Successful" else will return "Unauthorized access".

// Create an index.html file with textboxes username and password and a submit button.

// Add a script tag in HTML to include index.js file.

// Create an index.js file which imports login module and invokes validate method of User class.

// On submit of the button in HTML the validate method of the User class should be invoked.

// Implement the validate method to send the username and password details entered by the user and capture the return value to display in the alert.



1️⃣ login.js
export class User {

    validate(username, password) {

        if (username === password) {
            return "Login Successful";
        }
        else {
            return "Unauthorized Access";
        }

    }

}
2️⃣ index.js
import { User } from './login.js';

let user = new User();

window.validateUser = function () {

    let username = document.getElementById("username").value;

    let password = document.getElementById("password").value;

    let result = user.validate(username, password);

    alert(result);

}
3️⃣ index.html
<!DOCTYPE html>
<html>

<head>
    <title>Login Module</title>
</head>

<body>

    <h2>Login Form</h2>

    <label>Username:</label>
    <input type="text" id="username">
    <br><br>

    <label>Password:</label>
    <input type="password" id="password">
    <br><br>

    <button onclick="validateUser()">Submit</button>

    <script type="module" src="index.js"></script>

</body>

</html>