import { Link } from 'react-router-dom';

export const ExerciseCard = () => {
  return (
    <Link to={'/exercise-detail/1'}>
      <div className='border rounded-lg p-6 hover:shadow-lg transition-shadow'>
        <h2 className='text-2xl font-semibold mb-2'>Push-ups</h2>
        <p className='text-muted-foreground mb-4'>Strength Training | Beginner</p>
        <button className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-[#b50d50] text-white hover:bg-[#e51065]'>
          View Details
        </button>
      </div>
    </Link>
  );
};
