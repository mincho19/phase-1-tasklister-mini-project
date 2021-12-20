document.addEventListener("DOMContentLoaded", () => {

  const list = document.getElementById("tasks");
  const input = document.getElementById("new-task-description");
  const deleteForm = document.getElementById("delete-task-form")
  const createForm = document.getElementById("create-task-form")
  
  createForm.addEventListener("submit", function(e) {
    addToDo(input.value);
    e.preventDefault();  //when the button is submitted, i need to invoke the preventDefault Method
  })

  function addToDo(toDo){
    const element = document.createElement('li');
    element.textContent = toDo;
    list.append(element);
  }
});

  deleteForm.addEventListener("submit", function(e) {
  // e.preventDefault()
  // e.stopPropagation()
  //e.preventDefault();
  deleteList();
  })

function deleteList(toDo){
    const list = document.getElementById("tasks");
    list.remove();
    list = document.createElement('ul');
    list.id = "tasks";
    document.div.h2.append(list);
}