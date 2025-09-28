import AdminDashboard from "./pages/Dashboard/AdminDashboard/AdminDashboard"
import Dashboard from "./pages/Dashboard/Dashboard"
import NewCampaign from "./pages/Dashboard/NewCampaign/NewCampaign"
import UsersManagment from "./pages/Dashboard/AdminDashboard/UsersManagment/UsersManagment"
import { Navigate } from "react-router"
 const routes = [
    // {path : "/" , element : <Home/>} , 
    {path : "/dashboard/*"  , element : <Dashboard/> , children : [
        {path : "" , element : <NewCampaign/>} , 
        
    ]
},

        {path : "/admin-dashboard/*" , element : <AdminDashboard/> ,   children : [
            {path : "" , element : <Navigate to={"user-managment"} replace /> } ,
            {path : "user-managment" , element : <UsersManagment/>  }
        ]}

]




export default routes