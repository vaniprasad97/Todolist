import React, { useState } from "react";
import Calendar from "react-calendar";
import "./TodoApp.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [value, onChange] = useState(new Date());

  const data = {
    labels: ["Completed", "InProgress", "Cancelled Tasks"],
    datasets: [
      {
        data: [3, 6, 9],
        backgroundColor: ["green", "orange", "grey"],
      },
    ],
  };
  const options = {
    title: {
      display: true,
      text: "Monthly and Weekly Performance",
    },
  };

  const handleAddTask = () => {
    const newTaskObj = {
      taskName: newTask,
      taskPriority: priority,
      taskDescription: description,
      taskDate: date,
    };
    setTasks([...tasks, newTaskObj]);
    setNewTask("");
    setPriority("");
    setDescription("");
    setDate("");

    /// create fun to render piechartt
  };

  const handleTaskStatusChange = (index, status) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status = status;
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="todo-list">
      <h1>To-Do List</h1>
      <div className="input-group">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter task name"
        />

        {/* <input type="text" value={priority} onChange={(e) => setPriority(e.target.value)} placeholder="Enter task priority" /> */}
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Enter task date"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
     
            {/* <p>Priority: {task.taskPriority}</p> */}
            {/* <label>
        <input type="checkbox" />
        Completed
      </label>
      <label>
        <input type="checkbox" />
        In Progress
      </label>
      <label>
        <input type="checkbox" />
        Cancelled
      </label>  */}
            {/* <p>Description: {task.taskDescription}</p>
            <p>Date: {task.taskDate}</p> */}
             <div>
        {/* <h2>Task Manager</h2> */}
        <table border="2px" align="center" width ="50px">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2">S.no</th>
                <th className="px-4 py-2">taskName</th>
                <th className="px-4 py-2">taskDescription</th>
                <th className="px-4 py-2">taskDate</th>
                <th className="px-4 py-2">taskDelete</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-200" : "bg-gray-100"}
                  
                >
                    <td className="px-4 py-2">{index+1}</td>
                  <td className="px-4 py-2">{task.taskName}</td>
                  <td className="px-4 py-2">{task.taskDescription}</td>
                  <td className="px-4 py-2">{task.taskDate}</td>
                  <td>     <button onClick={() => handleDeleteTask(index)}>
                    Delete
                  </button>  </td>
                
                </tr>
              ))}
            </tbody>
          </table>

       
        {/* <table border="2px" align="center">
        {tasks.map((task, index) => (
          <tr key={index}>  
              <tr width="25%">
                {task.taskName} 
                <td width="25%">{task.taskDescription}</td>
                <td width="25%">{task.taskDate}</td>
                <td width="25%">
                  <button onClick={() => handleDeleteTask(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            </table>
        ))} */}
      </div>

      <div
        style={{
          padding: "20px",
          width: "40%",
        }}
      >
        <div className="piechart-container">
          <Pie data={data} options={options}></Pie>
          <Calendar onChange={onChange} value={value} />
        </div>
      </div>
      {/* <h1 className='text-center'>React Calendar</h1> */}
      <div className="calendar-container">
        {/* <Calendar onChange={onChange} value={value} /> */}
      </div>
    </div>
  );
}

export default TodoApp;
