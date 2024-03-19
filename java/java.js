let color = window.prompt();
let board = document.querySelector(".board");
let div = document.createElement("div");
div.classList.add("brush");


document.addEventListener("DOMContentLoaded", function() {
    let size = getSize();
    createBoard(size);

  


})

function countGraph() {
    let size = getSize();
    createBoard(size);
}

function createBoard(size) {
    let board = document.querySelector(".board");
    // The following code below is Dom manipulation and repeats how many rows you need along with how many rows you need
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for (i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.classList.add("squares");
        div.addEventListener("click", function(){
            div.style.backgroundColor = `${color}`;
        })
        board.insertAdjacentElement("beforeend", div);
    }
        
}


function getSize() {
    let userInput = window.prompt("Choose a number between 1-100");
    
    let choice = document.querySelector(".message");
    
    if (userInput === "") {
        choice.textContent = "Please choose a number a between 1 and 100";
    }

    else if (userInput >= 1 || userInput <= 100) {
        return userInput;
    }
}
// This is how you create a reset function
function graphReset() {
    let divs = document.querySelectorAll("div")

    divs.forEach(div => div.style.backgroundColor = 'white');
}

function getColor(){
    let color = window.prompt();
    return color;
}