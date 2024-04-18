import React from 'react';
function JobCard({ job, onJobClick }) {
  const handleClick = () => {
    onJobClick(job.id);
  };

  return (
    <div className="job-card" onClick={handleClick}>
      <div className="job-card__header">
        <h2>{job.title}</h2>
        <p>{job.company}</p>
      </div>
      <div className="job-card__body">
        <p>{job.location}</p>
        <p>{job.type}</p>
        <p>{job.status}</p>
        <p>{job.postedOn}</p>
      </div>
    </div>
  );
}

export default JobCard;