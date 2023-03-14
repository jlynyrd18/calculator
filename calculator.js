//functions for each operator +,-,*, and /

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
