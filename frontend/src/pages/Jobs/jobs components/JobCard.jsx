import React from 'react';
function JobCard({ job, onJobClick }) {
  const handleClick = () => {
    onJobClick(job.id);
  };

  return (
    <div className="job-card card" onClick={handleClick}>
      <div className="job-card__header">
        <h2>{job.title}</h2>
        <p>company : {job.company}</p>
      </div>
      <div className="job-card__body">
        <p>Location : {job.location}</p>
        <p>Type : {job.type}</p>
        <p>Posted by : {job.postedBy}</p>
        <p>Posted on : {job.postedOn}</p>
      </div>
    </div>
  );
}

export default JobCard;