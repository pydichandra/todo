// Commit 1: Basic HTML structure
// Added basic HTML elements for the todo app: title, input field, add button, and empty todo list.

// Commit 2: Add Todo Functionality
// Added JavaScript functionality to add new todos to the list.

document.addEventListener('DOMContentLoaded', function() {
  const newTodoInput = document.getElementById('new-todo');
  const addTodoButton = document.getElementById('add-todo');
  const todoList = document.getElementById('todo-list');

  addTodoButton.addEventListener('click', function() {
    const newTodoText = newTodoInput.value.trim();

    if (newTodoText !== '') {
      const newTodoItem = document.createElement('li');
      newTodoItem.textContent = newTodoText;
      todoList.appendChild(newTodoItem);
      newTodoInput.value = '';
    }
  });
});