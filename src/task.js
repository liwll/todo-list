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

class Task {
    constructor(name, date, priority, description) {
        this.name = name;
        this.date = date;
        this.priority = priority;
        this.description = description;
    }
    isEditing = true;
    id = -1;

    setId(id) {
        this.id = id;
    }

    createContainer() {
        const todoList = document.getElementById('todo-list');
        const newTask = document.getElementById('new-task');
        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task-container');
        taskContainer.id = 'task-' + this.id;
        todoList.insertBefore(taskContainer, newTask);
    }

    renderTask() {
        const taskContainer = document.getElementById(`task-${this.id}`);
        
        const task = document.createElement('div');
        task.classList.add('task');
        taskContainer.appendChild(task);
        
        //Append elements to left side of task
        const taskLeft = document.createElement('div');
        taskLeft.classList.add('task-left');
        task.appendChild(taskLeft);
    
        const checkIcon = document.createElement('ion-icon');
        checkIcon.classList.add('check-icon');
        checkIcon.name = 'checkbox';
        taskLeft.appendChild(checkIcon);
    
        if (this.isEditing) {
            const taskName = document.createElement('input');
            taskName.classList.add('task-name-edit');
            taskName.value = this.name === undefined ? '' : this.name;
            taskName.addEventListener('change', () => {
                this.name = taskName.value;
            });
            taskLeft.appendChild(taskName);
        } else {
            const taskName = document.createElement('button');
            taskName.classList.add('task-name');
            taskName.textContent = this.name;
            taskName.addEventListener('click', () => {
                while(taskContainer.firstChild) {
                    taskContainer.removeChild(taskContainer.firstChild);
                };
                this.renderExpandedTask();
            });
            taskLeft.appendChild(taskName);
        }
        
        //Append elements to right side of task
        const taskRight = document.createElement('div');
        taskRight.classList.add('task-right');
        task.appendChild(taskRight);
    
        const date = document.createElement('button');
        date.classList.add('date');
        taskRight.appendChild(date);
    
        if (this.isEditing) {
            const dateInput = document.createElement('input');
            dateInput.classList.add('date-edit');
            dateInput.type = 'date'
            dateInput.min = new Date().toDateInputValue();
            dateInput.max = new Date().toDateInputValueOffset(50);
            dateInput.value = this.date;
            dateInput.addEventListener('change', () => {
                this.date = dateInput.value;
            });
            date.appendChild(dateInput);
        } else {
            const dateText = document.createElement('span');
            dateText.classList.add('date-text');
            dateText.textContent = this.date;
            date.appendChild(dateText);

            const dateIcon = document.createElement('ion-icon');
            dateIcon.classList.add('date-icon');
            dateIcon.name = 'calendar-clear';
            date.appendChild(dateIcon);
        }
    
        const delIcon = document.createElement('ion-icon');
        delIcon.classList.add('del-icon');
        delIcon.name = 'trash';
        taskRight.appendChild(delIcon);

        return task;
    }

    renderExpandedTask() {
        //Render simple view
        const task = this.renderTask();

        const taskContainer = document.getElementById(`task-${this.id}`);
        //Have to remove and append for correct order
        taskContainer.removeChild(task);
        taskContainer.appendChild(task);

        //Render expanded view
        const taskExpanded = document.createElement('div');
        taskExpanded.classList.add('task-expanded');
        taskContainer.appendChild(taskExpanded);
    
        const priority = document.createElement('div');
        priority.classList.add('priority');
        taskExpanded.appendChild(priority);

        if (this.isEditing) {
            const priorityHi = document.createElement('button');
            priorityHi.classList.add('priority-hi');
            priorityHi.textContent = 'High Priority';
            priorityHi.addEventListener('click', () => {
                this.priority = 'High';
            })
            priority.appendChild(priorityHi);
        
            const priorityMid = document.createElement('button');
            priorityMid.classList.add('priority-mid');
            priorityMid.textContent = 'Mid Priority';
            priorityMid.addEventListener('click', () => {
                this.priority = 'Mid';
            })
            priority.appendChild(priorityMid);
        
            const priorityLow = document.createElement('button');
            priorityLow.classList.add('priority-low');
            priorityLow.textContent = 'Low Priority';
            priorityLow.addEventListener('click', () => {
                this.priority = 'Low';
            })
            priority.appendChild(priorityLow);
        } else {
            switch (this.priority) {
                case 'High':
                    const priorityHi = document.createElement('button');
                    priorityHi.classList.add('priority-hi');
                    priorityHi.textContent = 'High Priority';
                    priority.appendChild(priorityHi);
                    break;
                case 'Mid':
                    const priorityMid = document.createElement('button');
                    priorityMid.classList.add('priority-mid');
                    priorityMid.textContent = 'Mid Priority';
                    priority.appendChild(priorityMid);
                    break;
                case 'Low':
                    const priorityLow = document.createElement('button');
                    priorityLow.classList.add('priority-low');
                    priorityLow.textContent = 'Low Priority';
                    priority.appendChild(priorityLow);
                    break;
            };
        }
    
        if (this.isEditing) {
            const description = document.createElement('textarea');
            description.classList.add('description-edit');
            description.value = this.description === undefined ? '' : this.description;
            description.addEventListener('change', () => {
                this.description = description.value;
            })
            taskExpanded.appendChild(description);
        } else {
            const description = document.createElement('div');
            description.classList.add('description');
            description.textContent = this.description;
            taskExpanded.appendChild(description);
        }
    
        const descriptionBtns = document.createElement('div');
        descriptionBtns.classList.add('description-btns');
        taskExpanded.appendChild(descriptionBtns);
    
        if (this.isEditing) {
            const finishBtn = document.createElement('button');
            finishBtn.classList.add('description-btn');
            finishBtn.textContent = 'Finish';
            finishBtn.addEventListener('click', () => {
                this.isEditing = false;
                taskContainer.removeChild(taskExpanded);
                taskContainer.removeChild(task);
                this.renderExpandedTask();
            });
            descriptionBtns.appendChild(finishBtn);
        } else {
            const editBtn = document.createElement('button');
            editBtn.classList.add('description-btn');
            editBtn.textContent = 'Edit';
            editBtn.addEventListener('click', () => {
                this.isEditing = true;
                taskContainer.removeChild(taskExpanded);
                taskContainer.removeChild(task);
                this.renderExpandedTask();
            });
            descriptionBtns.appendChild(editBtn);
        }

        if (!this.isEditing) {
            const hideBtn = document.createElement('button');
            hideBtn.classList.add('description-btn');
            hideBtn.textContent = 'Hide';
            hideBtn.addEventListener('click', () => {
                taskContainer.removeChild(taskExpanded);
            });
            descriptionBtns.appendChild(hideBtn);
        }
    }
}

export default Task;