function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value;

  if (task === "") return;

  let li = document.createElement("li");

  li.innerHTML = `
    <span onclick="toggleDone(this)">⬜ ${task}</span>
    <button onclick="deleteTask(this)">❌</button>
  `;

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}
