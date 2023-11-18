let userInput =  10
let gridContainer = document.getElementById('gridContainer');
let isMouseDown = false;
let clearButton = document.getElementById('4');

// Global scope event listeners to target mouse actions
document.addEventListener("mousedown", () => {
    isMouseDown = true;
});

document.addEventListener("mouseup", () => {
    isMouseDown = false;
});



for (let i = 0; i < userInput; i ++) {
    let rowElement = document.createElement('div');
    gridContainer.appendChild(rowElement);

    for (let j = 0; j < userInput; j ++) {
        let gridSize = 500 / userInput;
        let gridElement = document.createElement('div');

        gridElement.style.width = gridSize +  'px';
        gridElement.style.height = gridSize + 'px';

        rowElement.appendChild(gridElement)


        gridElement.addEventListener("mousemove", (event) => {
            if(isMouseDown) {
                gridElement.style.backgroundColor = 'grey';
            } 
        }); 
    }
    gridContainer.appendChild(rowElement);
}

//clear grid function
clearButton.addEventListener("click", () => {
    let gridElements = gridContainer.querySelectorAll('div');

    gridElements.forEach((gridElement) => {
        gridElement.style.backgroundColor = "";
    });
    
});

