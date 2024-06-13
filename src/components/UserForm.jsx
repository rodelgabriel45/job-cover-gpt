import toast from 'react-hot-toast';
import LoadingSpinner from './LoadingSpinner';

const UserForm = ({
  formData,
  onChangeInput,
  onSubmit,
  loading,
  onInputSkill,
  onAddSkill,
  enteredSkills,
}) => {
  return (
    <div className='flex flex-col gap-5 justify-center items-center p-2 min-h-screen'>
      <h1 className='text-4xl font-bold'>
        <span className='text-[#2c2e2a]'>JobCover</span>GPT
      </h1>
      <form
        onSubmit={onSubmit}
        className='flex flex-col w-full rounded-md drop-shadow-lg h-auto lg:w-1/3 lg:gap-7 lg:text-2xl bg-[#31352E]  justify-center items-center p-6 gap-4'
      >
        <h2 className='text-md lg:text-xl'>
          Enter job details to generate a cover letter.
        </h2>
        <input
          id='job'
          type='text'
          placeholder='Job Title'
          className='input input-bordered py-5 w-full xl:py-7'
          onChange={(e) => onChangeInput(e)}
          required
        />

        <input
          id='company'
          type='text'
          placeholder='Company'
          className='input input-bordered py-5 w-full xl:py-7'
          onChange={(e) => onChangeInput(e)}
          required
        />

        <input
          id='location'
          type='text'
          placeholder='Location'
          className='input input-bordered py-5 w-full xl:py-7'
          onChange={(e) => onChangeInput(e)}
          required
        />

        <input
          id='description'
          type='text'
          placeholder='Job Description'
          className='input input-bordered py-5 w-full xl:py-7'
          onChange={(e) => onChangeInput(e)}
          required
        />

        <div className='w-full'>
          <input
            id='skills'
            type='text'
            placeholder='Skills'
            className='input input-bordered py-5 w-full xl:py-7'
            onChange={(e) => onInputSkill(e)}
            required
          />
          <ul className='list-disc text-md flex flex-wrap mt-3 ml-5 justify-start items-center gap-10'>
            {formData?.skills?.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <button
            onClick={() => {
              if (enteredSkills === '') {
                return toast.error('Enter a skill to add');
              }
              if (formData.skills.includes(enteredSkills)) {
                return toast.error('This skill is already added.');
              }
              onAddSkill(enteredSkills);
            }}
            type='button'
            className='btn btn-outline mt-5'
          >
            Add Skill
          </button>
        </div>

        <textarea
          id='experience'
          className='textarea w-full resize-none'
          rows={6}
          placeholder='Enter your experience...'
          onChange={(e) => onChangeInput(e)}
          required
        ></textarea>

        <button disabled={loading} className='btn btn-ghost btn-lg'>
          {loading ? <LoadingSpinner /> : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default UserForm;
