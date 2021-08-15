import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from "react"

const App = () => {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5 at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Meeting at school',
        day: 'Feb 10 at 4:30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 7 at 1:30pm',
        reminder: false
    }
])

  return (
    <div className="container">
      <Header></Header>
      <Tasks tasks = {tasks}></Tasks>
    </div>
  )
}

export default App;
