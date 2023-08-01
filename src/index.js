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
    const add = document.querySelector(".add-btn")
    const content = document.querySelector(".content")
    const details = TaskInfoReceiver.getTaskInfo()
    const tasks = [
                    {title: "Past", description: "past", dueDate: "2023-07-19", priority: 1},
                    {title: "Today", description: "today", dueDate: "2023-08-01", priority: 2},
                    {title: "Upcoming", description: "upcoming", dueDate: "2023-08-20", priority: 3},
                    {title: "This Week", description: "this week", dueDate: "2023-08-03", priority: 4}
                  ]

    const Task = (title, description, dueDate, priority) => {
        return {title, description, dueDate, priority}
    }

    add.addEventListener("click", handler)

    function addTask(){
            const newTask = Task(details.title, details.description, details.dueDate, details.priority)
            tasks.push(newTask) 
    }
    function handler(event){
        if(details.title && details.dueDate && details.priority && manageTasks.getEditStatus() == "No"){
            event.preventDefault()
            addTask()
            InputFormDisplay.resetInputFields()
            InputFormDisplay.inputFormWrapper.className = "hidden"
            while(content.firstChild){ content.removeChild(content.firstChild)}
            for(const task of tasks){
                RenderTasks.append(task.title, task.description, task.dueDate, task.priority)
            }
            PriorityMark.priorityIndicators()
        }else if(details.title && details.dueDate && details.priority && manageTasks.getEditStatus() == "yes"){
            InputFormDisplay.resetInputFields()
            InputFormDisplay.inputFormWrapper.className = "hidden"
            while(content.firstChild){ content.removeChild(content.firstChild)}
            for(const task of Tasks.tasks){
                RenderTasks.append(task.title, task.description, task.dueDate, task.priority)
            }
            PriorityMark.priorityIndicators()
        }
    }

    const getTasks = () => tasks

    return{getTasks, tasks, handler}
})()

const RenderTasks= (()=>{
    const inputDiv = inputForm.querySelector("div")

    const append = (info1, info2, info3, info4)=> {
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

        div.appendChild(title)
        div.appendChild(description)
        taskText.appendChild(div)
        taskText.appendChild(dueDate)
        taskText.appendChild(edit)
        taskText.appendChild(remove)
        task.appendChild(checkBox)
        task.appendChild(taskText)
        task.appendChild(priority)
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

    function removeAnyButton(){
        inputDiv.childNodes.forEach(child => (child.nodeName == "BUTTON") ? inputDiv.removeChild(child) : false)
    }

   return{append, addBtn, saveBtn}
})()

const PriorityMark = (() => {
    const content = document.querySelector(".content")

    function priorityIndicators(){
        content.childNodes.forEach(child => {
            if(child.className == "task"){child.childNodes.forEach(grandChild => {
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

const FilterTasks = (() => {
    const header = document.querySelector(".main h1")
    const content = document.querySelector(".content")
    const taskMenu = document.querySelector(".task-menu")
   
    const eventHandlers = (() => {

        taskMenu.addEventListener("click", (event)=>{
            if(event.target.nodeName == "BUTTON"){

                while(content.firstChild){ content.removeChild(content.firstChild)}
                if(event.target.textContent.includes("Home")){
                    renderFilteredTasks(Tasks.getTasks())
                }else if(event.target.textContent.includes("Today")){
                    renderFilteredTasks(todayTasks.determineDueDate())
                }else if(event.target.textContent.includes("Upcoming")){
                    renderFilteredTasks(UpcomingTasks.determineFutureEvent())
                }else if(event.target.textContent.includes("This Week")){
                    renderFilteredTasks(ThisWeekTasks.determineThisWeekTasks())
                }
                header.textContent = event.target.textContent
                PriorityMark.priorityIndicators()
           
            }
        })

        renderFilteredTasks(Tasks.getTasks())
        PriorityMark.priorityIndicators()
    })()


    function renderFilteredTasks(events){
        for(const task of events){
            RenderTasks.append(task.title, task.description, task.dueDate, task.priority)        
        }
    }


} )()

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

    eventHandlers()
    return{getEditStatus}
})()


export {Tasks}       





