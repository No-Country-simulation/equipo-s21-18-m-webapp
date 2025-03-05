import { ExerciseCard } from "../components/ExerciseCard";
import { LoadingView } from "../components/LoadingView";
import { useFetch } from "../hooks/useFetch";

export const ExerciseLibrary = () => {
  const { data, hasError, isLoading } = useFetch(
    "https://equipo-s21-18-m-webapp.onrender.com/exercises",
  );
  return (
    <>
      {isLoading ? (
        <LoadingView />
      ) : (
        <div className="container mx-auto py-10">
          <h1 className="mb-8 text-4xl font-bold">Biblioteca de Ejercicios</h1>
          <div className="mb-8 flex flex-col gap-4 md:flex-row">
            <input
              className="flex h-10 w-full rounded-md border border-gray-200 px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:w-1/3"
              type="text"
              placeholder="Search exercises..."
            />

            <select className="rounded-md border border-gray-200 p-2 tracking-wider focus:border focus:border-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none md:w-1/3">
              <option value="">All Categories</option>
              <option value="Strength Training">Strength Training</option>
              <option value="Cardio">Cardio</option>
              <option value="Flexibility">Flexibility</option>
              <option value="HIIT">HIIT</option>
              <option value="Yoga">Yoga</option>
              <option value="Core">Core</option>
            </select>
            <select className="rounded-md border border-gray-200 p-2 tracking-wider focus:border focus:border-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none md:w-1/3">
              <option value="">All Difficulties</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data
              ? data.map((exercise) => (
                  <ExerciseCard key={exercise._id} exercise={exercise} />
                ))
              : "Datos no disponibles"}
          </div>
        </div>
      )}
    </>
  );
};
