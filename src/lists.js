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
        newListInput.focus();
        newListInput.select();
        //make input become button
        newListInput.addEventListener('keyup', (event) => {
            if (event.key === 'Escape' || event.key === "Enter") {
                newListInput.blur();
            }
        });
        newListInput.addEventListener('blur', (event) => {
            event.preventDefault();
            const newList = document.createElement('button');
            newList.classList.add('list');
            newList.textContent = newListInput.value;
            listMap.set(listIndex, newList.textContent);
            lists.removeChild(lists.lastChild);
            lists.appendChild(newList);
        });
        listIndex++;
    })
}

export default lists;