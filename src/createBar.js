export default function createBar(title, desc, due, priority) {
    const container = document.createElement('div');
    const content = document.querySelector('.content');
    const contentTitle = document.querySelector('.contentTitle');
    container.classList.add('taskBar');

    const priorityBar = document.createElement('div');
    if (priority == "low") {
        priorityBar.classList.add('lowBar');
    }
    else if (priority == "medium") {
        priorityBar.classList.add('mediumBar');
    }
    else if (priority == "high") {
        priorityBar.classList.add('highBar');
    }
    const doneLabel = document.createElement('label');
    doneLabel.classList.add('doneLabel');
    const doneCheckbox = document.createElement('input');
    doneCheckbox.setAttribute('type', 'checkbox');
    doneCheckbox.addEventListener('change', () => {
        if (doneCheckbox.checked) {
            taskTitle.classList.add('finished');
            taskTitle.classList.add('strike');
            taskbarDue.classList.add('finished');
            taskDelete.classList.add('finished');
        }
        else {
            taskTitle.classList.remove('finished');
            taskTitle.classList.remove('strike');
            taskbarDue.classList.remove('finished');
            taskDelete.classList.remove('finished');
        }
    })

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
    taskDelete.addEventListener('click', () => {
        if (contentTitle.innerHTML === "Tasks To Do"){
            const tasks = JSON.parse(sessionStorage.getItem("tasksDue"));
            for (const i in tasks){
                if (tasks[i].title === title){
                    tasks.splice(i,1);
                }
                sessionStorage.setItem("tasksDue", JSON.stringify(tasks));
            }
        }
        else{
            const tasks = JSON.parse(sessionStorage.getItem(contentTitle.innerHTML));
            for (const i in tasks){
                if (tasks[i].title === title){
                    tasks.splice(i,1);
                }
                sessionStorage.setItem(contentTitle.innerHTML, JSON.stringify(tasks));
            }
        }

        //DELETE TASK DATA FROM ARRAY IN STORAGE
        content.removeChild(container);
    })

    container.addEventListener('click', () => {
        if (container.classList.contains('expanded')) {
            //Close expanded div
            container.classList.remove('expanded');
            content.removeChild(document.querySelector('.descWindow'));
        }
        else {
            container.classList.add('expanded');
            const descWindow = document.createElement('div');
            descWindow.classList.add('descWindow');
            descWindow.innerHTML = desc;

            container.insertAdjacentElement('afterend', descWindow);
        }
    })

    //Appending to Container
    container.appendChild(priorityBar);
    container.appendChild(doneLabel);
    container.appendChild(taskTitle);
    container.appendChild(taskbarDue);
    container.appendChild(taskDelete);

    return container;
}