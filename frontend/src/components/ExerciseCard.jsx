import { Link } from "react-router-dom";

export const ExerciseCard = ({ exercise }) => {
  const onRoutinesBtn = (event) => {
    event.stopPropagation(); // Evita la navegación
    event.preventDefault(); // Evita el comportamiento predeterminado del Link
    console.log("routines");
  };
  return (
    <Link to={`/exercise-detail/${exercise._id}`}>
      <div className="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-lg">
        <h2 className="mb-2 text-2xl font-semibold">{exercise.tittle}</h2>
        <p className="mb-4 font-medium text-gray-500">
          {exercise.type} | {exercise.level}
        </p>
        <div className="flex space-x-2">
          <button className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-gray-200 px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors hover:bg-gray-100">
            Ver más
          </button>
          <button
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-[#b50d50] px-4 py-2 text-sm font-medium whitespace-nowrap text-white transition-colors hover:bg-[#e51065]"
            onClick={onRoutinesBtn}
          >
            Añadir a la rutina
          </button>
        </div>
      </div>
    </Link>
  );
};
