import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin() {
    if (!email || !password) {
      alert("Please fill in all the details");
      return;
    }

    try {
      const result = await fetch("https://686d0b9e14219674dcca359f.mockapi.io/api/data");
      const response = await result.json();
      const data = response.find(item => item.myEmail === email && item.myPassword === password);

      if (data) {
        alert("Login successful!");
        navigate("/home");
      } else {
        alert("Login failed. Invalid email or password.");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong!");
    }
  }

  return (
    <div className="login-container">
      <h2 className="login-title">Login to Your Account</h2>
      
      <label className="login-label">Enter Email</label>
      <input
        className="login-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="you@example.com"
      />

      <label className="login-label">Enter Password</label>
      <input
        className="login-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="••••••••"
      />

      <button className="login-button" onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
