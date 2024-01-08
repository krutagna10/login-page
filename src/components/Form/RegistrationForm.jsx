import Button from "../UI/Button/Button.jsx";
import "./Form.css";

function RegistrationForm() {
  return (
    <form className="form">
      <input className="form__input" type="text" placeholder="Username" />
      <input className="form__input" type="email" placeholder="Email" />
      <input className="form__input" type="password" placeholder="Password" />
      <Button className="form__btn btn--violet">Register</Button>
    </form>
  );
}

export default RegistrationForm;
