import {useState} from 'react'

export const Tasks = () => {
    const [tasks, setTasks] = useState([{
        id : 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30',
        reminder:true,
    }])

    return (
        <>
            {tasks.map((task) => (<h3 key = {task.id}>task.text</h3>))}
        </>
    )
}

export default Tasks