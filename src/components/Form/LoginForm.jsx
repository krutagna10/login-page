import Button from "../UI/Button/Button.jsx";
import "./Form.css";

function LoginForm() {
  return (
    <form className="form">
      <input className="form__input" type="text" placeholder="Username" />
      <input className="form__input" type="password" placeholder="Password" />
      <button className="form__btn-forgot-password">Forgot Password?</button>
      <Button className="form__btn btn--violet">Login</Button>
    </form>
  );
}

export default LoginForm;
