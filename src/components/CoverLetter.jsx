const CoverLetter = ({ coverLetter, onBackToForm }) => {
  return (
    <div className='flex flex-col gap-5 justify-center items-center p-2 min-h-screen'>
      <h1 className='text-4xl font-bold'>
        <span className='text-[#2c2e2a]'>JobCover</span>GPT
      </h1>

      <textarea
        id='cover-letter'
        defaultValue={coverLetter}
        className='w-full rounded-md drop-shadow-lg h-[30rem] lg:w-1/2 lg:gap-10 lg:h-[50rem] lg:text-2xl bg-[#31352E] p-6 resize-none text-xl'
      />
      <button
        className='btn btn-ghost btn-lg'
        onClick={() => onBackToForm(false)}
      >
        Back to home
      </button>
    </div>
  );
};

export default CoverLetter;
