import "./App.css";
import NewTask from "./component/NewTask/NewTask";
import AddTask from "./component/AddTask/AddTask";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTask] = useState([]);

  const setNewTask = () => {
    let id = tasks.length - 1 + 1;
    setTask([
      ...tasks,
      { taskTitle: `Task ${id}`, taskText: inputValue, id: id },
    ]);
    setInputValue("")
  };

  const getTasks = tasks.map((task) => {
    return (
      <AddTask
        key={`taskKey-${task?.id}`}
        taskTitle={task?.taskTitle}
        taskText={task?.taskText}
        id={task?.id}
      />
    );
  });

  return (
    <div className="App">
      <h1>Todo app</h1>
      <NewTask
        setInputValue={setInputValue}
        inputValue={inputValue}
        setNewTask={setNewTask}
      />
      <div className="task-wrapper">{getTasks}</div>
    </div>
  );
}

export default App;
