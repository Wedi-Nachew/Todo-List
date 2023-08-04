import { Tasks } from "./index.js"
import {isAfter} from "date-fns"

export const UpcomingTasks = (() => {
    const upcomingBtn = document.querySelector(".task-menu button:nth-child(3)")

    const eventHandlers = (() => {

        upcomingBtn.addEventListener("click", () => {
            determineFutureEvent()
        })
    })()

    const determineFutureEvent = () =>{
        const futureTasks = []
        const tasks = Tasks.getTasks()
        const today = [0]

        today.unshift(new Date().getFullYear().toString())
        today[1]+=(((new Date().getMonth()) + 1).toString())
        today.push(new Date().getDate().toString())

        for(const task of tasks){
            const dueDate = Object.values(task)[2].toString().split("-")
            if( isAfter((new Date(dueDate[0], dueDate[1] - 1, dueDate[2])),
                (new Date(today[0], today[1] - 1, today[2])))){
                futureTasks.push(task)
            }     
        }
        

        return futureTasks
    }

    return{determineFutureEvent}
})()