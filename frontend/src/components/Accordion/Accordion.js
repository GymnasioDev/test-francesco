import React, { useState } from "react";
import "./Accordion.css";
import Card from "../CardComponent/CardComponent";

export default function Accordion({ title, items }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="expandable-section">
      <button className="expand-button" onClick={() => setExpanded(!expanded)}>
        {expanded ? "▼" : "▶"} {title}
      </button>
      {expanded && (
        <div className="section-content">
          {items.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
