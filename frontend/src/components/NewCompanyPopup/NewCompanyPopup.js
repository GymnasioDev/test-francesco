import React, { useState } from "react";
import "./NewCompanyPopup.css";
import Company from "../../models/Company";

export default function NewCompanyPopup({ isOpen, onClose, onAddCompany }) {
  const [companyName, setCompanyName] = useState("");
  const [isOcra, setIsOcra] = useState(false);
  const [isNiosh, setIsNiosh] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (companyName.trim() === "") return;

    const newCompany = new Company({
      id:-1,
      name: companyName,
      ocra: isOcra,
      niosh: isNiosh
    })

    onAddCompany(newCompany);
    setCompanyName("");
    setIsOcra(false);
    setIsNiosh(false);
   
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3 className="modal-title">Add New Company</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Company Name</label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Enter company name"
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
            <button type="submit" className="confirm-button">Add Company</button>
            <button type="button" className="cancel-button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
