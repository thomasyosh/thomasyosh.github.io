const keyPad = document.querySelectorAll(".keyPad");
const display = document.getElementById("displayMonitor");
const operandKey = document.querySelectorAll(".operandKey");
var displayList = [];
var numberList = [];


keyPad.forEach(item=>item.addEventListener(
    "click",
    ()=>keyPadHandler(item.value)
)
);

operandKey.forEach(item=>item.addEventListener(
    "click",
    ()=>operandKeyHandler(item.value)
)
);

function displayHandler(value){
    display.value = "";
    if(value=="." && displayList.length == 0){
        displayList.push("0");
        displayList.push(".");
    }
        
    else displayList.push(value);
    // update value shown in the display monitor
    display.value = displayList.join("");
}

function keyPadHandler(value){
    if (displayList.includes(".") && value == ".")
        return;
    displayHandler(value);
}

function operandKeyHandler(value){
    numberList.push(Number(display.value));
    display.value = "";
}