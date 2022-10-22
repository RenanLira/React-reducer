import { useContext, useReducer, useState } from 'react';
import './App.css';
import { AddTask } from './components/add_task';
import { TaskList } from './components/list_task';
import { TaskContext, taskDispatch, TaskActionType, taskState, Task } from './Context';

export default function App() {



  // function handleAddTask(text: string) {
  //   dispatch({
  //     type: TaskActionType.ADDED,
  //     payload: {
  //       id: tasks.length + 1,
  //       text,
  //       done: false
  //     }
  //   })
  // }

  // function handleChangeTask(task: Task) {
  //   dispatch({
  //     type: TaskActionType.CHANGED,
  //     payload: task
  //   })
  // }

  // function handleDeleteTask(taskId: number) {
  //   dispatch({
  //     type: TaskActionType.DELETED,
  //     payload: tasks.find(v => v.id === taskId)!
  //   })
  // }

  return (
    <div className="App">
      <TaskContext>
        <h1>React + Reducer</h1>
        <h3>Tasks</h3>
        <AddTask />
        
        <TaskList />
      </TaskContext>
      
      
    </div>
  )
}



