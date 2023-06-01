export default function loadMenu(container) {
    //create Banner div
    const menu = document.createElement('div');
    menu.classList.add('menu');

    //This month
    const taskTab = document.createElement('div');
    const taskTabIcon = document.createElement('div');

    taskTab.classList.add('tab');
    taskTab.classList.add('loadTask');
    taskTab.innerHTML = "Tasks Due";

    //FIXXX THISSSSSSSS
    taskTab.addEventListener('click', () => {
        const content = document.querySelector(".content");
        const tasksDue = JSON.parse(localStorage.getItem("tasksDue"));

        console.log(tasksDue);
        for (const i in tasksDue) {
            const container = document.createElement('div');
            container.classList.add('taskBar');

            const priorityBar = document.createElement('div');
            if (tasksDue[i].priority == "low") {
                priorityBar.classList.add('lowBar');
            }
            else if (tasksDue[i].priority == "medium") {
                priorityBar.classList.add('mediumBar');
            }
            else if (tasksDue[i].priority == "high") {
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
            taskTitle.innerHTML = tasksDue[i].title;
            taskTitle.classList.add('taskbarTitle');

            const taskbarDue = document.createElement('div');
            taskbarDue.innerHTML = tasksDue[i].due;
            taskbarDue.classList.add('taskbarDue');

            const taskDelete = document.createElement('div');
            taskDelete.classList.add('taskbarDelete');
            taskDelete.addEventListener('click', () => {
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
                    descWindow.innerHTML = tasksDue[i].desc;

                    container.insertAdjacentElement('afterend', descWindow);
                }
            })

            //Appending to Container
            container.appendChild(priorityBar);
            container.appendChild(doneLabel);
            container.appendChild(taskTitle);
            container.appendChild(taskbarDue);
            container.appendChild(taskDelete);

            content.appendChild(container);
        }

    });

    taskTabIcon.classList.add('icon');
    taskTabIcon.setAttribute('id', 'task');

    taskTab.appendChild(taskTabIcon);

    menu.appendChild(taskTab);

    //Projects
    const projects = document.createElement('div');
    projects.innerHTML = "Projects";
    projects.classList.add('projects');

    menu.appendChild(projects);

    //Add Project Tab
    const addProject = document.createElement('div');
    const addProjectIcon = document.createElement('div');

    addProject.innerHTML = "Add Project";

    addProject.classList.add('tab');
    addProjectIcon.classList.add('icon');
    addProjectIcon.setAttribute('id', 'addProject');

    addProject.addEventListener('click', () => {

    });

    addProject.appendChild(addProjectIcon);

    menu.appendChild(addProject);
    //Final upload to container
    container.appendChild(menu);

    return container;
}