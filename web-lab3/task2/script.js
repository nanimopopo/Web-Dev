const inputField = document.querySelector('.input_field');
const addBtn = document.querySelector('.btn_submit');
const todoList = document.querySelector('.list');

function addTask() {
    const taskValue = inputField.value;

    //Add an element
    if (taskValue === '') {
        alert("Please enter a task!");
        return;
    }

    const taskItem = document.createElement('div');
    taskItem.classList.add('todo-item');

    taskItem.innerHTML = `
        <input type="checkbox" class="task-check">
        <span class="todo-text">${taskValue}</span>
        <button class="delete-btn">🗑️</button>
    `;

    
    todoList.appendChild(taskItem);
    inputField.value = '';

    //Checkbox
    const checkbox = taskItem.querySelector('.task-check');
    checkbox.addEventListener('change', () => {
        taskItem.querySelector('.todo-text').classList.toggle('completed');
    });

    //Delete
    const deleteBtn = taskItem.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        taskItem.remove();
    });
}


addBtn.addEventListener('click', addTask);

inputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});