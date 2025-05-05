

// what the user presses in the calculator
let selection;

buttons = ["1","2","3","/","4","5","6","*","1","2","3","-","0",".","=","+"];

function createGrid(size) {

    const buttonGrid = document.querySelector('.button-grid');
    buttonGrid.style.setProperty('--cols', size); 
    

    let previousSelection = "";
    let text = "";
    let firstNumber = "";
    let secondNumber = "";
    let currentOperator = "";
    let operatorCounter = 0;



    

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
                    
                        // if its the second time an operator was pressed
                        if (operatorCounter > 1) {
                            // the second number is saved 
                            secondNumber = previousSelection;
                    
                            // performs the calculation using the first operator that was selected
                            let result;

                            switch (currentOperator) {
                                case "+": result = +firstNumber + +secondNumber; break;
                                case "-": result = +firstNumber - +secondNumber; break;
                                case "*": result = +firstNumber * +secondNumber; break;
                                case "/": result = +secondNumber !== 0 ? +firstNumber / +secondNumber : "Error"; break;
                                default: result = +secondNumber;
                            }
                    
                            // shows the result in the display
                            displayElement.innerText = result;
                            // the first number is replaced as the result
                            firstNumber = result;
                            // cleans the display and the selection
                            previousSelection = "";
                            text = "";
                            // it saves the second selected operator
                            currentOperator = selection;
                            // sets the counter to 1
                            operatorCounter = 1;
                    
                        } else {
                            firstNumber = previousSelection;
                            currentOperator = selection;
                            previousSelection = "";
                            text = "";
                        }
                        break;


                        // if the user presses the = button
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
                            displayElement.innerText = result;
                            firstNumber = result;
                            // save the result for further calculations
                            previousSelection = result;
                            // resets the operator parts
                            currentOperator = "";
                            operatorCounter = 0;
                            break;

                

                
                default:
                    
                    text = previousSelection + selection;
                    displayElement.innerText = text;
                    previousSelection = text;
                    break;
            }

        });

        buttonGrid.appendChild(calcButton);
    }

    // clear button functionality
    const clearButton = document.querySelector(".clear");
    clearButton.addEventListener("click", () => {
        document.querySelector(".display").innerText = "";
        previousSelection = "";
        firstNumber = "";
        secondNumber = "";
        currentOperator = "";
        operatorCounter = "";
        
    });


    }

    
createGrid(4);








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