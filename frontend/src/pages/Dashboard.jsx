import SiderMenu from "../components/SiderMenu";
import { Link, Routes, Route, Navigate  } from 'react-router-dom';
import RoutinesPrueba from '../components/RoutinesPrueba';
import ProgressPrueba from '../components/ProgressPrueba';
import PanelPrueba from '../components/PanelPrueba';

export default function Dashboard() {
  return (
    <>
      <div className="flex">
        <SiderMenu />
        <section>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard/panel" />} />
          <Route path="panel" element={<PanelPrueba />} />
          <Route path="routines" element={<RoutinesPrueba />} />
          <Route path="progress" element={<ProgressPrueba />} />
        </Routes>
        </section>
      </div>
    </>
  );
}
