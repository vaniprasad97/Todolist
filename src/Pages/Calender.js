import { useState } from "react";
import "./calendar.css";

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [tasks, setTasks] = useState([
    {
      name: "Task 1",
      description: "Description 1",
      dueDate: "2022-03-01",
      status: "completed",
    },
    {
      name: "Task 2",
      description: "Description 2",
      dueDate: "2022-03-03",
      status: "inProgress",
    },
    {
      name: "Task 3",
      description: "Description 3",
      dueDate: "2022-03-05",
      status: "cancelled",
    },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "green";
      case "inProgress":
        return "orange";
      case "cancelled":
        return "grey";
      default:
        return "black";
    }
  };

  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const formattedDate = date.toISOString().slice(0, 10);
      const dateTasks = tasks.filter((task) => task.dueDate === formattedDate);
      const statusCounts = dateTasks.reduce(
        (acc, task) => {
          acc[task.status]++;
          return acc;
        },
        { completed: 0, inProgress: 0, cancelled: 0 }
      );
      return (
        <div>
          <div style={{ color: getStatusColor("completed") }}>
            {statusCounts.completed}
          </div>
          <div style={{ color: getStatusColor("inProgress") }}>
            {statusCounts.inProgress}
          </div>
          <div style={{ color: getStatusColor("cancelled") }}>
            {statusCounts.cancelled}
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <h2>Monthly Calendar</h2>
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        tileContent={tileContent}
      />
    </div>
  );
}
