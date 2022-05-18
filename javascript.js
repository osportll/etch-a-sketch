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
let maxWidth = 500;
let rowsAndColumns = 16;



function createGrid() {

    for (let i = 0; i < rowsAndColumns * rowsAndColumns; i++) {

        newDiv.classList.add('boxes');
        container.appendChild(newDiv.cloneNode(true));
    }

    let containerSize = maxWidth / rowsAndColumns;

    /* TODO: change this to use template literals instead */

    container.style.gridTemplateRows = 'repeat('+rowsAndColumns+', '+containerSize+'px)'
    container.style.gridTemplateColumns = 'repeat('+rowsAndColumns+', '+containerSize+'px)'

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

let isClicked = false;

function draw() {

    let divs = document.querySelectorAll('.boxes');
    
    /* let isDrawing = false;

    let isClicked = false; */

    rainbow.addEventListener('click', () => {
    isClicked = true;
    console.log(isClicked);
    });

    color.addEventListener('click', () => {
        isClicked = false;
        console.log(isClicked);
    });


    /* TODO: group all the forEach methods in just one forEach */
    
    divs.forEach(smallDivs => {
        smallDivs.addEventListener('mousedown', () => {

            if(!isClicked) {
                /* smallDivs.classList.add('hover'); */
                /* smallDivs.style.cssText = 'background-color: rgb(54, 54, 54)'; */
                smallDivs.style.cssText = `background-color: ${pickAColor()}`;
                isDrawing = true;

            } else if (isClicked) {
                smallDivs.style.cssText = `background-color: rgb(${createRandomColor()}, ${createRandomColor()}, ${createRandomColor()})`;
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

                if(!isClicked) {
                    /* smallDivs.classList.add('hover'); */
                    /* smallDivs.style.cssText = 'background-color: rgb(54, 54, 54)'; */
                    smallDivs.style.cssText = `background-color: ${pickAColor()}`;
                    
                } else if (isClicked) {
                        smallDivs.style.cssText = `background-color: rgb(${createRandomColor()}, ${createRandomColor()}, ${createRandomColor()})`;
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
    console.log(colorPicked);

    return colorPicked;
};

colorPicker.addEventListener('input', pickAColor);