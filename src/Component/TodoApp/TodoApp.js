import React, { useState,useEffect } from "react";
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
  const [status, Setstatus] = useState("");

  const [value, onChange] = useState(new Date());
  const Dropdownoptions = ["completed ", "Not completed", "Inprogress"];
  
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
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  const handleSetStatus = (value,index) => {
    console.log("value",value);
    console.log("value",index);
    Setstatus(value);
    console.log("jhy8bgguvbygvgyv",value);
    let t = [...tasks];
    t[index] = {
      ...tasks[index],
      taskStatus:value, 
    }

    console.log("t",t);
    setTasks(t);
    console.log(tasks);
    tasks.map(Item => {


      console.log(Item.taskStatus)
  
      
  });

  //   tasks.map((item)=>(
  //   {
  //     console.log(item.taskName);
  //   }
  //   )
  //   console.log(tasks.taskStatus);
   }
  useEffect(() => {
    console.log("tasksss",tasks);
  },[tasks])








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

        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description"
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Enter task date"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      {tasks.length < 1 ? null : (
        <div>
          <h2>Task List table</h2>
          <table border="2px" align="center" width="100%">
            <thead>
              <tr>
                <th>S.no</th>
                <th>taskName</th>
                <th>taskDescription</th>
                <th>taskDate</th>
                <th>taskDelete</th>
                <th>Task status</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{task.taskName}</td>
                  <td>{task.taskDescription}</td>
                  <td>{task.taskDate}</td>
                  <td>
                    <button onClick={() => handleDeleteTask(index)}>
                      Delete
                    </button>
                  </td>
                  <td>
                    <label>Select status </label>
                    <select
                       value={status}  
                       onChange={(e) => {
                        console.log(e.target.value)
                        handleSetStatus(e.target.value,index)
                      }}  
                         >
                      {Dropdownoptions.map((option) => (  
                        <option
                          id="dropdown" 
                           key={option}  
                           value= {option}
                        //  value={status}  
                        >
                          {option}
                        </option>
                      ))}
                     

                      
                    </select>
                   
                  
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div
        style={{
          padding: "20px",
          width: "40%",
        }}
      >
        <div className="piechart-container">
          <h1>Pie Chart Representation</h1>
          <Pie data={data} options={options}></Pie>
          <h1>Calendar Representation</h1>
          <Calendar onChange={onChange} value={value} />
        </div>
      </div>
    </div>
  );
}

export default TodoApp;





































// import React, { useState } from "react";
// import Calendar from "react-calendar";
// import "./TodoApp.css";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Pie } from "react-chartjs-2";
// ChartJS.register(ArcElement, Tooltip, Legend);

// function TodoApp() {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState("");
//   const [description, setDescription] = useState("");
//   const [date, setDate] = useState("");
//   const [status, Setstatus] = useState("");
//   const [value, onChange] = useState(new Date());
  
//   const Dropdownoptions = ["Not completed ", "completed", "Inprogress"];
  

//   console.log(status);

//   const data = {
//     labels: ["Completed", "InProgress", "Cancelled Tasks"],
//     datasets: [
//       {
//         data: [3, 6, 9],
//         backgroundColor: ["green", "orange", "grey"],
//       },
//     ],
//   };
//   const options = {
    
//   };

//   const handleAddTask = () => {
//     const newTaskObj = {
//       taskName: newTask, 
//       taskDescription: description,
//       taskDate: date,
//     };
//     setTasks([...tasks, newTaskObj]);
//     setNewTask("");
//     setDescription("");
//     setDate("");
//   };

//   const handleDeleteTask = (index) => {
//     const newTasks = [...tasks];
//     newTasks.splice(index, 1);
//     setTasks(newTasks);
//   };

//   return (
//     <div className="todo-list">
//       <h1>To-Do List</h1>
//       <div className="input-group">
//         <input
//           type="text"
//           value={newTask}
//           onChange={(e) => setNewTask(e.target.value)}
//           placeholder="Enter task name"
//           required
//         />

//         <input
//           type="text"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           placeholder="Enter task description"
//           required
//         />
//         <input
//           type="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//           placeholder="Enter task date"
//         />
//         <button onClick={handleAddTask}>Add Task</button>
//       </div>
//       {tasks.length < 1 ? null : (
//         <div>
//           <h2>Task List table</h2>
//           <table border="2px" align="center" width="100%">
//             <thead>
//               <tr>
//                 <th>S.no</th>
//                 <th>taskName</th>
//                 <th>taskDescription</th>
//                 <th>taskDate</th>
//                 <th>taskDelete</th>
//                 <th>Task status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {tasks.map((task, index) => (
//                 <tr key={index}>
//                   <td>{index + 1}</td>
//                   <td>{task.taskName}</td>
//                   <td>{task.taskDescription}</td>
//                   <td>{task.taskDate}</td>
//                   <td>
//                     <button onClick={() => handleDeleteTask(index)}>
//                       Delete
//                     </button>
//                   </td>
//                   <td>
//                     <label>Select status </label>
//                     <select>
//                       {Dropdownoptions.map((option) => (
//                         <option
//                           id="dropdown"
//                            value={status}
//                           onChange={(e) => Setstatus(e.target.value)}
//                           key={option}
//                         >
//                           {option}
//                         </option>
//                       ))}
//                     </select>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       <div
//         style={{
//           padding: "",
//           alignItems:"center",
//           width: "60%",
//         }}
//       >
//         <div 
//          style={{
//           padding: "",
//           alignItems:"center",
//           width: "80%",
//         }}
//         >
//           <h1>Pie Chart Representation</h1>
//           <Pie data={data} options={options}></Pie>
//           <h1> Calendar Representation</h1>
//           <div
//             style={{
//               margin: "auto",
//               width: "150%",
//               border: "3px solid blue",
//               padding: "10px",
//             }}>
         
//           <Calendar onChange={onChange} value={value} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TodoApp;
