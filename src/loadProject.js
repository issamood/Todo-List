export default function loadProject(project){
    let projectName = project.innerHTML;
    projectName = String(projectName);

    if (sessionStorage.getItem(projectName) === null){
        const content = document.querySelector('.content');
        const contentTitle = document.querySelector('.contentTitle');
        
        contentTitle.innerHTML = projectName;

        //Add Task Button
        content.removeChild(document.querySelector('.add'));
        const add = document.createElement('div');
        add.classList.add('add');
        const addIcon = document.createElement('div');
        addIcon.classList.add('addIcon');
        const addText = document.createElement('div');
        addText.innerHTML = "Add Step";
        addText.classList.add('addText')
        add.appendChild(addIcon);
        add.appendChild(addText);
        add.addEventListener('click', () => {
            
        })

        content.appendChild(add);
    }
    else {

    }
}