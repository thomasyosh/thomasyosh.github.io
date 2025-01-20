const keyPad = document.querySelectorAll(".keyPad");
const display = document.getElementById("displayMonitor");
const operandKey = document.querySelectorAll(".operandKey");
const clearBtn = document.getElementById("clearBtn");
var displayList = [];
var numberList = [];
var operandList = [];


keyPad.forEach(item => item.addEventListener(
    "click",
    () => keyPadHandler(item.value)
)
);

operandKey.forEach(item => item.addEventListener(
    "click",
    () => operandKeyHandler(item.value)
)
);

clearBtn.addEventListener(
    "click",
    () => clearBtnHandler()
)

function displayHandler(value) {
    display.value = "";
    if (value == "." && displayList.length == 0) {
        displayList.push("0");
        displayList.push(".");
    } else displayList.push(value);
    // update value shown in the display monitor
    display.value = displayList.join("");
}

function keyPadHandler(value) {
    if (displayList.includes(".") && value == ".")
        return;
    displayHandler(value);
}

function operandKeyHandler(value) {
    displayList = [];
    let result = 0;
    numberList.push(Number(display.value));
    if (operandList[operandList.length - 1] === value) {
        switch (value) {
            case "+":
                result = addSum(
                    numberList[numberList.length - 2],
                    numberList[numberList.length - 1]
                );
                break;
            case "-":
                result = minusSum(
                    numberList[numberList.length - 2],
                    numberList[numberList.length - 1]
                );
                break;
        }
        displayResult(result);
        numberList = [];
        numberList.push(result);
    }

    operandList.push(value);

}

function clearBtnHandler() {
    displayList = [];
    numberList = [];
    display.value = 0;
}

function addSum(num1, num2) {
    result = num1 + num2;
    return num1 + num2;
}

function minusSum(num1, num2) {
    result = num1 - num2;
    return num1 - num2;
}

function displayResult(resultValue) {
    display.value = resultValue;
}