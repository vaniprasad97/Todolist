// TodoList.js

import React, { useState } from 'react';
import './TodoApp.css';
// import { Pie } from "react-chartjs-2";
// import Calendar from "react-big-calendar";
// import moment from "moment";
// import "react-big-calendar/lib/css/react-big-calendar.css";

// Calendar.setLocalizer(Calendar.momentLocalizer(moment));

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleAddTask = () => {
    const newTaskObj = {
      taskName: newTask,
      taskPriority: priority,
      taskDescription: description,
      taskDate: date
    };
    setTasks([...tasks, newTaskObj]);
    setNewTask('');
    setPriority('');
    setDescription('');
    setDate('');
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
        <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Enter task name" />
        <input type="text" value={priority} onChange={(e) => setPriority(e.target.value)} placeholder="Enter task priority" />
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter task description" />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Enter task date" />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <h2>{task.taskName}</h2>
            <p>Priority: {task.taskPriority}</p>
            <p>Description: {task.taskDescription}</p>
            <p>Date: {task.taskDate}</p>
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

////// new 2222222222


// import React, { useState } from 'react';
// import "./TodoApp.css";
// import { AiFillDelete } from "react-icons/ai";
// import { AiFillEdit } from "react-icons/ai";

// function TodoList() {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState('');

//   const addTask = () => {
//     setTasks([...tasks, newTask]);
//     setNewTask('');
//   };
//  const handleDeleteTask = (index) => {
//     const newTasks = [...tasks];
//     newTasks.splice(index, 1);
//     setTasks(newTasks);
//   };

//   return (
//     <div className="todo-container">
//         <h1> Todo App </h1>
//     <div className='input-section'>
//       <input type="text"
//        value={newTask} 
//        onChange={(e) => setNewTask(e.target.value)}
//        placeholder = "enter task name" />

//          <input type="text"
//        value={newTask} 
//        onChange={(e) => setNewTask(e.target.value)} 
//        placeholder = "enter description"/>

//   <input type="text"
//        value={newTask} 
//        onChange={(e) => setNewTask(e.target.value)} 
//        placeholder = "enter priority"/>
//         <input type="date"
//        value={newTask} 
//        onChange={(e) => setNewTask(e.target.value)} 
//        placeholder = "enter date"/>
//        </div>

//       <button onClick={addTask}>Add Task</button>
//        <ul>
//         {tasks.map((task, index) => (
//           <li  key={index}>{task} 
//             <AiFillEdit  />
//              <AiFillDelete onClick={() => handleDeleteTask(index)}/>
//           </li>
//         ))}
//       </ul>





      
//     </div>
//   );
// }

// export default TodoList;





//// new.......


// import React, { Component } from "react";
// import "./TodoApp.css";
// import { AiFillDelete } from "react-icons/ai";
// import { AiFillEdit } from "react-icons/ai";



// const TodoApp = () => {

 
 
//   const [formData, setFormData] = React.useState({
//     input: "",
//     description: "",
//     priority: "",
//     date :"",
//     items : [],

//   });

//     function handleChange(event) {
//     setFormData((prevFormData) => {
//       return {
//         ...prevFormData,
//         [event.target.name]: event.target.value,
//       };
//     });
//     console.log(FormData);
//   }

// // export default class TodoApp extends Component {
// //   state = {
// //     input: "",
// //     description: "",
// //     prority: "",
// //     date :"",
// //     items: [],
// //   };

//   // handleChange = (event) => {
//   //   this.setState({
//   //     [event.target.name]: event.target.value,
//   //   });
//   //   console.log(this.input);
//   // };

//   storeItems = (event) => {
//     event.preventDefault();
//     const { input } = FormData;
//     // const { description } = this.state;
//     // console.log(description)

//     setFormData({
//       items: [...FormData.items, input],
     
//       input: ""
     
//     });
//   };

//   deleteItem = (key) => {
//     const allItems = FormData.items;
//     allItems.splice(key, 1);
//     setFormData({
//       items: allItems,
//     });
//   };
//   editItem = (key) => {
//     const allItems = FormData.items;
//   };
//   // render() {
//   //   const { input,description, items } = this.state;
//   //   console.log(items);

//     return (
//       <div className="todo-container">
//         <form className="input-section" onSubmit={storeItems}>
//           <h1>TodoApp </h1>
//           <input
//             type="text"
//             name ="input"
//             value={FormData.input}
//             onChange={handleChange}
//             placeholder="enter the task name"
//             required
//           />
//           <input
//             type="text"
//             value={FormData.description}
//             name ="description"
//             onChange={handleChange}
//             placeholder="enter the description"
//           />
//           <input
//             type="text"
//             value={FormData.priority}
//             name = "priority"
//             onChange={handleChange}
//             placeholder="priority"
//             required
//           />


//           <input type="date" 
//           value={FormData.date} 
//           name = "date"
//           onChange={handleChange} 
//           placeholder="enter the date"
//           required/>

//           <div>
//             <button type="submit">Add Items</button>
//           </div>
//         </form>

//         <ul>
//           {items.map((data, index) => (
//             <li key={index}>
//               {data}
//               <AiFillEdit onClick={() => editItem(index)} />
//               <AiFillDelete onClick={() => deleteItem(index)} />
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// export default TodoApp;
