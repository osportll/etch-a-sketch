let newDiv = document.createElement('div');
let container = document.querySelector('.container'); 
let changeGrid = document.querySelector('.change-grid');
let maxWidth = 500;


let rowsAndColumns = 16;

function createGrid() {

    for (let i = 0; i < rowsAndColumns * rowsAndColumns; i++) {

        newDiv.classList.add('boxes');
        container.appendChild(newDiv.cloneNode(true));
    }

    let containerSize = maxWidth / rowsAndColumns;

    container.style.gridTemplateRows = 'repeat('+rowsAndColumns+', '+containerSize+'px)'
    container.style.gridTemplateColumns = 'repeat('+rowsAndColumns+', '+containerSize+'px)'

};

createGrid();
draw();

function createNewGrid() {
    rowsAndColumns = prompt("Enter a number");
    
    document.querySelectorAll(".boxes").forEach((e) => e.parentNode.removeChild(e));

    createGrid();
    draw();

    return rowsAndColumns;
}

changeGrid.addEventListener('click', createNewGrid);


function draw() {

    let divs = document.querySelectorAll('.boxes');
    
    let isDrawing = false;
    
    
    divs.forEach(smallDivs => {
        smallDivs.addEventListener('mousedown', () => {
            smallDivs.classList.add('hover');
            isDrawing = true;
            console.log(isDrawing);
        })
    
        smallDivs.addEventListener('mouseup', () => {
            isDrawing = false;
            console.log(isDrawing);
        })
    });
    

    let mouseDown = 0;
    
    document.addEventListener('mousedown', () => {
        ++mouseDown
        console.log(mouseDown);
    })
    
    document.addEventListener('mouseup', () => {
        --mouseDown
        console.log(mouseDown);
    })
    

    divs.forEach(smallDivs => {
        smallDivs.addEventListener('mouseover', () => {

            if(mouseDown === 1) {
                isDrawing = true;
            } else if (mouseDown === 0) {
                isDrawing = false;
            }
    
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


    let slider = document.querySelector('.slider');
    let output = document.querySelector('.output-text');
    
    output.textContent = `${rowsAndColumns} x ${rowsAndColumns}`

    /* slider.addEventListener('input', () => {
        output.textContent = `${slider.value} x ${slider.value}`;
    }); */

    slider.addEventListener('input', createNewGrid);


    
    
    /* if(mouseDown === 1) {
        isDrawing = true;
    } else if (mouseDown === 0) {
        isDrawing = false;
    } */
    
    /* container.addEventListener('mouseleave', () => {
        if(mouseDown === 1) {
            isDrawing = true;
        } else if (mouseDown === 0) {
            isDrawing = false;
        }
    }); */
    


    
   /*  container.addEventListener('mousedown', () => {
            isDrawing = true;
        });

    container.addEventListener('mouseup', () => {
            isDrawing = false;
        }); */

    /* container.addEventListener('mouseleave', () => {
            isDrawing = false;
        }); */

    

/* divs.forEach(smallDivs => {
    smallDivs.addEventListener('mouseover', () => {

        if(isDrawing === true) {
            smallDivs.classList.add('hover');
        }
    })
});

divs.forEach(smallDivs => {
    smallDivs.addEventListener('mouseout', () => {
        isDrawing = false;
    })
});

divs.forEach(smallDivs => {
    smallDivs.ondragstart = () => {
        return false;
    }
}); */




/**
 * TODO: create a modal that lets you select an specific size of the grid. That way I can control what size all the grids.
 */

