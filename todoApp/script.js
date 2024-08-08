let textInput = document.querySelector(".textInput");
let textButton = document.querySelector(".textButton");

textButton.addEventListener("click", addTodo);

textInput.addEventListener("keypress", (e) => {
    if(e.key == "Enter") {
        addTodo()
    }
})

function addTodo() {
  let todoText = textInput.value.trim();

  const editButton = document.createElement("button");
  editButton.className = "editButton";

  const deleteButton = document.createElement("button");
  deleteButton.className = "deleteButton";

  if (todoText !== "") {
    var ul = document.querySelector(".todolist");
    const li = document.createElement("li");
    li.textContent = todoText;
    editButton.textContent = "Edit";
    deleteButton.textContent = "Delete";
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    ul.appendChild(li);
  }

  editButton.addEventListener('click', ()=> {
    console.log("Inside Edit Button")
  })
}
