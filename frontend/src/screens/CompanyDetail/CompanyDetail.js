import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CompanyDetail.css";
import Accordion from "../../components/Accordion/Accordion";
import { useStateValue } from "../../stores/services/StateProvider";
import AddButton from "../../components/AddButton/AddButton";
import AddTaskToCompanyPopup from "../../components/AddTaskToCompanyPopup/AddTaskToCompanyPopup";
import { getCompany, updateCompany } from "../../remote/companies";

export default function CompanyDetail() {
  const { companyId } = useParams();
  const [company,setCompany] = useState();

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  
  const navigate = useNavigate();


  const loadCompany = async()=>{
    let c = await getCompany(companyId);
    console.log("C: ",c)
    setCompany(c.data)
  }

  useEffect(()=>{
      loadCompany()
  },[companyId])

 
  


  const handleAddCompanyTasks = async (tasks) => {
    
    await updateCompany(companyId,{tasks})
   
   };

  
  

  return (
    <div className="company-detail">
      <nav className="breadcrumb">
        <button onClick={() => navigate(-1)}>← Torna alle aziende</button>
      </nav>
      <div className="company-info">
        <h2 style={{color:'black'}}>{company?.name}</h2>
        <AddButton content={"Add task"} onClick={() => setIsPopupOpen(true)} />
        <AddTaskToCompanyPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} onAddCompanyTasks={handleAddCompanyTasks} />
      </div>
    </div>
  );
}
