import { Link } from 'react-router-dom';
import noImg from '../assets/no-image.svg';

export const ExerciseDetail = () => {
  return (
    <div className='container mx-auto py-10'>
      <Link to={'/exercises'}>
        <button className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border-gray-200 text-sm font-medium transition-colors border  hover:bg-gray-100 hover:text-accent-foreground h-10 px-4 py-2 mb-6'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='1'
              d='M7 16l-4-4m0 0l4-4m-4 4h18'
            ></path>
          </svg>
          <span className='ml-1 text-sm font-medium'>Back</span>
        </button>
      </Link>

      <div className='grid md:grid-cols-2 gap-10'>
        <div>
          <h1 className='text-4xl font-bold mb-4'>Push-ups</h1>
          <p className='text-muted-foreground mb-6'>Strength Training | Beginner</p>
          <p className='mb-6'>
            Push-ups are a classic bodyweight exercise that primarily targets the chest,
            shoulders, and triceps.
          </p>
          <h2 className='text-2xl font-semibold mb-4'>Instructions</h2>
          <ol className='list-decimal list-inside space-y-2 mb-6'>
            <li>
              Start in a plank position with your hands slightly wider than shoulder-width
              apart.
            </li>
            <li>Lower your body until your chest nearly touches the floor.</li>
            <li>Pause, then push yourself back up to the starting position.</li>
            <li>Repeat for the desired number of repetitions.</li>
          </ol>
          <h2 className='text-2xl font-semibold mb-4'>Muscles Worked</h2>
          <ul className='list-disc list-inside space-y-2 mb-6'>
            <li>Chest</li>
            <li>Shoulders</li>
            <li>Triceps</li>
            <li>Core</li>
          </ul>
          <button className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-10 px-4 py-2 bg-[#b50d50] text-white hover:bg-[#e51065]'>
            Add to Workout
          </button>
        </div>
        <div>
          <img
            alt='Push-ups'
            loading='lazy'
            width='600'
            height='400'
            decoding='async'
            data-img='1'
            className='rounded-lg object-cover w-full h-auto'
            src={noImg}
          />
        </div>
      </div>
    </div>
  );
};
