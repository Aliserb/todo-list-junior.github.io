// task functional
let taskFunction = () => {
    // remove task
    let remove = document.getElementsByClassName("remove");
    for (let i = 0; i < remove.length; i++) {
        remove[i].onclick = function () {
            this.parentElement.remove();
        }
    }

    // task checked
    let taskList = document.querySelectorAll(".task_list .task_value");

    for (let i = 0; i < taskList.length; i++) {
        taskList[i].addEventListener('click', function(ev) {
            if (ev.target.className === 'task_value') {
                ev.target.classList.toggle('checked');
            } else {
                ev.target.classList.remove('checked');
            }
        }, false);
    }
}

taskFunction();

// add tasks
let addTask = () => {
    let newList = document.createElement("LI");
    newList.className = "";
    let newListSpan = document.createElement("SPAN");
    newListSpan.className = "task_value";
    newList.appendChild(newListSpan);
    let newListRemove = document.createElement("DIV");
    newListRemove.className = "remove";
    let removeText = document.createTextNode("x");
    newListRemove.appendChild(removeText);

    newList.appendChild(newListRemove);

    let taskValue = document.getElementById("add_task").value;
    let taskText = document.createTextNode(taskValue);
    newListSpan.appendChild(taskText);

    if (taskText == "") {
        alert("you have not added a task");
    } else {
        document.querySelector(".task_list ul").appendChild(newList);
        taskFunction();
    }
}   