import "./style.css"

const inputForm = document.querySelector("form")


const InputFormDisplay = (()=>{
    const addTask = document.querySelector(".header > button")
    const inputFormWrapper = document.querySelector("#form-wrapper")

    addTask.addEventListener("click", ()=>{
        inputFormWrapper.className = "show"
    })

    inputFormWrapper.addEventListener("click", (event)=>{
        if(!inputForm.contains(event.target)){
            inputFormWrapper.className = "hidden"
        }
    })
    
    return {inputFormWrapper}
    
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
    const details = TaskInfoReceiver.getTaskInfo()
    const tasks = []

    const Task = (title, description, dueDate, priority) => {
        return {title, description, dueDate, priority}
    }

    add.addEventListener("click", (event)=>{
        if(details.title && details.dueDate && details.priority){
            event.preventDefault()
            addTask()
            inputForm.childNodes.forEach(input => input.value = "")
            InputFormDisplay.inputFormWrapper.className = "hidden"
            RenderTasks.append(details.title, details.description, details.dueDate)
      }
    })

    function addTask(){
        const newTask = Task(details.title, details.description, details.dueDate, details.priority)
        tasks.push(newTask)
    }
})()

const RenderTasks= (()=>{
    
    const append = (info1, info2, info3)=> {
        const main = document.querySelector(".main")
        const task = document.createElement("div")
        const checkBox = document.createElement("input")
        const taskText = document.createElement("div")
        const div = document.createElement("div")
        const title = document.createElement("h3")
        const description = document.createElement("p")
        const dueDate = document.createElement("p")

        task.className = "task"
        taskText.className = "task-text"
        checkBox.type = "checkbox"
        checkBox.value = "completed"
        checkBox.id = "task-completion"

        title.textContent = info1
        description.textContent = info2
        dueDate.textContent = info3

        div.appendChild(title)
        div.appendChild(description)
        taskText.appendChild(div)
        taskText.appendChild(dueDate)
        task.appendChild(checkBox)
        task.appendChild(taskText)
        main.appendChild(task)
    }

    const setTaskTexts = (info1,info2, info3) =>{
        title.textContent = info1
        description.textContent = info2
        dueDate.textContent = info3
    }

    

   return{setTaskTexts, append}
})()


















document.addEventListener("DOMContentLoaded", () => {
    inputForm.childNodes.forEach(input => input.value = "")
    // dateSelect.childNodes.forEach(field => field.value = "")

})