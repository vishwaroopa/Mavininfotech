import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "@/utils/baseUrl";
import Link from "next/link";
const https = require('https');


const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Thank you for submitting resume. Our team will be reaching out to you shortly...",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  subject: "",
  text: "",
};

const ContactForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    // console.log(contact)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://admin.mavininfotech.com/mavin/contact.php";
      const { name, email, number, text, resume } = contact;
      const payload = { name, email, number, text,  resume};
      const agent = new https.Agent({ rejectUnauthorized: false });
      const response = await axios.post(url, payload,{httpsAgent: agent});
      console.log(response);
      setContact(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="contact-area pb-100 pt-100">
        <div className="container">
          <div className="section-title">
            <h2>Submit Resume</h2><br/>
            <p>Please fill out the form below to send us an email and we will get back to you as soon as possible.</p>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <label></label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={contact.name}
                      placeholder="First Name *"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <label></label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={contact.name}
                      placeholder="Last Name *"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      value={contact.email}
                      onChange={handleChange}
                      placeholder="Email Address *"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="number"
                      className="form-control"
                      value={contact.number}
                      onChange={handleChange}
                      placeholder="Phone Number *"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <textarea
                      name="text"
                      cols="30"
                      rows="4"
                      className="form-control"
                      value={contact.text}
                      onChange={handleChange}
                      placeholder="Im good at *"
                      required

                    ></textarea>
                  </div>
                </div>
                 <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                  <input type="file" 
                  name="resume"
                      className="form-control"
                      onChange={handleChange}
                      placeholder="Upload Resume *"
                      required />
                  </div>
                </div>
               
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <button type="submit" className="btn default-btn">
                    SAVE APPLICATION
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
