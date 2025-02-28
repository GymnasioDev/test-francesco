import React, { useState } from "react";
import { useStateValue } from "../../stores/services/StateProvider";
import "./AddTaskToCompanyPopup.css";

export default function AddTaskToCompanyPopup({ isOpen, onClose, onAddCompanyTasks }) {
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [state, dispatch] = useStateValue();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedTasks.length === 0) return;


    console.log("Adding... ",selectedTasks)
    onAddCompanyTasks(selectedTasks);
   
    setSelectedTasks([]);

    onClose();
  };

  const handleTaskSelection = (taskId) => {
    setSelectedTasks((prevSelected) =>
      prevSelected.includes(taskId)
        ? prevSelected.filter((id) => id !== taskId)
        : [...prevSelected, taskId]
    );
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3 className="modal-title">Add task to company</h3>
        <form onSubmit={handleSubmit}>
          

          <div className="form-group">
            <label>{selectedTasks.length}/{Object.keys(state.tasks).length} selezionati</label>
            <div className="task-list">
              {Object.keys(state.tasks).length > 0 ? (
                Object.values(state.tasks).map((task) => (
                  <div key={task.id} className="task-item">
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedTasks.includes(task.id)}
                        onChange={() => handleTaskSelection(task.id)}
                      />
                      {task.name}
                    </label>
                    <div className="task-info">
                      {task.ocra && <span className="badge ocra">OCRA</span>}
                      {task.niosh && <span className="badge niosh">NIOSH</span>}
                    </div>
                  </div>
                ))
              ) : (
                <p className="no-tasks">No tasks available</p>
              )}
            </div>
          </div>

          <div className="modal-buttons">
            <button type="submit" className="confirm-button">
              Add tasks
            </button>
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
