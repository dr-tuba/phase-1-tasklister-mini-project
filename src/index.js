document.addEventListener("DOMContentLoaded", () => {
  let header = document.querySelector("#list h2")
  header.textContent = "Steve's To-Do List"
});
const input = document.getElementById('new-task-description')
const taskForm = document.getElementById('create-task-form')
const taskList = document.getElementById("tasks")

function formHandler(e) {
  e.preventDefault()
  showTask(input.value)
}

function showTask(task) {
  let li = document.createElement('li')
  let p = document.createElement('p')
  let delButton = document.createElement('button')
  let dropDown = document.createElement('select')

  dropDown.innerHTML = `
  <option selected='selected'>Please choose a priority level</option>
  <option>High</option>
  <option>Medium</option>
  <option>Low</option>
  `

  dropDown.addEventListener('change', (e) => {
    switch(e.target.value) {
      case 'High': 
        return p.style.color = 'red'
      case 'Medium': 
        return p.style.color = 'yellow'
      case 'Low' : 
        return p.style.color = 'green'
    }
  })
  
  delButton.textContent = 'Delete'
  p.textContent = task

  

  delButton.addEventListener('click', (e) => {
    li.remove()
  })

  li.append(p, delButton, dropDown)
  taskList.append(li)

  input.value = ''
}

taskForm.addEventListener("submit", formHandler)