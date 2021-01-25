// SE LE PUEDEN AGREGAR 3 BOTONES PARA ALTERNAR ENTRE LOS DISTINTOS MODOS

function allowPaint(gridItems, mode) {
    gridItems.forEach(grid_item => {
        if (mode === 'default'){
            grid_item.addEventListener('mouseout', mouseOutDefault);    
        } else if (mode === 'rainbow') {
            grid_item.addEventListener('mouseout', mouseOutRainbow);
        } else if (mode === 'opacity'){
            grid_item.addEventListener('mouseout', mouseOutOpacity);
        }
        grid_item.addEventListener('mouseover', mouseOver);
        // grid_item.addEventListener('mouseout', mouseOut);
    })
}

function createGrid(mode, grid_size=15) {

    container.style['grid-template-columns'] = `repeat(${grid_size}, auto)`;
    container.style['grid-template-rows'] = `repeat(${grid_size}, auto)`;

    for (let i=1; i<=(grid_size ** 2); i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');
        container.appendChild(gridItem);
    }

    let gridItems = document.querySelectorAll('.gridItem');
    allowPaint(gridItems, mode);
}

function mouseOver(e) {
    e.target.classList.add('mouseOver');
}

function mouseOutDefault(e) {
    e.target.style['opacity'] = '1';
}

function random255() {
    return Math.floor(Math.random() * 256);
}

function mouseOutRainbow(e) {
    let color = `rgb(${random255()}, ${random255()}, ${random255()})`;
    e.target.style['background-color'] = color;
    e.target.style['opacity'] = '1';
}

function mouseOutOpacity(e){
    let opacity = parseFloat(e.target.style['opacity']);
    if (!opacity) {
        e.target.style['opacity'] = 0.1;
    } else if (opacity < 1.0) {
        opacity = opacity + 0.1;
        e.target.style['opacity'] = opacity;
    }
}

function resetGrid(mode) {
    do {
    gridSize = parseInt(prompt('Enter grid size (between 1 and 100): '));
    } while (isNaN(gridSize) || gridSize < 1 || gridSize > 100 );
    container.innerHTML = '';
    createGrid(mode, gridSize);
}


const container = document.querySelector('#container');
createGrid('default');

// const resetBtn = document.querySelector('#reset-btn');
// // resetBtn.addEventListener('click', resetGrid('rainbow'));
// resetBtn.addEventListener('click', () => {
//     resetGrid();
// });

const BnWBtn = document.querySelector('#bnw-btn');
const rainbowBtn = document.querySelector('#rainbow-btn');
const opacityBtn = document.querySelector('#opacity-btn');

BnWBtn.addEventListener('click', () => {
    resetGrid('default');
});

rainbowBtn.addEventListener('click', () => {
    resetGrid('rainbow');
});

opacityBtn.addEventListener('click', () => {
    resetGrid('opacity');
});