import React, { useState } from "react";
import "./../styles/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logged In!");
  };

  return (
    <div className="container">
      <div className="logo">
        <h2>
          linked
          <span>
            <i className="fab fa-linkedin"></i>
          </span>
        </h2>
      </div>
      <div className="intro">
        <h1 className="intro--title">Sign in</h1>
        <p className="intro--text">Stay updated on your professional world</p>

        <div className="inputs">
          <div className="input">
            <input
              type="email"
              id="email"
              name="email"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              required
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              id="password"
              required
            />
            <label htmlFor="password">Password</label>
          </div>
          <a href="/" className="links">
            Forget Password?
          </a>
          <button className="btn" onClick={handleLogin}>
            Sign in
          </button>
        </div>
      </div>
      <div className="footer">
        <p className="intro--text">New to linkedIn?</p>
        <a href="/" className="links">
          Join now
        </a>
      </div>
    </div>
  );
};

export default Login;
