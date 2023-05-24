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
    const taskWindowContent = document.createElement('div');
    const taskContentHeader = document.createElement('h1');
    const taskContentTitle = document.createElement('div');
    const taskClose = document.createElement('button');
    taskClose.setAttribute('id','closeTaskWindow');
    taskClose.innerHTML = 'Close';
    taskClose.addEventListener('click', () => {
        taskWindow.classList.remove('show');
    })

    taskContentHeader.classList.add('taskContentHeader');
    taskContentHeader.innerHTML = 'Add Task';

    taskContentTitle.classList.add('taskContentTitle');
    taskContentTitle.innerHTML = 'Enter task title:';

    taskWindow.classList.add('taskWindow');
    window.addEventListener('click', (event) => {
        if (event.target == taskWindow) {
            taskWindow.classList.remove('show');
        }
    })
    taskWindowContent.classList.add('taskWindowContent');

    taskWindowContent.appendChild(taskContentHeader);
    taskWindowContent.appendChild(taskContentTitle);
    taskWindowContent.appendChild(taskClose);
    taskWindow.appendChild(taskWindowContent);
    content.appendChild(taskWindow);
    add.addEventListener('click', () => {
        taskWindow.classList.add('show');

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