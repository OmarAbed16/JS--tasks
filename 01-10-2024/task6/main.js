const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

document.addEventListener("DOMContentLoaded", loadTasks);

addTaskBtn.addEventListener("click", addTask);

function addTask() {
  const task = taskInput.value.trim();
  if (task) {
    createTaskElement(task);
    saveTaskInLocalStorage(task);
    taskInput.value = "";
  }
}

function createTaskElement(task) {
  const li = document.createElement("li");
  li.textContent = task;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
    li.remove();
    removeTaskFromLocalStorage(task);
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}

function saveTaskInLocalStorage(task) {
  let tasks = getTasksFromLocalStorage();
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTasksFromLocalStorage() {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : [];
}

function removeTaskFromLocalStorage(taskToRemove) {
  let tasks = getTasksFromLocalStorage();
  tasks = tasks.filter((task) => task !== taskToRemove);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = getTasksFromLocalStorage();
  tasks.forEach((task) => createTaskElement(task));
}
