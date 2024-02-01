const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const date = getCurrentDateTime();
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${date}</td>
            <td>${taskText}</td>
            <td class="actions">
                <button class="delete-button" onclick="deleteTask(this)">Eliminar</button>
                <button class="complete-button" onclick="completeTask(this)">Completar</button>
            </td>
        `;
        taskList.appendChild(newRow);
        taskInput.value = '';
        logEvent('Nueva tarea agregada: ' + taskText);
    } else {
        alert('Por favor, ingresa una tarea válida.');
    }
}

function deleteTask(button) {
    const row = button.closest('tr');
    const taskText = row.querySelector('td:nth-child(2)').textContent;
    row.remove();
    logEvent('Tarea eliminada: ' + taskText);
}

function completeTask(button) {
    const row = button.closest('tr');
    const taskText = row.querySelector('td:nth-child(2)').textContent;
    row.classList.add('completed');
    button.remove();
    logEvent('Tarea completada: ' + taskText);
}


function logEvent(message) {
    const log = '[' + getCurrentDateTime() + '] ' + message;
    console.log(log);
}

function getCurrentDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString('es-ES');
    const time = now.toLocaleTimeString('es-ES');
    return date + ' ' + time;
}
