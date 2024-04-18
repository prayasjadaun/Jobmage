import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import jobListings from './jobdata';
import './jobdetails.css';

function JobDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const job = jobListings.find((job) => job.id === parseInt(id));

  if (!job) {
    return <div>Job not found</div>;
  }

  const handleApplyClick = () => {
    // Redirect to the provided link
    window.open(`http://${job.apply}`, '_blank');
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="job-details">
      <h2>{job.title}</h2>
      <p>Company : {job.company}</p>
      <p>Location : {job.location}</p>
      <p>Type : {job.type}</p>
      <p>Status : {job.status}</p>
      <p>Position : {job.postedOn}</p>
      <p>Description : {job.description}</p>
      <div className="detail-button">
        <button className="button" onClick={handleApplyClick}>
          Apply
        </button>
        <button className="button" onClick={handleBackClick}>
          Back
        </button>
      </div>
    </div>
  );
}

export default JobDetails;