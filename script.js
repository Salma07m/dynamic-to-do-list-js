document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask(taskText, save = true) {
        // Create new <li> element
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');

        // Add click event to remove button
        removeButton.addEventListener('click', function() {
            listItem.remove();
            updateLocalStorage();
        });

        // Append remove button to <li> and <li> to task list
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Save to Local Storage if save is true
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
    }

    // Function to update Local Storage
    function updateLocalStorage() {
        const tasks = [];
        document.querySelectorAll('#task-list li').forEach(function(task) {
            tasks.push(task.textContent.trim());
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Event listener for add task button click
    addButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = ''; // Clear task input field
        } else {
            alert('Please enter a task!');
        }
    });

    // Event listener for 'Enter' key press in task input field
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            if (taskText !== '') {
                addTask(taskText);
                taskInput.value = ''; // Clear task input field
            } else {
                alert('Please enter a task!');
            }
        }
    });

    // Load tasks from Local Storage on page load
    loadTasks();
});
