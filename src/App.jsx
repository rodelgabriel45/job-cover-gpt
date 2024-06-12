import { useEffect, useState } from 'react';
import UserForm from './components/UserForm';
import useSubmitForm from './hooks/useSubmitForm';
import CoverLetter from './components/CoverLetter';
import { Toaster } from 'react-hot-toast';

function App() {
  const [formData, setFormData] = useState({
    job: '',
    company: '',
    location: '',
    description: '',
    skills: [],
    experience: '',
  });
  const { loading, coverLetter, handleSubmit } = useSubmitForm(formData);
  const [viewCoverLetter, setViewCoverLetter] = useState(false);
  const [enteredSkills, setEnteredSkills] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleEnteredSkillsChange = (e) => {
    setEnteredSkills(e.target.value);
  };

  const handleAddSkill = (skill) => {
    setFormData({ ...formData, skills: [...formData.skills, skill] });
  };

  useEffect(() => {
    if (coverLetter) {
      document.getElementById('my_modal_1').showModal();
    }
  }, [coverLetter]);

  return (
    <>
      {viewCoverLetter ? (
        <CoverLetter
          coverLetter={coverLetter}
          onBackToForm={setViewCoverLetter}
        />
      ) : (
        <UserForm
          formData={formData}
          onChangeInput={handleChange}
          onSubmit={handleSubmit}
          loading={loading}
          coverLetter={coverLetter}
          onInputSkill={handleEnteredSkillsChange}
          enteredSkills={enteredSkills}
          onAddSkill={handleAddSkill}
        />
      )}

      <dialog id='my_modal_1' className='modal'>
        <div className='modal-box'>
          <h3 className='font-bold text-lg'>
            Cover Letter successfully generated!
          </h3>
          <p className='py-4'>
            Click view cover letter button to view the results
          </p>
          <div className='modal-action'>
            <form method='dialog' className='flex items-center gap-3'>
              <button
                onClick={() => {
                  setViewCoverLetter(true);
                }}
                className='btn'
              >
                View Cover Letter
              </button>
              {/* if there is a button in form, it will close the modal */}
              <button>Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <Toaster />
    </>
  );
}
export default App;
