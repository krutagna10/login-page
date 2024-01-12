import "./Button.css";
import { useNavigate } from "react-router-dom";

function Button({ children, className, type, navigation }) {
  return (
    <button type={type || "button"} className={`btn ${className || ""}`}>
      {children}
    </button>
  );
}

export default Button;
