import React, { useState } from "react";

export default function TaskList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    setTasks([...tasks, { text: task, complete: false }]);
    setTask("");
  };

  const handleComplete = (index) => {
    const newTasks = tasks.map((t, idx) =>
      idx === index ? { ...t, complete: !t.complete } : t
    );
    setTasks(newTasks);
  };

  const handleRemove = (index) => {
    const newTasks = tasks.filter((_, idx) => idx !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add task</button>
      <ul className="list">
        {tasks.map((task, idx) => {
          return (
            <li>
              <span className={task.complete ? "crossed-out" : ""}>
                {task.text}
              </span>
              <input
                type="checkbox"
                value={task.complete}
                onChange={() => handleComplete(idx)}
              />
              <button onClick={() => handleRemove(idx)}>remove</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
