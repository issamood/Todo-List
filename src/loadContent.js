export default function loadContent(container){
    //Create content container
    const content = document.createElement('div');
    content.classList.add('content')

    //Content Header
    const contentTitle = document.createElement('div');
    contentTitle.innerHTML = "Tasks To Do";
    contentTitle.classList.add('contentTitle')
    content.appendChild(contentTitle);

    //Add Task Button
    const add = document.createElement('div');
    add.classList.add('add');

    //Add Task Window
    //declare task window content
    const taskWindow = document.createElement('div');
    const taskWindowContent = document.createElement('div');
    const taskContentHeader = document.createElement('h1');
    const taskContentTitle = document.createElement('input');
    const taskContentDesc = document.createElement('textarea');
    const taskClose = document.createElement('button');
    const taskDue = document.createElement('div');
    const taskDueInput = document.createElement('input');
    const taskPriority = document.createElement('div');
    const lowPriority = document.createElement('button');
    const mediumPriority = document.createElement('button');
    const highPriority = document.createElement('button');
    const taskAdd = document.createElement('button');

    //define variables and set functions and classes.
    taskAdd.innerHTML = 'Add Task';
    taskAdd.classList.add('taskAdd');
    taskAdd.addEventListener('click', () => {
        
    });

    taskPriority.innerHTML = "Priority: "
    taskPriority.classList.add('taskPriority');

    lowPriority.innerHTML = "Low";
    mediumPriority.innerHTML = "Medium";
    highPriority.innerHTML = "High";
    lowPriority.classList.add('low');
    mediumPriority.classList.add('medium');
    highPriority.classList.add('high');

    taskWindowContent.classList.add('taskWindowContent');

    taskClose.setAttribute('id','closeTaskWindow');
    taskClose.innerHTML = 'Close';
    taskClose.addEventListener('click', () => {
        taskWindow.classList.remove('show');
    })

    taskContentHeader.classList.add('taskContentHeader');
    taskContentHeader.innerHTML = 'Add Task';

    taskContentTitle.classList.add('taskContentTitle');
    taskContentTitle.setAttribute('type','text');
    taskContentTitle.setAttribute('placeholder','Task Title');

    taskContentDesc.classList.add('taskContentDesc');
    taskContentDesc.setAttribute('rows','8');
    taskContentDesc.setAttribute('cols','40');
    taskContentDesc.setAttribute('placeholder','Task Description');

    taskWindow.classList.add('taskWindow');
    window.addEventListener('click', (event) => {
        if (event.target == taskWindow) {
            taskWindow.classList.remove('show');
        }
    })

    taskDue.innerHTML = "Task Due:"
    taskDue.classList.add('taskDue');
    taskDueInput.setAttribute('type','text');

    //Append elements to taskWindowContent
    taskWindowContent.appendChild(taskClose);
    taskWindowContent.appendChild(taskContentHeader);
    taskWindowContent.appendChild(taskContentTitle);
    taskWindowContent.appendChild(taskContentDesc);
    taskWindowContent.appendChild(taskDue);
    taskWindowContent.appendChild(taskDueInput);
    taskWindowContent.appendChild(taskPriority);
    taskWindowContent.appendChild(lowPriority);
    taskWindowContent.appendChild(mediumPriority);
    taskWindowContent.appendChild(highPriority);
    taskWindowContent.appendChild(taskAdd);
    taskWindow.appendChild(taskWindowContent);
    

    //Add taskWindow to content
    content.appendChild(taskWindow);

    //Add Event to show task window on click on add task
    add.addEventListener('click', () => {
        taskWindow.classList.add('show');
    });

    //Creating add task tab
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