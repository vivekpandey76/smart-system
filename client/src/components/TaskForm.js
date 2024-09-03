// src/components/TaskForm.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const TaskForm = ({ task, fetchTasks, setEditingTask }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    deadline: "",
    status: "To Do",
  });

  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title,
        description: task.description,
        deadline: task.deadline,
        status: task.status,
      });
    }
  }, [task]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (task) {
        await axios.put(`/api/tasks/${task.id}`, formData);
      } else {
        await axios.post("/api/tasks", formData);
      }
      setFormData({
        title: "",
        description: "",
        deadline: "",
        status: "To Do",
      });
      setEditingTask(null);
      fetchTasks();
    } catch (error) {
      console.error("Error saving task:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{task ? "Edit Task" : "Add Task"}</h2>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Deadline:
        <input
          type="date"
          name="deadline"
          value={formData.deadline}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Status:
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
        >
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </label>
      <button type="submit">{task ? "Update Task" : "Add Task"}</button>
      {task && (
        <button type="button" onClick={() => setEditingTask(null)}>
          Cancel
        </button>
      )}
    </form>
  );
};

export default TaskForm;
