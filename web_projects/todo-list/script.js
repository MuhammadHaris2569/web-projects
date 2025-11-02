// Get DOM elements
const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

// Add task when "Add" button is clicked
addBtn.addEventListener('click', addTask);

// Add task when Enter key is pressed
input.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});

function addTask() {
  const taskText = input.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create list item
  const li = document.createElement('li');
  li.textContent = taskText;

  // Toggle completed when clicked
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Create delete button
  const delBtn = document.createElement('button');
  delBtn.textContent = 'X';
  delBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent marking as complete
    li.remove();
  });

  li.appendChild(delBtn);
  taskList.appendChild(li);

  input.value = ''; // Clear input
}
