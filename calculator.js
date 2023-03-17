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
            performCalculation();
        }

    });
});
function performCalculation() {
    let sum = 0;
    
}