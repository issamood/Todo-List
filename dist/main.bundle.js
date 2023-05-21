(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

//imports


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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0c1xuXG5cbi8vZnVuY3Rpb25zXG5mdW5jdGlvbiBjcmVhdGVDb250YWluZXIoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCdjb250YWluZXInKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURpdihuYW1lKXtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKG5hbWUpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxheW91dChjb250YWluZXIpe1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVEaXYoJ2Jhbm5lcicpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRGl2KCdtZW51JykpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVEaXYoJ2NvbnRlbnQnKSk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG4vL0xvZ2ljIEFwcGxpY2F0aW9uXG5jcmVhdGVDb250YWluZXIoKTtcbmNyZWF0ZUxheW91dChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJykpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==