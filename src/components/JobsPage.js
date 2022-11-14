import React from "react";
import { useSelector } from 'react-redux';

export function JobsPage() {
  const jobs = useSelector(state => state || []);
  console.log(jobs);

  return (
    <div>
      <h1>Jobs Page!</h1>
      {jobs.map((job, index) => (
        <div key={index}>
          <h3>{job.title}</h3>  
        </div> 
      ))}
    </div>
  );
}