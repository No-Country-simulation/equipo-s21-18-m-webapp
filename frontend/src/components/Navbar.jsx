import { Link } from "react-router-dom";
import Logo from "../logo/Logo"

export default function Navbar() {
  return (
    <>
      <div className="w-full h-16 px-8 flex items-center justify-between font-inter text-[0.875rem] font-medium leading-tight border-b-[1px] border-[#e5e7eb]">
        <div className="flex gap-6 items-center">
          <Link to={"/"} className="flex items-center">
            <Logo width={"1.5rem"} height={"1.5rem"}/>
            <span className="font-bold mx-2">Fit Lover</span>
          </Link>

          <ul className="flex gap-4">
            <li className="hover:text-primary transition duration-700 rounded-full relative group isolate">
              <Link to={"/exercises"}>Ejercicios</Link>
            </li>
            <li className="hover:text-primary transition duration-700 rounded-full relative group isolate">
              <Link to={"/routines"}>Rutinas</Link>
            </li>
            <li className="hover:text-primary transition duration-700 rounded-full relative group isolate">
              <Link to={"/dashboard"}>Panel</Link>
            </li>
            <li className="hover:text-primary transition duration-700 rounded-full relative group isolate">
              <Link to={"/progress"}>Progreso</Link>
            </li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link to={"/login"} className="h-[2.25rem] px-3 content-center hover:text-primary transition duration-700 rounded-full relative group isolate">Iniciar sesión</Link>
          <Link to={"/register"} className="bg-primary text-white h-[2.25rem] px-3 content-center rounded-[6px] ">Registrarse</Link>
        </div>
      </div>
    </>
  );
}
