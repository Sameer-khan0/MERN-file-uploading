// MyForm.js
import React, { useState } from 'react';
import './form.css';

const MyForm = (props) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const req = await fetch(props.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
        }),
      });
  
      if (!req.ok) {
        throw new Error('Network response was not ok');
      }
  
      const res = await req.json();
      console.log(res);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName" className="form-label" >First Name:</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        className="form-input"
      />

      <label htmlFor="lastName" className="form-label">Last Name:</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        className="form-input"
      />

      <label htmlFor="email" className="form-label">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="form-input"
      />

      <label htmlFor="password" className="form-label">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        className="form-input"
      />

      <button type="submit" className="form-button">Submit</button>
    </form>
  );
};

export default MyForm;
