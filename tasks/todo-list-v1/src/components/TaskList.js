import React, { useState, useCallback } from "react";

const Task = React.memo(({ task, onToggle }) => {
  console.log(`Rendering task: ${task.text}`);
  return (
    <li
      onClick={() => onToggle(task.id)}
      style={{ textDecoration: task.completed ? "line-through" : "none" }}
    >
      {task.text}
    </li>
  );
});

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Task 1", completed: false },
    { id: 2, text: "Task 2", completed: false },
  ]);

  const toggleTask = useCallback((id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  const addTask = () => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: prevTasks.length + 1,
        text: `Task ${prevTasks.length + 1}`,
        completed: false,
      },
    ]);
  };

  return (
    <>
      <button onClick={addTask}>Add Task</button>
      <ul style={{ listStyle: "none" }}>
        {tasks.map((task) => (
          <Task key={task.id} task={task} onToggle={toggleTask} />
        ))}
      </ul>
    </>
  );
};

export default TaskList;
