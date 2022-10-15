import { useReducer, useState } from 'react';
import './App.css';
import { AddTask } from './components/add_task';
import { TaskList } from './components/list_task';

export default function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks)

  function handleAddTask(text: string) {
    dispatch({
      type: TaskActionType.ADDED,
      payload: {
        id: nextId++,
        text,
        done: false
      }
    })
  }

  function handleChangeTask(task: Task) {
    dispatch({
      type: TaskActionType.CHANGED,
      payload: task
    })
  }

  function handleDeleteTask(taskId: number) {
    dispatch({
      type: TaskActionType.DELETED,
      payload: tasks.find(v => v.id === taskId)!
    })
  }

  return (
    <div className="App">
      <h1>React + Reducer</h1>
      <h3>Tasks</h3>
      
      <AddTask onAddTask={handleAddTask} />
      
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
      
    </div>
  )
}

export interface Task{
  id: number
  text: string
  done: boolean
}

enum TaskActionType {
  ADDED = 'added',
  CHANGED = 'changed',
  DELETED = 'deleted'
}

interface TaskAction {
  type: TaskActionType,
  payload: Task
}

const taskReducer = (tasks: Task[], action: TaskAction ): Task[] => {

  const { type, payload } = action

  switch (type) {
    case TaskActionType.ADDED: {
      return [
        ...tasks,
        payload,
      ]
    }

    case TaskActionType.CHANGED: {

      return tasks.map((t) => {
        if (t.id === payload.id) {
          return payload;
        } else {
          return t;
        }
      })
    }

    case TaskActionType.DELETED: {
      return tasks.filter((t) => t.id !== payload.id)
    }
  
    default: {
      
      throw Error('valor não encontrado')
    }
  }

  return tasks
}

let nextId = 3;

const initialTasks: Task[] = [
  {id: 0, text: 'Elaborar Aulas', done: true},
  {id: 1, text: 'Estudar Flutter - Estados', done: false},
  {id: 2, text: 'Correr avenida Raul Lopres', done: false},
];
