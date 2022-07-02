const mainForm = document.querySelector(".mainForm");
const mainInput = document.querySelector(".mainInput");
const mainTaskContainer = document.querySelector(".mainTaskContainer");

mainForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //create the elements of the list
  const taskContainer = document.createElement("div");
  taskContainer.classList.add("taskContainer");
  const createdTask = document.createElement("input");
  createdTask.value = mainInput.value;
  createdTask.type = "text";
  createdTask.setAttribute("readonly", "readonly");
  mainTaskContainer.appendChild(taskContainer);
  taskContainer.appendChild(createdTask);
  const editDelete = document.createElement("div");
  // edit delete buttons
  editDelete.classList.add("editDelete");
  const edit = document.createElement("button");
  edit.innerText = "Edit";
  edit.classList.add("edit");
  const del = document.createElement("button");
  del.innerText = "Delete";
  del.classList.add("delete");
  taskContainer.appendChild(editDelete);
  editDelete.appendChild(edit);
  editDelete.appendChild(del);
  //
  // delete functionality
  del.addEventListener("click", (e) => {
    mainTaskContainer.removeChild(taskContainer);
  });
  //
  // edit functionality
  edit.addEventListener("click", (e) => {
    if (edit.innerText.toLowerCase() == "edit") {
      edit.innerText = "Save";
      createdTask.removeAttribute("readonly");
      createdTask.focus();
    } else {
      edit.innerText = "Edit";
      createdTask.setAttribute("readonly", "readonly");
    }
  });
  // console.log(mainInput.value);
  mainInput.value = "";
});
