//Helper functions for calculating date
Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});
Date.prototype.toDateInputValueOffset = (function(years) {
    const minutes = years * 365 * 24 * 60;
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset() + minutes);
    return local.toJSON().slice(0,10);
});

function renderExpandedTask(editMode) {
    if (editMode) {
        const todoList = document.getElementById('todo-list');
        const newTask = document.getElementById('new-task');

        //Render simple task
        const task = document.createElement('div');
        task.classList.add('task');
        todoList.insertBefore(task, newTask);
        
        //Append elements to left side of task
        const taskLeft = document.createElement('div');
        taskLeft.classList.add('task-left');
        task.appendChild(taskLeft);
    
        const checkIcon = document.createElement('ion-icon');
        checkIcon.classList.add('check-icon');
        checkIcon.name = 'checkbox';
        taskLeft.appendChild(checkIcon);
    
        const taskName = document.createElement('input');
        taskName.classList.add('task-name-edit');
        taskLeft.appendChild(taskName);
        
        //Append elements to right side of task
        const taskRight = document.createElement('div');
        taskRight.classList.add('task-right');
        task.appendChild(taskRight);
    
        const date = document.createElement('button');
        date.classList.add('date');
        taskRight.appendChild(date);

        // const dateIcon = document.createElement('ion-icon');
        // dateIcon.classList.add('date-icon');
        // dateIcon.name = 'calendar';
        // date.appendChild(dateIcon);

        const dateEdit = document.createElement('input');
        dateEdit.classList.add('date-edit');
        dateEdit.type = 'date'
        dateEdit.min = new Date().toDateInputValue();
        dateEdit.max = new Date().toDateInputValueOffset(50);
        date.appendChild(dateEdit);

        const delIcon = document.createElement('ion-icon');
        delIcon.classList.add('del-icon');
        delIcon.name = 'trash';
        taskRight.appendChild(delIcon);

        //Render expanded part
        const taskExpanded = document.createElement('div');
        taskExpanded.classList.add('task-expanded');
        todoList.insertBefore(taskExpanded, newTask);

        const priority = document.createElement('div');
        priority.classList.add('priority');
        taskExpanded.appendChild(priority);

        const priorityHi = document.createElement('button');
        priorityHi.classList.add('priority-hi');
        priorityHi.textContent = 'High Priority';
        priority.appendChild(priorityHi);

        const priorityMid = document.createElement('button');
        priorityMid.classList.add('priority-mid');
        priorityMid.textContent = 'Mid Priority';
        priority.appendChild(priorityMid);

        const priorityLow = document.createElement('button');
        priorityLow.classList.add('priority-low');
        priorityLow.textContent = 'Low Priority';
        priority.appendChild(priorityLow);

        const description = document.createElement('textarea');
        description.classList.add('description-edit');
        description.textContent = '';
        taskExpanded.appendChild(description);

        const descriptionBtns = document.createElement('div');
        descriptionBtns.classList.add('description-btns');
        taskExpanded.appendChild(descriptionBtns);

        const editBtn = document.createElement('button');
        editBtn.classList.add('description-btn');
        editBtn.textContent = 'Edit';
        descriptionBtns.appendChild(editBtn);

        const hideBtn = document.createElement('button');
        hideBtn.classList.add('description-btn');
        hideBtn.textContent = 'Hide';
        descriptionBtns.appendChild(hideBtn);
    } else {
        return;
    }
}


const tasks = [];

const newTaskListener = () => {
    const newTask = document.getElementById('new-task');
    newTask.addEventListener('click', () => {
        renderExpandedTask(true);
    });
}

export default newTaskListener;