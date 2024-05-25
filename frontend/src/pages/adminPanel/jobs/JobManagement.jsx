import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './JobManagement.css'; // Import the CSS file

function JobManagement() {
  const [jobs, setJobs] = useState([]);
  const [editingJobId, setEditingJobId] = useState(null);
  const [editedJobTitle, setEditedJobTitle] = useState('');

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/jobs');
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };
    fetchJobs();
  }, []);

  const handleDeleteJob = async (jobId) => {
    try {
      await axios.delete(`http://localhost:5001/api/jobs/${jobId}`);
      setJobs(jobs.filter(job => job._id !== jobId));
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  const handleEditJob = async (jobId) => {
    setEditingJobId(jobId);
    const jobToEdit = jobs.find(job => job._id === jobId);
    setEditedJobTitle(jobToEdit.title);
  };

  const handleSaveEdit = async () => {
    try {
      await axios.patch(`http://localhost:5001/api/jobs/${editingJobId}`, { title: editedJobTitle });
      setJobs(jobs.map(job => job._id === editingJobId ? { ...job, title: editedJobTitle } : job));
      setEditingJobId(null);
      setEditedJobTitle('');
    } catch (error) {
      console.error('Error editing job:', error);
    }
  };

  const handleCancelEdit = () => {
    setEditingJobId(null);
    setEditedJobTitle('');
  };

  return (
    <div className="job-management">
      <h1>Job Management</h1>
      <table className="job-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map(job => (
            <tr key={job._id}>
              <td>{editingJobId === job._id ? <input className="edit-input" type="text" value={editedJobTitle} onChange={(e) => setEditedJobTitle(e.target.value)} /> : job.title}</td>
              <td>
                {editingJobId === job._id ? (
                  <>
                    <button className="save-button" onClick={handleSaveEdit}>Save</button>
                    <button className="cancel-button" onClick={handleCancelEdit}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button className="edit-button" onClick={() => handleEditJob(job._id)}>Edit</button>
                    <button className="delete-button" onClick={() => handleDeleteJob(job._id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default JobManagement;
