const div = document.querySelector("div#table");
const expression = document.querySelector("input#expression");

addNumbers();
initLoop();

function addNumbers() {
    for (let i = 1; i <= 100; i++) {
        let nDiv = document.createElement("div");
        nDiv.innerHTML = i;
        
        nDiv.style.border = "1px solid black";
        nDiv.style.padding = "5px";
        nDiv.style.width = "40px";
        nDiv.style.height = "40px";
        nDiv.style.display = "inline-flex";
        nDiv.style.justifyContent = "center";
        nDiv.style.alignItems = "center";
        
        div.appendChild(nDiv);
    }
}

function initLoop() {
    window.requestAnimationFrame(loop);
}

function loop() {
    window.requestAnimationFrame(loop);
}
function parseExpression(expression, i) {
    
}
