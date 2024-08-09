import React, { useContext, useState } from "react";
import "../Style.css";
import logo from "../assets/Login_logo.svg";
import { MyContext } from "../MyContext";
import { useNavigate } from "react-router-dom";
import eye from "../assets/eye.svg";
import hide from "../assets/hide.svg";

function LoginForm({ hideLogo }) {
  const { state, setState } = useContext(MyContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigateTo = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handelLogin = (e) => {
    e.preventDefault();
    if (
      state.email.includes("@") &&
      state.email.length > 9 &&
      state.password.length > 6
    ) {
      localStorage.setItem("token", String(Math.random()));
      setState({ ...state, modalType: false });
      navigateTo("/feeds");
    } else if (!state.email.includes("@")) {
      alert("Please check your mail");
    } else {
      alert("Password must be at least 9 characters long");
    }
  };

  return (
    <div className="login-comp">
      {!hideLogo && <img src={logo} className="loginLogo" />}
      {/* <div className="login-container"> */}
      <form className="login-form" onSubmit={handelLogin}>
        <button
          className="close-button"
          onClick={() => {
            setState({ ...state, modalType: false });
          }}
        >
          ✖
        </button>
        <h2>WELCOME BACK</h2>
        <h3>Log into your account</h3>

        <div className="input-group">
          <label>Email or Username</label>
          <input
            type="text"
            placeholder="Enter your email or username"
            className="inp"
            value={state.email}
            onChange={(e) => {
              setState({ ...state, email: e.target.value });
            }}
            required
          />
        </div>

        <div className="input-group">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <label>Password</label>
            <p className="forgot-password">Forgot password?</p>
          </div>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="inp"
              value={state.password}
              onChange={(e) => {
                setState({ ...state, password: e.target.value });
              }}
              required
            />
            <div>
              <span
                className="password-toggle"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <img src={hide} style={{width: "20px"}} /> : <img src={eye} />}
              </span>
            </div>
          </div>
        </div>

        <button type="submit" className="login-button" onClick={handelLogin}>
          Login now
        </button>

        <p className="register-text" style={{ cursor: "pointer" }}>
          Not registered yet?{" "}
          <a
            onClick={() => {
              state.modalType && setState({ ...state, modalType: "signup" });
            }}
          >
            Register →
          </a>
        </p>
      </form>
    </div>
    // </div>
  );
}

export default LoginForm;
