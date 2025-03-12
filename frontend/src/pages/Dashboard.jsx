import SiderMenu from "../components/SiderMenu";
import { Routes, Route, Navigate } from "react-router-dom";

import { UserRoutines } from "./UserRoutines";
import { UserProgress } from "./UserProgress";
import { UserDashboard } from "./UserDashboard";

export default function Dashboard() {
  return (
    <>
      <div className="flex">
        <SiderMenu />
        <section className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard/panel" />} />
            <Route path="panel" element={<UserDashboard />} />
            <Route path="routines" element={<UserRoutines />} />
            <Route path="progress" element={<UserProgress />} />
          </Routes>
        </section>
      </div>
    </>
  );
}
