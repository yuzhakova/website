import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2018-2021 Business Analyst, Horizon Distributors</h3>
            <p>
              - Work on projects including data integrity and harmonization
              <br />- Worked on mergers and acquisitions for a national group
              <br />- Worked on implementing a new ERP system
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2014-2018 Purchasing Data Coordinator, Horizon Distributors</h3>
            <p>
              - Generated, maintained, analyzed and developed reports
              <br />- Aligned initiatives with technology solutions
              <br />- Participated in projects to improve department KPIs
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2013-2014 Records Management Specialist, EY</h3>
            <p>
              - Managed internal and external records databases
              <br />- Ensured compliance with the firm’s records retention
              policy
              <br />- Trained new staff on record management procedures
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>
              2012-2013 Sales and Procurement Coordinator, CanFisCo Jim Pattison
            </h3>
            <p>
              - Executed reporting related to procurement, purchasing, inventory
              <br />- Performed cost/quality and sales analysis for improved
              visibility
              <br />- Served as liaison with vendors and customs brokers
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2012 Client Services Representative, RBC Royal Bank</h3>
            <p>
              - Conducted complex analysis of clients financial profiles
              <br />- Provided solutions incorporating wealth management
              techniques
              <br />- Built strong client base of repeat business and referrals
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
