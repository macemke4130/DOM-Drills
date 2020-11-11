// Initial State Variables --

// Array containing "random" colors --
let colors = ["red", "green", "blue", "yellow", "pink", "black"];

// Counter for <li> items --
let myCount = 1;

// Creates <div> with a class of header-contianer --
let headerDiv = document.createElement("div");
headerDiv.className = "header-container";

// Places the <div> in the HTML body tag --
document.body.appendChild(headerDiv);

// Puts 6 <h> tags on the screen in decending size --
for (let index = 1; index <= 6; index++) {
    let h = document.createElement("h" + index);
    let hTxt = document.createTextNode("This is an h" + index);
    h.appendChild(hTxt);
    h.className = "h" + index; // <h1>, <h2>, ect --
    headerDiv.appendChild(h); // Puts the <h> tag inside the <div> --

    // Double Click on any individual <h> tag to change the font color --
    h.addEventListener("dblclick", function () {
        h.style.color = colors[ranColor()];
    })
}

// Returns a random number between and including 0 and 6 --
function ranColor() {
    let x = Math.floor(Math.random() * colors.length);
    return x;
}

// Creates <ul> and appends to the <body> --
let ul = document.createElement("ul");
document.body.appendChild(ul);


// Adds <li> items to the <ul> on button click --
function addListItem() {
    let li = document.createElement("li");
    let liTxt = document.createTextNode("This is list item " + myCount) // myCount is set to 1 initially --
    li.appendChild(liTxt);

    li.addEventListener("click", function () { // Selects random color from colors array --
        li.style.color = colors[ranColor()];
    });
    li.addEventListener("dblclick", function () { // Removes <li> on a double click --
        li.remove();
    });

    ul.appendChild(li); // Appends <li> to the <ul> --
    myCount++; // Increment <li> --
}

// Listener for button click to create <li> items --
document.getElementsByClassName("btn")[0].onclick = function () {
    addListItem();
};