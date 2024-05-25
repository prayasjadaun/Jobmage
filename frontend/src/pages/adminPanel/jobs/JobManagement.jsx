import React, { useState, useEffect } from 'react';
import { getAllJobs, deleteJob, editJob } from '../../../utils/api'
import { useNavigate } from 'react-router-dom';
import './JobManagement.css'; 

function JobManagement() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [editingJobId, setEditingJobId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    title: '',
    company: '',
    location: '',
    type: '',
    status: '',
    postedOn: '',
    description: '',
    apply: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    getAllJobs()
      .then(jobs => {
        setJobs(jobs);
      })
      .catch(error => {
        console.error('Error:', error);
        setErrorMessage('Error fetching jobs');
      });
  }, []);

  const handleEdit = (jobId, jobData) => {
    setEditingJobId(jobId);
    setEditFormData(jobData);
  };

  const handleCancelEdit = () => {
    setEditingJobId(null);
    setEditFormData({
      title: '',
      company: '',
      location: '',
      type: '',
      status: '',
      postedOn: '',
      description: '',
      apply: ''
    });
  };

  const handleSaveEdit = (jobId) => {
    editJob(jobId, editFormData)
      .then(() => {
        setJobs(prevJobs => prevJobs.map(job => job._id === jobId ? editFormData : job));
        setEditingJobId(null);
        setEditFormData({
          title: '',
          company: '',
          location: '',
          type: '',
          status: '',
          postedOn: '',
          description: '',
          apply: ''
        });
      })
      .catch(error => {
        console.error('Error:', error);
        setErrorMessage('Error editing job');
      });
  };

  const handleDelete = (jobId) => {
    deleteJob(jobId)
      .then(() => {
        setJobs(prevJobs => prevJobs.filter(job => job._id !== jobId));
      })
      .catch(error => {
        console.error('Error:', error);
        setErrorMessage('Error deleting job');
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  return (
    <div className="job-management-container">
      <div className='manage-head'>
        <h2>Job Management</h2>
        <button className="back-button" onClick={() => navigate(-1)}>Back</button>
        </div>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <table className="job-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Company</th>
            <th>Location</th>
            <th>Type</th>
            <th>Posted By</th>
            <th>Posted On</th>
            <th>Description</th>
            <th>Apply URL</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map(job => (
            <tr key={job._id}>
              <td>{editingJobId === job._id ? <input type="text" name="title" value={editFormData.title} onChange={handleInputChange} /> : job.title}</td>
              <td>{editingJobId === job._id ? <input type="text" name="company" value={editFormData.company} onChange={handleInputChange} /> : job.company}</td>
              <td>{editingJobId === job._id ? <input type="text" name="location" value={editFormData.location} onChange={handleInputChange} /> : job.location}</td>
              <td>{editingJobId === job._id ? <input type="text" name="type" value={editFormData.type} onChange={handleInputChange} /> : job.type}</td>
              <td>{editingJobId === job._id ? <input type="text" name="postedBy" value={editFormData.postedBy} onChange={handleInputChange} /> : job.postedBy}</td>
              <td>{editingJobId === job._id ? <input type="date" name="postedOn" value={editFormData.postedOn} onChange={handleInputChange} /> : job.postedOn}</td>
              <td>{editingJobId === job._id ? <textarea name="description" value={editFormData.description} onChange={handleInputChange} /> : job.description}</td>
              <td>{editingJobId === job._id ? <input type="text" name="apply" value={editFormData.apply} onChange={handleInputChange} /> : job.apply}</td>
              <td className="action-buttons">
                {editingJobId === job._id ? (
                  <>
                    <button className="save-button" onClick={() => handleSaveEdit(job._id)}>Save</button>
                    <button className="cancel-button" onClick={handleCancelEdit}>Cancel</button>
                  </>
                ) : (
                  <button className="edit-button" onClick={() => handleEdit(job._id, job)}>Edit</button>
                )}
                {editingJobId !== job._id && <button className="delete-button" onClick={() => handleDelete(job._id)}>Delete</button>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default JobManagement;
