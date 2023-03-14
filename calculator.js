let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function() {
    lowerArr.length = 0;
    upperArr.length = 0;
    lowerNum.innerHTML = "";
});
let backspaceButton = document.querySelector(".backspace");
backspaceButton.addEventListener("click", function() {
    lowerArr.pop();
    lowerNum.innerHTML = lowerArr.join("");
});

const upperNum = document.getElementById("upper");

const upperArr = [];


//add event listener to each square?
//can a fucntion have all operators in if statements so no need for multiple functions?
//get document by id add event listener of click to run one function
//that function will get value of that element and push to lower arr first

let squares = document.querySelectorAll(".square");
const lowerArr = [];
const lowerNum = document.getElementById("lower");
squares.forEach(function(square) {
    square.addEventListener('click', function() {
        let squareValue = this.innerHTML;
        lowerArr.push(squareValue);
        lowerNum.innerHTML = lowerArr.join("");
    });
});

let operators = document.querySelectorAll(".operator");
operators.forEach(function(operator) {
    operator.addEventListener("click", function() {
        let operatorValue = this.innerHTML;
        if (operatorValue !== "=") {
            upperArr.push(lowerArr.slice());
            lowerArr.length = 0;
        }
    });
});