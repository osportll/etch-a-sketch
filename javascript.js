let newDiv = document.createElement('div');
let container = document.querySelector('.container'); 

function createGrid() {

    //create a for loop that creates a "16x16" (256) divs

    for (let i = 0; i < 257; i++) {

        container.appendChild(newDiv.cloneNode(true));
        newDiv.classList.add('grid');

    }

}

createGrid();