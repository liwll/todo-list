import Tasks from "./tasks.js";

const tasks = new Tasks();

const newTaskListener = () => {
    const newTaskBtn = document.getElementById('new-task');
    newTaskBtn.addEventListener('click', () => {
        tasks.createTask();
    });
}

export default newTaskListener;