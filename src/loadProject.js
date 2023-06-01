import createBar from "./createBar";

export default function loadProject(project) {
    const projectName = project.innerHTML;

    //Selectors
    const content = document.querySelector('.content');
    const contentTitle = document.querySelector('.contentTitle');
    if (contentTitle.innerHTML === projectName){
        return;
    }

    contentTitle.setAttribute('id',projectName);
    contentTitle.innerHTML = projectName;


    //Clear content window of tasks
    const bars = document.querySelectorAll('.taskBar');
    const descs = document.querySelectorAll('.descWindow');

    for (const bar of bars) {
        content.removeChild(bar);
    }
    for (const desc of descs){
        content.removeChild(desc);
    }

    //Update add task button
    const addText = document.querySelector(".addText");
    const taskContentHeader = document.querySelector(".taskContentHeader");

    taskContentHeader.innerHTML = "Add Step";
    addText.innerHTML = "Add Step";

    //Load steps (FINAL STEP)
    if (sessionStorage.getItem(projectName) === null){
        
    }
    else{
        const steps = JSON.parse(sessionStorage.getItem(projectName));

        for (let i in steps){
            console.log(i);
            content.appendChild(createBar(steps[i].title, steps[i].desc, steps[i].due, steps[i].priority))
        }
    }
}