import { useState } from 'react'
import './App.css'

type Task = {
  id: number
  title: string
  completed: boolean
}

function App() {
  // 1️⃣ Estados
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState('')

  // 2️⃣ Funções
  function addTask() {
    if (newTask.trim() === '') return

    const task: Task = {
      id: Date.now(),
      title: newTask,
      completed: false
    }

    setTasks([...tasks, task])
    setNewTask('')
  }

  function toggleTask(id: number) {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    )

    setTasks(updatedTasks)
  }

  function removeTask(id: number) {
    const filteredTasks = tasks.filter(
      (task) => task.id !== id
    )

    setTasks(filteredTasks)
  }

  // 3️⃣ JSX (Tela)
  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>

      <div className="input-group">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Digite uma tarefa"
        />

        <button onClick={addTask}>Adicionar</button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={task.completed ? 'completed' : ''}
          >
            <span onClick={() => toggleTask(task.id)}>
              {task.title}
            </span>

            <button onClick={() => removeTask(task.id)}>
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App


