// Problem Statement:

// Observe the output to check the execution of built-in functions, as well as user-defined functions in which simple interest is calculated. 

// Activity:

// You are suggested to create one more function named to calculate Compound Interest.

// Note: You can execute this tryout in your Visual Studio Code IDE or any other editor in case of any issue in executing/viewing response in the below- given pane.



// <!DOCTYPE html>
// <html>

// <head>
//     <title>Functions Demo</title>
//     <style>
//         body {
//             padding-top: 10px;
//         }
//     </style>
// </head>

// <body class="container-fluid">
//     <div class="panel panel-primary">
//         <div class="panel-heading">
//             <h3>Functions</h3>
//         </div>

//         <div class="panel-body">
//             <script>
                function execute() //User defined Function 
                {
                    //Functions from No.1 to No.6 are Built-In Functions
                    //1. alert 
                    alert("Let us calculate SI");

                    //2. prompt 
                    let P = prompt("Please enter Principal Amount");
                    let R = prompt("Please enter Rate of Interest ");
                    let N = prompt("Please enter Number of Years ");
                    document.write("You have entered P :  " + P + "<br><br>");
                    document.write("You have entered R :  " + R + "<br><br>");
                    document.write("You have entered N :  " + N + "<br><br>");

                    //3. confirm 
                    let decision = confirm("Shall we proceed to calculate SI?");
                    if (decision) console.log("You decided to proceed" + "<br><br>");
                    else console.log("You decided not to proceed" + "<br><br>");

                    //4. eval  
                    eval(P * R * N);
                    document.write("Calculated SI is " + (eval(P * R * N)) / 100 + "<br><br>");


                    //5. setTimeout 
                    function executeMe1() {
                        document.write("Function timeout !!!" + "<br><br>");
                    }
                    setTimeout(executeMe1, 3000);

                    //6.setInterval 
                    function executeMe2() {
                        //execute();
                        document.write("Function called at regular interval !!!" + "<br><br>");
                    }
                    setInterval(executeMe2, 3000);
                }

//             </script>
//         </div>
//     </div>
//     <button onclick="execute();">Click Here to Calculate SI</button>
// </body>

// </html>