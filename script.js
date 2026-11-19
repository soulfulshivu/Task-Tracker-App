// ======================================
// Task Tracker App - JavaScript
// Covers Tasks 22–38
// ======================================

// Task 22
console.log("Task Tracker Started!");

// ----------------------------
// Task 23 - Default Values
// ----------------------------

let totalTasks = 0;
let completedTasks = 0;

// ----------------------------
// Task 24 - Validation Draft
// ----------------------------

function isValidTask(title){
    return title.trim() !== "";
}

// ----------------------------
// Task 25
// Sample Tasks
// ----------------------------

const sampleTasks = [
    "Learn HTML",
    "Practice CSS",
    "Study JavaScript",
    "Build Portfolio",
    "Upload GitHub Project"
];

sampleTasks.forEach(task=>{
    console.log(task);
});

// ----------------------------
// Task 26
// Summary Function
// ----------------------------

function taskSummary(task){

    return `${task.title} (${task.status})`;

}

// ----------------------------
// Task 27
// Sample Objects
// ----------------------------

let tasks = [

    {
        title:"Learn HTML",
        status:"Pending",
        due:""
    },

    {
        title:"Practice CSS",
        status:"Completed",
        due:""
    },

    {
        title:"Learn JavaScript",
        status:"Pending",
        due:""
    },

    {
        title:"Build Portfolio",
        status:"Pending",
        due:""
    },

    {
        title:"Push to GitHub",
        status:"Completed",
        due:""
    }

];

// ----------------------------
// Task 28
// JS Loaded
// ----------------------------

console.log("JavaScript Loaded Successfully");

// ----------------------------
// Task 29 & 30
// Array + Objects
// ----------------------------

tasks.forEach(task=>{

    console.log(taskSummary(task));

});

// ----------------------------
// Task 31
// Clean Title
// ----------------------------

function cleanTitle(title){

    return title.trim();

}

// ----------------------------
// Task 32
// DOM Selection
// ----------------------------

const taskForm=document.getElementById("taskForm");

const taskTitle=document.getElementById("taskTitle");

const dueDate=document.getElementById("dueDate");

const taskList=document.getElementById("taskList");

const totalBox=document.getElementById("totalTasks");

const completedBox=document.getElementById("completedTasks");

// ----------------------------
// Local Storage
// ----------------------------

const stored=localStorage.getItem("tasks");

if(stored){

    tasks=JSON.parse(stored);

}

// ----------------------------
// Render Tasks
// ----------------------------

function renderTasks(){

    taskList.innerHTML="";

    totalTasks=tasks.length;

    completedTasks=0;

    tasks.forEach((task,index)=>{

        if(task.status==="Completed"){

            completedTasks++;

        }

        const card=document.createElement("div");

        card.className="task-card";

        card.innerHTML=`

            <div class="task-info">

                <h3>${task.title}</h3>

                <p>Status : ${task.status}</p>

                <p>${task.due ? "Due : "+task.due : ""}</p>

            </div>

            <div class="task-actions">

                <button class="complete-btn">

                    Complete

                </button>

                <button class="delete-btn">

                    Delete

                </button>

            </div>

        `;

        const completeBtn=card.querySelector(".complete-btn");

        const deleteBtn=card.querySelector(".delete-btn");

        completeBtn.addEventListener("click",()=>{

            task.status="Completed";

            saveTasks();

            renderTasks();

        });

        deleteBtn.addEventListener("click",()=>{

            tasks.splice(index,1);

            saveTasks();

            renderTasks();

        });

        taskList.appendChild(card);

    });

    totalBox.textContent=totalTasks;

    completedBox.textContent=completedTasks;

}

renderTasks();

// ----------------------------
// Save Tasks
// ----------------------------

function saveTasks(){

    localStorage.setItem("tasks",JSON.stringify(tasks));

}

// ----------------------------
// Add Task
// ----------------------------

taskForm.addEventListener("submit",function(e){

    e.preventDefault();

    const title=cleanTitle(taskTitle.value);

    const due=dueDate.value;

    if(!isValidTask(title)){

        alert("Task title cannot be empty.");

        return;

    }

    tasks.push({

        title:title,

        status:"Pending",

        due:due

    });

    saveTasks();

    renderTasks();

    taskForm.reset();

});

// ----------------------------
// Clear All
// ----------------------------

const clearBtn=document.getElementById("clearTasks");

clearBtn.addEventListener("click",()=>{

    if(confirm("Delete all tasks?")){

        tasks=[];

        saveTasks();

        renderTasks();

    }

});

console.log("Task Tracker Ready!");