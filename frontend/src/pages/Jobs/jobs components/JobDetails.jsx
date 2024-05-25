import React, { useState, useEffect } from 'react';

function JobDetails({ jobId }) {
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
      <p>Company: {job.company}</p>
      <p>Location: {job.location}</p>
      <p>Type: {job.type}</p>
      <p>Posted by: {job.postedBy}</p>
      <p>Posted on: {job.postedOn}</p>
      {/* Add any additional job details you want to display */}
    </div>
  );
}

export default JobDetails;