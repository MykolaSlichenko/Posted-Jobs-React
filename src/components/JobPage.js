import React from "react";
import { useParams } from "react-router-dom";
import './JobPage.style.css';
import { Link } from "react-router-dom";
import {useSelector} from "react-redux/es/index";

export function JobsDetailPage() {
  const jobs = useSelector(state => state || []);
  // console.log('JOBSSSS', jobs.index);

  const { index } = useParams();
  return (
    <div className='job-page'>
      {/*<h1>Page for { id }!</h1>*/}

      {/*{jobs.map((job, index) => (*/}
        {/*// {index ? job.time : null}*/}
        {/*<p className='card-text' key={index}>{job.text}</p>*/}
      {/*))}*/}
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
          <h4 className='titleText'>Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d) oder einen Arzt/eine Ärztin (m/w/d) für die Weiterbildung zum Facharzt/ zur Fachärztin für Arbeitsmedizin (m/w/d)</h4>
          <div className='brutto'>
            <span className='salary-amount'>€ 54 000—60 000<br /></span>
            <span className='text'>Brutto, per year</span>
          </div>
        </div>
        <span className='time-posted'>Posted 2 days ago</span>
        <div>
          <p className='text'>
            At WellStar, we all share common goals. That’s what makes us so successful – and such an integral
            part of our communities. We want the same things, for our organization, for our patients,
            and for our colleagues. As the most integrated healthcare provider in Georgia, this means
            we pride ourselves on investing in the communities that we serve. We continue to provide
            innovative care models, focused on improving quality and access to healthcare.
          </p>
          <h2>Responsibilities</h2>
          <p className='text'>
            Wellstar Medical Group, a physician-led multi-specialty group in Atlanta, Georgia, is currently
            recruiting for a BC/BE cardiothoracic surgeon to join their existing cardiovascular program. This
            is an opportunity to play a key role on a multidisciplinary team of cardiologists and surgeons.
          </p>
          <p className='text'>
            The ideal candidate will have five or more years of experience in cardiac surgery. This candidate
            should be facile with off-pump revascularization, complex aortic surgery, minimally invasive valve
            and valve repair, transcatheter valve replacement, surgical atrial fibrillation ablation, ventricular
            assist device placement, and extra corporeal membrane oxygenation.
          </p>
          <p className='text'>
            Wellstar is one of the largest integrated healthcare systems in the Southeast with 11 hospitals in Atlanta
            metro region. With two open heart programs at Kennestone Regional Medical Center and Atlanta Medical Center,
            Wellstar cardiac surgeons perform over 1200 cardiac procedures per year. The cardiac service line is the only
            center in Georgia with the Joint Commission’s Comprehensive Cardiac Center certification.
          </p>
          <h2>Compensation & Benefits</h2>
          <p className='text'>Our physicians enjoy a wide range of benefits, including:</p>
          <ul className='text-list'>
            <li>Very competitive compensation package with bonuses</li>
            <li>Medical, Dental, and Vision Insurance</li>
            <li>Occurrence-based Malpractice Coverage</li>
            <li>Short-term and Long-term Disability Insurance <br/> and life insurance</li>
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
          <img className='imgStyle' src={require('../images/b.png')} />
          <img className='imgStyle' src={require('../images/b1.png')} />
          <img className='imgStyle' src={require('../images/b2.png')} />
        </div>
        <Link className='link-style' to="/jobs"><button className='return-button'><img className='arrow' src={require('../images/Arrow.png')}/>RETURN TO JOB BOARD</button></Link>
      </div>
      </div>
      <div className='map-block'>
        <div className='information-block'>
          <ul>
            <li><b>Department name.<br />
              University Hospital Giessen.</b>
            </li>
            <li>AKH Wien, 1090 Wien, Währinger </li>
            <li>Gürtel 18-20</li>
            <li>+43 (01) 40400-12090,<br />
              post_akh_diz@akhwien.at</li>
          </ul>
        </div>
        <h1><img className='map' src={require('../images/Map.png')}/></h1>
      </div>
    </div>
  );
}
