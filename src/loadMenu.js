export default function loadMenu(container){
    //create Banner div
    const menu = document.createElement('div');
    menu.classList.add('menu');

    //Today Tab
    const todayTab = document.createElement('div');
    const todayTabIcon = document.createElement('div');
    
    todayTab.classList.add('tab');
    todayTab.innerHTML = "Today";

    todayTabIcon.classList.add('material-symbols-outline');
    todayTabIcon.setAttribute('id','today');

    todayTab.appendChild(todayTabIcon);

    menu.appendChild(todayTab);

    //This month
    const monthTab = document.createElement('div');
    const monthTabIcon = document.createElement('div');
    
    monthTab.classList.add('tab');
    monthTab.innerHTML = "This Month";

    monthTabIcon.classList.add('icon');
    monthTabIcon.setAttribute('id','month');

    monthTab.appendChild(monthTabIcon);

    menu.appendChild(monthTab);

    //Projects
    const projects = document.createElement('div');
    projects.innerHTML = "Projects";
    projects.classList.add('projects');

    menu.appendChild(projects);

    //Add Project Tab
    const addProject = document.createElement('div');
    const addProjectIcon = document.createElement('div');

    addProject.innerHTML = "Add Project";

    addProject.classList.add('addProject');
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