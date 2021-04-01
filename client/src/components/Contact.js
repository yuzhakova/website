import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState("");
  //destructure components from useForm
  const { register, handleSubmit, errors } = useForm();

  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "user_ZAFkg4C5qoIE5t2wvKuxE";

  //method
  const onSubmit = (data, reset) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userID
    );
    reset.target.reset();
  };
  const sendEmail = (serviceID, templateID, variables, userID) => {
    // e.preventDefault();

    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        // console.log(result.text);
        setSuccessMessage(
          "Your message is received. I will contact you within 2 business days."
        );
      })
      .catch((err) => console.error(`Something went wrong ${err}`));
  };

  return (
    <div className="contact">
      <div className="text-center">
        <h1>contact me</h1>
        <p>Please fill out the form and I will get back to you.</p>
        <span className="success-message">{successMessage}</span>
        {/* using the hook to provide the success message on submission */}
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/* name input */}
              <div className="text-center">
                <input
                  // id="name"
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  ref={register({
                    required: "Please enter your name",
                    maxlength: {
                      value: 30,
                      message:
                        "Please enter a name with fewer than 30 characters",
                    },
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.name && errors.name.message}
              </span>
              {/* phone input */}
              <div className="text-center">
                <input
                  // id="phone"
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  name="phone"
                  ref={register({
                    required: "Please add your phone number",
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.phone && errors.phone.message}
              </span>
              {/* email input */}
              <div className="text-center">
                <input
                  // id="email"
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  ref={register({
                    required: "Please provide your email",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid Email",
                    },
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.email && errors.email.message}
              </span>
              {/* subject input */}
              <div className="text-center">
                <input
                  // id="subject"
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  ref={register({
                    required: "Please add the subject",
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.subject && errors.subject.message}
              </span>
            </div>

            <div className="col-md-6 col-xs-12">
              {/* description*/}
              <div className="text-center">
                <textarea
                  // id="description"
                  type="text"
                  className="form-control"
                  placeholder="Enter your message here..."
                  name="description"
                  ref={register({
                    required: "Please add your message",
                  })}
                ></textarea>
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.description && errors.description.message}
              </span>
              <button className="btn-main-offer contact-btn" type="submit">
                contact me
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
