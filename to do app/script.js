const form = document.querySelector("form");
const titleOfTheApp = document.getElementById("titleOfApp");
const addTask = document.querySelector(".add");
const mainTaskContainer = document.querySelector(".mainTaskContainer");
const taskListElement = document.querySelector(".taskList");

form.addEventListener("submit", addContent);

function addContent(e) {
  e.preventDefault();
  mainTaskContainer.innerHTML += `
    <div class="taskContainer">
    <div class="taskList">
      <input type="text" value="${titleOfTheApp.value}" id="createdTask" readonly />
    </div>
    <div class="editDelete">
      <button class="edit">Edit</button>
      <button onClick="deletePost(this)" class="delete">Delete</button>
    </div>
  </div>
    `;
  titleOfTheApp.value = "";
  const deleteButton = document.querySelector(".delete");
  const editButton = document.querySelector(".edit");
  const createdTask = document.getElementById("createdTask");
  editButton.addEventListener("click", (e) => {
    if (editButton.innerText == "Edit") {
      editButton.innerText = "Save";
      createdTask.removeAttribute("readonly");
      createdTask.focus();
    } else {
      editButton.innerText = "Edit";
      createdTask.setAttribute("readonly", "readonly");
    }
  });
}

function deletePost(e) {
  e.parentElement.parentElement.remove();
}

// function editPost(e) {
// createdTask.removeAttribute("readonly");
// console.log(e.taskListElement.firstChild);
// }
// function editPost(e) {
//   if (editButton.innerText == "Edit") {
//     editButton.innerText = "Save";
//     createdTask.removeAttribute("readonly");
//     createdTask.focus();
//   } else {
//     editButton.innerText = "Edit";
//     createdTask.setAttribute("readonly", "readonly");
//   }
// }
