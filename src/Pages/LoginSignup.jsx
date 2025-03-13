import React, { useState, useEffect } from "react";
import "./Css/LoginSignup.css";

export const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    // Check if the user is already logged in
    const token = localStorage.getItem("auth-token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("Login Function Executed", formData);
    await fetch(`${backendUrl}/login`, {
      // Changed endpoint to /login
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          localStorage.setItem("auth-token", data.token);
          window.location.replace("/");
        } else {
          alert(data.errors);
        }
      });
  };

  const signup = async () => {
    console.log("Signup Function Executed", formData);
    await fetch(`${backendUrl}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          localStorage.setItem("auth-token", data.token);
          window.location.replace("/");
        } else {
          alert(data.errors);
        }
      });
  };

  if (isLoggedIn) {
    return (
      <div className="loginsignup">
        <h1>You are already logged in!</h1>
        <button onClick={() => window.location.replace("/")}>
          Go to Homepage
        </button>
      </div>
    );
  }

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" ? (
            <input
              name="username"
              value={formData.username}
              onChange={changeHandler}
              type="text"
              placeholder="Your Name"
            />
          ) : (
            <></>
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Email"
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Password"
          />
        </div>
        <button
          onClick={() => {
            state === "Login" ? login() : signup();
          }}
        >
          Continue
        </button>
        {state === "Sign Up" ? (
          <p className="loginsignup-login">
            Already have an account?{" "}
            <span
              onClick={() => {
                setState("Login");
              }}
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Create an account?{" "}
            <span
              onClick={() => {
                setState("Sign Up");
              }}
            >
              Click here
            </span>
          </p>
        )}
        <div className="loginsignup-agree">
          <input type="checkbox" name="terms" />
          <p>I agree to the terms and conditions</p>
        </div>
      </div>
    </div>
  );
};
