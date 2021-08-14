const tasks = [
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
]

const Tasks = () => {
    return (
        <>
        {tasks.map((task) => (<h3 key = {task.id}>{task.text}</h3>))}
        </>
    )
        
}

export default Tasks
