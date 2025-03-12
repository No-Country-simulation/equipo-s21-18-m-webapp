import { Link } from "react-router-dom";

export default function SiderMenu() {
    return (
        <>
            <div className="h-screen p-2 w-64 bg-gray-100 font-inter">
                <ul className="max-w-[60%] mx-auto">
                    <li className="text-sm p-2 font-medium text-[#0a0a0a] hover:bg-gray-200 rounded-md transition-all duration-500 ease-in-out"><Link to="/dashboard/panel">Panel</Link></li>
                    <li className="text-sm p-2 font-medium text-[#0a0a0a] hover:bg-gray-200 rounded-md transition-all duration-500 ease-in-out"><Link to="/dashboard/routines">Mis rutinas</Link></li>
                    <li className="text-sm p-2 font-medium text-[#0a0a0a] hover:bg-gray-200 rounded-md transition-all duration-500 ease-in-out"><Link to="/dashboard/progress">Progreso</Link></li>
                    <li className="text-sm p-2 font-medium text-[#0a0a0a] hover:bg-gray-200 rounded-md transition-all duration-500 ease-in-out"><Link to="/profile">Perfil</Link></li>
                </ul>
            </div>
        </>
    )
}