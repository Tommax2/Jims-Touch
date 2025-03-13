import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Css/LoginSignup.css";
import { ShopContext } from "../../Context/ShopContext"; // Update path if needed

export const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  
  // Get the ShopContext
  const { login: contextLogin } = useContext(ShopContext);

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
    try {
      const response = await fetch(`${backendUrl}/login`, {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (data.success) {
        console.log("Login successful, setting token");
        // Update auth state in context
        contextLogin(data.token);
        
        // Check for redirect after login
        const redirectPath = sessionStorage.getItem("redirectAfterLogin");
        if (redirectPath) {
          console.log("Redirecting to:", redirectPath);
          sessionStorage.removeItem("redirectAfterLogin");
          navigate(redirectPath);
        } else {
          // Default redirect to home
          navigate("/");
        }
      } else {
        alert(data.errors || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login");
    }
  };

  const signup = async () => {
    console.log("Signup Function Executed", formData);
    try {
      const response = await fetch(`${backendUrl}/signup`, {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (data.success) {
        console.log("Signup successful, setting token");
        // Update auth state in context
        contextLogin(data.token);
        
        // Check for redirect after signup
        const redirectPath = sessionStorage.getItem("redirectAfterLogin");
        if (redirectPath) {
          console.log("Redirecting to:", redirectPath);
          sessionStorage.removeItem("redirectAfterLogin");
          navigate(redirectPath);
        } else {
          // Default redirect to home
          navigate("/");
        }
      } else {
        alert(data.errors || "Signup failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("An error occurred during signup");
    }
  };

  if (isLoggedIn) {
    return (
      <div className="loginsignup">
        <h1>You are already logged in!</h1>
        <button onClick={() => navigate("/")}>Go to Homepage</button>
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