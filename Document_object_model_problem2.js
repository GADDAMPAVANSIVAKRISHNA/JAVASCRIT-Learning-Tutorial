// Question

// When the user clicks on "Click here to eat", the webpage should:

// Change the ice cream image to empty cone
// Change the heading
// Change the message
// Change the background color

// When clicked again:

// Show full cone again
// Restore heading
// Restore message
// Restore background color

let eaten = false;

function eat() {

    if (!eaten) {

        document.getElementById("img1").src = "empty-cone.jpg";

        document.getElementById("hdr1").innerHTML =
        "Hope you enjoyed it!";

        document.getElementById("p1").innerHTML =
        "Click here to refill";

        document.body.style.backgroundColor = "lightpink";

        eaten = true;

    } else {

        document.getElementById("img1").src = "full-cone.jpg";

        document.getElementById("hdr1").innerHTML =
        "Here's your ice cream";

        document.getElementById("p1").innerHTML =
        "Click here to eat";

        document.body.style.backgroundColor = "lightblue";

        eaten = false;
    }
}