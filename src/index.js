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
            RenderTasks.append(details.title, details.description, details.dueDate, details.priority)
            PriorityMark.priorityIndicators()
        }
    })

    function addTask(){
        const newTask = Task(details.title, details.description, details.dueDate, details.priority)
        tasks.push(newTask)
    }
})()

const RenderTasks= (()=>{
    
    const append = (info1, info2, info3, info4)=> {
        const main = document.querySelector(".main")
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
        dueDate.textContent = info3
        priority.textContent = info4
        priority.className = "priority"

        div.appendChild(title)
        div.appendChild(description)
        taskText.appendChild(div)
        taskText.appendChild(dueDate)
        task.appendChild(checkBox)
        task.appendChild(taskText)
        task.appendChild(priority)
        main.appendChild(task)

    }

   return{append}
})()

const PriorityMark = (() => {
    const main = document.querySelector(".main")

    function priorityIndicators(){
        
        main.childNodes.forEach(child => {
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




















document.addEventListener("DOMContentLoaded", () => {
    inputForm.childNodes.forEach(input => input.value = "")
    // dateSelect.childNodes.forEach(field => field.value = "")

})