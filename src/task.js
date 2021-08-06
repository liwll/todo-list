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
    #isEditing = true;
    #id = -1;

    getId() {
        return this.#id;
    }

    setId(id) {
        this.#id = id;
    }

    isEditing() {
        return this.#isEditing;
    }

    checkCompletion() {
        const fieldsCompleted = [true, true, true];
        if (!this.name || this.name == '') {
            fieldsCompleted[0] = false;
        }
        if (!this.date) {
            fieldsCompleted[1] = false;
        }
        if (!this.priority) {
            fieldsCompleted[2] = false;
        }
        return fieldsCompleted;
    }

    //Container must always be created before rendering task
    createContainer() {
        const todoList = document.getElementById('todo-list');
        const newTask = document.getElementById('new-task');
        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task-container');
        taskContainer.id = 'task-' + this.#id;
        todoList.insertBefore(taskContainer, newTask);
    }

    renderTask() {
        const taskContainer = document.getElementById(`task-${this.#id}`);
        
        const task = document.createElement('div');
        task.classList.add('task');
        task.classList.add(`task-${this.priority}`);
        taskContainer.appendChild(task);
        
        //Append elements to left side of task
        const taskLeft = document.createElement('div');
        taskLeft.classList.add('task-left');
        task.appendChild(taskLeft);
    
        const checkIcon = document.createElement('ion-icon');
        checkIcon.classList.add('check-icon');
        checkIcon.name = 'checkbox';
        taskLeft.appendChild(checkIcon);
    
        if (this.#isEditing) {
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
    
        if (this.#isEditing) {
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
        delIcon.id = `del-${this.#id}`;
        delIcon.name = 'trash';
        delIcon.addEventListener('click', () => {
            while (taskContainer.firstChild) {
                taskContainer.removeChild(taskContainer.firstChild);
            }
            taskContainer.parentNode.removeChild(taskContainer);
            this.setId('deleted');
        });
        taskRight.appendChild(delIcon);

        return task;
    }

    renderExpandedTask() {
        //Render simple view
        const task = this.renderTask();

        const taskContainer = document.getElementById(`task-${this.#id}`);
        //Have to remove and append for correct order
        taskContainer.removeChild(task);
        taskContainer.appendChild(task);

        //Render expanded view
        const taskExpanded = document.createElement('div');
        taskExpanded.classList.add('task-expanded');
        taskExpanded.classList.add(`task-expanded-${this.priority}`);
        taskContainer.appendChild(taskExpanded);
    
        const priority = document.createElement('div');
        priority.classList.add('priority');
        taskExpanded.appendChild(priority);

        if (this.#isEditing) {
            const priorityHi = document.createElement('button');
            priorityHi.classList.add('priority-hi');
            priorityHi.textContent = 'High Priority';
            priorityHi.addEventListener('click', () => {
                this.priority = 'hi';
                priorityMid.className = 'priority-mid';
                priorityLow.className = 'priority-low';
                priorityHi.className = 'priority-hi-active';
                taskExpanded.className = `task-expanded-${this.priority}`;
                task.className = `task-${this.priority}`;
            });
            priority.appendChild(priorityHi);
        
            const priorityMid = document.createElement('button');
            priorityMid.classList.add('priority-mid');
            priorityMid.textContent = 'Mid Priority';
            priorityMid.addEventListener('click', () => {
                this.priority = 'mid';
                priorityHi.className = 'priority-hi';
                priorityLow.className = 'priority-low';
                priorityMid.className = 'priority-mid-active';
                taskExpanded.className = `task-expanded-${this.priority}`;
                task.className = `task-${this.priority}`;
            });
            priority.appendChild(priorityMid);
        
            const priorityLow = document.createElement('button');
            priorityLow.classList.add('priority-low');
            priorityLow.textContent = 'Low Priority';
            priorityLow.addEventListener('click', () => {
                this.priority = 'low';
                priorityHi.className = 'priority-hi';
                priorityMid.className = 'priority-mid';
                priorityLow.className = 'priority-low-active';
                taskExpanded.className = `task-expanded-${this.priority}`;
                task.className = `task-${this.priority}`;
            });
            priority.appendChild(priorityLow);
        } else {
            switch (this.priority) {
                case 'hi':
                    const priorityHi = document.createElement('button');
                    priorityHi.classList.add('priority-hi-active');
                    priorityHi.textContent = 'High Priority';
                    priority.appendChild(priorityHi);
                    break;
                case 'mid':
                    const priorityMid = document.createElement('button');
                    priorityMid.classList.add('priority-mid-active');
                    priorityMid.textContent = 'Mid Priority';
                    priority.appendChild(priorityMid);
                    break;
                case 'low':
                    const priorityLow = document.createElement('button');
                    priorityLow.classList.add('priority-low-active');
                    priorityLow.textContent = 'Low Priority';
                    priority.appendChild(priorityLow);
                    break;
            };
        }
    
        if (this.#isEditing) {
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
    
        if (this.#isEditing) {
            const finishBtn = document.createElement('button');
            finishBtn.classList.add('description-btn');
            finishBtn.textContent = 'Finish';
            finishBtn.addEventListener('click', () => {
                const fieldsCompleted = this.checkCompletion();
                if (!fieldsCompleted[0] | !fieldsCompleted[1] || !fieldsCompleted[2]) {
                    errorMessage.textContent = 'Please fill out the following fields:';
                    if (!fieldsCompleted[0]) {
                        errorMessage.textContent += ' Name,'
                    }
                    if (!fieldsCompleted[1]) {
                        errorMessage.textContent += ' Date,'
                    }
                    if (!fieldsCompleted[2]) {
                        errorMessage.textContent += ' Priority,'
                    }
                    errorMessage.textContent = errorMessage.textContent.substring(0, errorMessage.textContent.length - 1);
                    descriptionBtns.appendChild(errorMessage);
                }
                else {
                    this.#isEditing = false;
                    taskContainer.removeChild(taskExpanded);
                    taskContainer.removeChild(task);
                    this.renderExpandedTask();
                }
            });
            descriptionBtns.appendChild(finishBtn);
        } else {
            const editBtn = document.createElement('button');
            editBtn.classList.add('description-btn');
            editBtn.textContent = 'Edit';
            editBtn.addEventListener('click', () => {
                this.#isEditing = true;
                taskContainer.removeChild(taskExpanded);
                taskContainer.removeChild(task);
                this.renderExpandedTask();
            });
            descriptionBtns.appendChild(editBtn);
        }

        if (!this.#isEditing) {
            const hideBtn = document.createElement('button');
            hideBtn.classList.add('description-btn');
            hideBtn.textContent = 'Hide';
            hideBtn.addEventListener('click', () => {
                taskContainer.removeChild(taskExpanded);
            });
            descriptionBtns.appendChild(hideBtn);
        }

        const errorMessage = document.createElement('div');
        errorMessage.classList.add('error-message');
        errorMessage.textContent = '';
    }
}

export default Task;