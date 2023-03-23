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


//upper will be blank, but when an operator is clicked the lower array will be added to the upper as an array (array inside an array)

let x = 0;
const upperArr = [];
const lowerArr = [];
const squares = document.querySelectorAll(".square");
const lowerNum = document.querySelector("#lower");
const upperNum = document.querySelector("#upper");


squares.forEach(function(square) {
    square.addEventListener("click", function(){
        const value = square.textContent;
        //add if statment if upper and lower arrays are not 0 to clear them out?
        if (value !== "=" && square.classList.contains("number")) {
            lowerArr.push(value);
            lowerNum.textContent = lowerArr.join(" ");
        }else if (value !== "=" && square.classList.contains("operator")) {
            lowerArr.push(value);
            upperArr.push(lowerArr.join(" "));
            upperNum.textContent = upperArr.join(" ");
            lowerArr.length = 0;  
        }else if (value == "=") {
            let operator = upperArr.toString().slice(-1);
            let num1 = Number.parseFloat(upperArr);
            let num2 = Number.parseFloat(lowerArr);
            switch(operator) {
                case "+": 
                    x = num1 + num2;
                    break;
                case "-": 
                    x = num1 - num2;
                    break;
                case "*": 
                    x = num1 * num2;
                    break;
                case "/": 
                    x = num1 / num2;
                    break;
                default:
                    alert("No operator selected");
            }
            upperArr.push(lowerArr.join(""));
            upperNum.textContent = upperArr.join("");
            lowerArr.length = 0;
            lowerArr.push(x);
            lowerNum.textContent = lowerArr;
        }
    })
})