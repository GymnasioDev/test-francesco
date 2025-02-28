import { useEffect, useRef } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";
// import MainInspection from "./components/MainInspection/MainInspection";
import { nav_paths } from "./config/navigationConst";
import { colors } from "./config/style";
import LateralNavigation from "./components/LateralNavigation/LateralNavigation";
import Companies from "./screens/Companies/Companies";
import CompanyDetail from "./screens/CompanyDetail/CompanyDetail";
import Tasks from "./screens/Tasks/Tasks";
import { useStateValue } from "./stores/services/StateProvider";
import { getCompanies } from "./remote/companies";
import { COMPANIES, TASKS } from "./stores/actions/TypeActions";
import { LOAD_COMPANIES, LOAD_TASKS } from "./stores/actions/DataAction";
import { getTasks } from "./remote/tasks";

const MainRouter = () => {
 

  const [state,dispatch] = useStateValue()


  const stateRef = useRef();
  stateRef.current = stateRef;

  const loadCompanies = async ()=>{

    let c = await getCompanies()
    
    dispatch({type:COMPANIES,subtype:LOAD_COMPANIES,companies:c.data})
  }

  const loadTasks = async ()=>{

    let c = await getTasks()
    dispatch({type:TASKS,subtype:LOAD_TASKS,tasks:c.data})
  }

  useEffect(()=>{
    console.log("Here...")
    loadCompanies()
    loadTasks()
  },[])

  


  return (
    <>
      <div
        // ref={printRef}
        id="printable-report"
        style={{ display: "none" }} // Nascosto nel DOM
      ></div>
      <div
        id="interface"
        style={{
          display: "flex",
          flexDirection: "row",
          background: 'transparent',
        }}
      >
        
        <Router>
          <Routes>
            
            
          <Route
              path={nav_paths.companies+"/:companyId"}
              element={
                <>
               
                    <LateralNavigation />
                    <CompanyDetail/>
                  
                </>
              }
            />

            <Route
              path={nav_paths.companies+"/"}
              element={
                <>
               
                    <LateralNavigation />
                    <Companies/>
                  
                </>
              }
            />

           

            <Route
              path={nav_paths.tasks}
              element={
                <>
               
                    <LateralNavigation />
                    <Tasks />
                  
                </>
              }
            />

           
            <Route
              path="/"
              element={
                <>
                  
                    <Navigate to={nav_paths.companies} replace={true} />
                 
                </>
              }
            />

            <Route path="*" element={<Navigate to="/" replace={true} />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default MainRouter;
