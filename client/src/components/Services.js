import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDesktop,
  faTable,
  faFileExcel,
  faExclamation,
} from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <div className="services">
      <h1 className="py-5">my services</h1>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="box">
            <div className="circle">
              <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
            </div>
            <h3> Business Processes and Reports Optimization</h3>
            <p>
              I take time to review your current processes and suggest a course
              of action to imrpove your workflow and achieve reporting
              optimization and better visibilty.
            </p>
          </div>
        </div>
        {/* - */}
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="box">
            <div className="circle">
              <FontAwesomeIcon className="icon" icon={faTable} size="2x" />
            </div>
            <h3> Reporting Design and Implementation</h3>
            <p>
              Your reporting will be simple and user friendly yet complex on the
              tech side to cover the multilevel requirements and parameters.
            </p>
          </div>
        </div>
        {/* - */}
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="box">
            <div className="circle">
              <FontAwesomeIcon className="icon" icon={faFileExcel} size="2x" />
            </div>
            <h3> Excel Training and Automation</h3>
            <p>
              From advanced to power user, or from beginner to advanced, I have
              your Excel needs covered and will be supporting you on your way to
              achieving mastery in whatever you are looking to do with it.
            </p>
          </div>
        </div>
        {/* - */}
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="box">
            <div className="circle">
              <FontAwesomeIcon
                className="icon"
                icon={faExclamation}
                size="2x"
              />
            </div>
            <h3> Productivity Increase</h3>
            <p>
              I will find best solutions for your business to increase
              productivity by automating repetitive tasks so you have more time
              left for important decision-making!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
