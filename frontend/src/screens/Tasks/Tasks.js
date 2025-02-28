import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/CardComponent/CardComponent";
import Popup from "../../components/NewTaskPopup/NewTaskPopup";
import AddButton from "../../components/AddButton/AddButton";
import { createTask, getTasks } from "../../remote/tasks";
import NewTaskPopup from "../../components/NewTaskPopup/NewTaskPopup";
import { useStateValue } from "../../stores/services/StateProvider";
import { TASKS } from "../../stores/actions/TypeActions";
import { LOAD_TASKS } from "../../stores/actions/DataAction";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [state, dispatch] = useStateValue();

  const loadTasks = async ()=>{
    console.log("Loading...")
    let c = await getTasks()
    dispatch({type:TASKS,subtype:LOAD_TASKS,tasks:c.data})
  }

const handleAddTask = async (task) => {
   await createTask(task)
   await loadTasks()
  };

  return (
    <div className="tasks-container">
      <AddButton content={"Add task"} onClick={() => setIsPopupOpen(true)} />
      <NewTaskPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} onAddTask={handleAddTask} />
      <div className="card-list">
        {Object.keys(state.tasks).map((item) => (
          <Card key={item} item={state.tasks[item]}/>
        ))}
      </div>
    </div>
  );
}
