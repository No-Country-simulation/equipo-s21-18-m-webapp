import { Link } from 'react-router-dom';

export const ExerciseCard = () => {
  return (
    <Link to={'/exercise-detail/1'}>
      <div className='border rounded-lg border-gray-200 p-6 hover:shadow-lg transition-shadow'>
        <h2 className='text-2xl font-semibold mb-2'>Push-ups</h2>
        <p className='font-medium text-gray-500 mb-4'>Strength Training | Beginner</p>
        <button className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-10 px-4 py-2 bg-[#b50d50] text-white hover:bg-[#e51065]'>
          View Details
        </button>
      </div>
    </Link>
  );
};
