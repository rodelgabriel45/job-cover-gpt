const LoadingSpinner = ({ size = 'sm' }) => {
  return (
    <div className='flex items-center gap-3'>
      <span className='text-gray-400'>Loading</span>
      <span
        className={`loading loading-spinner text-primary loading-${size}`}
      />
    </div>
  );
};

export default LoadingSpinner;
