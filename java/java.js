
document.addEventListener("DOMContentLoaded", function() {
    createBoard(16);


})

function createBoard(size) {
    let board = document.querySelector(".board");
    // The following code below is Dom manipulation and repeats how many rows you need along with how many rows you need
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for (i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.classList.add("squares");
        board.insertAdjacentElement("beforeend", div);
    }
}
