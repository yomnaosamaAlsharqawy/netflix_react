import Step1 from "./subPages/Step1";
import RegisterEmailPasswordPage from "./subPages/RegisterEmailPasswordPage";
import Step2 from "./subPages/Step2";
import RegisterPlanPage from "./subPages/RegisterPlanPage";
import Step3 from "./subPages/Step3";
import Payment from "./subPages/Payment";
import RegisterPhoneNumberPage from "./subPages/RegisterPhoneNumberPage";
import { Navbar, Nav } from "react-bootstrap";
import "./RegistrationPage.css";

export default function RegistrationPage() {
  const page = 6;                               // <-- Get page from context
  const currentSubPage = () => {
    switch (page) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <RegisterEmailPasswordPage />;
      case 5:
        return <RegisterPlanPage />;
      case 6:
        return <Payment />;
      case 7:
        return <RegisterPhoneNumberPage />;
      default:
        return <h1>No page match</h1>;
    }
  };

  return (
    <div className="bg-white" style={{minHeight: "100vh"}}>
      <div className="d-flex flex-column"  style={{ fontSize: "1.3em", minHeight: "100vh" }}>
        <Navbar className="border" bg="white">
          <Navbar.Brand href="#" style={{ width: "10%" }}>
            <img
              style={{ borderRadius: "0" }}
              src="/logo.svg"
              className="d-inline-block align-top my-2"
              alt="Netflix Logo"
            />
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link
              href="#"
              className="text-dark font-weight-bold"
              style={{ fontSize: "1.3em" }}
            >
              Sign Out
            </Nav.Link>
          </Nav>
        </Navbar>
        <div className="mb-auto bg-white">
          <div className="d-flex justify-content-center align-itmes-between my-5 container">
            <div className="col-md-6 col-lg-5 mb-5">{currentSubPage()}</div>
          </div>
        </div>
        <div className="bg-light p-5">
          <a href="#" className="lead text-muted">
            Questions? Contact us.
          </a>
          <div className="row mt-1">
            {["FAQ", "Help Center", "Terms of Use", 
            "Privacy", "Cookie Preferences", "Corporate Informations"].map((elm, i) => (
              <a 
                key={i} href="#" 
                className="mt-2 col-6 col-md-3 col-lg-3 text-muted text-nowrap"
              >
                {elm}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
