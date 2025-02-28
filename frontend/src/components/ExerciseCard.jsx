import { Link } from "react-router-dom";

export const ExerciseCard = () => {
  return (
    <Link to={"/exercise-detail/1"}>
      <div className="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-lg">
        <h2 className="mb-2 text-2xl font-semibold">Push-ups</h2>
        <p className="mb-4 font-medium text-gray-500">
          Strength Training | Beginner
        </p>
        <button className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-[#b50d50] px-4 py-2 text-sm font-medium whitespace-nowrap text-white transition-colors hover:bg-[#e51065]">
          View Details
        </button>
      </div>
    </Link>
  );
};
