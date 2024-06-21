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

        // Adicionando ouvinte de evento ao botão "Editar"
        const editButton = li.querySelector(".editTask");
        editButton.addEventListener("click", function() {
            editTask(this);
        });

        // Adicionando ouvinte de evento ao botão "Remover"
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