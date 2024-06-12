import { useState } from 'react';
import toast from 'react-hot-toast';

const useSubmitForm = (formData) => {
  const [coverLetter, setCoverLetter] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.job === '' ||
      !formData.job ||
      formData.company === '' ||
      !formData.company ||
      formData.location === '' ||
      !formData.location ||
      formData.description === '' ||
      !formData.description ||
      formData.skills === '' ||
      !formData.skills
    ) {
      toast.error('All fields are required');
      return null;
    }

    const prompt = ` Write a cover letter for the following job application:

      Job: ${formData.job}
      Company: ${formData.company}
      Location: ${formData.location}
      Job Description: ${formData.description}
      skills: ${formData.skills}  
      `;

    const payload = {
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content:
            'You will be provided with an object data containing { job, company, location, jobDescription, skills }. Your task is to make a cover letter based on this data.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 1024,
      top_p: 1,
    };

    setLoading(true);
    try {
      const response = await fetch(
        'https://api.openai.com/v1/chat/completions',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + import.meta.env.VITE_OPENAI_API_KEY,
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.log(response);
      }

      setCoverLetter(data.choices[0].message.content);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, coverLetter, handleSubmit };
};

export default useSubmitForm;
