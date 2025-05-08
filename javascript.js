// what the user presses in the calculator
let selection;

buttons = ["1","2","3","/","4","5","6","*","7","8","9","-","0",".","=","+"];

function createGrid(size) {
    const buttonGrid = document.querySelector('.button-grid');
    buttonGrid.style.setProperty('--cols', size); 
    
    let previousSelection = "";
    let text = "";
    let firstNumber = "";
    let secondNumber = "";
    let currentOperator = "";
    let operatorCounter = 0;
    let isFloatPoint = false; // Track decimal point usage

    for (let i = 0; i < size * size; i++) {
        const calcButton = document.createElement('div');
        calcButton.innerText = buttons[i];

        calcButton.addEventListener("click", () => {
            const selection = buttons[i];
            const displayElement = document.querySelector(".display");

            switch (selection) {
                case "+":
                case "-":
                case "*":
                case "/":
                    operatorCounter += 1;
                    if (operatorCounter > 1) {
                        secondNumber = previousSelection;
                        let result;
                        switch (currentOperator) {
                            case "+": result = +firstNumber + +secondNumber; break;
                            case "-": result = +firstNumber - +secondNumber; break;
                            case "*": result = +firstNumber * +secondNumber; break;
                            case "/": result = +secondNumber !== 0 ? +firstNumber / +secondNumber : "Error"; break;
                            default: result = +secondNumber;
                        }
                        displayElement.innerText = (Math.round((result*100)))/100;
                        firstNumber = result;
                        previousSelection = "";
                        text = "";
                        currentOperator = selection;
                        operatorCounter = 1;
                        isFloatPoint = false; // Reset for new number
                    } else {
                        firstNumber = previousSelection;
                        currentOperator = selection;
                        previousSelection = "";
                        text = "";
                        isFloatPoint = false; // Reset for new number
                    }
                    break;

                case "=":
                    let result;
                    secondNumber = previousSelection;
                    switch (currentOperator) {
                        case "+": result = +firstNumber + +secondNumber; break;
                        case "-": result = +firstNumber - +secondNumber; break;
                        case "*": result = +firstNumber * +secondNumber; break;
                        case "/": result = +secondNumber !== 0 ? +firstNumber / +secondNumber : "Noooooo papucho nooo"; break;
                        default: result = +previousSelection;
                    }
                    displayElement.innerText = (Math.round((result*100)))/100;
                    firstNumber = result;
                    previousSelection = result;
                    currentOperator = "";
                    operatorCounter = 0;
                    isFloatPoint = previousSelection.includes('.'); // Update based on result
                    break;

                default:
                    if (selection === ".") {
                        if (isFloatPoint) break; // Ignore if already has decimal
                        isFloatPoint = true;
                    }
                    text = previousSelection + selection;
                    displayElement.innerText = text;
                    previousSelection = text;
                    break;
            }
        });

        buttonGrid.appendChild(calcButton);
    }

    // Clear button
    const clearButton = document.querySelector(".clear");
    clearButton.addEventListener("click", () => {
        document.querySelector(".display").innerText = "";
        previousSelection = "";
        firstNumber = "";
        secondNumber = "";
        currentOperator = "";
        operatorCounter = 0;
        isFloatPoint = false; // Reset on clear
    });

    // Backspace button
    const backSpaceButton = document.querySelector(".backspace");
    backSpaceButton.addEventListener("click", () => {
        let displayCurrentText = document.querySelector(".display").innerText;
        //remove last digit
        displayCurrentText = displayCurrentText.slice(0,-1);
        // replace the display text with the new value
        text = displayCurrentText;
        document.querySelector(".display").innerText = text;
        previousSelection = text;
    })
}

createGrid(4);


// Add keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;

    // Prevent default actions for specific keys
    const preventDefaultKeys = ['Enter', '=', 'Escape', 'Backspace', '+', '-', '*', '/', '.'];
    if (preventDefaultKeys.includes(key)) {
        event.preventDefault();
    }

    if (key === 'Enter' || key === '=') {
        // Handle equals button
        // find all the buttons and convert the nodes to an array
        const equalsButton = Array.from(document.querySelectorAll('.button-grid div'))
                            // busca el boton que tenga el inner text =
                            .find(btn => btn.innerText === '=');
                            // le hace click
                            equalsButton?.click();
    } else if (key === 'Escape') {
        // Handle clear button
        document.querySelector('.clear').click();
    } else if (key === 'Backspace') {
        // Handle backspace button
        document.querySelector('.backspace').click();

    } else if (buttons.includes(key)) {
        // Handle number/operator buttons
                        // idem, convierte en un array la lista de nodos de la botonera
                        const button = Array.from(document.querySelectorAll('.button-grid div'))
                        // encuentra el que coincida con lo que ingreso el usuario y le hace click
                        .find(btn => btn.innerText === key);
        button?.click();
    }
});


/* function operate(firstNumber,operator,secondNumber) {

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

operate("4","*","2"); */