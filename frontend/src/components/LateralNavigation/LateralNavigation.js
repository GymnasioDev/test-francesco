import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./LateralNavigation.css";
import { nav_paths } from "../../config/navigationConst";

export default function LateralNavigation() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`sidebar ${isOpen ? "open" : "closed"}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <h2 className="title">Dashboard</h2>
      <button className="button" onClick={() => navigate(nav_paths.companies, { replace: true })}>
        Companies
      </button>
      <button className="button" onClick={() => navigate(nav_paths.tasks, { replace: true })}>
        Tasks
      </button>
    </div>
  );
}