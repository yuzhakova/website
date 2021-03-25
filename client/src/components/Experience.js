import React from "react";

const blocks = [
  {
    header: "2018-2021 Business Analyst, Horizon Distributors",
    bullets: [
      "Worked on data integrity and harmonization projects",
      "Worked on mergers and acquisitions for a national group",
      "Worked on implementing a new ERP system",
    ],
  },
  {
    header: "2014-2018 Purchasing Data Coordinator, Horizon Distributors",
    bullets: [
      "Generated, maintained, analyzed and developed reports",
      "Aligned initiatives with technology solutions",
      "Participated in projects to improve department KPIs",
    ],
  },
  {
    header: "2013-2014 Records Management Specialist, EY",
    bullets: [
      "Managed internal and external records databases",
      "Ensured compliance with the firm’s records retention policy",
      "Trained new staff on record management procedures",
    ],
  },
  {
    header:
      "2012-2013 Sales and Procurement Coordinator, CanFisCo Jim Pattison",
    bullets: [
      "Executed reporting related to procurement, purchasing, inventory",
      "Performed cost/quality and sales analysis for improved visibility",
      "Served as liaison with vendors and customs brokers",
    ],
  },
  {
    header: "2012 Client Services Representative, RBC Royal Bank",
    bullets: [
      "Conducted complex analysis of clients financial profiles",
      "Provided solutions incorporating wealth management techniques",
      "Built strong client base of repeat business and referrals",
    ],
  },
];
const TimelineBlock = ({ left, header, bullets }) => {
  return (
    <div className={`timeline-block timeline-block-${left ? "left" : "right"}`}>
      <div className="marker"></div>
      <div className="timeline-content">
        <ul>
          <h3>{header}</h3>
          {bullets.map((bullet) => (
            <li>{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        {blocks.map((block, index) => (
          <TimelineBlock
            header={block.header}
            bullets={block.bullets}
            left={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
