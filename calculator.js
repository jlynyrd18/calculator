//functions for each operator +,-,*, and /
const lowerNum = document.getElementById("lower");
const upperNum = document.getElementById("upper");
const lowerArr = Array.from(lowerNum);
const upperArr = Array.from(upperNum);

//add event listener to each square?
//can a fucntion have all operators in if statements so no need for multiple functions?
//get document by id add event listener of click to run one function
//that function will get value of that element and push to lower arr first

let squares = document.querySelectorAll(".square");
squares.forEach(function(square) {
    square.addEventListener('click', function() {
        let squareID = this.getAttribute('id');        
    });
});