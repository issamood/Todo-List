//imports
import './style.css'

//functions
function createContainer() {
    const container = document.createElement('div');
    container.setAttribute('id','container');
    document.body.appendChild(container);
}

function createDiv(name){
    const element = document.createElement('div');
    element.classList.add(name);

    return element;
}

function createLayout(container){
    container.appendChild(createDiv('banner'));
    container.appendChild(createDiv('menu'));
    container.appendChild(createDiv('content'));

    return container;
}

//Logic Application
createContainer();
createLayout(document.querySelector('#container'));