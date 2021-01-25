

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

function mouseOut(e) {
    e.target.classList.add('mouseOut');
}

function resetGrid() {
    gridSize = parseInt(prompt('grid size (max 100): '));
    // FALTAN COMPROBACIONES Y LIMITES PARA EL PROMPT
    container.innerHTML = '';
    createGrid(gridSize);
}


const container = document.querySelector('#container');
createGrid();

const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', resetGrid);

// FALTA AGREGAR LOS OPCIONALES
