import { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { saveEmployees } from './utils/localStorage'
import { AuthContext } from './context/AuthContext'

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme')

  if (savedTheme === 'dark' || savedTheme === 'light') {
    return savedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const getInitialSession = () => {
  const loggedInUser = localStorage.getItem('loggedInUser')

  if (!loggedInUser) {
    return { role: null, data: null }
  }

  try {
    const storedUser = JSON.parse(loggedInUser)

    return {
      role: storedUser.role ?? null,
      data: storedUser.data ?? null,
    }
  } catch {
    localStorage.removeItem('loggedInUser')
    return { role: null, data: null }
  }
}

const getTaskStatus = (task) => {
  if (task.completed) return 'completed'
  if (task.failed) return 'failed'
  if (task.newTask) return 'newTask'
  if (task.active) return 'active'

  return null
}

const taskStatusFlags = {
  active: { active: true, newTask: false, completed: false, failed: false },
  completed: { active: false, newTask: false, completed: true, failed: false },
  failed: { active: false, newTask: false, completed: false, failed: true },
}

const App = () => {

  const [session, setSession] = useState(getInitialSession)
  const [theme, setTheme] = useState(getInitialTheme)
  const [userData, setUserData] = useContext(AuthContext)
  const user = session.role
  const loggedInUserData = session.data
  const employeeDashboardData = user === 'employee'
    ? userData.find((employee) => employee.id === loggedInUserData?.id) ?? loggedInUserData
    : null

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark')
  }

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setSession({ role: 'admin', data: null })
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
      return
    }

    if (userData) {
      const employee = userData.find((e) => email === e.email && e.password === password)

      if (employee) {
        setSession({ role: 'employee', data: employee })
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
        return
      }
    }

    alert("Invalid email or password")
  }

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser')
    setSession({ role: null, data: null })
  }

  const updateTaskStatus = (taskIndex, nextStatus) => {
    if (!employeeDashboardData || !userData || !taskStatusFlags[nextStatus]) {
      return
    }

    let refreshedEmployee = null

    const updatedEmployees = userData.map((employee) => {
      if (employee.id !== employeeDashboardData.id) {
        return employee
      }

      const selectedTask = employee.tasks[taskIndex]

      if (!selectedTask) {
        refreshedEmployee = employee
        return employee
      }

      const currentStatus = getTaskStatus(selectedTask)

      if (currentStatus === nextStatus) {
        refreshedEmployee = employee
        return employee
      }

      const nextTaskNumbers = { ...employee.taskNumbers }

      if (currentStatus && nextTaskNumbers[currentStatus] > 0) {
        nextTaskNumbers[currentStatus] -= 1
      }

      nextTaskNumbers[nextStatus] = (nextTaskNumbers[nextStatus] ?? 0) + 1

      const nextEmployee = {
        ...employee,
        taskNumbers: nextTaskNumbers,
        tasks: employee.tasks.map((task, index) => (
          index === taskIndex ? { ...task, ...taskStatusFlags[nextStatus] } : task
        )),
      }

      refreshedEmployee = nextEmployee
      return nextEmployee
    })

    setUserData(updatedEmployees)
    saveEmployees(updatedEmployees)

    if (refreshedEmployee) {
      setSession({ role: 'employee', data: refreshedEmployee })
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: refreshedEmployee }))
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} theme={theme} toggleTheme={toggleTheme} /> : ''}
      {user === 'admin' ? (
        <AdminDashboard onLogout={handleLogout} theme={theme} toggleTheme={toggleTheme} />
      ) : (user === 'employee' ? (
        <EmployeeDashboard
          onLogout={handleLogout}
          data={employeeDashboardData}
          theme={theme}
          toggleTheme={toggleTheme}
          updateTaskStatus={updateTaskStatus}
        />
      ) : null)}

    </>
  )
}

export default App
