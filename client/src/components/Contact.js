import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="text-center">
        <h1>contact me</h1>
        <p>Please fill out the form and I will get back to you.</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xs-12">
            {/* name input */}
            <input
              id="name"
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
            />
            {/* phone input */}
            <input
              id="phone"
              type="text"
              className="form-control"
              placeholder="Phone Number"
              phone="phone"
            />
            {/* email input */}
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="Email"
              email="email"
            />
            {/* subject input */}
            <input
              id="subject"
              type="text"
              className="form-control"
              placeholder="Subject"
              subject="subject"
            />
          </div>
          <div className="col-md-6 col-xs-12">
            {/* description*/}
            <textarea
              id="description"
              type="text"
              className="form-control"
              placeholder="Email"
              email="email"
            ></textarea>
            <button className="btn-main-offer contact-btn" type="submit">
              contact me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
