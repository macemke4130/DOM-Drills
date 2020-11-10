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