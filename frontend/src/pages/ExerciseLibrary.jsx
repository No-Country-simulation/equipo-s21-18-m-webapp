import { useContext } from "react";
import { ExerciseCard } from "../components/ExerciseCard";
import { LoadingView } from "../components/LoadingView";
import { useFilteredExercise } from "../hooks/useFilteredExercise";
import { ExercisesContext } from "../context/ExercisesContext";

export const ExerciseLibrary = () => {
  const { exerciseList: data, isLoadingExercise: isLoading } =
    useContext(ExercisesContext);

  const {
    exercises,
    searchTerm,
    setSearchTerm,
    setSelectedCategory,
    setSelectedLevel,
  } = useFilteredExercise(data);

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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <select
              className="rounded-md border border-gray-200 p-2 tracking-wider focus:border focus:border-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none md:w-1/3"
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Todas las categorías</option>
              <option value="Yoga">Yoga</option>
              <option value="Musculación">Musculación</option>
            </select>
            <select
              className="rounded-md border border-gray-200 p-2 tracking-wider focus:border focus:border-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none md:w-1/3"
              onChange={(e) => setSelectedLevel(e.target.value)}
            >
              <option value="">Todos los niveles</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data
              ? exercises.map((exercise) => (
                  <ExerciseCard key={exercise._id} exercise={exercise} />
                ))
              : "Datos no disponibles"}
          </div>
        </div>
      )}
    </>
  );
};
