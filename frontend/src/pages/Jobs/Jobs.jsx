import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import JobList from "./jobs components/JobList";
import JobDetails from "./jobs components/JobDetails";
import useUserData from "../../component/Hooks/useUserdata";
import "./jobs.css";
import Loader from "../../component/Loader/loader";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("");
  const { userData, isLoading } = useUserData();
  const { id } = useParams();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/jobs");
        if (!response.ok) {
          throw new Error("Failed to fetch job data");
        }
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchJobs();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterType(e.target.value);
  };

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filterType === "" || job.type === filterType)
  );

  if (isLoading) {
    return (
      <div>
        {" "}
        <Loader />{" "}
      </div>
    );
  }
  const isAdminOrEmployer =
    userData && (userData.role === "admin" || userData.role === "employer");

  return (
    <div className="jobs">
      <div className="jobs-opt">
        <h1>Jobs and Internships</h1>
        {isAdminOrEmployer && (
          <Link to="/postJob" className="linc-button">
            <h4>Post a Job</h4>
          </Link>
        )}
      </div>
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
      {id ? <JobDetails jobId={id} /> : <JobList jobs={filteredJobs} />}{" "}
    </div>
  );
}

export default Jobs;
