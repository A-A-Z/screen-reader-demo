import { useState } from 'react'
import { DEFAULT_TASKS } from '../constants'
import type { FC, FormEvent } from 'react'
import type { Task } from '../types'

export const Demo3: FC = () => {
  const [tasks, setTasks] = useState<Task[]>(DEFAULT_TASKS)
  const [taskName, setTaskName] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
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
      <header className="header">
        <h1 className="page-title">Screen reader demo 3 (ARIA)</h1>
      </header>

      <nav className="nav">
        <ul className="nav-list" aria-label="Main navigation">
          <li><a href="#" className="nav-link">Link 1</a></li>
          <li><a href="#" className="nav-link">Link 1</a></li>
          <li><a href="#" className="nav-link">Link 1</a></li>
        </ul>
      </nav>

      <main className="main">

        <section className="section">
          <h2 className="section-header">New task</h2>
          <p className="p">Create a new task for your list</p>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="task-name" className="label">Task name</label>
              <input
                id="task-name"
                className="input"
                type="text"
                placeholder="Enter new task name"
                value={taskName}
                onChange={e => setTaskName(e.currentTarget.value)}
                aria-description="Enter new task name"
                disabled={loading}
              />
              <button
                type="submit"
                className="btn submit"
                disabled={loading}
                aria-busy={loading}
                aria-label="Save task to list"
              >+</button>
            </div>
          </form>
        </section>

        <section className="section">
          <h2 id="task-list-title" className="section-header">My Tasks</h2>
          <p id="task-list-desc" className="p">These are you current active tasks:</p>
          <ul className="task-list" aria-labeledby="task-list-title" aria-describedby="task-list-desc" aria-busy={loading}>
          {tasks.map(({ id, name }) => (
            <li key={id} className="task-list__item">
              {name}
              <button className="btn" onClick={() => deleteTask(id)}>Delete</button>
            </li>
          ))}
          </ul>
        </section>

      </main>
    </>
  )
}
