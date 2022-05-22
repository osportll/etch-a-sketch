let newDiv = document.createElement('div');
let main = document.querySelector('.main');
let container = document.querySelector('.container'); 
let changeGrid = document.querySelector('.change-grid');
let slider = document.querySelector('.slider');
let output = document.querySelector('.output-text');
let rainbow = document.querySelector('.rainbow');
let color = document.querySelector('.color');
let colorPicker = document.querySelector('.color-picker');
let clear = document.querySelector('.clear');
let eraser = document.querySelector('.eraser');
let maxWidth = 500;
let rowsAndColumns = 16;



function createGrid() {

    for (let i = 0; i < rowsAndColumns * rowsAndColumns; i++) {

        newDiv.classList.add('boxes');
        container.appendChild(newDiv.cloneNode(true));
    }

    let squareSize = maxWidth / rowsAndColumns;
    

    /* TODO: change this to use template literals instead */

    container.style.gridTemplateRows = 'repeat('+rowsAndColumns+', '+squareSize+'px)'
    container.style.gridTemplateColumns = 'repeat('+rowsAndColumns+', '+squareSize+'px)'

    output.textContent = `${rowsAndColumns} x ${rowsAndColumns}`

};

createGrid();
/* draw(); */

function createNewGrid() {
    rowsAndColumns = slider.value;
    
    document.querySelectorAll(".boxes").forEach((e) => e.parentNode.removeChild(e));
    output.textContent = `${slider.value} x ${slider.value}`;

    createGrid();
    draw();

    return rowsAndColumns;
};

slider.addEventListener('input', createNewGrid); 


let isDrawing = false;
let rainbowClicked = false;
let eraserClicked = false;

function draw() {

    let divs = document.querySelectorAll('.boxes');
    
    /* let isDrawing = false;

    let rainbowClicked = false; */

    eraser.addEventListener('click', () => {
        eraserClicked = true;
        rainbowClicked = false;
    })

    rainbow.addEventListener('click', () => {
    rainbowClicked = true;
    eraserClicked = false;
    console.log(rainbowClicked);
    });

    color.addEventListener('click', () => {
        rainbowClicked = false;
        eraserClicked = false;
        console.log(rainbowClicked);
    });


    /* TODO: group all the forEach methods in just one forEach */
    
    divs.forEach(smallDivs => {
        smallDivs.addEventListener('mousedown', () => {

            if(!rainbowClicked) {
                /* smallDivs.classList.add('hover'); */
                /* smallDivs.style.cssText = 'background-color: rgb(54, 54, 54)'; */
                smallDivs.style.cssText = `background-color: ${pickAColor()}`;
                isDrawing = true;

            } else if (rainbowClicked) {
                smallDivs.style.cssText = `background-color: rgb(${createRandomColor()}, ${createRandomColor()}, ${createRandomColor()})`;
            } 

            if(eraserClicked) {
                smallDivs.style.cssText = 'background-color: #FFFFFF';
            }
        });
    
        smallDivs.addEventListener('mouseup', () => {
            isDrawing = false;
        });
    });
    
    
    document.addEventListener('mousedown', () => {
        isDrawing = true;
    })
    
    document.addEventListener('mouseup', () => {
        isDrawing = false;
    })
    

    divs.forEach(smallDivs => {
        smallDivs.addEventListener('mouseover', () => {

            if(isDrawing) {

                if(!rainbowClicked) {
                    /* smallDivs.classList.add('hover'); */
                    /* smallDivs.style.cssText = 'background-color: rgb(54, 54, 54)'; */
                    smallDivs.style.cssText = `background-color: ${pickAColor()}`;
                    
                } else if (rainbowClicked) {
                        smallDivs.style.cssText = `background-color: rgb(${createRandomColor()}, ${createRandomColor()}, ${createRandomColor()})`;
                }

                if(eraserClicked) {
                    smallDivs.style.cssText = 'background-color: #FFFFFF';
                }
            }
        })
    });


    divs.forEach(smallDivs => {
        smallDivs.ondragstart = () => {
            return false;
        }
    });

};

function createRandomColor(color) {
    color = Math.floor(Math.random() * 256);
    return color;
};

function clearGrid() {
    document.querySelectorAll('.boxes').forEach((e) => {
        /* e.classList.remove('hover'); */
        e.removeAttribute('style');
    
    });
};

clear.addEventListener('click', clearGrid);

draw();


function pickAColor(colorPicked) {
    colorPicked = colorPicker.value;
    

    return colorPicked;
};

colorPicker.addEventListener('input', pickAColor);


let buttons = document.querySelectorAll('button');

function toggleActive() {

    buttons.forEach(e => {
        
        e.addEventListener('click', () => {
        
            if(e === buttons[0]) {
                e.classList.add('active');
                buttons[1].classList.remove('active');
                buttons[2].classList.remove('active');

            } else if(e === buttons[1]) {
                e.classList.add('active');
                buttons[0].classList.remove('active');
                buttons[2].classList.remove('active');

            } else if(e === buttons[2]) {
                e.classList.add('active');
                buttons[0].classList.remove('active');
                buttons[1].classList.remove('active');

            }
        })
    }) 

}

toggleActive();