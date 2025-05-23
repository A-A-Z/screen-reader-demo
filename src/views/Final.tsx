import type { FC } from 'react'

export const Final: FC = () => {
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
          <form>
            <div className="field">
              <label htmlFor="task-name" className="label">Task name</label>
              <input
                id="task-name"
                className="input"
                type="text"
                placeholder="Enter new task name"
                aria-description="Enter new task name"
              />
              <button type="submit" className="btn submit" aria-label="Save task to list">+</button>
            </div>
          </form>
        </section>

        <section className="section">
          <h2 id="task-list-title" className="section-header">My Task</h2>
          <p id="task-list-desc" className="p">These are you current active tasks:</p>
          <ul className="task-list" aria-labeledby="task-list-title" aria-describedby="task-list-desc">
            <li className="task-list__item">
              Task 1
              <button className="btn">Delete <span className="visually-hidden">Task 1</span></button>
            </li>
            <li className="task-list__item">
              Task 2
              <button className="btn">Delete <span className="visually-hidden">Task 2</span></button>
            </li>
            <li className="task-list__item">
              Task 3
              <button className="btn">Delete <span className="visually-hidden">Task 3</span></button>
            </li>
          </ul>
        </section>

      </main>
    </>
  )
}
