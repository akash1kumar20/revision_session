let arrToStore;
onLoad();
function onLoad() {
  let dataComing = localStorage.getItem("tasks");
  arrToStore = dataComing ? JSON.parse(dataComing) : [];
  displayThings();
}
function taskDetails(event) {
  event.preventDefault();
  let taskAdded = {
    task: event.target.task.value,
    date: event.target.date.value,
    id: Math.random(),
  };
  arrToStore.push(taskAdded);
  localStorage.setItem("tasks", JSON.stringify(arrToStore));
  displayThings();
  location.reload();
}

function deleteTask(id) {
  arrToStore = arrToStore.filter((taskId) => taskId.id != id);
  localStorage.setItem("tasks", JSON.stringify(arrToStore));
  displayThings();
}

function editTask(id) {
  for (let i = 0; i < arrToStore.length; i++) {
    if (arrToStore[i].id == id) {
      document.getElementById("task").value = arrToStore[i].task;
      document.getElementById("date").value = arrToStore[i].date;
    }
  }
  arrToStore = arrToStore.filter((taskId) => taskId.id != id);
}

function displayThings() {
  let dataStored = JSON.parse(localStorage.getItem("tasks"));
  let displayDiv = document.querySelector("#displayDiv");
  let innerHtml = "";
  dataStored.forEach((data) => {
    innerHtml += `
          <div
            class="flex md:flex-row flex-col justify-between items-center mb-4 border px-4 border-black py-2 rounded-lg "
          >
            <p><span>${data.task}</span> <span>, ${data.date}</span></p>
            <p>
              <span class="bg-blue-800 px-2 mr-4 rounded-2xl"
                ><i class="fa-solid fa-pen" style="color: #ffd43b" onclick="editTask(${data.id})"></i
              ></span>
              <span class="bg-black px-2 rounded-2xl"
                ><i class="fa-solid fa-trash" style="color: #e31c1c" onclick="deleteTask(${data.id})"></i
              ></span>
            </p>
        </div>
            `;
  });
  displayDiv.innerHTML = innerHtml;
}
