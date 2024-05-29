// JobList.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function JobList({ jobs }) {
  return (
    <div className="job-list">
      {jobs.map((job) => (
        <div className="job-card" key={job._id}>
          <h2>{job.title}</h2>
          <p>Company: {job.company}</p>
          <p>Location: {job.location}</p>
          <p>Type: {job.type}</p>
          <p>Posted by: {job.postedBy}</p>
          <p>Posted on: {job.postedOn}</p>
          <Link className='button' to={`/job/${job._id}`}>Details</Link>
        </div>
      ))}
    </div>
  );
}

export default JobList;
