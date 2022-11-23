import React from "react";
import { useSelector } from 'react-redux';
import './JobsPage.style.css';
import { Link } from "react-router-dom";

export function JobsPage() {
  const jobs = useSelector(state => state || []);
  console.log(jobs);

  return (
    <div className='jobPageStyle'>
      {jobs.map((job, index) => (
        <Link className='link' to={`/jobs/${job.id}`} exact>
          <div className='card' key={index}>
            {console.log(index)}
            <div className='img-part'>
              <img className='image' src={job.image} />
            </div>
            <div className='text-part'>
              <h3 className='title'>{job.title}</h3>
              <p className='card-text'>{job.text}</p>
              <p className='location-style'>{job.location}</p>
              <p className='time'>{job.time}</p>
              <img className='img-card' src={require('../images/Rectangle.png')} />
            </div>
          </div>
          </Link>
        ))}
      </div>
  );
}