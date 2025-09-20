const grid = document.querySelector('.container');
const resetButton = document.querySelector('.reset');
let initialDimension = 16;

resetButton.addEventListener("click", () => {
    let dimension = prompt("How many squares per side?");
    while (dimension > 100 || dimension < 1) {
        dimension = prompt("Dimension must be greater than 0 and 100 or less");
    }
    resetGrid(initialDimension);
    createGrid(dimension);
    initialDimension = dimension; 
});

function createGrid(dimension) {
    for (let i = 0; i < dimension; i++) {
        const rowContainer = document.createElement("div");
        rowContainer.classList.add("row-container");
        for (let j = 0; j < dimension; j++) {
            const side = 800 / dimension; 
            const squareDiv = document.createElement("div");
            squareDiv.classList.add("square");
            squareDiv.addEventListener("mouseenter", () => {
                squareDiv.style.backgroundColor = 'black';
            });
            squareDiv.style.width = `${side}px`;
            squareDiv.style.height = `${side}px`;
            console.log(squareDiv.style.width); 

            rowContainer.appendChild(squareDiv); 
        }

        grid.appendChild(rowContainer);
    }
}

function resetGrid(dimension) {
    for (let i = 0; i < dimension; i++) {
        const rowContainer = document.querySelector(".row-container");
        for (let j = 0; j < dimension; j++) {
            const squareDiv = document.querySelector(".square");
            squareDiv.remove(); 
        }

        rowContainer.remove(); 
    }
}

createGrid(initialDimension);