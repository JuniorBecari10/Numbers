const div = document.querySelector("div#table");
const op1 = document.querySelector("input#op1");
const op2 = document.querySelector("input#op2");
const operation = document.querySelector("select#operation");
const resetTableBtn = document.getElementById("reset-table");
const resetBoxesBtn = document.getElementById("reset-boxes");

addNumbers();
initLoop();

resetTableBtn.onclick = resetElements;
resetBoxesBtn.onclick = resetBoxes;

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

function resetBoxes() {
    op1.value = "";
    op2.value = "";
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
        for (let i = 0; i < 100; i++) {
            let ex1 = eval(op1.value);
            let ex2 = eval(op2.value);
            
            let element = document.getElementById("nDiv-" + i);
            let operation = document.getElementById("operation");
            
            switch (operation.value) {
                case "equals":
                    if (ex1 === ex2)
                        element.style.backgroundColor = "#aaa";
                break;
                
                case "not-equals":
                    if (ex1 !== ex2)
                        element.style.backgroundColor = "#aaa";
                break;
                
                case "bigger":
                    if (ex1 > ex2)
                        element.style.backgroundColor = "#aaa";
                break;
                
                case "lower":
                    if (ex1 < ex2)
                        element.style.backgroundColor = "#aaa";
                break;
                
                case "bigger-equals":
                    if (ex1 >= ex2)
                        element.style.backgroundColor = "#aaa";
                break;
                
                case "lower-equals":
                    if (ex1 <= ex2)
                        element.style.backgroundColor = "#aaa";
                break;
            }
        }
    } catch (e) {} // pra thread n cair
}

function initLoop() {
    window.requestAnimationFrame(loop);
}

function loop() {
    parse();
    
    window.requestAnimationFrame(loop);
}
