import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import { ExerciseLibrary } from "./pages/ExerciseLibrary";
import { ExerciseDetail } from "./pages/ExerciseDetail";
import { RoutineLibrary } from "./pages/RoutineLibrary";
import { RoutineDetails } from "./pages/RoutineDetails";
import Profile from "./pages/Profile";
import { ExercisesProvider } from "./context/ExercisesProvider";
import Dashboard from "./pages/Dashboard";
import { ToastProvider } from "./context/ToastProvider";
import { RoutinesProvider } from "./context/RoutinesProvider";

function App() {
  return (
    <ExercisesProvider>
      <RoutinesProvider>
        <ToastProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/exercises" element={<ExerciseLibrary />} />
              <Route path="/exercise-detail/:id" element={<ExerciseDetail />} />
              <Route path="/routines" element={<RoutineLibrary />} />
              <Route path="/routine-details/:id" element={<RoutineDetails />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/dashboard/*" element={<Dashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </ToastProvider>
      </RoutinesProvider>
    </ExercisesProvider>
  );
}

export default App;
