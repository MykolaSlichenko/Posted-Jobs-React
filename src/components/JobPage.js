import React from "react";
import { useParams } from "react-router-dom";
import './JobPage.style.css';
import { Link } from "react-router-dom";
import {useSelector} from "react-redux/es/index";

export function JobsDetailPage() {
  let { jobId } = useParams();
  console.log('jobId: ', jobId);

  const jobDetails = useSelector(state => state.find(job => job.id === jobId));
  console.log('jobDetails: ', jobDetails);


  return (
    <div className='job-page'>
      <div className='main-block'>
        <nav className="zone blue sticky">
          <ul className="main-nav">
            <li className='job-details'>Job Details</li>
            <li className='push'>Share</li>
          </ul>
          <hr/>
        </nav>
        <button className='apply-button-first'>Apply now</button>
        <div className='titleSalary'>
          <h4 className='title-text'>{jobDetails.title}</h4>
          <div className='brutto'>
            <span className='salary-amount'>{jobDetails.salary}<br /></span>
            <span className='text'>Brutto, per year</span>
          </div>
        </div>
        <span className='time-posted'>{jobDetails.time}</span>
        <div>
          <p className='text'>
            {jobDetails.description}
          </p>
          <h2>Responsibilities</h2>
          <p className='text'>
            {jobDetails.responsibilitiesfirstp}
          </p>
          <p className='text'>
            {jobDetails.responsibilitiessecondp}
          </p>
          <p className='text'>
            {jobDetails.responsibilitiesthirdp}
          </p>
          <h2>Compensation & Benefits</h2>
          <p className='text'>Our physicians enjoy a wide range of benefits, including:</p>
          <ul className='text-list'>
            <li>{jobDetails.benefits1}</li>
            <li>{jobDetails.benefits2}</li>
            <li>{jobDetails.benefits3}</li>
            <li>{jobDetails.benefits4} <br/> {jobDetails.benefits5}</li>
          </ul>
          <button className='apply-button-second'>Apply now</button>
        </div>
      <div>
        <h1>Additional info</h1><hr/>
        <p className='text'>Employment type</p>
        <div className='employment-style'>
          <button className='full-time-button'>Full time</button>
          <button className='full-time-button'>Part time</button>
          <button className='full-time-button'>Temporary</button>
        </div>
        <p className='text'>Benefits</p>
        <div className='benefits-style'>
          <button className='shedule-button'>Flexible shedule</button>
          <button className='shedule-button'>Relocation assistance</button>
        </div>
        <p>
          <h1>Attached images</h1>
        </p>
        <div>
          <img className='img-style' src={require('../images/b.png')} />
          <img className='img-style' src={require('../images/b1.png')} />
          <img className='img-style' src={require('../images/b2.png')} />
        </div>
        <Link className='link-style' to="/jobs"><button className='return-button'><img className='arrow' src={require('../images/Arrow.png')}/>RETURN TO JOB BOARD</button></Link>
      </div>
      </div>
      <div className='map-block'>
        <div className='information-block'>
          <ul className='list-inf'>
            <li><b>Department name.<br />
              University Hospital Giessen.</b>
            </li>
            <li>AKH Wien, 1090 Wien, Währinger </li>
            <li>Gürtel 18-20</li>
            <li>+43 (01) 40400-12090,<br />
              post_akh_diz@akhwien.at</li>
          </ul>
        </div>
        <div><img className='map' src={require('../images/Map.png')}/></div>
      </div>
    </div>
  );
}
