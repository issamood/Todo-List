import createBar from "./createBar";
import loadProject from "./loadProject";

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

    taskTab.addEventListener('click', () => {
        //Selecting necessary elements
        const content = document.querySelector(".content");
        const tasksDue = JSON.parse(sessionStorage.getItem("tasksDue"));
        const contentTitle = document.querySelector(".contentTitle");
        const taskAddText = document.querySelector(".addText");

        if (contentTitle === "Tasks To Do"){
            return;
        }

        //Clear content from tasks
        const taskBars = document.querySelectorAll('.taskBar');
        const descs = document.querySelectorAll('.descWindow');

        for (const taskBar of taskBars){
            content.removeChild(taskBar);
        }
        for (const desc of descs){
            content.removeChild(desc);
        }

        //Update title and add task button
        contentTitle.innerHTML = "Tasks To Do";
        taskAddText.innerHTML = "Add Task";

        //Load in bar elements into content div
        for (const i in tasksDue) {
            content.appendChild(createBar(tasksDue[i].title, tasksDue[i].desc, tasksDue[i].due, tasksDue[i].priority));
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
        menu.removeChild(addProject);

        //Create Project container
        const projectContainer = document.createElement('div');
        projectContainer.classList.add('projectContainer');
        
        //Project Name Input
        const projectName = document.createElement('input');
        projectName.setAttribute('type','text');
        projectName.classList.add('projectName');
        projectName.setAttribute('placeholder','Project Name');
        projectContainer.appendChild(projectName);

        //Add Project Button
        const addProjectBtn = document.createElement('button');
        addProjectBtn.classList.add('addProjectBtn');
        addProjectBtn.innerHTML = "Add";
        projectContainer.appendChild(addProjectBtn);
        addProjectBtn.addEventListener('click',() => {
            const projectTab = document.createElement('div');
            projectTab.classList.add('projectTab');
            projectTab.innerHTML = projectName.value;
            projectTab.addEventListener('click',() => {
                loadProject(projectTab);
            });

            menu.removeChild(projectContainer);
            menu.appendChild(projectTab);
            menu.appendChild(addProject);

        })

        //Cancel Add Project Button
        const cancelProjectBtn = document.createElement('button');
        cancelProjectBtn.classList.add('cancelProject');
        cancelProjectBtn.innerHTML = "Cancel"
        projectContainer.appendChild(cancelProjectBtn);
        cancelProjectBtn.addEventListener('click',() => {
            menu.removeChild(projectContainer);
            menu.appendChild(addProject);
        })

        menu.appendChild(projectContainer);
    });

    addProject.appendChild(addProjectIcon);

    menu.appendChild(addProject);
    //Final upload to container
    container.appendChild(menu);

    return container;
}