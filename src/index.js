//imports
import './style.css'
import loadMenu from './loadMenu.js'
import loadBanner from './loadBanner';
import loadContent from './loadContent';

//functions
function createContainer() {
    const container = document.createElement('div');
    container.setAttribute('id','container');
    document.body.appendChild(container);
}

function createLayout(container){
    loadBanner(container);
    loadMenu(container);
    loadContent(container);

    return container;
}

//Logic Application
createContainer();
const container = document.querySelector('#container')

createLayout(container);