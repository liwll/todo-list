const render = () => {
    //render header
    const content = document.getElementById('content');
    const app = document.createElement('div');
    app.id = 'app';
    content.appendChild(app);

    const header = document.createElement('header');
    header.id = 'header';
    const headerText = document.createElement('span');
    headerText.id = 'header-text';
    headerText.textContent = 'To. Do.';
    const githubLink = document.createElement('a');
    githubLink.href = 'https://github.com/liwll';
    const githubIcon = document.createElement('ion-icon');
    githubIcon.id = 'github-icon';
    githubIcon.setAttribute('name', 'logo-github');

    app.appendChild(header);
    header.appendChild(headerText);
    header.appendChild(githubLink);
    githubLink.appendChild(githubIcon);

    //render sidebar
    const sidebar = document.createElement('div');
    sidebar.id = 'sidebar';
    const sidebarTop = document.createElement('div');
    sidebarTop.id = 'sidebar-top';
    const sideText = document.createElement('span');
    sideText.id = 'side-text';
    sideText.textContent = 'Lists';
    const newListBtn = document.createElement('ion-icon');
    newListBtn.id = 'new-list-icon';
    newListBtn.setAttribute('name', 'add-circle');
    const lists = document.createElement('div');
    lists.id = 'lists';

    app.appendChild(sidebar);
    sidebar.appendChild(sidebarTop);
    sidebarTop.appendChild(sideText);
    sidebarTop.appendChild(newListBtn);
    sidebar.appendChild(lists);


    //render todo-list
    const todoContainer = document.createElement('div');
    todoContainer.id = 'todo-container';
    const listSettings = document.createElement('div');
    listSettings.id = 'list-settings';
    const listTitle = document.createElement('div');
    listTitle.id = 'list-title';
    const todoList = document.createElement('div');
    todoList.id = 'todo-list';

    app.appendChild(todoContainer);
    todoContainer.appendChild(listSettings);
    listSettings.appendChild(listTitle);
    todoContainer.appendChild(todoList);
}

export default render;