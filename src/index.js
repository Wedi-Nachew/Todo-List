import "./style.css"
import { format, isEqual, isFuture, lightFormat, parseISO } from 'date-fns'
import removeIcon from "./icons/delete.svg"
import { Today as todayTasks } from "./today.js"
import { UpcomingTasks } from "./upcoming.js"
import { ThisWeekTasks } from "./this-week.js"
import editIcon from "./icons/pencil.svg"




const inputForm = document.querySelector("form")


const InputFormDisplay = (()=>{
    const addTask = document.querySelector(".header > button")
    const inputFormWrapper = document.querySelector("#form-wrapper")
    const formInputBtn = document.querySelector("form div button")
  
    const eventHandlers = ()=>{
        addTask.addEventListener("click", ()=>{
            RenderTasks.addBtn()
            resetInputFields()
            inputFormWrapper.className = "show"
        })

        inputFormWrapper.addEventListener("click", (event)=>{
            if(!inputForm.contains(event.target)){
                inputFormWrapper.className = "hidden"
            }
        })
   }
    const resetInputFields=()=>{
        inputForm.childNodes.forEach(child => {
            if(child.nodeName !== "DIV"){
                child.value = ""
            }else if(child.nodeName === "DIV"){
               child.childNodes.forEach(grandChild => grandChild.value = "")
            }
        })
    }

    eventHandlers()
    resetInputFields()
    return {inputFormWrapper, resetInputFields}
    
})()

const TaskInfoReceiver = (()=>{
    const taskInfo = {}
    const getTaskInfo= () => taskInfo

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
    
    
    return {getTaskInfo}
})()

const Tasks = (() => {
    const add = document.querySelector(".header button")
    const content = document.querySelector(".content")
    const details = TaskInfoReceiver.getTaskInfo()
    const tasks = [
                    {title: "Past", description: "past", dueDate: "2023-07-19", priority: 1, status :"completed"},
                    {title: "Today", description: "today", dueDate: "2023-08-01", priority: 2, status :"uncompleted"},
                    {title: "Upcoming", description: "upcoming", dueDate: "2023-08-20", priority: 3, status :"uncompleted"},
                    {title: "This Week", description: "this week", dueDate: "2023-08-03", priority: 4, status :"uncompleted"}
                  ]

    const Task = (title, description, dueDate, priority) => {
        const status = "uncompleted"
        return {title, description, dueDate, priority, status }
    }

    const eventHandlers = () => {
        inputForm.addEventListener("click", (event)=>{
            if(event.target.className == "add-btn"){
                handler(event)
            }
       })
    }

    function addTask(){
            const newTask = Task(details.title, details.description, details.dueDate, details.priority)
            tasks.push(newTask) 
    }
    function handler(event){
        if(details.title && details.dueDate && details.priority){
            event.preventDefault()
            addTask()
            InputFormDisplay.resetInputFields()
            InputFormDisplay.inputFormWrapper.className = "hidden"
            while(content.firstChild){ content.removeChild(content.firstChild)}
            for(const task of tasks){
                RenderTasks.append(task.title, task.description, task.dueDate, task.priority, task.status)
            }
            PriorityMark.priorityIndicators()
        }
    }

    const getTasks = () => tasks
    eventHandlers()
    return{getTasks, tasks, handler}
})()

const RenderTasks= (()=>{
    const inputDiv = inputForm.querySelector("div")

    const append = (info1, info2, info3, info4, info5)=> {
        const main = document.querySelector(".main")
        const content = document.querySelector(".content")
        const task = document.createElement("div")
        const checkBox = document.createElement("input")
        const taskText = document.createElement("div")
        const div = document.createElement("div")
        const title = document.createElement("h3")
        const description = document.createElement("p")
        const dueDate = document.createElement("p")
        const priority = document.createElement("p")
        const status = document.createElement("p")
        const edit = document.createElement("img")
        const remove = document.createElement("img")

        task.className = "task"
        taskText.className = "task-text"
        checkBox.type = "checkbox"
        checkBox.value = "completed"
        checkBox.id = "task-completion"
        edit.src = editIcon
        edit.className = "edit"
        remove.src = removeIcon
        remove.className = "remove"

        title.textContent = info1
        description.textContent = info2
        const formmated = format(new Date(info3.split("-")[0], (info3.split("-")[1] - 1), info3.split("-")[2]), "PP")
        dueDate.textContent = formmated;
        priority.textContent = info4
        priority.className = "priority"
        status.textContent = info5
        status.className = "status"

        div.appendChild(title)
        div.appendChild(description)
        taskText.appendChild(div)
        taskText.appendChild(dueDate)
        taskText.appendChild(edit)
        taskText.appendChild(remove)
        task.appendChild(checkBox)
        task.appendChild(taskText)
        task.appendChild(priority)
        task.appendChild(status)
        content.appendChild(task)
        main.appendChild(content)

    }
    const addBtn = () => {
        removeAnyButton()
        const addTask = document.createElement("button")
        addTask.textContent = "Add Task"
        addTask.className = "add-btn"
        inputDiv.appendChild(addTask)
    }
    const saveBtn = () => {
        removeAnyButton()
        const saveChanges = document.createElement("button")
        saveChanges.textContent = "Save Changes"
        saveChanges.className = "save-btn"
        inputDiv.appendChild(saveChanges)
    }
    const taskStatus = (status) => {
        for(const task in Tasks.tasks){
            console.log(task)
        }
    }

    function removeAnyButton(){
        inputDiv.childNodes.forEach(child => (child.nodeName == "BUTTON") ? inputDiv.removeChild(child) : false)
    }

   return{append, addBtn, saveBtn, taskStatus}
})()

const PriorityMark = (() => {
    const content = document.querySelector(".content")

    function priorityIndicators(){
        content.childNodes.forEach(child => {
            if(child.classList == "task" || child.classList =="task completed"){
                child.childNodes.forEach(grandChild => {
                    if(grandChild.className == "priority" && grandChild.textContent == 1){
                        grandChild.parentNode.style.cssText = "border-left: 12px solid #ef476f;"
                    }else if(grandChild.className == "priority" && grandChild.textContent == 2){
                        grandChild.parentNode.style.cssText = "border-left: 12px solid #ffd166;"
                    }else if(grandChild.className == "priority" && grandChild.textContent == 3){
                        grandChild.parentNode.style.cssText = "border-left: 12px solid #06d6a0;"
                    }else if(grandChild.className == "priority" && grandChild.textContent == 4){
                        grandChild.parentNode.style.cssText = "border-left: 12px solid #1b263b;"
                    }
                })
                
            }
            
        })
    }

   priorityIndicators()
   return{priorityIndicators}
})()
const taskStatus = (() => {
    const content = document.querySelector(".content")

    function statusIndicator(){
        content.childNodes.forEach(child => {
            if(child.className == "task"){child.childNodes.forEach(grandChild => {
                    if(grandChild.className == "status" && grandChild.textContent == "uncompleted"){
                        grandChild.parentNode.classList.remove("completed")
                    }else if(grandChild.className == "status" && grandChild.textContent == "completed"){
                        grandChild.parentNode.classList.add("completed")
                        child.firstChild.className = "checked"
                    }
                })
            }
        })
    }

    const changeStatus = () => {
        content.addEventListener("click", (event) => {
            if(event.target.nodeName == "INPUT" && event.target.className == "checked"){
                event.target.parentNode.classList.remove("completed")
                event.target.parentNode.childNodes.forEach(item => {
                    if(item.className == "task-text"){
                        Tasks.tasks.forEach(task => {
                            if(Object.values(task).includes(item.firstChild.firstChild.textContent)){
                                task["status"] = "uncompleted"
                            }
                        })
                    }
                });
                event.target.parentNode.lastChild.textContent = "uncompleted"
                event.target.classList.remove("checked")
            }else if(event.target.nodeName == "INPUT" && !event.target.className){
                event.target.parentNode.classList.add("completed")
                event.target.parentNode.childNodes.forEach(item => {
                    if(item.className == "task-text"){
                        Tasks.tasks.forEach(task => {
                            if(Object.values(task).includes(item.firstChild.firstChild.textContent)){
                                task["status"] = "completed"
                            }
                        })
                    }
               
                });
                event.target.parentNode.lastChild.textContent = "completed"
                event.target.className = "checked"
            }
            console.log(!event.target.className)
        })
    }


    changeStatus()
    statusIndicator()
    return{statusIndicator, changeStatus}
})()
const FilterTasks = (() => {
    const header = document.querySelector(".main h1")
    const content = document.querySelector(".content")
    const taskMenu = document.querySelector(".task-menu")
   
    const eventHandlers = (() => {

        taskMenu.addEventListener("click", (event)=>{
            if(event.target.nodeName == "BUTTON"){

                taskMenu.childNodes.forEach(child => {
                    child.className == "active" ? child.classList.remove("active") : false
                })

                while(content.firstChild){ content.removeChild(content.firstChild)}
                
                if(event.target.textContent.includes("Home")){
                    event.target.classList.add("active")
                    renderFilteredTasks(Tasks.getTasks())
                }else if(event.target.textContent.includes("Today")){
                    event.target.classList.add("active")
                    renderFilteredTasks(todayTasks.determineDueDate())
                }else if(event.target.textContent.includes("Upcoming")){
                    event.target.classList.add("active")
                    renderFilteredTasks(UpcomingTasks.determineFutureEvent())
                }else if(event.target.textContent.includes("This Week")){
                    event.target.classList.add("active")
                    renderFilteredTasks(ThisWeekTasks.determineThisWeekTasks())
                }
                header.textContent = event.target.textContent
                taskStatus.statusIndicator()
                PriorityMark.priorityIndicators()
                
            }
        })

        renderFilteredTasks(Tasks.getTasks())
        taskMenu.querySelector("button").classList.add("active")
        taskStatus.statusIndicator()
        PriorityMark.priorityIndicators()

        
    })()

    function renderFilteredTasks(events){
        for(const task of events){
            RenderTasks.append(task.title, task.description, task.dueDate, task.priority, task.status)        
        }
    }
})()

const manageTasks = (() =>{
    const content = document.querySelector(".content")
    let edit = "No"
    const getEditStatus = () => edit
    
    const eventHandlers = () => {
        content.addEventListener("click", (event) => {
            if(event.target.className === "edit"){
                edit = "yes"
                editTask(event)
            }else if(event.target.className === "remove"){
                removeTask(event)
            }
        })
    }
    function removeTask(event) {
        content.removeChild(event.target.parentNode.parentNode)
        Tasks.tasks.forEach(task => {
            if(Object.values(task).includes(event.target.parentNode.firstChild.firstChild.textContent)){
                Tasks.tasks.splice(Tasks.tasks.indexOf(task), 1)
            }
        })
    }
    function editTask(event){
        InputFormDisplay.inputFormWrapper.className = "show"
        RenderTasks.saveBtn()
        Tasks.tasks.forEach(task => {
            if(Object.values(task).includes(event.target.parentNode.firstChild.firstChild.textContent)){
                inputForm.childNodes.forEach(child => {
                    if(child.nodeName !== "DIV" && child.nodeName == "INPUT"){
                        child.value = task["title"]
                    }else if(child.nodeName !== "DIV" && child.nodeName == "TEXTAREA"){
                            child.value = task["description"]
                    }else if(child.nodeName === "DIV"){
                        child.childNodes.forEach(grandChild => {
                            if(grandChild.nodeName === "INPUT"){
                                grandChild.value = task["dueDate"]
                            }else if(grandChild.nodeName === "SELECT"){
                                    grandChild.value = task["priority"]
                            }else if(grandChild.className == "save-btn"){
                                    grandChild.addEventListener("click", (event) => {
                                        event.preventDefault()
                                        TaskInfoReceiver.getTaskInfo()["title"] != undefined 
                                            ? task["title"] = TaskInfoReceiver.getTaskInfo()["title"] 
                                            : false
                                        TaskInfoReceiver.getTaskInfo()["description"] != undefined 
                                            ? task["description"] = TaskInfoReceiver.getTaskInfo()["description"] 
                                            : false
                                        TaskInfoReceiver.getTaskInfo()["dueDate"] != undefined 
                                            ? task["dueDate"] = TaskInfoReceiver.getTaskInfo()["dueDate"] 
                                            : false
                                        TaskInfoReceiver.getTaskInfo()["priority"] != undefined 
                                            ? task["priority"] = TaskInfoReceiver.getTaskInfo()["priority"] 
                                            :false
                                        
                                        InputFormDisplay.resetInputFields()
                                        InputFormDisplay.inputFormWrapper.className = "hidden"
                                        while(content.firstChild){ content.removeChild(content.firstChild)}
                                        for(const task of Tasks.tasks){
                                            RenderTasks.append(task.title, task.description, task.dueDate, task.priority)
                                        }
                                        PriorityMark.priorityIndicators()
                                    })
                                }
                            })
                        }
                        })
                    }
                })
    }
    function taskCompletion(event){
        event.target.parentNode.childNodes.forEach(item => {
            if(item.className == "task-text"){
                content.removeChild(item.parentNode)
                Tasks.tasks.forEach(task => {
                    if(Object.values(task).includes(item.firstChild.firstChild.textContent)){
                        Tasks.tasks.splice(Tasks.tasks.indexOf(task), 1)
                    }
                })
            }
       
        });
    }

    eventHandlers()
    return{getEditStatus, removeTask}
})()


export {Tasks}       





