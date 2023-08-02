import { Tasks } from "./index.js"
import {isEqual} from "date-fns"

export  const Today = (() => {
    const today = document.querySelector(".task-menu button:nth-child(2")
    const eventHandlers = (() => {

        today.addEventListener("click", ()=>{
            determineDueDate()
         })
    })()

    const determineDueDate = () => {
        const todayTasks = []
        const tasks = Tasks.getTasks()
        const today = [0]

        today.unshift(new Date().getFullYear().toString())
        today[1]+=(((new Date().getMonth()) + 1).toString())
        today.push(new Date().getDate().toString())

        for(const task of tasks){
            const dueDate = Object.values(task)[2].split("-")
           if( isEqual((new Date(dueDate[0], dueDate[1] - 1, dueDate[2])),
                (new Date(today[0], today[1] - 1, today[2])))){
                todayTasks.push(task)
           }
        }

        return todayTasks
    }  

    return{determineDueDate}
    
})()