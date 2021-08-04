import Task from './task.js';

class Tasks {
    constructor() {
        this.tasks = [];
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

export default Tasks;