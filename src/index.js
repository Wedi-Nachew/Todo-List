import "./style.css"
import { format, isEqual, isFuture, lightFormat, parseISO } from 'date-fns'
import { Today as todayTasks } from "./today.js"
import { UpcomingTasks } from "./upcoming.js"
import removeIcon from "./icons/delete.svg"
import { ThisWeekTasks } from "./this-week.js"
import removeProject from "./icons/remove-project.svg"
import briefCase from "./icons/work.svg"
import detailsIcon from "./icons/details.svg"
import editIcon from "./icons/pencil.svg"
import inboxIcon from "./icons/inbox.svg"
import todayIcon from "./icons/today.svg"
import weekIcon from"./icons/week.svg"
import upcomingIcon from"./icons/upcoming.svg"
import addIcon from "./icons/add.svg"
import todoListIcon from "./icons/todo-list.svg"
import cancelIcon from "./icons/cancel.svg"
const inputForm = document.querySelector("form")


const renederIcons = (() => {
    const header = document.querySelector(".header")
    const addBtn = header.querySelector("button")
    const taskMenu =  document.querySelector(".task-menu")
    const inboxBtn = taskMenu.querySelector("button:nth-child(1)")
    const todayBtn = taskMenu.querySelector("button:nth-child(2)")
    const upcomingBtn = taskMenu.querySelector("button:nth-child(3)")
    const thisWeekBtn = taskMenu.querySelector("button:nth-child(4)")
    const details = document.querySelector(".details")
    const headerImg = document.createElement("img")
    const addImg = document.createElement("img")
    const inboxImg = document.createElement("img")
    const todayImg = document.createElement("img")
    const upcomingImg = document.createElement("img")
    const thisWeekImg = document.createElement("img")
    const cancelImg = document.createElement("img")
   

    headerImg.src = todoListIcon
    addImg.src = addIcon
    addImg.class ="add"
    inboxImg.src = inboxIcon
    todayImg.src = todayIcon
    upcomingImg.src = upcomingIcon
    thisWeekImg.src = weekIcon
    cancelImg.src = cancelIcon
    header.insertBefore(headerImg, header.firstChild)
    addBtn.insertBefore(addImg, addBtn.firstChild)
    inboxBtn.insertBefore(inboxImg, inboxBtn.firstChild)
    todayBtn.insertBefore(todayImg, todayBtn.firstChild)
    upcomingBtn.insertBefore(upcomingImg, upcomingBtn.firstChild)
    thisWeekBtn.insertBefore(thisWeekImg, thisWeekBtn.firstChild)
    details.appendChild(cancelImg)
    console.log("Hi")

})()
const InputFormDisplay = (()=>{
    const addTask = document.querySelector(".header > button")
    const inputFormWrapper = document.querySelector("#form-wrapper")
    const formInputBtn = document.querySelector("form div button")
    const addProject = document.querySelector(".side-bar .add-project")
    const projectInputWrapper = document.querySelector("#project-wrapper")
    const projectInput = projectInputWrapper.querySelector("form")
    const projectSubmitBtn = projectInputWrapper.querySelector(".add-project")
    const detailsWrapper = document.querySelector("#details-wrapper")
    const details = detailsWrapper.querySelector(".details")
  
    const eventHandlers = ()=>{
        addTask.addEventListener("click", ()=>{
            RenderTasks.addBtn()
            resetInputFields()
            inputFormWrapper.className = "show"
        })
        addProject.addEventListener("click", () => {
            resetInputFields()
            projectInputWrapper.className = "show"
        })

        inputFormWrapper.addEventListener("click", (event)=>{
            if(!inputForm.contains(event.target) || event.target.nodeName == "IMG"){
                inputFormWrapper.className = "hidden"
            }
        })
        projectInputWrapper.addEventListener("click", (event)=>{
            if(!projectInput.contains(event.target) || event.target.nodeName == "IMG"){
                projectInputWrapper.className = "hidden"
            }
        })
        detailsWrapper.addEventListener("click", (event) => {
            if(!details.contains(event.target) || event.target.nodeName == "IMG"){
                detailsWrapper.className = "hidden"
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
       projectInput.childNodes.forEach(child => child.value = "")
    }

    eventHandlers()
    resetInputFields()
    return {inputFormWrapper, resetInputFields, projectInputWrapper, projectInput, detailsWrapper, details}
    
})()

const TaskInfoReceiver = (()=>{
    const taskInfo = {}
    let projectName = ""
    const getTaskInfo = () => taskInfo
    const getProjectName = () => projectName
    const setProjectName = (value) => projectName = value

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
    InputFormDisplay.projectInput.addEventListener("input", (event)=> {
        event.target.name == "name" ? projectName = event.target.value : false
    })
    
    
    return {getTaskInfo, getProjectName, setProjectName}
})()

export const Tasks = (() => {
    const add = document.querySelector(".header button")
    const sideBar = document.querySelector(".side-bar")
    const content = document.querySelector(".content")
    const details = TaskInfoReceiver.getTaskInfo()
    let tasks = [
                    {title: "Past", description: "past", dueDate: "2023-07-19", priority: 1, status :"completed", project: "Home"},
                    {title: "Today", description: "today", dueDate: "2023-08-01", priority: 2, status :"uncompleted", project: "Fitness"},
                    {title: "Upcoming", description: "upcoming", dueDate: "2023-08-20", priority: 3, status :"uncompleted", project: "Work"},
                    {title: "This Week", description: "this week", dueDate: "2023-08-03", priority: 4, status :"uncompleted", project: "School"}
                  ]

    const Task = (title, description, dueDate, priority) => {
        const status = "uncompleted"
        let projectName = "Home"
        const setProject = (() =>{
            sideBar.childNodes.forEach(child => {
                child.childNodes.forEach(grandChild => {
                    if((grandChild.classList == "active" && grandChild.textContent.includes("Today")) ||
                        (grandChild.classList == "active" && grandChild.textContent.includes("Upcoming")) ||
                        (grandChild.classList == "active" && grandChild.textContent.includes("This Week")) ||
                        (grandChild.classList == "active" && grandChild.textContent.includes("Inbox"))){
                        projectName = "Home"
                    }else if(grandChild.classList == "active"){
                        projectName = grandChild.textContent.replace(/[\n]/, "").trim()
                    }
                
                })
            })
        })()
        return {title, description, dueDate, priority, status, project : projectName}
    }

    const eventHandlers = () => {
        inputForm.addEventListener("click", (event)=>{
            if(event.target.className == "add-btn" && details.title && details.dueDate && details.priority){
                event.preventDefault()
                addTask()
                handler(event)
                saveToLocalStorage()
            }
       })
    }

    function addTask(){
            const newTask = Task(details.title, details.description, details.dueDate, details.priority)
            tasks.push(newTask) 
    }
    function handler(event){
            InputFormDisplay.resetInputFields()
            InputFormDisplay.inputFormWrapper.className = "hidden"
            while(content.firstChild){ content.removeChild(content.firstChild)}
            sideBar.childNodes.forEach(child => {
                child.childNodes.forEach(grandChild => {
                    if(grandChild.classList == "active" && grandChild.textContent.includes("Inbox")){
                        FilterTasks.renderFilteredTasks(Tasks.getTasks())
                    }else if(grandChild.classList == "active" && grandChild.textContent.includes("Today")){
                        FilterTasks.renderFilteredTasks(todayTasks.determineDueDate())
                    }else if(grandChild.classList == "active" && grandChild.textContent.includes("Upcoming")){
                        FilterTasks.renderFilteredTasks(UpcomingTasks.determineFutureEvent())
                    }else if(grandChild.classList == "active" && grandChild.textContent.includes("This Week")){
                        FilterTasks.renderFilteredTasks(ThisWeekTasks.determineThisWeekTasks())
                    }else if(grandChild.classList == "active"){
                        FilterTasks.renderFilteredTasks(Projects.projectTask(grandChild.textContent.replace(/[\n]/, "").trim()))
                    }
                   
                })
                
            })
            taskStatus.statusIndicator()
            PriorityMark.priorityIndicators()
    }
    function saveToLocalStorage() {
          localStorage.setItem("tasks", JSON.stringify(tasks))
    }
    const getFromLocalStorage = (() => {
       const saved =  JSON.parse(localStorage.getItem("tasks"))
       saved ? tasks = saved : false
    })()
    const getTasks = () => tasks

    eventHandlers()
    return{getTasks, tasks, handler, saveToLocalStorage, getFromLocalStorage}
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
        const details = document.createElement("img")

        task.className = "task"
        taskText.className = "task-text"
        checkBox.type = "checkbox"
        checkBox.value = "completed"
        checkBox.id = "task-completion"
        edit.src = editIcon
        edit.className = "edit"
        remove.src = removeIcon
        remove.className = "remove"
        details.src = detailsIcon
        details.className = "details"

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
        taskText.appendChild(details)
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
    const renderProject = (value) => {
        const projects = document.querySelector(".projects")
        const project = document.createElement("button")
        const projectIcon = document.createElement("img")
        const text = document.createElement("div")
        const remove = document.createElement("img")

        projectIcon.src = briefCase
        text.textContent = value
        remove.src = removeProject
        remove.className = "remove-projects"
        project.appendChild(projectIcon)
        project.appendChild(text)
        project.appendChild(remove)

        projects.appendChild(project)
    }
    function removeAnyButton(){
        inputDiv.childNodes.forEach(child => (child.nodeName == "BUTTON") ? inputDiv.removeChild(child) : false)
    }

   return{append, addBtn, saveBtn, renderProject}
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
            Tasks.saveToLocalStorage()
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
    const sideBar = document.querySelector(".side-bar")
   

    const eventHandlers = (() => {

        sideBar.addEventListener("click", (event)=>{
            if((event.target.nodeName == "BUTTON" || event.target.parentNode.nodeName == "BUTTON" ||
                event.target.parentNode.parentNode.nodeName == "BUTTON")  && event.target.className !== "add-project" &&
                event.target.className !== "remove-projects"){
                sideBar.childNodes.forEach(child => {
                    if(child.nodeName == "DIV"){
                       child.childNodes.forEach(grandChild => {
                            grandChild.className == "active" ? grandChild.classList.remove("active") : false
                        })
                    }
                }) 
                filter(event)  
            }
        })
        renderSavedProjects()
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
    function filter(event){
        while(content.firstChild){ content.removeChild(content.firstChild)}
        if(event.target.textContent.includes("Inbox")){
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
        }else if(event.target.parentNode.nodeName == "BUTTON"){
            event.target.parentNode.classList.add("active")
            renderFilteredTasks(Projects.projectTask(event.target.parentNode.textContent.replace(/[\n]/, "").trim()))
        }else if(event.target.parentNode.parentNode.nodeName == "BUTTON"){
            event.target.parentNode.parentNode.classList.add("active")
            renderFilteredTasks(Projects.projectTask(event.target.textContent.replace(/[\n]/, "").trim()))
        }else{
            event.target.classList.add("active")
            renderFilteredTasks(Projects.projectTask(event.target.textContent.replace(/[\n]/, "").trim()))
        }

        event.target.textContent 
            ? header.textContent = event.target.textContent 
            : header.textContent = event.target.parentNode.textContent
        taskStatus.statusIndicator()
        PriorityMark.priorityIndicators()
    }
   function renderSavedProjects(){
    const projectsMenu = sideBar.querySelector(".projects")
    const arr = []

    for(const pro of Tasks.getTasks()){
        arr.push(pro.project)
    }

    const sortedArr = arr.sort()
    
    for(let i =0; i < sortedArr.length; i++){
        if(sortedArr[i] == sortedArr[i+1]){
            sortedArr.splice(i,1)
        }
        RenderTasks.renderProject(sortedArr[i])
    }

    }

    return{ renderFilteredTasks}
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
            }else if(event.target.className === "details"){
                getDetails(event)
                
            }
        })
    }
    function removeTask(event) {
        content.removeChild(event.target.parentNode.parentNode)
        Tasks.tasks.forEach(task => {
            if(Object.values(task).includes(event.target.parentNode.firstChild.firstChild.textContent)){
                Tasks.tasks.splice(Tasks.tasks.indexOf(task), 1)
                Tasks.saveToLocalStorage()
            }
        })
    }
    function editTask(event){
        InputFormDisplay.inputFormWrapper.className = "show"
        const sideBar = document.querySelector(".side-bar")
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
                                        Tasks.handler(event)
                                        Tasks.saveToLocalStorage()
                                    })
                                }
                            })
                        }
                        })
                }
            })
    }
    function getDetails(event){
        const details = document.querySelector("#details-wrapper .details")
        const taskTitle = details.querySelector(".task-title")
        const taskDescription = details.querySelector(".task-description")
        const taskDueDate = details.querySelector(".task-due-date")
        const taskPriority = details.querySelector(".task-priority")
        const taskStatus = details.querySelector(".task-status")
        const taskProject = details.querySelector(".task-project")
        
        Tasks.tasks.forEach(task => {
            if(Object.values(task).includes(event.target.parentNode.firstChild.firstChild.textContent)){
                taskTitle.textContent = task.title;
                taskDescription.textContent = task.description
                taskDueDate.textContent = task.dueDate
                taskPriority.textContent = task.priority
                taskStatus.textContent = task.status
                taskProject.textContent = task.project
            }
        })
        InputFormDisplay.detailsWrapper.className = "show"
    }

    eventHandlers()
    return{getEditStatus, removeTask}
})()

const Projects = (() => {
    const projects = document.querySelector(".projects")
    const taskMenu  = document.querySelector(".task-menu")
    const addProject = document.querySelector("#project-wrapper .add-project")
    const projectInput = document.querySelector("#project-wrapper form")

    const eventHandlers = () => {
        addProject.addEventListener("click", (event) => {
            if(TaskInfoReceiver.getProjectName()){
                event.preventDefault()
                RenderTasks.renderProject(TaskInfoReceiver.getProjectName())
                InputFormDisplay.projectInputWrapper.className = "hidden"
                TaskInfoReceiver.setProjectName("")
            }
        })

        projects.addEventListener("click", (event) => {
            if(event.target.className === "remove-projects"){
                removeProjects(event)
            }
        })
    }
    

    function projectTask(project){
        const projectTasks = []
        for(const task of Tasks.getTasks()){
            task.project == project ? projectTasks.push(task) : false
        }

        return projectTasks
    }
    function removeProjects(event){
        projects.removeChild(event.target.parentNode)
        Tasks.tasks.forEach(task => {
            if(Object.values(task)[Object.values(task).length-1] == event.target.parentNode.textContent){
                Tasks.tasks.splice(Tasks.tasks.indexOf(task), 1)
                taskMenu.childNodes.forEach(child => {
                    child.className == "active" ? child.click() : false
                })
                Tasks.saveToLocalStorage()
            }
        })

    }
    eventHandlers()
    return {projectTask}
})()









