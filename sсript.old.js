let taskList = document.querySelectorAll(".task_list li");
// create close button
let closeButton = () => {
    for (let i = 0; i < taskList.length; i++) {
        let closeBtn = document.createElement("SPAN");
        let txt = document.createTextNode("\u00D7");
        closeBtn.className = "close";
        closeBtn.appendChild(txt);
        if (closeBtn.length < 0) {
            taskList[i].appendChild(closeBtn);
        } else {
            false;
        }
    }
}

closeButton();

for (let i = 0; i < taskList.length; i++) {
    taskList[i].addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);
}

let removeTask = () => {
    let close = document.getElementsByClassName("close");
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            this.parentElement.remove();
        }
    }
}

removeTask();

// add new task
let addTask = () => {
    let newList = document.createElement("LI");
    newList.className = ""
    let taskValue = document.getElementById("add_task").value;
    let taskText = document.createTextNode(taskValue);
    newList.appendChild(taskText);
    if (taskText === "") {
        alert("The field is empty!");
    } else {
        document.querySelector(".task_list ul").appendChild(newList);
        let close = document.getElementsByClassName("close");
        for (let i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                this.parentElement.remove();
            }
        }
        closeButton();
        removeTask();
    }

    document.getElementById("add_task").value = "";

    // let taskList = document.querySelectorAll(".task_list li");
    // for (let i = 0; i < taskList.length; i++) {
    //     let closeBtn = document.createElement("SPAN");
    //     let txt = document.createTextNode("\u00D7");
    //     closeBtn.className = "close";
    //     closeBtn.appendChild(txt);
    //     taskList[i].appendChild(closeBtn);
    //     taskList[i].addEventListener('click', function(ev) {
    //         if (ev.target.tagName === 'LI') {
    //             ev.target.classList.toggle('checked');
    //         }
    //     }, false);
    // }
}








