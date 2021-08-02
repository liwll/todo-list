import todo from './todo.js';

const lists = () => {
    const listMap = new Map();

    let listIndex = 0;
    const lists = document.getElementById('lists');
    const newListBtn = document.getElementById('new-list-icon');
    newListBtn.addEventListener('click', () => {
        const newListInput = document.createElement('input');
        newListInput.classList.add('new-list');
        newListInput.value = 'New List';
        lists.appendChild(newListInput);
        // focus and select input after appending
        newListInput.focus();
        newListInput.select();
        // make input blur when escape or enter is pressed
        newListInput.addEventListener('keyup', (event) => {
            if (event.key === 'Escape' || event.key === "Enter") {
                newListInput.blur();
            }
        });
        // make input become button when blurred
        newListInput.addEventListener('blur', (event) => {
            event.preventDefault();
            const newList = document.createElement('button');
            newList.classList.add('list');
            newList.textContent = newListInput.value;
            //Add listener to button
            todo(newList);
            listMap.set(listIndex, newList.textContent);
            //Add to DOM
            lists.removeChild(lists.lastChild);
            lists.appendChild(newList);
        });
        listIndex++;
        
    })
}

export default lists;