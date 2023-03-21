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
// 

const upperArr = [];
const lowerArr = [];
const squares = document.querySelectorAll(".square");
const lowerNum = document.querySelector("#lower");
const upperNum = document.querySelector("#upper");


squares.forEach(square => {
    if(square.classList.contains("number")) {
        square.addEventListener("click", () => {
            const value = square.textContent;
            lowerArr.push(value);
            lowerNum.textContent = lowerArr.join("");
        })
    }else if (square.classList.contains("operator")) {
        square.addEventListener("click", () => {
            const value = square.textContent;
            if (value !== "=" && upperArr.length == 0) {
                lowerArr.push(value);
                upperArr.push(lowerArr.join(""));
                upperNum.textContent = upperArr.join("");
                lowerArr.length = 0;
                lowerNum.textContent = lowerArr.join("");
            }else if (value !== "=" && upperArr.length !== 0) {
                //need to convert upperArr to array so to seperate 2 and operator and pop off to get operator
                const num1 = parseFloat(upperArr.join(""));
                const num2 = parseFloat(lowerArr.join(""));
                switch (getOp) {
                    case "+":
                        lowerArr = [num1 + num2];
                        break;
                    case "-":
                        lowerArr = [num1 - num2];
                        break;
                    case "*":
                        lowerArr = [num1 * num2];
                        break;
                    case "/":
                        if (num2 !== 0) {
                            lowerArr = num1 / num2;
                        }else {
                            alert("You can not divide by zero");
                        }
                        break;
                    default:
                        alert("Error: Invalid operator")
                }
                lowerNum.textContent = lowerArr.join("");
            }
        })
    }
})