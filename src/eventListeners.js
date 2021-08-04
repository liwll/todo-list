import List from "./list.js";

const newListListener = () => {
    const listMap = new Map();

    let listIndex = 0;
    const lists = document.getElementById('lists');
    const newListBtn = document.getElementById('new-list-icon');
    newListBtn.addEventListener('click', () => {
        const newListInput = document.createElement('input');
        newListInput.classList.add('new-list');
        newListInput.value = 'New List';
        lists.appendChild(newListInput);
        // focus and select input after appending
        newListInput.focus();
        newListInput.select();
        // make input blur when escape or enter is pressed
        newListInput.addEventListener('keyup', (event) => {
            if (event.key === 'Escape' || event.key === "Enter") {
                newListInput.blur();
            }
        });
        // make input become button when blurred
        newListInput.addEventListener('blur', (event) => {
            event.preventDefault();
            const newList = document.createElement('button');
            newList.classList.add('list');
            newList.textContent = newListInput.value;
            //Add listener to button
            newList.addEventListener('click', () => {
                clearTodo();
                renderTodo(newList.textContent);
            });
            listMap.set(listIndex, newList.textContent);
            //Add to DOM
            lists.removeChild(lists.lastChild);
            lists.appendChild(newList);
        });
        listIndex++;
        
    })
}

const newTaskListener = (element) => {
    const tasks = new List();

    element.addEventListener('click', () => {
        tasks.createTask();
    });
}

//Helper functions
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
    newTaskListener(newTask);
    todoList.appendChild(newTask);

    //render new-task icon
    const newTaskIcon = document.createElement('ion-icon')
    newTaskIcon.id = 'new-task-icon';
    newTaskIcon.name = 'add';
    newTask.appendChild(newTaskIcon);
}

export default newListListener;