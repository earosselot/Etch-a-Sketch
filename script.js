function allowPaint(gridItems) {
    gridItems.forEach(grid_item => {
        grid_item.addEventListener('mouseover', mouseOver);
        grid_item.addEventListener('mouseout', mouseOut);
    })
}

function createGrid(grid_size=32) {

    container.style['grid-template-columns'] = `repeat(${grid_size}, auto)`;
    container.style['grid-template-rows'] = `repeat(${grid_size}, auto)`;

    for (let i=1; i<=(grid_size ** 2); i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');
        container.appendChild(gridItem);
    }

    let gridItems = document.querySelectorAll('.gridItem');
    allowPaint(gridItems);
}

function mouseOver(e) {
    e.target.classList.add('mouseOver');
}

// BASIC MOUSEOUT
// function mouseOut(e) {
//     e.target.classList.add('mouseOut');
// }

// RANDOM RGB COLOR MOUSEOUT START
function random255() {
    return Math.floor(Math.random() * 256);
}

function mouseOut(e) {
    let color = `rgb(${random255()}, ${random255()}, ${random255()})`;
    e.target.style['background-color'] = color;
}
// RANDOM RGB END

function resetGrid() {
    gridSize = parseInt(prompt('grid size (max 100): '));
    container.innerHTML = '';
    createGrid(gridSize);
}

const container = document.querySelector('#container');
createGrid();

const resetBtn = document.querySelector('#reset-btn');
resetBtn.addEventListener('click', resetGrid);

// FALTA AGREGAR LOS OPCIONALES
// FALTAN COMPROBACIONES Y LIMITES PARA EL PROMPT