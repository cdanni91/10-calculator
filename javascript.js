
let firstNumber;
let secondNumber;
let operator;

buttons = ["1","2","3","%","4","5","6","*","1","2","3","-","0",".","=","+"];



function operate(firstNumber,operator,secondNumber) {

    firstNumber = +firstNumber;
    secondNumber = +secondNumber;

    let result;

    switch (operator) {
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "/":
        result = firstNumber / secondNumber;
            break;
        case "*":
        result = firstNumber * secondNumber;
            break;
        default:
            console.log("ERROR")
            break;
    }

    console.log(result);

}

operate("4","*","2");


function createGrid(size) {
    const buttonGrid = document.querySelector('.button-grid');

    buttonGrid.style.setProperty('--cols', size); 

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.innerText = buttons[i];
        buttonGrid.appendChild(cell);}
    }

createGrid(4);


/* add
subtract
multiply
divide */