import React, { useState } from 'react';
import { createJob } from '../../utils/api'; 
import { useNavigate } from 'react-router-dom';
import './PostJob.css'; 

function PostJobForm() {
  const navigate = useNavigate();
  const [job, setJob] = useState({
    title: '',
    company: '',
    location: '',
    type: '',
    postedBy: '',
    postedOn: new Date().toISOString().substr(0, 10), // Set initial value to current date
    description: '',
    apply: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob(prevJob => ({
      ...prevJob,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate if all fields are filled
    if (Object.values(job).some(field => !field.trim())) {
      setErrorMessage('All fields are required');
      return;
    }

    createJob(job)
      .then(response => {
        console.log(response);
        // Handle success response
        setSuccessMessage('Successfully posted');
        // Clear the input fields
        setJob({
          title: '',
          company: '',
          location: '',
          type: '',
          postedBy: '',
          postedOn: new Date().toISOString().substr(0, 10), // Update postedOn to current date
          description: '',
          apply: ''
        });
        // Remove error message if any
        setErrorMessage('');
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle error response
        setErrorMessage('Error posting job');
      });
  };

  return (
    <div className="post-job-container">
      <h2>Post a Job</h2>
      {errorMessage && <p className="error">{errorMessage}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" value={job.title} onChange={handleChange} required />
        <input type="text" name="company" placeholder="Company" value={job.company} onChange={handleChange} required />
        <input type="text" name="location" placeholder="Location" value={job.location} onChange={handleChange} required />
        <input type="text" name="type" placeholder="Type" value={job.type} onChange={handleChange} required />
        <input type="text" name="postedBy" placeholder="Posted By" value={job.postedBy} onChange={handleChange} required />
        <input type="date" name="postedOn" placeholder="Posted On" value={job.postedOn} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={job.description} onChange={handleChange} required></textarea>
        <input type="text" name="apply" placeholder="Apply URL" value={job.apply} onChange={handleChange} required />
        <button type="submit">Post Job</button>
      </form>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default PostJobForm;
