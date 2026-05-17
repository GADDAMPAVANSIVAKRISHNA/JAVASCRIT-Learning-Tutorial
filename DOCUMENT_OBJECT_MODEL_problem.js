// Problem Statement:

// Observe the code and output to understand object creation using the object literal method. 

// Activity:

// You are suggested to try the same code by using the function constructor method.

// Note: You can execute this tryout in your Visual Studio Code IDE or any other editor in case of any issue in executing/viewing response in the below- given pane.

document.write("Scripting output" + "<br><br>");
 
// 1. DOM API method - getElementById
let para = document.getElementById("p1");
 
// 2. DOM API method to change the content of HTML element - innerHTML
document.write("document.getElementById p1: " + para.innerHTML + "<br><br>");
            
//3. DOM API method to access multiple elements with same tag name - getElementsByTagName
let paras1 = document.getElementsByTagName("p");
for (let i = 0; i < paras1.length; i++) {
	document.write(
		"document.getElementsByTagName p: " + paras1[i].innerHTML + "<br><br>"
	);
}
//4. DOM API method to access multiple elements with same class attribute's value - getElementsByClassName
let paras2 = document.getElementsByClassName("myClass");
for (let i = 0; i < paras2.length; i++) {
	document.write(
		"document.getElementsByClassName myClass: " +
                  paras2[i].innerHTML +
                  "<br><br>"
	);
}
            
//5. DOM API method to access multiple elements with given CSS selector - querySelectorAll
let x = document.querySelectorAll("p.blue");
document.write("x[0].innerHTML: " + x[0].innerHTML + "<br><br>");
            
//6. DOM API method to retrieve current content
document.write(
	"document.getElementById heading1 innerHTML: " +
                document.getElementById("heading1").innerHTML +
                "<br><br>"
);
            
//7. DOM API method to set new content
            
document.getElementById("heading1").innerHTML =
              "Heading content generated dynamically";
            
document.write(
	"updated document.getElementById heading1 innerHTML: " +
                document.getElementById("heading1").innerHTML +
                "<br><br>"
);
            
//8. DOM API method to retrieve current attributes value
            
document.write(
	"document.getElementById div1 attributes[0].value: " +
                document.getElementById("div1").attributes[0].value +
                "<br><br>"
);

//9. DOM API method to set or add new attribute
            
document.getElementById("div1").setAttribute("class", "div2");
 
//10. style change
document.getElementById("para1").style.color = "red";
 
function createNew() {
	let newElement = document.createElement("span");
	let newTextElement = document.createTextNode("The span is added just now");
	document.getElementById("div2").appendChild(newElement);
	document.getElementById("div2").appendChild(newTextElement);
}
        
function removeOld() {
	document.getElementById("div2").removeChild(document.getElementById("para2"));
}
		</script>