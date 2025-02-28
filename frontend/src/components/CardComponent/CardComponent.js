import { formatDate } from "../../utils/functions";
import "./CardComponent.css";

export default function Card({ item, onClick }) {
  return (
    <div className="card" onClick={onClick?onClick:null}>
      <div className="card-content">
        <div className="card-info">
          <h3 className="card-title">{item.name}</h3>
          <p className="card-date">{formatDate(item.creationDate)}</p>
        </div>
        <div className="card-tags">
          <span className={`tag ocra ${item.ocra ? "active" : "disabled"}`}>
            OCRA
          </span>
          <span className={`tag niosh ${item.niosh ? "active" : "disabled"}`}>
            NIOSH
          </span>
        </div>
      </div>
    </div>
  );
}
