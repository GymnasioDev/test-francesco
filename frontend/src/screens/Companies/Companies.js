import React, { useEffect, useState } from "react";
import Card from "../../components/CardComponent/CardComponent";
import { createCompany, getCompanies } from "../../remote/companies";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../stores/services/StateProvider";
import AddButton from "../../components/AddButton/AddButton";
import Popup from "../../components/NewTaskPopup/NewTaskPopup";
import NewCompanyPopup from "../../components/NewCompanyPopup/NewCompanyPopup";
import { COMPANIES } from "../../stores/actions/TypeActions";
import { LOAD_COMPANIES } from "../../stores/actions/DataAction";

const data = [
  { id: 1, name: "Evento A", date: "2025-03-10" },
  { id: 2, name: "Evento B", date: "2025-04-15" },
  { id: 3, name: "Evento C", date: "2025-05-20" }
];

export default function Companies() {

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [state,dispatch] = useStateValue()

  const navigate = useNavigate()


  const handleCompanyClick = (item) => {
    console.log("-> ","companies/"+item)
    navigate(`/companies/${item}`);
  }

  const loadCompanies = async ()=>{
      console.log("Loading...")
      let c = await getCompanies()
      dispatch({type:COMPANIES,subtype:LOAD_COMPANIES,companies:c.data})
    }

  const handleAddCompany = async (company) => {
     await createCompany(company)
     await loadCompanies()
    };
  
    return (
      <div className="tasks-container">
        <AddButton  content={"Add company"} onClick={() => setIsPopupOpen(true)} />
        <NewCompanyPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} onAddCompany={handleAddCompany} />
      {Object.keys(state.companies).map((item) => (
        <Card key={item} item={state.companies[item]} onClick={() => handleCompanyClick(item)} />
      ))}
    </div>
  );
}

