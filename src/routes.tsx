import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import Dashboard from "./pages/Dashboard/Dashboard";
import NewCampaign from "./pages/Dashboard/NewCampaign/NewCampaign";
import UsersManagment from "./pages/AdminDashboard/UsersManagment/UsersManagment";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Campaigns from "./pages/Dashboard/Campaigns/Campaigns";
import Auth from "./pages/Auth/Auth";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import AllCampaigns from "./pages/Dashboard/Reports/AllCampaigns/AllCampaigns";
import ActiveCampaigns from "./pages/Dashboard/Reports/ActiveCampaigns/ActiveCampaigns";
import InactiveCampaigns from "./pages/Dashboard/Reports/InactiveCampaigns/InactiveCampaigns";
import BlockedCampaigns from "./pages/Dashboard/Reports/BlockedCampaigns/BlockedCampaigns";
import Reports from "./pages/Dashboard/Reports/Reports";
const routes = createBrowserRouter([
  {
    path: "/dashboard/*",
    element: <Dashboard />,
    children: [
      { index: true, element: <Navigate to={"new-campaign"} replace /> },
      { path: "new-campaign", element: <NewCampaign /> },
      { path: "campaigns", element: <Campaigns /> },
      {
        path: "reports",
        element: <Reports />,
        children: [
          { index: true, element: <Navigate to={"all-campaigns"} replace /> },
          {
            path: "all-campaigns",
            element: <AllCampaigns />,
            handle: { title: "همه ی کمپین ها" },
          },
          {
            path: "active-campagins",
            element: <ActiveCampaigns />,
            handle: { title: "کمپین های فعال" },
          },
          {
            path: "inactive-campagins",
            element: <InactiveCampaigns />,
            handle: { title: "کمپین های غیر فعال" },
          },
          {
            path: "blocked-campagins",
            element: <BlockedCampaigns />,
            handle: { title: "کمپین های مسدود" },
          },
        ],
      },
    ],
  },

  {
    path: "/admin-dashboard/*",
    element: <AdminDashboard />,
    children: [
      { index: true, element: <Navigate to={"user-managment"} replace /> },
      { path: "user-managment", element: <UsersManagment /> },
    ],
  },

  {
    path: "/auth/*",
    element: <Auth />,
    children: [
      { index: true, element: <Navigate to="login" replace /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);

export default routes;
