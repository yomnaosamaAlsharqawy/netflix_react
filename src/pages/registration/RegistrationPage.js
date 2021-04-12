import RegisterEmailPasswordPage from "./subPages/RegisterEmailPasswordPage";
import RegisterPlanPage from "./subPages/RegisterPlanPage";
import RegisterPhoneNumberPage from "./subPages/RegisterPhoneNumberPage";
import { Navbar, Nav } from "react-bootstrap";
import "./RegistrationPage.css";

export default function RegistrationPage() {
  const page = 1; // <-- Get page from context
  const currentSubPage = () => {
    switch (page) {
      case 1:
        return <RegisterEmailPasswordPage />;
      case 2:
        return <RegisterPlanPage />;
      case 3:
        return <RegisterPhoneNumberPage />;
      default:
        return <h1>No page match</h1>;
    }
  };

  return (
    <div className="bg-white h-100">
      <div className="h-100" style={{ fontSize: "1.23em" }}>
        <Navbar className="border" bg="white">
          <Navbar.Brand href="#">
            <img
              style={{ borderRadius: "0" }}
              src="/logo.svg"
              height="45px"
              width="167px"
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
        <div
          className="d-flex justify-content-center align-itmes-between my-5 container"
        >
          <div className="col-md-6 col-lg-4 mb-5">{currentSubPage()}</div>
        </div>
        <div className="bg-light">
          <h1>footer</h1>
        </div>
      </div>
    </div>
  );
}
