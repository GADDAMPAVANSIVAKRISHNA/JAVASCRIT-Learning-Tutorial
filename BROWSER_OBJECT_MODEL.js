# JavaScript BOM & DOM Complete Easy Notes

# Browser Object Model (BOM)

## What is BOM?

BOM stands for Browser Object Model.

It allows JavaScript to control the browser.

Main object:

```javascript
window
```

Everything comes under the `window` object.

---

# BOM Structure

```text
window
 ├── document
 ├── history
 ├── navigator
 └── location
```

---

# 1. window Object

The `window` object represents the entire browser window.

Example:

```javascript
console.log(window.innerWidth);
console.log(window.innerHeight);
```

---

## window Properties

| Property    | Meaning              |
| ----------- | -------------------- |
| innerHeight | Inner browser height |
| innerWidth  | Inner browser width  |
| outerHeight | Full browser height  |
| outerWidth  | Full browser width   |

Example:

```javascript
console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(window.outerHeight);
console.log(window.outerWidth);
```

---

## window Methods

### open()

Opens new webpage.

```javascript
window.open("https://google.com");
```

### close()

Closes browser window.

```javascript
window.close();
```

---

# localStorage

Stores data permanently.

```javascript
localStorage.setItem('username','Pavan');

console.log(localStorage.getItem('username'));
```

Output:

```text
Pavan
```

---

# sessionStorage

Stores data only for current session.

```javascript
sessionStorage.setItem('password','1234');

console.log(sessionStorage.getItem('password'));
```

---

# 2. history Object

Used to manage browser history.

## Property

### length

Returns number of URLs visited.

```javascript
console.log(history.length);
```

---

## Methods

### back()

Moves to previous page.

```javascript
history.back();
```

### forward()

Moves to next page.

```javascript
history.forward();
```

### go()

Moves specific pages.

```javascript
history.go(-1);
```

---

# 3. navigator Object

Provides browser information.

## Properties

### appName

```javascript
console.log(navigator.appName);
```

### appVersion

```javascript
console.log(navigator.appVersion);
```

### platform

```javascript
console.log(navigator.platform);
```

### userAgent

```javascript
console.log(navigator.userAgent);
```

---

# 4. location Object

Used to control URLs.

## Properties

### href

```javascript
console.log(location.href);
```

### hostname

```javascript
console.log(location.hostname);
```

### port

```javascript
console.log(location.port);
```

### pathname

```javascript
console.log(location.pathname);
```

---

## Methods

### assign()

Loads new webpage.

```javascript
location.assign('https://google.com');
```

### reload()

Refreshes current webpage.

```javascript
location.reload();
```

---

