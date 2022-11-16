import React from "react";
import { useSelector } from 'react-redux';
import './JobsPage.style.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export function JobsPage() {
  const jobs = useSelector(state => state || []);
  console.log(jobs);

  return (
    <div className='jobPageStyle'>
      <h1>Jobs Page!</h1>
      {jobs.map((job, index) => (
        <div className='card' key={index}>
          {console.log(index)}
          <div className='imgPart'>
            <img className='image' src={job.image} />
          </div>
          <div className='textPart'>
            <h3 className='title'><Link to="/jobs/job-details" exact>{job.title}</Link></h3>
            <p>{job.text}</p>
            <p>{job.location}</p>
            <p className='time'>{job.time}</p>
          </div>
        </div> 
      ))}
    </div>
  );
}