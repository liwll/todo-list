import newTaskListener from "./newTaskListener.js";

const todo = (element) => {
    element.addEventListener('click', () => {
        clearTodo(element);
        renderTodo(element.textContent);
    });
}

function clearTodo() {
    const todoList = document.getElementById('todo-list');
    while (todoList.firstChild) (todoList.removeChild(todoList.firstChild));
}

function renderTodo(title) {
    const todoList = document.getElementById('todo-list');
    //render title
    const listTitle = document.getElementById('list-title');
    listTitle.textContent = title;
    
    //render new-task button
    const newTask = document.createElement('button');
    newTask.id = 'new-task';
    todoList.appendChild(newTask);
    newTaskListener();

    //render new-task icon
    const newTaskIcon = document.createElement('ion-icon')
    newTaskIcon.id = 'new-task-icon';
    newTaskIcon.name = 'add';
    newTask.appendChild(newTaskIcon);
    
}

export default todo;