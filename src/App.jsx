import LoginForm from "./components/Form/LoginForm.jsx";
import loginImageTransparent from "./assets/login-image.png";
import { useState } from "react";
import "./App.css";
import RegistrationForm from "./components/Form/RegistrationForm.jsx";

function App() {
  const [authType, setAuthType] = useState("login");

  function handleAuthTypeChange(event) {
    setAuthType(event.target.value);
  }

  return (
    <div className="app">
      <div className="image-wrapper">
        <img src={loginImageTransparent} alt="" />
      </div>
      <div className="form-wrapper">
        <div className="auth-toggle">
          <input
            className="auth-toggle__radio"
            id="auth-toggle-login"
            type="radio"
            name="auth-type"
            value="login"
            onChange={handleAuthTypeChange}
            checked={authType === "login"}
          />
          <label htmlFor="auth-toggle-login" className="auth-toggle__label">
            Login
          </label>
          <input
            className="auth-toggle__radio"
            id="auth-toggle-register"
            type="radio"
            name="auth-type"
            value="register"
            onChange={handleAuthTypeChange}
            checked={authType === "register"}
          />
          <label
            htmlFor="auth-toggle-register"
            className="auth-toggle__label active"
          >
            Register
          </label>
        </div>
        {authType === "login" ? <LoginForm /> : <RegistrationForm />}
      </div>
    </div>
  );
}

export default App;
