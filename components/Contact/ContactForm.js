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
    text: "Thank you for contacting with us. Our team will be reaching out to you shortly...",
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
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    // console.log(contact)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     setLoading(true); // Set loading to true on submit
    try {
      const url = "https://backyard.laautospot.com/mavin/contact.php";
      const { name, email, number, text } = contact;
      const payload = { name, email, number, text };
      const agent = new https.Agent({ rejectUnauthorized: false });
      const response = await axios.post(url, payload,{httpsAgent: agent});
      
      console.log(response);
      setContact(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.log(error);
    }
     finally {
      setLoading(false); // Reset loading state after submission completes
    }
  };

  return (
    <>
      <div className="contact-area pb-100">
        <div className="container">
          <div className="section-title">
            <h2>Get In Touch</h2>
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
                      placeholder="Your Name *"
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
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <textarea
                      name="text"
                      cols="30"
                      rows="2"
                      className="form-control"
                      value={contact.text}
                      onChange={handleChange}
                      placeholder="Your Message *"
                      required

                    ></textarea>
                  </div>
                </div>
               
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <button type="submit" className="btn default-btn" disabled={loading}>
                    {loading ? "Submitting..." : "SEND MESSAGE"}
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
