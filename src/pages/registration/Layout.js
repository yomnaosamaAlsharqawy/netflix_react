import { Navbar, Nav } from "react-bootstrap";
import "./Layout.css";
import { Link } from "react-router-dom";

export default function Layout({children}) {
  return (
    <div className="bg-white" style={{minHeight: "100vh"}}>
      <div className="d-flex flex-column"  style={{ fontSize: "1.3em", minHeight: "100vh" }}>
        <Navbar className="border" bg="white">
          
          <Navbar.Brand href="#" style={{ width: "10%" }}>
          <Link to="/">
            <img
              style={{ borderRadius: "0" }}
              src="/logo.svg"
              className="d-inline-block align-top my-2"
              alt="Netflix Logo"
            /></Link>
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
            {children}
          </div>
        </div>
        <div className="bg-light p-5">
        <a href="#" className="lead text-muted">
          Questions? Contact us.
        </a>
        <div className="row mt-1">
          {[
            "FAQ",
            "Help Center",
            "Terms of Use",
            "Privacy",
            "Cookie Preferences",
            "Corporate Informations",
          ].map((elm, i) => (
            <a
              key={i}
              href="#"
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
