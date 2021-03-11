import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faTable,
  faFileExcel,
  faExclamation,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Service = ({ name, description }) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6">
      <div className="box">
        <div className="circle">
          <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
        </div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/services").then((response) => {
      setServices(response.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <div id="services" className="services">
      <h1 className="py-5">my services</h1>
      <div className="row">
        {services.map((service) => (
          <Service name={service.name} description={service.description} />
        ))}
      </div>
    </div>
  );
};

export default Services;
