const container = document.querySelector('#container');



for (let i=1; i<10; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
    for (let j=1; j<10; j++){
        const item = document.createElement('div');
        item.classList.add('item');
        // item.setAttribute('flex', '1 0 24%');
        // flex-grow, flex-shrink, flex-basis
        item.setAttribute('width', '10%');


        item.textContent = 'div';
        row.appendChild(item);
    }
}