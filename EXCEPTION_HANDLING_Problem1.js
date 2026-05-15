// <!DOCTYPE html>
// <html>

// <head>
//     <title>Event Handling Demo</title>
//     <style>
//         body {
//             padding-top: 10px;
//         }
//     </style>
// </head>

// <body class="container-fluid">
//     <div class="panel panel-primary">
//         <div class="panel-heading">
//             <h3>Event Handling</h3>
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

                    try {
                        if (isNaN(P) || isNaN(R) || isNaN(N)) {
                            throw "Not a number";
                        }
                        else {
                            console.log("You have entered P :  " + P + "<br><br>");
                            console.log("You have entered R :  " + R + "<br><br>");
                            console.log("You have entered N :  " + N + "<br><br>");
                            //4. eval  
                            eval(P * R * N);
                            console.log("Calculated SI is " + (eval(P * R * N)) / 100 + "<br><br>");

                        }
                    }

                    catch (e) {
                        console.log("Error: " + e + "<br>");
                    }

                    finally {
                        console.log("Some error occured" + "<br>");
                    }

                    //3. confirm 
                    let decision = confirm("Shall we proceed to calculate SI?");
                    console.log(typeof (decision));
                    if (decision) console.log("You decided to proceed" + "<br><br>");
                    else console.log("You decided not to proceed" + "<br><br>");
                }
                execute();
//             </script>
//         </div>
//     </div>
// </body>

// </html>