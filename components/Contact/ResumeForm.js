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
  last: "",
  resume: null
};

const ContactForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    // console.log(contact)
  };
  const handleChange1 = (e) => {
  const { name, files } = e.target;
  setContact(prevState => ({
    ...prevState,
    [name]: files[0] // Capture the first file if multiple files are allowed
  }));
};


  const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(contact); // Verify that `contact.resume` is a file object
  // Create a FormData object
  const formData = new FormData();

  // Extract form fields from state
  const { name, email, number, text, resume, last } = contact;

  // Append other form fields to FormData
  formData.append('name', name);
  formData.append('email', email);
  formData.append('number', number);
  formData.append('text', text);
    formData.append('last', last);

  // Append the file (resume) to FormData, assuming `resume` is a File object
  formData.append('resume', resume);

  try {
    const url = "https://backyard.laautospot.com/mavin/resume1.php";
    
    // Send POST request with FormData
    const response = await axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Set content type
      },
      httpsAgent: new https.Agent({ rejectUnauthorized: false }), // For self-signed certificates
    });

    console.log(response);
    setContact(INITIAL_STATE); // Reset form state
    alertContent(); // Show success message
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
                      name="last"
                      className="form-control"
                      value={contact.last}
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
                      onChange={handleChange1}
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
