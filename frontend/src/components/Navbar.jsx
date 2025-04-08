import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "./Avatar";
import DownArrow from "../icons/DownArrow";
import MenuBurguer from "./MenuBurguer";
import useScroll from "../hooks/useScroll";

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

    setIsLoged(!!token);
  }, []);

  // utilizamos el hook para decectar scroll.
  const isScrolled = useScroll();

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
      <div
        className={`font-inter sticky top-0 left-0 z-50 flex h-16 w-full items-center justify-between border-b-[1px] border-[#e5e7eb] px-8 text-[0.875rem] leading-tight font-medium transition-all duration-300 ${
          isScrolled
            ? "bg-opacity-50 bg-transparent backdrop-blur-md"
            : "bg-white"
        }`}
      >
        <div className="flex items-center gap-6">
          <Link to={"/"} className="flex items-center">
            <Logo width={"1.5rem"} height={"1.5rem"} />
            <span className="mx-2 font-bold">Fit Lover</span>
          </Link>

          <ul className="flex gap-4 max-md:hidden">
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
            {isLoged ? <Avatar /> : <MenuBurguer />}
            <DownArrow />
          </button>
          {/* Menú desplegable */}
          {isOpen && (
            <div className="absolute top-full right-0 z-10 mt-2 w-48 rounded-lg bg-white p-2 shadow-lg">
              {isLoged ? (
                <ul className="text-sm text-gray-700">
                  <li className="rounded p-2 hover:bg-gray-100">
                    <Link
                      to="/profile"
                      className="block w-full"
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      <div className="h-full w-full">Perfil</div>
                    </Link>
                  </li>
                  <li className="rounded p-2 hover:bg-gray-100">
                    <button
                      onClick={handleLogout}
                      className="w-full cursor-pointer text-left"
                    >
                      {loggingOut ? "Cerrando sesión..." : "Cerrar sesión"}
                    </button>
                  </li>
                </ul>
              ) : (
                <ul className="text-sm text-gray-700">
                  <li className="rounded p-2 hover:bg-gray-100">
                    <Link
                      to={"/login"}
                      className="block w-full"
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      Iniciar sesión
                    </Link>
                  </li>
                  <li className="rounded p-2 hover:bg-gray-100">
                    <Link
                      to={"/register"}
                      className="block w-full"
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      Registrarse
                    </Link>
                  </li>
                </ul>
              )}
              <ul className="mt-2 border-t-[1px] border-[#aaaaaa] text-sm text-gray-700">
                <li className="rounded p-2 hover:bg-gray-100">
                  <Link
                    to={"/exercises"}
                    className="block w-full"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    Ejercicios
                  </Link>
                </li>
                <li className="rounded p-2 hover:bg-gray-100">
                  <Link
                    to={"/routines"}
                    className="block w-full"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    Rutinas
                  </Link>
                </li>
                <li className="rounded p-2 hover:bg-gray-100">
                  <Link
                    to={"/dashboard"}
                    className="block w-full"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    Panel
                  </Link>
                </li>
                <li className="rounded p-2 hover:bg-gray-100">
                  <Link
                    to={"/progress"}
                    className="block w-full"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    Progreso
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
