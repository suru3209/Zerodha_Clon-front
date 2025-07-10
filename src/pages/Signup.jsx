// frontend/src/pages/Signup.jsx
import React from "react";
import axios from "axios";

function Signup() {
  const handleSignup = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const username = e.target.username.value;
    const password = e.target.password.value;

    const res = await axios.post(
      "http://localhost:8080/Signup", // Assuming the backend runs on port 8080
      { email, username, password, createdAt: new Date() },
      { withCredentials: true }
    );

    if (res.data.success) {
      // ✅ Signup success → redirect to dashboard
      window.location.href = "http://localhost:5173/"; // Assuming dashboard runs on 5174
    } else {
      alert(res.data.message);
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <input name="email" placeholder="Email" />
      <input name="username" placeholder="Username" />
      <input name="password" placeholder="Password" type="password" />
      <button type="submit">Signup</button>
    </form>
  );
}
export default Signup;
// This code defines a Signup component that handles user registration by sending a POST request to the backend
