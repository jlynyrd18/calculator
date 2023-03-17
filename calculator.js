let clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", function() {
    lowerArr.length = 0;
    upperArr.length = 0;
    lowerNum.innerHTML = "0";
    upperNum.innerHTML = "0";
})
let backspaceButton = document.querySelector(".backspace");
backspaceButton.addEventListener("click", function() {
    lowerArr.pop();
    lowerNum.innerHTML = lowerArr.join("");
});


//add event listener to each square?
//can a fucntion have all operators in if statements so no need for multiple functions?
//get document by id add event listener of click to run one function
//that function will get value of that element and push to lower arr first

let squares = document.querySelectorAll(".square");
const lowerArr = [];
const upperArr = [];
const lowerNum = document.getElementById("lower");
const upperNum = document.getElementById("upper");
let operators = ["+", "-", "*", "/"];
let equal = ["="];
squares.forEach(function(square) {
    square.addEventListener('click', function() {
        if(!isNaN(this.innerHTML) || this.innerHTML === "."){
            let squareValue = this.innerHTML;
            lowerArr.push(squareValue);
            lowerNum.innerHTML = lowerArr.join("");
        }else if (operators.includes(this.innerHTML)) {
            lowerArr.push(this.innerHTML);
            upperArr.push(lowerArr.join(""));
            upperNum.innerHTML = upperArr.join("");
            lowerArr.length = 0;
        }else if (this.innerHTML == "=") {
            console.log(performCalculation());
        }

    });
});

//function that gets the operator and does that operation and returns the sum
function performCalculation() {
    //have return statement after each if statment
    let operator = upperArr.pop();
    let firstNum = upperArr.slice(0, -1);
    let num1 = Number(firstNum.join(""));
    let num2 = Number(lowerArr.join(""));

    if (operator == "+") {
        let sum = num1 + num2;
    } else if (operator == "-") {
        let sum = num1 - num2;
    } else if (operator == "*") {
        let sum = num1 * num2;
    } else if (operator == "/" && num2 == 0) {
        alert("You can not divide by zero.");
        return "Error";
    } else if (operator == "/") {
        let sum = num1 / num2;
    }
    return sum;
    console.log(sum);
    upperArr.push(operator, num2);
    upperNum.innerHTML = upperArr.join("");
    lowerArr.length = 0;
    lowerArr.push(sum);
    lowerNum.innerHTML = lowerArr.join("");

}