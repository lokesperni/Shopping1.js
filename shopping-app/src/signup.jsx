
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSignup() {
    if (!name || !email || !password || !number) {
      alert("Please fill all the fields");
      return;
    }

    const formData = {
      myName: name,
      myEmail: email,
      myPassword: password,
      myNumber: number,
    };

    try {
      const result = await fetch("https://686d0b9e14219674dcca359f.mockapi.io/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (result.ok) {
        alert("Account created successfully");
        setName("");
        setEmail("");
        setNumber("");
        setPassword("");
        navigate("/login");
      } else {
        alert("Account creation failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Something went wrong!");
    }
  }

  return (
    <div className="signup-container">
      <h2 className="signup-title">Create Account</h2>
      <label className="signup-label">Enter Name</label>
      <input
        className="signup-input"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Your Name"
      />

      <label className="signup-label">Enter Email</label>
      <input
        className="signup-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="you@example.com"
      />

      <label className="signup-label">Enter Number</label>
      <input
        className="signup-input"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        type="tel"
        placeholder="1234567890"
      />

      <label className="signup-label">Enter Password</label>
      <input
        className="signup-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="••••••••"
      />

      <button className="signup-button" onClick={handleSignup}>Sign Up</button>
    </div>
  );
}

export default Signup;
