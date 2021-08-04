import Task from "./task";

const tasks = [];

const newTaskListener = () => {
    const newTaskBtn = document.getElementById('new-task');
    newTaskBtn.addEventListener('click', () => {
        const newTask = new Task();
        newTask.setIsEditing(true);
        newTask.renderExpandedTask();
    });
}

export default newTaskListener;