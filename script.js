document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText !== '') {
            // Create new <li> element
            const listItem = document.createElement('li');
            listItem.textContent = taskText;

            // Create remove button
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-btn';

            // Add click event to remove button
            removeButton.addEventListener('click', function() {
                listItem.remove();
            });

            // Append remove button to <li> and <li> to task list
            listItem.appendChild(removeButton);
            taskList.appendChild(listItem);

            // Clear task input field
            taskInput.value = '';
        } else {
            // Alert user to enter a task if input is empty
            alert('Please enter a task!');
        }
    }

    // Event listener for add task button click
    addButton.addEventListener('click', addTask);

    // Event listener for 'Enter' key press in task input field
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Call addTask on page load
    addTask();
});
