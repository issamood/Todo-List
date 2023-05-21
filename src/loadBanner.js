export default function loadBanner(container){
    //create Banner div
    const banner = document.createElement('div');
    banner.classList.add('banner');

    //Today Tab
    const todayTab = document.createElement('div');
    const todayTabIcon = document.createElement('div');
    
    todayTab.classList.add('tab');
    todayTab.innerHTML = "Today";

    todayTabIcon.classList.add('icon');
    todayTabIcon.setAttribute('id','today');

    todayTab.appendChild(todayTabIcon);

    banner.appendChild(todayTab);

    //This month
    const monthTab = document.createElement('div');
    const monthTabIcon = document.createElement('div');
    
    monthTab.classList.add('tab');
    monthTab.innerHTML = "This Month";

    monthTabIcon.classList.add('icon');
    monthTabIcon.setAttribute('id','month');

    monthTab.appendChild(monthTabIcon);

    banner.appendChild(monthTab);

    //Projects
    const projects = document.createElement('div');
    projects.innerHTML = "Projects";
    projects.classList.add('projects');

    

    //Final upload to container
    container.appendChild(banner);

    return container;
}