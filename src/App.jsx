import LoginForm from "./components/LoginForm/LoginForm.jsx";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm.jsx";
import AuthToggle from "./components/AuthToggle/AuthToggle.jsx";
import UsersProvider from "./context/UsersProvider.jsx";
import loginImageTransparent from "./assets/login-image.png";
import { useState } from "react";
import "./App.css";

function App() {
  const [authType, setAuthType] = useState("login");

  function handleAuthTypeChange(nextAuthType) {
    setAuthType(nextAuthType);
  }

  return (
    <div className="app">
      <UsersProvider>
        <div className="image-wrapper">
          <img src={loginImageTransparent} alt="" />
        </div>
        <div className="form-wrapper">
          <AuthToggle
            authType={authType}
            onAuthTypeChange={handleAuthTypeChange}
          />
          {authType === "login" ? <LoginForm /> : <RegistrationForm />}
        </div>
      </UsersProvider>
    </div>
  );
}

export default App;
