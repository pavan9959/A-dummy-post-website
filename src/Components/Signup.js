import React, { useContext } from "react";
import "./css/Signup.css";
import { MyContext } from "../MyContext";
import { useNavigate } from "react-router-dom";

function Signup() {
  const { state, setState } = useContext(MyContext);
  const { email, userName, password } = state;
  const navigateTo = useNavigate();

  const handleEmailChange = (e) =>
    setState({ ...state, email: e.target.value });
  const handleuserNameChange = (e) =>
    setState({ ...state, userName: e.target.value });
  const handlePasswordChange = (e) =>
    setState({ ...state, password: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      state.email.includes("@") &&
      state.email.length > 9 &&
      state.password.length > 6
    ) {
      navigateTo("/feeds");
      setState({ ...state, modalType: false });
    } else if (!state.email.includes("@")) {
      alert("Please check your maile");
    } else if (state.userName.length < 2) {
      alert("Please enter a valid user name");
    } else {
      alert("Password must be at least 9 characters long");
    }
  };

  return (
    <div className="signup-container">
      <button className="close-button" onClick={()=>{setState({...state, modalType: false})}} >✖</button>
      <h2>SIGN UP</h2>
      <h3>Create an account to continue</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
            className="inp"
          />
        </div>
        <div className="form-group">
          <label>userName</label>
          <input
            type="text"
            placeholder="Choose a preferred userName"
            value={userName}
            onChange={handleuserNameChange}
            required
            className="inp"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Choose a strong password"
            value={password}
            onChange={handlePasswordChange}
            required
            className="inp"
          />
        </div>
        <button type="submit" className="continue-button">
          Continue
        </button>
      </form>
      <p className="login-link">
        Already have an account?{" "}
        <a
          style={{ cursor: "pointer" }}
          onClick={() => {
            setState({ ...state, modalType: "login" });
          }}
        >
          Login →
        </a>
      </p>
    </div>
  );
}

export default Signup;
