export default function loadMenu(container){
    //create Banner div
    const menu = document.createElement('div');
    menu.classList.add('menu');

    //This month
    const taskTab = document.createElement('div');
    const taskTabIcon = document.createElement('div');
    
    taskTab.classList.add('tab');
    taskTab.innerHTML = "Tasks Due";

    taskTabIcon.classList.add('icon');
    taskTabIcon.setAttribute('id','task');

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
    addProjectIcon.setAttribute('id','addProject');

    addProject.addEventListener('click',() => {

    });

    addProject.appendChild(addProjectIcon);

    menu.appendChild(addProject);
    //Final upload to container
    container.appendChild(menu);

    return container;
}