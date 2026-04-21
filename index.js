let currentInput = "";
const result = document.getElementById("result");
const history = document.getElementById("history");


function append(value) {
    currentInput += value;
    result.textContent = currentInput;
}
function clearAll() {
    currentInput = "";
    result.textContent = "0";
    history.textContent = "";
}
function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    result.textContent = currentInput || "0";
}   
function calculate() {
    try {history.textContent = currentInput ;
        currentinput = eval(currentInput).toString();
        result.textContent = currentInput;
    } catch (error) {
        result.textContent = "Error";
    }    }   