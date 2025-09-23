import Dashboard from "./pages/Dashboard/Dashboard"
import NewCampain from "./pages/Dashboard/NewCampain/NewCampain"
 const routes = [
    // {path : "/" , element : <Home/>} , 
    {path : "/dashboard/*"  , element : <Dashboard/> , children : [
        {path : "" , element : <NewCampain/>} , 
        
    ]}
]




export default routes