import { ChangeEvent, FormEvent, useContext, useState } from "react"
import { TaskActionType, taskDispatch, taskState } from "../Context"

interface AddTaskProps{
}

export function AddTask(){

    const [taskText, setTaskText] = useState('')
    const tasks = useContext(taskState)
    const dispatch = useContext(taskDispatch)

    const handlerDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskText(event.target.value)
    }

    const handlerSubmit = (event: FormEvent) => {
        event.preventDefault()
        // onAddTask(taskText)
        dispatch({
            type: TaskActionType.ADDED,
            payload: {id: tasks.length+1, text: taskText, done: false}
        })
        setTaskText('')
    }

    return (
        <>
            <form onSubmit={handlerSubmit}>
                <input 
                    type="text" 
                    value={taskText} 
                    onChange={handlerDescriptionChange}  
                    placeholder="Descrição" />
                <input type="submit" value="Adicionar Tarefa" />
            </form>
        </>
    )
}