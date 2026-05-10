/* Problem Statement:

Observe the output to see the effect of the switch-case. Also, observe if the person is with fever or not from given normal body temperature and actual body temperature.

Activty:

You are suggested to try the code and observe the output by changing varieties of choices in switch case. Also, check the effect of the default statement in the switch by assigning appropriate value.

Note: You can execute this tryout in your Visual Studio Code IDE or any other editor in case of any issue in executing/viewing response in the below- given pane.*/

let choice = 1;
let tempFahrenheit = 104;
const THIRTYTWO = 32;
const TEMP = 1.8;
const NORMAL_CELSIUS = 37;
let result1 = tempFahrenheit - THIRTYTWO;
let result2 = result1 / TEMP;

switch (choice) {
	case 1:
		console.log("Your body temperature in Celsius is: " + result2 + "<br>");
		result2 > NORMAL_CELSIUS ? document.write("You have fever, take rest!")
			: document.write("You are absolutely OK!! Enjoy");
		break;
	case 2:
		console.log("No, I don't want to check whether i have fever or not<br>");
		break;
	default:
		console.log("Sorry wrong choice provided<br>");
}
