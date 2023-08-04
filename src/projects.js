import { Tasks } from "./index.js"

export const Projects = (() => {
    const fitness = []
    const work = []
    const school = []
    const tasks = Tasks.getTasks()
 
    for(const task of tasks){
         if(task.project == "Work"){
             work.push(task)
         }else if(task.project == "Fitness"){
             fitness.push(task)
         }else if(task.project == "School"){
             school.push(task)
         }
    }
    console.log({fitness, work, school})
     
 })()