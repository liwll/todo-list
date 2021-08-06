import Task from './task.js';

class List {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }
    currentId = 0;

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    } 

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