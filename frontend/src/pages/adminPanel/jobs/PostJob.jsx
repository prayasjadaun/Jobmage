import React, { useState } from 'react';
import { createJob } from '../../../utils/api'; 
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
    postedOn: new Date().toISOString().substr(0, 10),
    description: '',
    apply: '',
    salary: '',
    skills: '',
    applyBy: ''
  });
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

    if (Object.values(job).some(field => !field.trim())) {
      setErrorMessage('All fields are required');
      return;
    }

    createJob(job)
      .then(() => {
        alert('Successfully posted');
        setJob({
          title: '',
          company: '',
          location: '',
          type: '',
          postedBy: '',
          postedOn: new Date().toISOString().substr(0, 10),
          description: '',
          apply: '',
          salary: '',
          skills: '',
          applyBy: ''
        });
        setErrorMessage('');
      })
      .catch(error => {
        console.error('Error:', error);
        setErrorMessage('Error posting job');
      });
  };

  return (
    <div className="post-job-container">
      <h2>Post a Job</h2>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" value={job.title} onChange={handleChange} required />
        <input type="text" name="company" placeholder="Company" value={job.company} onChange={handleChange} required />
        <input type="text" name="location" placeholder="Location" value={job.location} onChange={handleChange} required />
        <input type="text" name="type" placeholder="Type" value={job.type} onChange={handleChange} required />
        <input type="text" name="postedBy" placeholder="Posted By" value={job.postedBy} onChange={handleChange} required />
        <textarea name="description" placeholder="Job Description" value={job.description} onChange={handleChange} required style={{ resize: 'none' }}></textarea>
        <input type="text" name="apply" placeholder="Apply URL" value={job.apply} onChange={handleChange} required />
        <input type="text" name="salary" placeholder="Salary" value={job.salary} onChange={handleChange} required />
        <input type="text" name="skills" placeholder="Skills" value={job.skills} onChange={handleChange} required />
        <label> Last date to Apply  :</label>
        <input type="date" name="applyBy" value={job.applyBy} onChange={handleChange} required />
        <p> Posted On : {job.postedOn}</p>
        <button type="submit">Post Job</button>
      </form>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default PostJobForm;
