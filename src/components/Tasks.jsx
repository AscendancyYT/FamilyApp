import React, { useState, useEffect } from "react";
import axios from "axios";

const Tasks = ({ userRole }) => {
  const [tasks, setTasks] = useState([]);
  const [taskDescription, setTaskDescription] = useState("");
  const [assignedTo, setAssignedTo] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("/api/tasks");
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (taskDescription.trim() && assignedTo.trim()) {
      try {
        const response = await axios.post("http://localhost:5000/api/tasks", {
          description: taskDescription,
          assignedTo,
        });
        setTasks([...tasks, response.data]);
        setTaskDescription("");
        setAssignedTo("");
      } catch (error) {
        console.error("Error adding task:", error);
      }
    }
  };

  return (
    <div className="container protected-content">
      {(userRole === "mom" || userRole === "dad") && (
        <>
          <h2>Tasks for Children</h2>
          <input
            type="text"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            placeholder="Task description"
          />
          <input
            type="text"
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
            placeholder="Assign to (e.g., Child's name)"
          />
          <button onClick={addTask}>Set Task</button>
        </>
      )}

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.description} - Assigned to: {task.assignedTo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
