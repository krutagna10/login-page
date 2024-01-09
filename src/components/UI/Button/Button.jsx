import "./Button.css";

function Button({ children, className, type }) {
  return (
    <button type={type || "button"} className={`btn ${className || ""}`}>
      {children}
    </button>
  );
}

export default Button;
