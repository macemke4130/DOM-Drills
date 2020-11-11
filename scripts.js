let headerDiv = document.createElement("div");
headerDiv.className = "header-container";
document.body.appendChild(headerDiv);

for (let index = 1; index <= 6; index++) {
    let h = document.createElement("h" + index);
    let hTxt = document.createTextNode("This is an h" + index);
    h.appendChild(hTxt);
    h.className = "h" + index;
    headerDiv.appendChild(h);

    h.addEventListener("dblclick", function(){
        h.style.color = colors[ranColor()];
    })
}

function ranColor(){
    let x = Math.floor(Math.random() * colors.length + 1) - 1;

    return x;
}

let colors = ["red", "green", "blue", "yellow", "pink", "black"];

let ul = document.createElement("ul");
document.body.appendChild(ul);

let myCount = 1;

function addListItem(){
    let li = document.createElement("li");
    let liTxt = document.createTextNode("This is list item " + myCount)
    li.appendChild(liTxt);

    ul.appendChild(li);
    myCount++;
}

document.getElementsByClassName("btn")[0].onclick = function(){
    addListItem();
};