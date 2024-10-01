// Commit 1: Basic HTML structure
// Added basic HTML elements for the todo app: title, input field, add button, and empty todo list.

// Commit 2: Add Todo Functionality
// Added JavaScript functionality to add new todos to the list.

// Commit 3: Display Todos
// Updated HTML to display added todos in the todo list.

// Commit 4: Manage Todos (Mark as Complete)
// Added functionality to mark todos as complete.

document.addEventListener('DOMContentLoaded', function() {
    const newTodoInput = document.getElementById('new-todo');
    const addTodoButton = document.getElementById('add-todo');
    const todoList = document.getElementById('todo-list');

    addTodoButton.addEventListener('click', function() {
        const newTodoText = newTodoInput.value.trim();

        if (newTodoText !== '') {
            const newTodoItem = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.classList.add('todo-checkbox');

            const todoTextSpan = document.createElement('span');
            todoTextSpan.textContent = newTodoText;

            newTodoItem.appendChild(checkbox);
            newTodoItem.appendChild(todoTextSpan);
            todoList.appendChild(newTodoItem);
            newTodoInput.value = '';

            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    newTodoItem.classList.add('completed');
                } else {
                    newTodoItem.classList.remove('completed');
                }
            });
        }
    });
});