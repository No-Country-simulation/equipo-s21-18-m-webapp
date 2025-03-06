import { Link } from "react-router-dom";

export const RoutineDetails = () => {
  return (
    <div className="flex-1">
      <div className="container mx-auto py-10">
        <Link to={"/routines"}>
          <button className="mb-6 inline-flex h-10 items-center justify-center gap-2 rounded-md border border-gray-200 px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors hover:bg-gray-100">
            <span className="ml-1 text-sm font-medium">← Volver a Rutinas</span>
          </button>
        </Link>
        <h1 className="mb-4 text-4xl font-bold">Principiante Cuerpo Completo</h1>
        <div className="flex flex-wrap gap-4 mb-6">
          <p className="bg-slate-100 text-slate-800 rounded-full px-3 py-1 text-sm font-semibold">Fortaleza</p>
          <p className="bg-slate-100 text-slate-800 rounded-full px-3 py-1 text-sm font-semibold">Principiante</p>
          <p className="bg-slate-100 text-slate-800 rounded-full px-3 py-1 text-sm font-semibold">30 minutos</p>
        </div>
        <p className="text-lg mb-8">
          Un entrenamiento integral de cuerpo completo diseñado para principiantes. Esta rutina se enfoca en todos los grupos musculares principales y ayuda a desarrollar una base de fuerza y ​​aptitud física.
        </p>
        <h2 className="mb-4 text-3xl font-semibold">Ejercicios</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <div className="rounded-lg border border-gray-200 p-6 pt-0 transition-shadow hover:shadow-lg">
            <h3 className="mb-2 text-2xl pt-4 font-semibold">Sentadillas con peso corporal</h3>
            <p>Conjuntos: 3</p>
            <p>Repeticiones: 10</p>
          </div>
          <div className="rounded-lg border border-gray-200 p-6 pt-0 transition-shadow hover:shadow-lg">
            <h3 className="mb-2 text-2xl pt-4 font-semibold">Flexiones de brazos (o flexiones de rodillas)</h3>
            <p>Conjuntos: 3</p>
            <p>Repeticiones: 8</p>
          </div>
          <div className="rounded-lg border border-gray-200 p-6 pt-0 transition-shadow hover:shadow-lg">
            <h3 className="mb-2 text-2xl pt-4 font-semibold">Estocadas</h3>
            <p>Conjuntos: 3</p>
            <p>Repeticiones: 8</p>
            <p className="text-gray-500 py-3">Cada pierna</p>
          </div>
          <div className="rounded-lg border border-gray-200 p-6 pt-0 transition-shadow hover:shadow-lg">
            <h3 className="mb-2 text-2xl pt-4 font-semibold">Tablón</h3>
            <p>Conjuntos: 3</p>
            <p>Duración: 30 segundos</p>
          </div>
          <div className="rounded-lg border border-gray-200 p-6 pt-0 transition-shadow hover:shadow-lg">
            <h3 className="mb-2 text-2xl pt-4 font-semibold">Remo con mancuernas</h3>
            <p>Conjuntos: 3</p>
            <p>Repeticiones: 10</p>
            <p className="text-gray-500 py-3">Cada brazo</p>
          </div>
          <div className="rounded-lg border border-gray-200 p-6 pt-0 transition-shadow hover:shadow-lg">
            <h3 className="mb-2 text-2xl pt-4 font-semibold">Puentes de glúteos</h3>
            <p>Conjuntos: 3</p>
            <p>Repeticiones: 12</p>
          </div>
        </div> 
        <div className="flex justify-center">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 bg-[#b50d50] text-white hover:bg-[#e51065]">Agregar a mis rutinas</button>
        </div>

      </div>
    </div>
  );
};