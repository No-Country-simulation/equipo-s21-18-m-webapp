import { useFetch } from "../hooks/useFetch";
import { ExercisesContext } from "./ExercisesContext";

export const ExercisesProvider = ({ children }) => {
  const { data: exerciseList, isLoading: isLoadingExercise } = useFetch(
    "https://equipo-s21-18-m-webapp.onrender.com/exercises",
  );
  const { data: routineList, isLoading: isLoadingRoutine } = useFetch(
    "https://equipo-s21-18-m-webapp.onrender.com/routines/",
  );
  return (
    <ExercisesContext.Provider
      value={{ exerciseList, isLoadingExercise, routineList, isLoadingRoutine }}
    >
      {children}
    </ExercisesContext.Provider>
  );
};
