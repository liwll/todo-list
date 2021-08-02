const todo = (element) => {
    element.addEventListener('click', () => {
        clearTodo(element);
        renderTodo(element.textContent);
    });
}

function clearTodo() {
    const todoList = document.querySelector('#todo-list');
    while (todoList.firstChild) (todoList.removeChild(todoList.firstChild));
}

function renderTodo(title) {
    const todoList = document.querySelector('#todo-list');
    //render title
    const listTitle = document.querySelector('#list-title');
    listTitle.textContent = title;
    //render new-task button
    const newTask = document.createElement('button');
    newTask.id = 'new-task';
    const newTaskIcon = document.createElement('ion-icon')
    newTaskIcon.id = 'new-task-icon';
    newTaskIcon.name = 'add';
    //Add to DOM
    newTask.appendChild(newTaskIcon);
    todoList.appendChild(newTask);
}

export default todo;