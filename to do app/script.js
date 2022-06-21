const form = document.querySelector("form");
const title = document.querySelector(".titleOfApp");
const addTask = document.querySelector(".add");
const mainTaskContainer = document.querySelector(".mainTaskContainer");

form.addEventListener("submit", conlog);

function addContent() {
  mainTaskContainer.innerHTML += `
    <div class="taskContainer">
    <div class="taskList">
      <input type="text" value="" readonly />
    </div>
    <div class="editDelete">
      <button class="edit">Edit</button>
      <button class="delete">Delete</button>
    </div>
  </div>
    `;
}

function conlog(e) {
  e.preventDefault();
  console.log(e.target);
}
