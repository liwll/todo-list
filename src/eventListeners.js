import List from "./list.js";

const newListListener = () => {
    const lists = document.getElementById('lists');
    const newListBtn = document.getElementById('new-list-icon');
    newListBtn.addEventListener('click', () => {
        const listInput = document.createElement('input');
        listInput.classList.add('new-list');
        listInput.autocomplete = 'off';
        listInput.value = 'New List';
        lists.appendChild(listInput);
        // focus and select input after appending
        listInput.focus();
        listInput.select();
        // make input blur when escape or enter is pressed
        listInput.addEventListener('keyup', (event) => {
            if (event.key === 'Escape' || event.key === "Enter") {
                listInput.blur();
            }
        });
        // make input become button when blurred
        listInput.addEventListener('blur', (event) => {
            event.preventDefault();
            if (listInput.value != '') {
                const listBtn = document.createElement('button');
                listBtn.classList.add('list');
                listBtn.textContent = listInput.value;
                const list = new List(listInput.value);
                //Add listener to button
                listBtn.addEventListener('click', () => {
                    clearTodo();
                    renderTodo(list);
                    listTitleListener(list, listBtn);
                    newTaskListener(list);
                });
                //Add to DOM
                lists.removeChild(lists.lastChild);
                lists.appendChild(listBtn);
            }
        });
    });
}

const newTaskListener = (list) => {
    const newTaskBtn= document.getElementById('new-task');
    newTaskBtn.addEventListener('click', () => {
        list.createTask();
    });
}

function listTitleListener(list, listBtn) {
    const listTitle = document.getElementById('list-title');
    const listTitleEdit = document.getElementById('list-title-edit');
    
    listTitle.onclick = () => {
        listTitle.style = 'display: none'
        listTitleEdit.value = list.getName();
        listTitleEdit.style = 'display: block'
        listTitleEdit.focus();
        listTitleEdit.select();
        listTitleEdit.onkeyup = (event) => {
            if (event.key === 'Escape' || event.key === "Enter") {
                listTitleEdit.blur();
            }
        }
        listTitleEdit.onblur = (event) => {
            event.preventDefault();
            if (listTitleEdit.value != '') {
                list.setName(listTitleEdit.value);
                listTitle.textContent = list.getName();
                listBtn.textContent = list.getName();
            }
            listTitleEdit.style = 'display: none'
            listTitle.style = 'display: block'
        }
    }
}

function renderTodo(list) {
    const todoList = document.getElementById('todo-list');

    //render title
    const listTitle = document.getElementById('list-title');
    listTitle.textContent = list.getName();

    //render list
    if (list.getNumTasks() != 0) {
        list.renderAll();
    }
    
    //render new-task button
    const newTask = document.createElement('button');
    newTask.id = 'new-task';
    todoList.appendChild(newTask);

    //render new-task icon
    const newTaskIcon = document.createElement('ion-icon')
    newTaskIcon.id = 'new-task-icon';
    newTaskIcon.name = 'add';
    newTask.appendChild(newTaskIcon);
}

//Helper functions
function clearTodo() {
    const todoList = document.getElementById('todo-list');
    while (todoList.firstChild) (todoList.removeChild(todoList.firstChild));
}

export default newListListener;