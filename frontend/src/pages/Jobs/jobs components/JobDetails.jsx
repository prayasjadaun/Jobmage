import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./jobdetails.css"

function JobDetails() {
  const navigate = useNavigate();
  const { id: jobId } = useParams();
  const [job, setJob] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      setIsLoading(true);
      setError(null);

      if (!jobId) {
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch(`http://localhost:5001/api/jobs/${jobId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch job details');
        }
        const data = await response.json();
        setJob(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobDetails();
  }, [jobId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!job) {
    return <div>No job details found.</div>;
  }

  return (
    <div className="job-details">
      <h2>{job.title}</h2>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Type:</strong> {job.type}</p>
      <p><strong>Posted by:</strong> {job.postedBy}</p>
      <p><strong>Posted on:</strong> {job.postedOn}</p>
      <p><strong>Description:</strong></p>
      <p className="description">{job.description}</p>
      <p><strong>Salary:</strong> {job.salary}</p>
      <p><strong>Skills:</strong></p>
      <p className="skills">{job.skills}</p>
      <p><strong>Apply By:</strong> {job.applyBy}</p>
      {job.apply && (
        <button className="apply-button" onClick={() => window.open(job.apply.startsWith('http') ? job.apply : `http://${job.apply}`, "_blank")}>
          Apply
        </button>
      )}
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>
    </div>
  );
  
  
  
  
  
}

export default JobDetails;
