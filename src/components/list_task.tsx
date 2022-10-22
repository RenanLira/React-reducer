import { useContext } from "react"
import { taskDispatch, taskState } from "../Context"
import { TaskItem } from "./item_task"

interface TaskListProps{
}


export function TaskList(){

    const tasks = useContext(taskState)


    return (
        <>
            <ul>
                {tasks.map(task => (
                   <TaskItem key={task.id} 
                        task={task}  
                    />
                ))}
            </ul>
        </>
    )
}

