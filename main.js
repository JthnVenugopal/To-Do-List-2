let addToButton = document.getElementById('addToDo');
let container = document.getElementById('toDoContainer');
let inPutField = document.getElementById('inputField');

// Load tasks from localStorage on page load
document.addEventListener('DOMContentLoaded', loadTasks);

// addToButton.addEventListener('click', function() {
//   if (inPutField.value.trim() === "") return; // Prevent adding empty tasks

//   // Create a new div to hold the checkbox, paragraph, and remove button
//   let taskDiv = document.createElement('div');
//   taskDiv.classList.add('task-item', 'd-flex', 'align-items-center', 'mb-2');

//   // Create a checkbox element
//   let checkbox = document.createElement('input');
//   checkbox.type = 'checkbox';
//   checkbox.classList.add('mr-2');

//   // Create a paragraph element for the task text
//   let paragraph = document.createElement('p');
//   paragraph.classList.add('paragraph-styling', 'mb-0');
//   paragraph.innerText = inPutField.value;

//   // Create a button element for removing the task
//   let removeButton = document.createElement('button');
//   removeButton.innerText = 'Remove';
//   removeButton.classList.add('btn-danger', 'ml-2');
//   removeButton.addEventListener('click', function() {
//     taskDiv.remove();
//     saveTasks(); // Save updated tasks
//   });

addToButton.addEventListener('click', function() {
  if (inPutField.value.trim() === "") return; // Prevent adding empty tasks

  // Create a new list item to hold the checkbox and task text
  let taskDiv = document.createElement('li');
  taskDiv.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

  // Create a checkbox element
  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('mr-2');

  // Create a paragraph element for the task text
  let paragraph = document.createElement('p');
  paragraph.classList.add('paragraph-styling', 'mb-0');
  paragraph.innerText = inPutField.value;

  // Create a label to wrap the checkbox and paragraph
  let label = document.createElement('label');
  label.classList.add('d-flex', 'align-items-center');
  label.appendChild(checkbox);
  label.appendChild(paragraph);
  
  // Create a button element for removing the task
  let removeButton = document.createElement('button');
  removeButton.innerText = 'Remove';
  removeButton.classList.add('btn-danger', 'ml-2');
  removeButton.addEventListener('click', function() {
    taskDiv.remove();
    saveTasks(); // Save updated tasks
  });

  // Append elements to the task div
  taskDiv.appendChild(label);
  taskDiv.appendChild(removeButton);

  // Append the task div to the container
  container.appendChild(taskDiv);

  // Clear the input field
  inPutField.value = '';

  // Save tasks to localStorage
  saveTasks();
});

  // Append elements to the task div
  taskDiv.appendChild(checkbox);
  taskDiv.appendChild(paragraph);
  taskDiv.appendChild(removeButton);

  // Append the task div to the container
  container.appendChild(taskDiv);

  // Clear the input field
  inPutField.value = '';

  // Save tasks to localStorage
  saveTasks();
});

// Function to save tasks to localStorage
function saveTasks() {
  const tasks = [];
  const taskItems = document.querySelectorAll('.task-item');
  taskItems.forEach(item => {
    const taskText = item.querySelector('.paragraph-styling').innerText;
    const isChecked = item.querySelector('input[type="checkbox"]').checked;
    tasks.push({ text: taskText, completed: isChecked });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to load tasks from localStorage
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => {
    // Create a new div to hold the checkbox, paragraph, and remove button
    let taskDiv = document.createElement('div');
    taskDiv.classList.add('task-item', 'd-flex', 'align-items-center', 'mb-2');

    // Create a checkbox element
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed; // Set checkbox state
    checkbox.classList.add('mr-2');

    // Create a paragraph element for the task text
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling', 'mb-0');
    paragraph.innerText = task.text;

    // Create a button element for removing the task
    let removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.classList.add('btn-danger', 'ml-2');
    removeButton.addEventListener('click', function() {
      taskDiv.remove();
      saveTasks(); // Save updated tasks
    });

    // Append elements to the task div
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(paragraph);
    taskDiv.appendChild(removeButton);

    // Append the task div to the container
    container.appendChild(taskDiv);
  });
}
