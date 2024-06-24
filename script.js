function addTask(tasKInput, tasKList) {
    const tasKText = tasKInput.value.trim();
    if (tasKText !== "") {
        const li = document.createElement("li");
        li.innerHTML = ` 
            <span>${tasKText}</span>
            <button class="editTask">Editar</button>
            <button class="deleteTask">Remover</button>`;
        tasKList.appendChild(li);
        tasKInput.value = "";

        // Dizendo ao botão 'Editar' o que fazer quando for clicado
        const editButton = li.querySelector(".editTask");
        editButton.addEventListener("click", function() {
            editTask(this);
        });

        // Dizendo ao botão 'Remover' o que fazer quando for clicado
        const deleteButton = li.querySelector(".deleteTask");
        deleteButton.addEventListener("click", function() {
            deleteTask(this);
        });
    }
}
function editTask(button) {
    const li = button.parentElement;
    const taskText = li.firstChild.textContent.trim(); // Seleciona o texto da tarefa
    const newTaskText = prompt("Edite a tarefa:", taskText);
    

    if (newTaskText === null || newTaskText.trim() === "") {
        alert("A tarefa não pode estar vazia.");
        return;
    }
    li.querySelector("span").textContent = newTaskText; // Atualiza o texto da tarefa
}
function deleteTask(button) {
    const li = button.parentElement;
    li.parentNode.removeChild(li);
}