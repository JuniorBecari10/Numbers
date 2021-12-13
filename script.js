const div = document.querySelector("div#table");
const expression = document.querySelector("input#expression");

const resetTableBtn = document.getElementById("reset-table");
const resetExpBtn = document.getElementById("reset-exp");

const goBtn = document.getElementById("go");

addNumbers();

resetTableBtn.onclick = resetElements;
resetExpBtn.onclick = resetExp;

goBtn.onclick = parse;

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
        nDiv.id = "nDiv-" + i;
        
        div.appendChild(nDiv);
    }
}

function resetExp() {
    expression.value = "";
}

function resetElements() {
    for (let i = 1; i <= 100; i++) {
        let element = document.getElementById("nDiv-" + i);
        
        element.remove();
    }
    
    addNumbers();
}

function parse() {
    try {
        for (let i = 1; i <= 100; i++) {
            let element = document.getElementById("nDiv-" + i);
            let exp = eval(expression.value);
            
            if (exp) element.style.backgroundColor = "#aaa";
            
        }
    } catch (e) {} // pra thread n cair
}
