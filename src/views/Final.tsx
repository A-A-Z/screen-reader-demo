import { useState } from 'react'
import type { FC, FormEvent } from 'react'

interface Task {
  id: number
  name: string
}

const DEFAULT_TASKS: Task[] = [
  { id: 1, name: 'Default task 1' },
  { id: 2, name: 'Default task 2' },
  { id: 3, name: 'Default task 3' },
]

export const Final: FC = () => {
  const [tasks, setTasks] = useState<Task[]>(DEFAULT_TASKS)
  const [taskName, setTaskName] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const name = taskName.trim()
    if (!name || loading) return

    setLoading(true)
    setTaskName('')
    setMessage('Saving')

    // mock network delay
    setTimeout(() => {
      setTasks(prev => [...prev, { id: Date.now(), name }])
      setLoading(false)
      setMessage('Task added')

      // clear message after a couple of seconds
      setTimeout(() => setMessage(''), 2000)
    }, 2000)
  }

  const deleteTask = (id: number) => {
    setTasks(prev => prev.filter(task => task.id !== id))
    setMessage('Message deleted')
    setTimeout(() => setMessage(''), 2000)
  }

  return (
    <>
      <header className="header">
        <h1 className="page-title">My Demo</h1>
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
          <div role="status" className="visually-hidden">{message}</div>
        </section>

        <section className="section">
          <h2 id="task-list-title" className="section-header">My Tasks</h2>
          <p id="task-list-desc" className="p">These are you current active tasks:</p>
          <ul className="task-list" aria-labeledby="task-list-title" aria-describedby="task-list-desc">
          {tasks.map(({ id, name }) => (
            <li key={id} className="task-list__item">
              {name}
              <button className="btn"  onClick={() => deleteTask(id)}>Delete <span className="visually-hidden">{name}</span></button>
            </li>
          ))}
          </ul>
        </section>

      </main>
    </>
  )
}
