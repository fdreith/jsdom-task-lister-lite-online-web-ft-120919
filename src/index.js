document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form")
  form.addEventListener('submit', addTaskToList)

  function addTaskToList(event) {
    event.preventDefault()
    const taskInput = document.getElementById("new-task-description")
    const task = taskInput.value
    const tasks = document.getElementById("tasks")
    tasks.innerHTML += `<li> ${task} </li>`
    taskInput.value = ""
  }

});
