function AuthToggle({ authType, onAuthTypeChange }) {
  function handleAuthTypeChange(event) {
    onAuthTypeChange(event.target.value);
  }

  return (
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
  );
}

export default AuthToggle;
