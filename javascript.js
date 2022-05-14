let newDiv = document.createElement('div');
let main = document.querySelector('.main');
let container = document.querySelector('.container'); 
let changeGrid = document.querySelector('.change-grid');
let slider = document.querySelector('.slider');
let output = document.querySelector('.output-text');
let test = document.querySelector('.button');
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
draw();

function createNewGrid() {
    rowsAndColumns = slider.value;
    
    document.querySelectorAll(".boxes").forEach((e) => e.parentNode.removeChild(e));
    output.textContent = `${slider.value} x ${slider.value}`;

    createGrid();
    draw();

    return rowsAndColumns;
};

slider.addEventListener('input', createNewGrid); 


function draw() {

    let divs = document.querySelectorAll('.boxes');
    
    let isDrawing = false;

    /*This listens for clicks on the Rainbow button. When the button is clicked, isClicked is true and drawRainbows is called */

    let isClicked = false;
    test.addEventListener('click', () => {
    isClicked = true;
    console.log('button clicked ' + isClicked);
    });
    
    
    divs.forEach(smallDivs => {
        smallDivs.addEventListener('mousedown', () => {

            smallDivs.classList.add('hover');
            isDrawing = true;
        })
    
        smallDivs.addEventListener('mouseup', () => {
            isDrawing = false;
        })
    });
    
    
    document.addEventListener('mousedown', () => {
        isDrawing = true;
    })
    
    document.addEventListener('mouseup', () => {
        isDrawing = false;
    })
    

    divs.forEach(smallDivs => {
        smallDivs.addEventListener('mouseover', () => {

            if(isDrawing === true) {

                if(isClicked === false) {
                    smallDivs.classList.add('hover');
                    
                } else if (isClicked === true) {
                    
                        let randomColor1 = Math.floor(Math.random() * 256);
                        let randomColor2 = Math.floor(Math.random() * 256);
                        let randomColor3 = Math.floor(Math.random() * 256);

                        smallDivs.style.cssText = `background-color: rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`;
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


