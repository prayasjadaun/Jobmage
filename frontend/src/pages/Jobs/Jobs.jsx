import React, { useState } from 'react';
import { Route, useParams } from 'react-router-dom';
import JobList from './jobs components/JobList';
import JobDetails from './jobs components/JobDetails'; // Import the JobDetails component
import jobListings from './jobs components/jobdata';
import './jobs.css';

function Jobs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterType(e.target.value);
  };

  const filteredJobs = jobListings.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filterType === '' || job.type === filterType)
  );

  const { id } = useParams();

  return (
    <div className="jobs">
      <h1>Jobs and Internships</h1>
      <div className="search-filter">
        <input
          type="text"
          placeholder="Search by job title"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <select value={filterType} onChange={handleFilterChange}>
          <option value="">All Types</option>
          <option value="Internship">Internship</option>
          <option value="Full-Time">Full-Time</option>
        </select>
      </div>
      {id ? (
        <JobDetails jobId={id} />
      ) : (
        <JobList jobs={filteredJobs} />
      )}
    </div>
  );
}

export default Jobs;
