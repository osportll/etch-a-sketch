let newDiv = document.createElement('div');
let container = document.querySelector('.container'); 
let changeGrid = document.querySelector('.change-grid');



let gridSize = 500;

function createGrid() {

    for (let i = 0; i < gridSize; i++) {

        container.appendChild(newDiv.cloneNode(true));
        newDiv.classList.add('boxes');
    }

};

createGrid();
draw();


function createNewGrid() {

    gridSize = prompt("Enter a number to change grid size.");

    console.log(gridSize);

    for (let i = 0; i < gridSize; i++) {

        container.appendChild(newDiv.cloneNode(true));
        newDiv.classList.add('newBoxes');
        newDiv.classList.remove('boxes');

    }

    let oldDivs = document.querySelectorAll('.boxes');
    console.log(oldDivs);
    
    
    oldDivs.forEach(smallDivs => {
        smallDivs.setAttribute('style', 'display: none;');
    });

    draw();

};


changeGrid.addEventListener('click', createNewGrid);


function draw(divs) {

if (newDiv.classList.contains('boxes')) {
    divs = document.querySelectorAll('.boxes');
    console.log(divs);

} else if (newDiv.classList.contains('newBoxes')) {
    divs = document.querySelectorAll('.newBoxes');
    console.log(divs);
}


let isDrawing = false;


divs.forEach(smallDivs => {
    smallDivs.addEventListener('mousedown', () => {
        isDrawing = true;
        console.log(isDrawing);
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


function newDraw() {


}



