// frontend/src/pages/Login.jsx
import React from "react";
import axios from "axios";

function Login() {
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    await axios.post(
      "http://localhost:8080/Login", // Assuming the backend runs on port 8080
      // Send email and password to the backend for authentication
      { email, password },
      { withCredentials: true }
    );
    window.location.href = "http://localhost:5173/";
  };

  return (
    <form onSubmit={handleLogin}>
      <input name="email" placeholder="Email" />
      <input name="password" placeholder="Password" type="password" />
      <button type="submit">Login</button>
    </form>
  );
}
export default Login;
