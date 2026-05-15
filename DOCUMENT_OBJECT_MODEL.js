# Document Object Model (DOM)

## What is DOM?

DOM stands for Document Object Model.

The browser converts HTML into a tree structure.

Example HTML:

```html
<html>
   <body>
      <h1>Hello</h1>
      <p>Welcome</p>
   </body>
</html>
```

DOM Tree:

```text
html
 └── body
      ├── h1
      └── p
```

---

# Types of Nodes

| Node          | Meaning              |
| ------------- | -------------------- |
| Document Node | Entire HTML document |
| Element Node  | HTML elements        |
| Text Node     | Text inside element  |

---

# DOM Selection Methods

# 1. getElementById()

Finds element using id.

```html
<p id="demo">Hello</p>

<script>
console.log(document.getElementById("demo").innerHTML);
</script>
```

---

# 2. getElementsByTagName()

Finds elements using tag name.

```html
<p>One</p>
<p>Two</p>

<script>
console.log(document.getElementsByTagName("p")[0].innerHTML);
</script>
```

---

# 3. getElementsByClassName()

Finds elements using class.

```html
<p class="myClass">Hello</p>

<script>
console.log(document.getElementsByClassName("myClass")[0].innerHTML);
</script>
```

---

# 4. querySelectorAll()

Uses CSS selectors.

```html
<p class="blue">Welcome</p>

<script>
console.log(document.querySelectorAll("p.blue")[0].innerHTML);
</script>
```

---

# DOM Properties

# innerHTML

Gets or changes HTML content.

```html
<h1 id="head">Hello</h1>

<script>
document.getElementById("head").innerHTML = "Welcome";
</script>
```

---

# style Property

Changes CSS using JavaScript.

```html
<h1 id="head">Hello</h1>

<script>
document.getElementById("head").style.color = "red";
</script>
```

---

# setAttribute()

Adds or changes attribute.

```html
<div id="box"></div>

<script>
document.getElementById("box")
.setAttribute("class","blue");
</script>
```

---

# Node Relationships

Example:

```html
<div>
   <h1>Hello</h1>
   <p>Welcome</p>
</div>
```

Tree:

```text
div
 ├── h1
 └── p
```

---

## parentNode

Gets parent.

```html
<div id="box">
   <p id="para">Hello</p>
</div>

<script>
console.log(
document.getElementById("para").parentNode
);
</script>
```

---

## childNodes

Gets children.

```html
<div id="box">
   <h1></h1>
   <p></p>
</div>

<script>
console.log(
document.getElementById("box").childNodes
);
</script>
```

---

## firstChild

Gets first child.

```javascript
console.log(
document.getElementById("box").firstChild
);
```

---

## lastChild

Gets last child.

```javascript
console.log(
document.getElementById("box").lastChild
);
```

---

## nextSibling

Gets next sibling.

```javascript
console.log(
document.getElementById("h1").nextSibling
);
```

---

## previousSibling

Gets previous sibling.

```javascript
console.log(
document.getElementById("p1").previousSibling
);
```

---

# Important Note

Whitespace is considered as text node.

Better methods:

```javascript
firstElementChild
lastElementChild
nextElementSibling
previousElementSibling
```

These return only elements.

---

# Creating Elements Dynamically

# createElement()

Creates element.

```javascript
let newElem = document.createElement('span');
```

---

# createTextNode()

Creates text.

```javascript
let text = document.createTextNode('Hello');
```

---

# appendChild()

Adds element.

```html
<div id="box"></div>

<script>
let span = document.createElement('span');
let text = document.createTextNode('Hello');

span.appendChild(text);

document.getElementById('box')
.appendChild(span);
</script>
```

---

# removeChild()

Removes element.

```html
<div id="box">
   <p id="para">Hello</p>
</div>

<script>
let parent = document.getElementById('box');
let child = document.getElementById('para');

parent.removeChild(child);
</script>
```

---

# Events in DOM

Events are user actions.

Examples:

* click
* submit
* keypress
* mouseover

---

# onclick

```html
<button id="btn">Click</button>

<script>
document.getElementById("btn").onclick = function(){
   alert("Button clicked");
}
</script>
```

---

# addEventListener()

Modern way to handle events.

```html
<button id="btn">Click</button>

<script>
document.getElementById("btn")
.addEventListener(
"click",
function(){
   alert("Clicked");
}
);
</script>
```

---

# Event Object

Browser creates event object when event happens.

---

# event.target

Tells which element triggered event.

```html
<button onclick="test(event)">
Click
</button>

<script>
function test(event){
   alert(event.target.nodeName);
}
</script>
```

---

# event.type

Tells type of event.

```html
<button onclick="test(event)">
Click
</button>

<script>
function test(event){
   alert(event.type);
}
</script>
```

---

# preventDefault()

Stops browser default action.

```html
<a href="https://google.com"
onclick="stop(event)">
Google
</a>

<script>
function stop(event){

   event.preventDefault();

   alert("Link stopped");
}
</script>
```

Normally link opens webpage.

But `preventDefault()` stops it.

---

# Final Quick Revision

| Concept            | Meaning               |
| ------------------ | --------------------- |
| BOM                | Controls browser      |
| window             | Main browser object   |
| document           | HTML page             |
| DOM                | HTML tree structure   |
| history            | Browser history       |
| navigator          | Browser info          |
| location           | URL control           |
| innerHTML          | Change content        |
| style              | Change CSS            |
| createElement()    | Create element        |
| appendChild()      | Add element           |
| removeChild()      | Remove element        |
| onclick            | Handle event          |
| addEventListener() | Modern event handling |
| preventDefault()   | Stop default action   |
