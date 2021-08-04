import Task from './task.js';

class List {
    constructor() {
        this.tasks = [];
    }
    currentId = 0;

    getNumTasks() {
        return this.tasks.length;
    }

    createTask() {
        const newTask = new Task();
        newTask.setId(this.currentId);
        newTask.createContainer();
        newTask.renderExpandedTask();
        this.tasks.push(newTask);
        this.currentId++;
    }

    filterDeletedTasks() {
        this.tasks = this.tasks.filter((task) => {
            return task.getId() !== 'deleted';
        });
    }

    renderAll() {
        this.filterDeletedTasks();
        this.tasks.forEach((task) => {
            task.createContainer();
            task.isEditing() ? task.renderExpandedTask() : task.renderTask();
        });
    }
}

export default List;