import "./style.css"

const addTask = document.querySelector(".header > button")
const inputFormWrapper = document.querySelector("#form-wrapper")
const inputForm = document.querySelector("form")



addTask.addEventListener("click", ()=>{
    inputFormWrapper.className = "show"
})
inputFormWrapper.addEventListener("click", (event)=>{
    if(!inputForm.contains(event.target) || event.target.nodeName == "BUTTON"){
        inputFormWrapper.className = "hidden"
    }
})

const taskInfoReceiver = (()=>{

    const taskInfo = {}

    inputForm.addEventListener("input", (event)=>{
        switch(event.target.name){
            case "title":
               taskInfo.title = event.target.value
                break
            case "description":
                taskInfo.description = event.target.value
                break
            case "due-date":
                taskInfo.dueDate = event.target.value
                break
            case "priority":
                taskInfo.priority = Number.parseInt(event.target.value)
                break
        }
    })
    
    const getTaskInfo= () => taskInfo

    return {getTaskInfo}
})()









document.addEventListener("DOMContentLoaded",() =>{
    inputFormWrapper.className = "hidden"
})












// const add = document.querySelector(".header > button")
// console.log(add)

// const tasks = []
// const taskInfo = {}
// const Task=(title, description, dueTime, priority)=>{
//     return{title, description, dueTime, priority}
// }

// function addTask(taskInfo){
//     const newTask = Task(taskInfo.title, taskInfo.description, taskInfo.dueTime, taskInfo.priority)
//     tasks.push(newTask);
// }

// add.addEventListener("click", ()=>{
//     taskInfo.title = prompt("Enter Title")
//     taskInfo.description = prompt("Enter Detailes")
//     taskInfo.dueTime = prompt("Enter due time")
//     taskInfo.priority = prompt("Enter the priority level of the task using 1-5 numbers")
//     addTask(taskInfo)
//     console.log(tasks)
// })