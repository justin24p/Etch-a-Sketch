let gridContainer = document.getElementById('gridContainer');
let isMouseDown = false;

// buttons
//let colorButton = document.getElementById('1');
let rainButton = document.getElementById('2');
let eraseButton = document.getElementById('3');
let clearButton = document.getElementById('4');
let colorPicker = document.getElementById('colorpicker');
let slider = document.getElementById('slider');
// Global scope event listeners to target mouse actions

document.addEventListener("mousedown", () => {
    isMouseDown = true;
});

document.addEventListener("mouseup", () => {
    isMouseDown = false;
});

let gridMode = "grey";

// colorButton.addEventListener("click", () => {
//     gridMode = "grey";
// })


colorPicker.addEventListener("input", () => {
    gridMode = colorPicker.value;
})

eraseButton.addEventListener("click", () => { 
    gridMode = "rgb(245, 233, 217)";
})

let rainbow = rainButton.addEventListener("click", () => {
    gridMode = "rainbow";
})

function determineMode() { 
    return gridMode;
}

//
let userInput =  10

function creategrid() {
    for (let i = 0; i < userInput; i ++) {
        let rowElement = document.createElement('div');
        gridContainer.appendChild(rowElement);

        for (let j = 0; j < userInput; j ++) {
            let gridSize = 500 / userInput;
            let gridElement = document.createElement('div');

            gridElement.style.width = gridSize +  'px';
            gridElement.style.height = gridSize + 'px';

            rowElement.appendChild(gridElement)


            gridElement.addEventListener("mouseover", (event) => {
                //
                //
                if(isMouseDown && gridMode !== "rainbow") { 
                    gridElement.style.backgroundColor = determineMode();
                } 
                else if (isMouseDown && gridMode === "rainbow") {
                    let colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];
                    let random = colors[Math.floor(Math.random() * 7)];
                    gridElement.style.backgroundColor = random;
                }
            }); 
        }
        gridContainer.appendChild(rowElement);
    }
}

// default size
creategrid(userInput);

slider.addEventListener("input", () => {
    let sliderValue = parseInt(slider.value, 10);
    userInput = sliderValue
    gridContainer.innerHTML = '';
    creategrid();
})


// //clear grid function
clearButton.addEventListener("click", () => {
    let gridElements = gridContainer.querySelectorAll('div');

    gridElements.forEach((gridElement) => {
        gridElement.style.backgroundColor = "";
    });
});

