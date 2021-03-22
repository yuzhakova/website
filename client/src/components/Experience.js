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
            <ul>
              <h3>2018-2021 Business Analyst, Horizon Distributors</h3>
              <li>Worked on data integrity and harmonization projects</li>
              <li>Worked on mergers and acquisitions for a national group</li>
              <li>Worked on implementing a new ERP system</li>
            </ul>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <ul>
              <h3>
                2014-2018 Purchasing Data Coordinator, Horizon Distributors
              </h3>
              <li>Generated, maintained, analyzed and developed reports</li>
              <li>Aligned initiatives with technology solutions</li>
              <li>Participated in projects to improve department KPIs</li>
            </ul>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <ul>
              <h3>2013-2014 Records Management Specialist, EY</h3>
              <li>Managed internal and external records databases</li>
              <li>
                Ensured compliance with the firm’s records retention policy
              </li>
              <li>Trained new staff on record management procedures</li>
            </ul>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <ul>
              <h3>
                2012-2013 Sales and Procurement Coordinator, CanFisCo Jim
                Pattison
              </h3>
              <li>
                Executed reporting related to procurement, purchasing, inventory
              </li>
              <li>
                Performed cost/quality and sales analysis for improved
                visibility
              </li>
              <li>Served as liaison with vendors and customs brokers</li>
            </ul>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <ul>
              <h3>2012 Client Services Representative, RBC Royal Bank</h3>
              <li>Conducted complex analysis of clients financial profiles</li>
              <li>
                Provided solutions incorporating wealth management techniques
              </li>
              <li>Built strong client base of repeat business and referrals</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
