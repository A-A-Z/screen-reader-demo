import { useState } from 'react'
import { DEFAULT_TASKS } from '../constants'
import type { FC } from 'react'
import type { Task } from '../types'

export const Demo1: FC = () => {
  const [tasks, setTasks] = useState<Task[]>(DEFAULT_TASKS)
  const [taskName, setTaskName] = useState('')
  const [loading, setLoading] = useState(false)

  const saveTask = () => {
    const name = taskName.trim()
    if (!name || loading) return

    setLoading(true)
    setTaskName('')

    // mock network delay
    setTimeout(() => {
      setTasks(prev => [...prev, { id: Date.now(), name }])
      setLoading(false)
    }, 2000)
  }

  const deleteTask = (id: number) => {
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  return (
    <>
      <div className="header">
        <div className="page-title">Screen reader demo 1 (all bad)</div>
      </div>

      <div className="nav">
        <div className="nav-list">
          <div><a href="#" className="nav-link">Link 1</a></div>
          <div><a href="#" className="nav-link">Link 1</a></div>
          <div><a href="#" className="nav-link">Link 1</a></div>
        </div>
      </div>

      <div className="main">

        <div className="section">
          <div className="section-header">New task</div>
          <div className="p">Create a new task for your list</div>
          <div className="field">
            <div className="label">Task name</div>
            <input
              id="task-name"
              className="input"
              type="text"
              placeholder="Enter new task name"
              value={taskName}
              onChange={e => setTaskName(e.currentTarget.value)}
              disabled={loading}
            />
            <div
              className="btn submit"
              onClick={() => { saveTask() }}
            >+</div>
          </div>
        </div>

        <div className="section">
          <div className="section-header">My Tasks</div>
          <div className="p">These are you current active tasks:</div>
          <div className="task-list">
          {tasks.map(({ id, name }) => (
            <div key={id} className="task-list__item">
              {name}
              <div className="btn" onClick={() => deleteTask(id)}>Delete</div>
            </div>
          ))}
          </div>
        </div>

      </div>
    </>
  )
}
