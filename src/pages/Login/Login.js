import "./Login.css";
import LoginForm from "../../components/accounts/LoginForm";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="SignInPageContainer">
      <div className="SignInNav">
        <Link style={{ width: "10%" }} to="/">
          <img className="m-4" alt="" src="/logo.svg" />
        </Link>
      </div>
      <div className="SignInContainer">
        <div className="SignInContainerHeader">
          <h1>Sign In</h1>
        </div>
        <div className="d-flex justify-content-center">
          <div style={{ width: "70%" }}>
            <LoginForm />
          </div>
        </div>
        <div className="NewToNetflix mt-5">
          <p className="link">
            New to Netflix?{" "}
            <span>
              <Link to="/" className="text-white">Sign up now.</Link>
            </span>
          </p>
          <p>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
          <p>
            The information collected by Google reCAPTCHA is subject to the
            Google Privacy Policy and Terms of Service, and is used for
            providing, maintaining, and improving the reCAPTCHA service and for
            general security purposes (it is not used for personalized
            advertising by Google).
          </p>
        </div>
      </div>
      <div className="SignInFooter">
        <div className="Questions">Questions? Contact Us.</div>
      </div>
    </div>
  );
}
