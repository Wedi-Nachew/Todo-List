import "./style.css"
import { format, isEqual, isFuture, lightFormat, parseISO } from 'date-fns'
import {Today as todayTasks} from "./today.js"


const inputForm = document.querySelector("form")


const InputFormDisplay = (()=>{
    const addTask = document.querySelector(".header > button")
    const inputFormWrapper = document.querySelector("#form-wrapper")
  
    const eventHandlers = ()=>{
        addTask.addEventListener("click", ()=>{
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
                    { title: "jjhk", description: "hjjh", dueDate: "2023-07-19", priority: 1},
                    {title: "hjhjhjhj", description: "j", dueDate: "2023-07-31", priority: 3}
                  ]

    const Task = (title, description, dueDate, priority) => {
        return {title, description, dueDate, priority}
    }

    add.addEventListener("click", (event)=>{
        if(details.title && details.dueDate && details.priority){
            event.preventDefault()
            addTask()
            InputFormDisplay.resetInputFields()
            InputFormDisplay.inputFormWrapper.className = "hidden"
            while(content.firstChild){ content.removeChild(content.firstChild)}
            for(const task of tasks){
                RenderTasks.append(task.title, task.description, task.dueDate, task.priority)
            }
            PriorityMark.priorityIndicators()
            
        }
    })

    function addTask(){
        const newTask = Task(details.title, details.description, details.dueDate, details.priority)
        tasks.push(newTask)
    }

    const getTasks = () => tasks

    return{getTasks}
})()

const RenderTasks= (()=>{
    
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

        task.className = "task"
        taskText.className = "task-text"
        checkBox.type = "checkbox"
        checkBox.value = "completed"
        checkBox.id = "task-completion"

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
        task.appendChild(checkBox)
        task.appendChild(taskText)
        task.appendChild(priority)
        content.appendChild(task)
        main.appendChild(content)

    }

   return{append}
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
                        grandChild.parentNode.style.cssText = "border-left: 12px solid #06d6a0;"
                    }
                })
            }
        })
    }

   priorityIndicators()
   return{priorityIndicators}
})()

const formatDemoDates = (()=>{

    const demoDates = document.querySelectorAll(".task-text > p")
    demoDates.forEach(item => {
        const container = item.textContent.split("-")
        item.textContent =  format(new Date(container[0], container[1] - 1, container[2]), "PP")
    })

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
                    header.textContent = "Home"
                }else if(event.target.textContent.includes("Today")){
                    renderFilteredTasks(todayTasks.determineDueDate())
                    header.textContent = "Today"
                }
    
                PriorityMark.priorityIndicators()
           
            }
        })
    })()


    function renderFilteredTasks(events){
        for(const task of events){
            RenderTasks.append(task.title, task.description, task.dueDate, task.priority)        
        }
    }


} )()



export {Tasks}       





