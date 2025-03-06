import { Link } from "react-router-dom";

export const RoutineCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-lg border border-gray-200 p-6 pt-0 transition-shadow hover:shadow-lg">
                <h3 className="mb-2 text-2xl pt-4 font-semibold">Principiante Cuerpo Completo</h3>
                <p className="mb-4 font-medium text-gray-500">
                    Fuerza | Principiante
                </p>
                <p className="mb-2 text-1xl">6 ejercicios</p>
                <p className="text-2xl font-semibold">30 minutos</p>
                <div className="items-center p-0 pt-4 flex justify-between mt-auto">
                    <a href="/routine-details/1">
                        <button className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-gray-200 px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors hover:bg-gray-100">
                            Ver detalles
                        </button>
                    </a>
                    <button className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-[#b50d50] px-4 py-2 text-sm font-medium whitespace-nowrap text-white transition-colors hover:bg-[#e51065]">
                        Agregar a mis rutinas
                    </button>
                </div>      
            </div>
            <div className="rounded-lg border border-gray-200 p-6 pt-0 transition-shadow hover:shadow-lg">
                <h3 className="mb-2 text-2xl pt-4 font-semibold">Explosión de cardio HIIT</h3>
                <p className="mb-4 font-medium text-gray-500">
                    Cardio | Intermedio
                </p>
                <p className="mb-2 text-1xl">8 ejercicios</p>
                <p className="text-2xl font-semibold">25 minutos</p>
                <div className="items-center p-0 pt-4 flex justify-between mt-auto">
                    <a href="/routine-details/1">
                        <button className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-gray-200 px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors hover:bg-gray-100">
                            Ver detalles
                        </button>
                    </a>
                    <button className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-[#b50d50] px-4 py-2 text-sm font-medium whitespace-nowrap text-white transition-colors hover:bg-[#e51065]">
                        Agregar a mis rutinas
                    </button>
                </div>      
            </div>
            <div className="rounded-lg border border-gray-200 p-6 pt-0 transition-shadow hover:shadow-lg">
                <h3 className="mb-2 text-2xl pt-4 font-semibold">Yoga para la flexibilidad</h3>
                <p className="mb-4 font-medium text-gray-500">
                    Yoga | Todos los niveles
                </p>
                <p className="mb-2 text-1xl">10 ejercicios</p>
                <p className="text-2xl font-semibold">45 minutos</p>
                <div className="items-center p-0 pt-4 flex justify-between mt-auto">
                    <a href="/routine-details/1">
                        <button className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-gray-200 px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors hover:bg-gray-100">
                            Ver detalles
                        </button>
                    </a>
                    <button className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-[#b50d50] px-4 py-2 text-sm font-medium whitespace-nowrap text-white transition-colors hover:bg-[#e51065]">
                        Agregar a mis rutinas
                    </button>
                </div>      
            </div>
            <div className="rounded-lg border border-gray-200 p-6 pt-0 transition-shadow hover:shadow-lg">
                <h3 className="mb-2 text-2xl pt-4 font-semibold">Entrenamiento básico avanzado</h3>
                <p className="mb-4 font-medium text-gray-500">
                    Básico | Avanzado
                </p>
                <p className="mb-2 text-1xl">7 ejercicios</p>
                <p className="text-2xl font-semibold">20 minutos</p>
                <div className="items-center p-0 pt-4 flex justify-between mt-auto">
                    <a href="/routine-details/1">
                        <button className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-gray-200 px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors hover:bg-gray-100">
                            Ver detalles
                        </button>
                    </a>
                    <button className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-[#b50d50] px-4 py-2 text-sm font-medium whitespace-nowrap text-white transition-colors hover:bg-[#e51065]">
                        Agregar a mis rutinas
                    </button>
                </div>      
            </div>
            <div className="rounded-lg border border-gray-200 p-6 pt-0 transition-shadow hover:shadow-lg">
                <h3 className="mb-2 text-2xl pt-4 font-semibold">Energizante para la pausa del almuerzo rápido</h3>
                <p className="mb-4 font-medium text-gray-500">
                    Mixto | Principiante
                </p>
                <p className="mb-2 text-1xl">5 ejercicios</p>
                <p className="text-2xl font-semibold">15 minutos</p>
                <div className="items-center p-0 pt-4 flex justify-between mt-auto">
                    <a href="/routine-details/1">
                        <button className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-gray-200 px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors hover:bg-gray-100">
                            Ver detalles
                        </button>
                    </a>
                    <button className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-[#b50d50] px-4 py-2 text-sm font-medium whitespace-nowrap text-white transition-colors hover:bg-[#e51065]">
                        Agregar a mis rutinas
                    </button>
                </div>      
            </div>
            <div className="rounded-lg border border-gray-200 p-6 pt-0 transition-shadow hover:shadow-lg">
                <h3 className="mb-2 text-2xl pt-4 font-semibold">Fuerza de la parte superior del cuerpo</h3>
                <p className="mb-4 font-medium text-gray-500">
                    Fuerza | Intermedio
                </p>
                <p className="mb-2 text-1xl">8 ejercicios</p>
                <p className="text-2xl font-semibold">35 minutos</p>
                <div className="items-center p-0 pt-4 flex justify-between mt-auto">
                    <a href="/routine-details/1">
                        <button className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-gray-200 px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors hover:bg-gray-100">
                            Ver detalles
                        </button>
                    </a>
                    <button className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-[#b50d50] px-4 py-2 text-sm font-medium whitespace-nowrap text-white transition-colors hover:bg-[#e51065]">
                        Agregar a mis rutinas
                    </button>
                </div>      
            </div>
        </div>
    );
}
 
