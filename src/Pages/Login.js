import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ValidateUser } from "../functions/ValidateUser";
import { GetUsers } from "../Hooks/GetUsers.js";
import "../styles/LoginPage.css";

const Login = () => {
  const navigate = useNavigate();
  const [users] = GetUsers();

  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = React.useState({
    userName: "",
    passWord: "",
    err: "",
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = ValidateUser(users, formData);
    setFormErrors(ValidateUser(users, formData));
    if (errors.err === false) {
      navigate("/Home");
    }
  };

  return (
    <div className="login">
      <div className="login__container">
        <form onSubmit={handleSubmit} className="login-form">
          <h4>E-mail</h4>

          <input
            className="Email"
            type="email"
            placeholder="Email address"
          
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            required
          />

          <h4>Password</h4>

          <input
            className="Password"
            type="password"
            placeholder="Password"
            name="passWord"
            value={formData.passWord}
            onChange={handleChange}
            required
          />

          <p>{formErrors.userName}</p>

          <button type="submit" className="login-button" >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
