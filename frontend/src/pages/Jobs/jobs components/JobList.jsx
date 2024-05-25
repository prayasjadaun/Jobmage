import React from 'react';
import { Link } from 'react-router-dom';

function JobList({ jobs }) {
  return (
    <div className="job-list">
      {jobs.map((job) => (
        <div className="job-card" key={job.id}>
          <h2>{job.title}</h2>
          <p>Company: {job.company}</p>
          <p>Location: {job.location}</p>
          <p>Type: {job.type}</p>
          <p>Status: {job.status}</p>
          <p>Posted on: {job.postedOn}</p>
          <Link className='button' to={`/job/${job.id}`}>Details</Link>
        </div>
      ))}
    </div>
  );
}

export default JobList;
