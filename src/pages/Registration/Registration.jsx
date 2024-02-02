import Layout from "../../layout/Layout.jsx";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm.jsx";
import Container from "../../components/UI/Container/Container.jsx";
import "./Registration.css";

function Registration() {
  return (
    <Layout className="content-center">
      <Container className="registration flow">
        <h2 className="text-center fs-500">Sign up for the website</h2>
        <RegistrationForm />
      </Container>
    </Layout>
  );
}

export default Registration;
