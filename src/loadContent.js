import {format, compareAsc} from 'date-fns';

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
    const taskContentHeaderBar = document.createElement('div');
    const taskContentHeader = document.createElement('h1');
    const taskContentTitle = document.createElement('input');
    const taskContentDesc = document.createElement('textarea');
    const taskClose = document.createElement('button');
    const taskDue = document.createElement('div');
    const taskDueInput = document.createElement('input');
    const taskPriority = document.createElement('div');
    const lowPriority = document.createElement('input');
    const lowLabel = document.createElement('label');
    const mediumPriority = document.createElement('input');
    const mediumLabel = document.createElement('label');
    const highPriority = document.createElement('input');
    const highLabel = document.createElement('label');
    const priorityDiv = document.createElement('div');
    const taskAdd = document.createElement('button');

    //define variables and set functions and classes.
    taskAdd.innerHTML = 'Add Task';
    taskAdd.classList.add('taskAdd');
    taskAdd.addEventListener('click', () => {
        const task = (title,desc,due,priority) => {
            const bar = () => {
                const container = document.createElement('div');
                container.classList.add('taskBar');

                const priorityBar = document.createElement('div');
                if (priority == "low"){
                    priorityBar.classList.add('lowBar');
                }
                else if (priority == "medium"){
                    priorityBar.classList.add('mediumBar');
                }
                else if(priority == "high"){
                    priorityBar.classList.add('highBar');
                }
                const doneLabel = document.createElement('label');
                doneLabel.classList.add('doneLabel');
                const doneCheckbox = document.createElement('input');
                doneCheckbox.setAttribute('checked','');
                doneCheckbox.setAttribute('type','checkbox');

                doneLabel.appendChild(doneCheckbox);
                doneLabel.appendChild(document.createElement('span'));

                const taskTitle = document.createElement('h3');
                taskTitle.innerHTML = title;
                taskTitle.classList.add('taskbarTitle');

                const taskbarDue = document.createElement('div');
                taskbarDue.innerHTML = due;
                taskbarDue.classList.add('taskbarDue');

                const taskDelete = document.createElement('div');
                taskDelete.classList.add('taskbarDelete');
                taskDelete.addEventListener('click',() => {
                    content.removeChild(container);
                })

                container.addEventListener('click', ()=> {
                    if (container.classList.contains('expanded')){
                        //Close expanded div
                        container.classList.remove('expanded');
                        content.removeChild(document.querySelector('.descWindow'));
                    }
                    else {
                        container.classList.add('expanded');
                        const descWindow = document.createElement('div');
                        descWindow.classList.add('descWindow');
                        descWindow.innerHTML = desc;

                        container.insertAdjacentElement('afterend',descWindow);
                    }
                })

                //Appending to Container
                container.appendChild(priorityBar);
                container.appendChild(doneLabel);
                container.appendChild(taskTitle);
                container.appendChild(taskbarDue);
                container.appendChild(taskDelete);

                taskWindow.classList.remove('show');
                taskContentHeaderBar.classList.remove('showFlex');

                return container;
            }
            return {title,desc,due,priority,bar};
        }
        const title = document.querySelector('.taskContentTitle').value;
        const desc = document.querySelector('.taskContentDesc').value;
        const due = document.querySelector('.taskDueInput').value;
        const priority = document.querySelector('input[name="priority"]:checked').id;

        //All values working now

        const newTask = task(title, desc, due, priority);
        content.appendChild(newTask.bar());
    });

    taskPriority.innerHTML = "Priority: "
    taskPriority.classList.add('taskPriority');


    lowPriority.setAttribute('type','radio');
    lowPriority.setAttribute('id','low');
    lowPriority.setAttribute('name','priority');
    lowLabel.innerHTML = "Low";
    lowLabel.setAttribute('for','low');
    mediumPriority.setAttribute('type','radio');
    mediumPriority.setAttribute('id','medium');
    mediumPriority.setAttribute('name','priority');
    mediumLabel.innerHTML = "Medium";
    mediumLabel.setAttribute('for','medium');
    highPriority.setAttribute('type','radio');
    highPriority.setAttribute('id','high');
    highPriority.setAttribute('name','priority');
    highLabel.innerHTML = "High";
    highLabel.setAttribute('for','High');
    lowPriority.classList.add('low');
    mediumPriority.classList.add('medium');
    highPriority.classList.add('high');

    priorityDiv.appendChild(lowPriority);
    priorityDiv.appendChild(lowLabel);
    priorityDiv.appendChild(mediumPriority);
    priorityDiv.appendChild(mediumLabel);
    priorityDiv.appendChild(highPriority);
    priorityDiv.appendChild(highLabel);
    

    taskWindowContent.classList.add('taskWindowContent');


    taskContentHeader.classList.add('taskContentHeader');
    taskContentHeader.innerHTML = 'Add Task';

    taskContentHeaderBar.classList.add('contentHeaderBar');
    
    taskClose.setAttribute('id','closeTaskWindow');
    taskClose.addEventListener('click', () => {
        taskWindow.classList.remove('show');
        taskContentHeaderBar.classList.remove('showFlex');
    })

    taskContentHeaderBar.appendChild(taskContentHeader);
    taskContentHeaderBar.appendChild(taskClose);

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
            taskContentHeaderBar.classList.remove('showFlex');
        }
    })

    taskDue.innerHTML = "Task Due:"
    taskDue.classList.add('taskDue');
    taskDueInput.setAttribute('type','date');
    taskDueInput.classList.add('taskDueInput');

    //Append elements to taskWindowContent
    taskWindowContent.appendChild(taskContentTitle);
    taskWindowContent.appendChild(taskContentDesc);
    taskWindowContent.appendChild(taskDue);
    taskWindowContent.appendChild(taskDueInput);
    taskWindowContent.appendChild(taskPriority);
    taskWindowContent.appendChild(priorityDiv);
    taskWindowContent.appendChild(taskAdd);
    taskWindow.appendChild(taskContentHeaderBar);
    taskWindow.appendChild(taskWindowContent);
    

    //Add taskWindow to content
    content.appendChild(taskWindow);

    //Add Event to show task window on click on add task
    add.addEventListener('click', () => {
        taskWindow.classList.add('show');
        taskContentHeaderBar.classList.add('showFlex');
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