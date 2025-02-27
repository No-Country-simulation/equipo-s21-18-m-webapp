import { ExerciseCard } from '../components/ExerciseCard';

export const ExerciseLibrary = () => {
  return (
    <>
      <div className='container mx-auto py-10'>
        <h1 className='text-4xl font-bold mb-8'>Exercise Library</h1>
        <div className='flex flex-col md:flex-row gap-4 mb-8'>
          <input
            className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:w-1/3'
            type='text'
            placeholder='Search exercises...'
          />

          <select className='md:w-1/3 p-2 border rounded-md'>
            <option value=''>All Categories</option>
            <option value='Strength Training'>Strength Training</option>
            <option value='Cardio'>Cardio</option>
            <option value='Flexibility'>Flexibility</option>
            <option value='HIIT'>HIIT</option>
            <option value='Yoga'>Yoga</option>
            <option value='Core'>Core</option>
          </select>
          <select className='md:w-1/3 p-2 border rounded-md'>
            <option value=''>All Difficulties</option>
            <option value='Beginner'>Beginner</option>
            <option value='Intermediate'>Intermediate</option>
            <option value='Advanced'>Advanced</option>
          </select>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <ExerciseCard />
        </div>
      </div>
    </>
  );
};
