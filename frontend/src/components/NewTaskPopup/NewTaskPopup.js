import React, { useState } from "react";
import "./NewTaskPopup.css";
import Task from "../../models/Task";

export default function NewTaskPopup({ isOpen, onClose, onAddTask }) {
  const [taskName, setTaskName] = useState("");
  const [isOcra, setIsOcra] = useState(false);
  const [isNiosh, setIsNiosh] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() === "") return;

    const newTask = new Task ({
      id: -1,
      name: taskName,
      ocra: isOcra,
      niosh: isNiosh
    });

    onAddTask(newTask);
    setTaskName("");
    setIsOcra(false);
    setIsNiosh(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3 className="modal-title">Add New Task</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Task Name</label>
            <input
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              placeholder="Enter task name"
              required
            />
          </div>

          <div className="toggle-group">
            <label className="toggle-label">
              <input
                type="checkbox"
                checked={isOcra}
                onChange={() => setIsOcra(!isOcra)}
              />
              Ocra
            </label>

            <label className="toggle-label">
              <input
                type="checkbox"
                checked={isNiosh}
                onChange={() => setIsNiosh(!isNiosh)}
              />
              Niosh
            </label>
          </div>

          <div className="modal-buttons">
            <button type="submit" className="confirm-button">Add Task</button>
            <button type="button" className="cancel-button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
