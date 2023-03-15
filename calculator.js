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
squares.forEach(function(square) {
    square.addEventListener('click', function() {
        if(this.innerHTML !== "="){
            let squareValue = this.innerHTML;
            lowerArr.push(squareValue);
            lowerNum.innerHTML = lowerArr.join("");
        }else {
            operators();
        }

    });
});

let operators = document.querySelectorAll(".operator");
operators.forEach(function(operator) {
    operator.addEventListener("click", function() {
        let operatorValue = this.innerHTML;
        if (operatorValue !== "=") {
            upperArr.push(lowerArr.join(""));           
            upperNum.innerHTML = upperArr.join("");
            lowerArr.length = 0;
        }else if (operatorValue == "=") {
            let upperNumber = upperArr.slice(0, -1);
            let num1 = Number(lowerArr.join(""));
            let num2 = Number(upperArr.join(""));
            let upperOp = upperArr.pop();
            if (upperOp == "+") {
                let sum = num1 + num2;
                lowerNum.innerHTML = sum;
            }
        }
    });
});