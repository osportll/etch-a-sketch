let newDiv = document.createElement('div');
let main = document.querySelector('.main');
let container = document.querySelector('.container'); 
let changeGrid = document.querySelector('.change-grid');
let slider = document.querySelector('.slider');
let output = document.querySelector('.output-text');
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
    

    let mouseDown = false;
    
    document.addEventListener('mousedown', () => {
        mouseDown = true;
        console.log(mouseDown);
    })
    
    document.addEventListener('mouseup', () => {
        mouseDown = false;
        console.log(mouseDown);
    })
    

    divs.forEach(smallDivs => {
        smallDivs.addEventListener('mouseover', () => {

            if(mouseDown === true) {
                isDrawing = true;
            } else if (mouseDown === false) {
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

