
import Login from "./Pages/Login";
import { Routes, Route } from "react-router-dom";
// import Home from "./Pages/TodoHome";
import TodoApp from "./Component/TodoApp/TodoApp.js";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<TodoApp />} />
      </Routes>
    </div>
  );
}

export default App;
