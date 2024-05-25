import React, { useState, useEffect } from 'react';

function JobDetails({ jobId }) {
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/jobs/${jobId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch job details');
        }
        const data = await response.json();
        setJob(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchJobDetails();
  }, [jobId]);

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className="job-details">
      <h2>{job.title}</h2>
      <p>Company: {job.company}</p>
      <p>Location: {job.location}</p>
      <p>Type: {job.type}</p>
      <p>Status: {job.status}</p>
      <p>Posted on: {job.postedOn}</p>
      <p>Description: {job.description}</p>
      <p>How to apply: {job.apply}</p>
    </div>
  );
}

export default JobDetails;
