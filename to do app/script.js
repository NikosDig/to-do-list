const form = document.querySelector("form");
const titleOfTheApp = document.getElementById("titleOfApp");
const addTask = document.querySelector(".add");
const mainTaskContainer = document.querySelector(".mainTaskContainer");

form.addEventListener("submit", addContent);

function addContent(e) {
  e.preventDefault();
  mainTaskContainer.innerHTML += `
    <div class="taskContainer">
 
      <input type="text" value="${titleOfTheApp.value}" id="createdTask" readonly />

    <div class="editDelete">
      <button class="edit">Edit</button>
      <button onClick="deletePost(this)" class="delete">Delete</button>
    </div>
  </div>
    `;
  // clear the main title input
  titleOfTheApp.value = "";
  //
  // select the items created after the submit
  const deleteButton = document.querySelector(".delete");
  const editButton = document.querySelector(".edit");
  const createdTask = document.getElementById("createdTask");
  // edit button
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

//delete button function
function deletePost(e) {
  e.parentElement.parentElement.remove();
}

//
//
//
//
//
//                   <div class="taskList">
//
//                      </div>
//
//
//
//
//
//                    some attempts to fix edit button
//
//
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
//
//
//
//
//            try with inline onCLick function on the html
//
// function editPost(e) {
//   console.log(e.editButton);
//   if (editButton.innerText.toLowerCase() == "Edit") {
//     editButton.innerText = "Save";
//     e.parentElement.previousElementSibling.removeAttribute("readonly");
//     createdTask.focus();
//   } else {
//     editButton.innerText = "Edit";
//     e.parentElement.previousElementSibling.setAttribute("readonly", "readonly");
//   }
// }
