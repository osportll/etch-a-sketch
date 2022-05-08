let newDiv = document.createElement('div');
let container = document.querySelector('.container'); 
let changeGrid = document.querySelector('.change-grid');



let gridSize = 257;

function createGrid() {

    for (let i = 0; i < gridSize; i++) {

        container.appendChild(newDiv.cloneNode(true));
        newDiv.classList.add('boxes');
    }

};

createGrid();
draw();

function createNewGrid() {
    gridSize = prompt("Enter a number");
    
    document.querySelectorAll(".boxes").forEach((e) => e.parentNode.removeChild(e));

    createGrid();
    draw();
}

changeGrid.addEventListener('click', createNewGrid);


function draw() {

let divs = document.querySelectorAll('.boxes');

let isDrawing = false;


divs.forEach(smallDivs => {
    smallDivs.addEventListener('mousedown', (e) => {
        isDrawing = true;
        console.log(isDrawing);
        e.stopImmediatePropagation();
    })

    smallDivs.addEventListener('mouseup', () => {
        isDrawing = false;
        console.log(isDrawing);
    })
});

divs.forEach(smallDivs => {
    smallDivs.addEventListener('mouseover', () => {

        if(isDrawing === true) {
            smallDivs.classList.add('hover');
        }
    })
});

divs.forEach(smallDivs => {
    smallDivs.ondragstart = () => {
        return false;
    }
});
};

/**
 * TODO: create a modal that lets you select an specific size of the grid. That way I can control what size all the grids.
 */

