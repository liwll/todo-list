import Task from './task.js';

class List {
    constructor() {
        this.list = [];
    }
    numTasks = 0;

    createTask() {
        const newTask = new Task();
        newTask.setId(this.numTasks);
        newTask.createContainer();
        newTask.renderExpandedTask();
        this.numTasks++;
    }
}

export default List;