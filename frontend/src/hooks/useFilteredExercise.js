import { useState } from "react";

export const useFilteredExercise = (data = []) => {
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data
    ? data.filter(
        (exercise) =>
          (selectedLevel
            ? exercise.level.toLowerCase() === selectedLevel.toLowerCase()
            : true) &&
          (selectedCategory
            ? exercise.category.toLowerCase() === selectedCategory.toLowerCase()
            : true) &&
          (searchTerm
            ? exercise.title.toLowerCase().includes(searchTerm.toLowerCase())
            : true),
      )
    : [];

  return {
    exercises: filteredData,
    searchTerm,
    setSearchTerm,
    setSelectedCategory,
    setSelectedLevel,
  };
};
