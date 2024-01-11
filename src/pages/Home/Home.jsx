import loginImageTransparent from "../../assets/login-image.png";
import LoginForm from "../../components/LoginForm/LoginForm.jsx";
import Layout from "../../layout/Layout.jsx";
import "./Home.css";

function Home() {
  return (
    <Layout>
      <div className="container">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
        perferendis reprehenderit tempore.
        <div className="image-wrapper">
          <img src={loginImageTransparent} alt="" />
        </div>
        <div className="form-wrapper">
          <LoginForm />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
