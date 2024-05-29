import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createSignUp } from "../Serivices/SignUpServices";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setError("");
  };

  const handleClear = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password } = formData;

    // Field validation...

    try {
      // Your signup service function to create the signup
      await createSignUp({ firstName, lastName, email, password });

      // Clear form data on successful signup
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });

      setError("");
      navigate("/login");

      // Print form data in the console
      console.log("Form Data:", formData);
    } catch (error) {
      console.error("Error creating signup:", error);
      setError("An error occurred during sign up. Please provide a correct email and password.");
    }
  };

  return (
    <div >
      <h5>Signup Here</h5>
      <form onSubmit={handleSubmit}>
        {/* Form inputs */}
        {/* First Name input */}
        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: 'inline-block', width: '100px', fontWeight: 'bold', textAlign: 'left' }}>First Name:</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required style={{ width: '300px', marginLeft: '10px', padding: '8px', border: '2px solid #ccc' }}/>
        </div>
        {/* Last Name input */}
        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: 'inline-block', width: '100px', fontWeight: 'bold', textAlign: 'left' }}>Last Name:</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required style={{ width: '300px', marginLeft: '10px', padding: '8px', border: '2px solid #ccc' }}/>
        </div>
        {/* Email input */}
        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: 'inline-block', width: '100px', fontWeight: 'bold', textAlign: 'left' }}>Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required style={{ width: '300px', marginLeft: '10px', padding: '8px', border: '2px solid #ccc' }}/>
        </div>
        {/* Password input */}
        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: 'inline-block', width: '100px', fontWeight: 'bold', textAlign: 'left' }}>Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} required style={{ width: '300px', marginLeft: '10px', padding: '8px', border: '2px solid #ccc' }}/>
        </div>
        {/* Submit and Clear buttons */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button type="submit" style={{ backgroundColor: "blue", color: "white", marginRight: "5px", padding: "8px 20px", border: "none", borderRadius: '5px' }}>Submit</button>
          <button type="button" onClick={handleClear} style={{ backgroundColor: "red", color: "white", padding: "8px 20px", border: "none", borderRadius: '5px' }}>Clear</button>
        </div>
        {/* Error message */}
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      </form>
    </div>
  );
};

export default SignUp;
