import React from "react";

export default function AddButton({ content, onClick }) {
  return (
    <button className="add-task-button" onClick={onClick}>
      + {content}
    </button>
  );
}
