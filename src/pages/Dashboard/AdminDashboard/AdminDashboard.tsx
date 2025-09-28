import React from "react";
import CompactNavigation from "../../../components/modules/AdminDashboard/CompactNavigation/CompactNavigation";
import { Outlet } from "react-router";

function AdminDashboard() {
  return (
    <div className="flex h-screen  ">
      <CompactNavigation />
      <div className="grow max-w-[calc(100%-110px)]">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminDashboard;
