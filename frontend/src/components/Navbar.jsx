import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "./Avatar";
import DownArrow from "../icons/DownArrow";

export default function Navbar() {
  const [isLoged, setIsLoged] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const navigate = useNavigate();

  // Función para cerrar el menú cuando se hace clic fuera de él
  const handleClickOutside = (event) => {
    if (!event.target.closest(".menu-container")) {
      setIsOpen(false);
    }
  };

  // Agregar evento global al montar el componente
  useState(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Verificar si hay un token en el localStorage
  useEffect(() => {
    const token = localStorage.getItem("jwt");

    if (token) {
      setIsLoged(true);
    } else {
      setIsLoged(false); // Si no hay token, el usuario no está logueado
    }
  }, [localStorage.getItem("jwt")]);


  // Función para cerrar sesión
  const handleLogout = () => {
    setLoggingOut(true); // Establece loggingOut a true para mostrar el mensaje de cierre de sesión

    // Simula un pequeño retraso para mostrar el mensaje de cierre de sesión
    setTimeout(() => {
      localStorage.removeItem("jwt");
      setIsLoged(false);
      setLoggingOut(false);
      navigate("/login");
    }, 1000);
  };


  return (
    <>
      <div className="font-inter flex h-16 w-full items-center justify-between border-b-[1px] border-[#e5e7eb] px-8 text-[0.875rem] leading-tight font-medium">
        <div className="flex items-center gap-6">
          <Link to={"/"} className="flex items-center">
            <Logo width={"1.5rem"} height={"1.5rem"} />
            <span className="mx-2 font-bold">Fit Lover</span>
          </Link>

          <ul className="flex gap-4">
            <li className="hover:text-primary group relative isolate rounded-full transition duration-700">
              <Link to={"/exercises"}>Ejercicios</Link>
            </li>
            <li className="hover:text-primary group relative isolate rounded-full transition duration-700">
              <Link to={"/routines"}>Rutinas</Link>
            </li>
            <li className="hover:text-primary group relative isolate rounded-full transition duration-700">
              <Link to={"/dashboard"}>Panel</Link>
            </li>
            <li className="hover:text-primary group relative isolate rounded-full transition duration-700">
              <Link to={"/progress"}>Progreso</Link>
            </li>
          </ul>
        </div>

        {isLoged ? (
          <div className="menu-container relative">
            {" "}
            {/* Contenedor para menú */}
            <button
              onClick={(e) => {
                e.stopPropagation(); // Evita que el evento de click se propague
                setIsOpen(!isOpen);
              }}
              className="flex cursor-pointer items-center gap-1 rounded-lg p-2 hover:bg-gray-100"
            >
              <Avatar />
              <DownArrow />
            </button>
            {/* Menú desplegable */}
            {isOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 rounded-lg bg-white p-2 shadow-lg">
                <ul className="text-sm text-gray-700">
                  <li className="rounded p-2 hover:bg-gray-100">Perfil</li>
                  <li className="rounded p-2 hover:bg-gray-100">
                    Configuración
                  </li>
                  <li className="rounded p-2 hover:bg-gray-100">
                  <button onClick={handleLogout} className="w-full text-left cursor-pointer">
                      {loggingOut ? "Cerrando sesión..." : "Cerrar sesión"}
                  </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div className="flex gap-4">
            <Link
              to={"/login"}
              className="hover:text-primary h-[2.25rem] content-center rounded-full px-3 transition duration-700"
            >
              Iniciar sesión
            </Link>
            <Link
              to={"/register"}
              className="bg-primary h-[2.25rem] content-center rounded-[6px] px-3 text-white"
            >
              Registrarse
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
