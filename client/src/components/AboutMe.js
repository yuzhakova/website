import React from "react";
import author from "../me.jpeg";

const AboutMe = () => {
  return (
    <div id="about" className="comtainer py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="authour..." />
          </div>
        </div>

        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>
            <h4>Skillset Summary</h4>
            <br /> I am a versatile business analyst offering 7+ years of
            experience in data management and analysis, wholesale, retail, and
            distribution. I am proficient in gathering, analyzing, documenting
            business requirements, and translating them into technical
            specifications delivering streamlined communication between
            business, operations, technology, and innovation teams.
            <br />
            <br />
            I have experience with large, complex, enterprise-wide projects,
            including new ERP implementation, data harmonization, reporting
            system integration, and operations mergers during acquisitions.
            <br />
            <br />
            I am passionate about working on exciting projects, collaborating
            with cross-functional teams on various initiatives with a
            disposition for change and risk management. I am comfortable working
            with a high level of ambiguity and diverse business scenarios while
            handling multiple priorities.
            <br />
            <br />
            My unique value proposition is passion, focus, and innovation
            combined with a strong work ethic and solution-oriented mentality. I
            thoroughly understand the business elements of a large operation. I
            thrive on making a difference, contributing to the company's
            success, and embracing challenges and changes.
            <br />
            <br />
            My current primary interest lies at the intersection of business
            analysis and web development. I am open to exploring new horizons
            and discussing any opportunities working together.
            <br />
          </p>
          <p>
            <br />
            <h4>Areas of My Expertise</h4>
            <br />
            <h5># PROJECT MANAGEMENT</h5>
            Project scope and objectives definition, action plans development,
            and assurance in successful and timely execution. Project delivery
            experience working in complex environments with cross-functional
            teams (procurement, pricing, purchasing, sales, marketing) and
            stakeholders across multiple sites, including warehouse operations,
            head office, and regional offices.
            <br />
            <br />
            <h5># DESIGN + DEVELOPMENT (processes + reports)</h5>
            Define project requirements, setup project milestones, phases, and
            elements, including project team formation.
            <br />
            <br />
            NEW PROCESSES design via gathering details from subject matter
            experts, analyzing requirements, constructing workflow charts and
            diagrams, studying system capabilities, and writing specifications.
            <br />
            <br />
            NEW REPORTS design and production for performance tracking,
            measurement of results, KPI analysis, business data outline,
            insights with trends articulation, and risks and opportunities
            identification. Development of easy-to-use tools that effectively
            communicate complex information for strategic decision-making.
            <br />
            <br />
            <h5># IMPROVEMENT (processes + procedures)</h5>
            Deliver continuous systems and processes improvement recommendations
            to key partners by studying business functions, current practices,
            gathering information, and further implementation, along with an
            evaluation of output requirements.
            <br />
            <br />
            <h5>#CHANGE MANAGEMENT</h5>
            Experience in conceptualizing the changes and technical solutions,
            articulating the value for the different key partners, and
            recommending the proposed change to the business, followed by
            successful project delivery of quality and well-thought-out new
            processes and solutions.
            <br />
            <br />
            <h5># DOCUMENTATION</h5>
            Provide documentation development and maintenance of existing and
            future business requirements, processes, procedures, and system
            protocols. Prepare and provision business references, operating,
            user-oriented, and technical instructions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
