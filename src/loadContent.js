export default function loadContent(container){
    const content = document.createElement('div');
    content.classList.add('content')

    const contentTitle = document.createElement('div');

    contentTitle.innerHTML = "Tasks To Do";
    contentTitle.classList.add('contentTitle')

    content.appendChild(contentTitle);

    const add = document.createElement('div');
    add.classList.add('add');
    const taskWindow = document.createElement('div');
    taskWindow.classList.add('taskWindow');

    content.appendChild(taskWindow);
    add.addEventListener('click', () => {
        

    });

    const addIcon = document.createElement('div');
    addIcon.classList.add('addIcon');

    const addText = document.createElement('div');
    addText.innerHTML = "Add Task";
    addText.classList.add('addText')

    add.appendChild(addIcon);
    add.appendChild(addText);

    content.appendChild(add);


    container.appendChild(content);
    return container;
}