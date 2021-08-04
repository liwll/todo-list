import Task from './task.js';

class List {
    constructor() {
        this.tasks = [];
    }

    getNumTasks() {
        return this.tasks.length;
    }

    createTask() {
        const newTask = new Task();
        newTask.setId(this.tasks.length);
        newTask.createContainer();
        newTask.renderExpandedTask();
        this.tasks.push(newTask);
    }

    renderAll() {
        this.tasks.forEach((task) => {
            task.createContainer();
            task.isEditing() ? task.renderExpandedTask() : task.renderTask();
        });
    }
}

export default List;