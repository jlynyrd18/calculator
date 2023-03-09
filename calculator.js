//functions for each operator +,-,*, and /
const lowerNum = document.getElementById("lower");
const upperNum = document.getElementById("upper");
const lowerArr = Array.from(lowerNum);
const upperArr = Array.from(upperNum);

//add event listener to each square?
//can a fucntion have all operators in if statements so no need for multiple functions?
//get document by id add event listener of click to run one function
//that function will get value of that element and push to lower arr first
document.getElementById("square9").addEventListener("click", enterNums);
document.getElementById("square8").addEventListener("click", enterNums);
document.getElementById("square7").addEventListener("click", enterNums);
document.getElementById("square6").addEventListener("click", enterNums);
document.getElementById("square5").addEventListener("click", enterNums);
document.getElementById("square4").addEventListener("click", enterNums);
document.getElementById("square3").addEventListener("click", enterNums);
document.getElementById("square2").addEventListener("click", enterNums);
document.getElementById("square1").addEventListener("click", enterNums);
document.getElementById("square0").addEventListener("click", enterNums);

function enterNums() {

}