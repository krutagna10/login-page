import loginImageTransparent from "../../assets/login-image.png";
import LoginForm from "../../components/LoginForm/LoginForm.jsx";
import Layout from "../../layout/Layout.jsx";
import "./Home.css";
import Container from "../../components/UI/Container/Container.jsx";

function Home() {
  return (
    <Layout>
      <Container className="login flow">
        <h2 className="text-center">Welcome back</h2>
        <p className="text-center">Please enter your details to sign in</p>
        <LoginForm />
      </Container>
    </Layout>
  );
}

export default Home;
