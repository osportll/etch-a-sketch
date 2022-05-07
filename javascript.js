let newDiv = document.createElement('div');
let container = document.querySelector('.container'); 

function createGrid() {

    //create a for loop that creates a "16x16" (256) divs

    for (let i = 0; i < 500; i++) {

        container.appendChild(newDiv.cloneNode(true));
        newDiv.classList.add('boxes');
    }

}

createGrid();


let divs = document.querySelectorAll('.boxes');
console.log(divs);


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
})

divs.forEach(smallDivs => {
    smallDivs.ondragstart = () => {
        return false;
    }
});


