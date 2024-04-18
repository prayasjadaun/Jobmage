import React from 'react';
import { Link } from 'react-router-dom';

function JobList({ jobs }) {
  return (
    <div className="job-list">
      {jobs.map((job) => (
        <div className="job-card" key={job.id}>
          <h2>{job.title}</h2>
          <p>{job.company}</p>
          <p>{job.location}</p>
          <p>{job.type}</p>
          <p>{job.status}</p>
          <p>{job.postedOn}</p>
          <Link className='button' to={`/job/${job.id}`}>Details</Link>
        </div>
      ))}
    </div>
  );
}

export default JobList;
