import { useFetch } from "../hooks/useFetch";
import { ExercisesContext } from "./ExercisesContext";

export const ExercisesProvider = ({ children }) => {
  const { data: exerciseList, isLoading: isLoadingExercise } = useFetch(
    "https://equipo-s21-18-m-webapp.onrender.com/exercises",
  );

  return (
    <ExercisesContext.Provider value={{ exerciseList, isLoadingExercise }}>
      {children}
    </ExercisesContext.Provider>
  );
};
