import { useInput } from "../../hooks/useInput";
import accountApi from "../../api/account";
import { Col, Form, Button } from "react-bootstrap";
// import AccountContext from '../../context/AccountContext';
// import {useContext} from 'react';
import { useHistory } from "react-router-dom";

function GetStartedForm() {
  const history = useHistory();
  const acc = localStorage.getItem("account");
  const account = acc ? JSON.parse(acc) : null;
  const email = account ? account.username : "";
  const [emailProps, ] = useInput(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const [data, status] = await accountApi.getStarted({
      username: emailProps.value,
    });
      if (status === 404 ) {
        await localStorage.setItem('account', JSON.stringify({username: emailProps.value, registration_state: 1}));
        history.push("/signup");

      } else {
      
        const accountDetails = await accountApi.accountDetails(data.id);
        localStorage.setItem("account", JSON.stringify(accountDetails));
        history.push("/login");
      }
  };

  return (
    <Form className="col-md-6">
      <Form.Row className="w-100 align-items-center">
        <Form.Group as={Col} xs="8" controlId="formBasicEmail">
          <Form.Control
            style={{ height: "4em", fontSize: "1.5em", margin: "0" }}
            type="email"
            placeholder="Email Address"
            {...emailProps}
          />
        </Form.Group>
        <Form.Group as={Col} xs="4" style={{ marginLeft: "0" }}>
          <Button
            style={{ height: "4em", fontSize: "1.5em", margin: "0" }}
            className="w-100"
            variant="danger"
            type="submit"
            onClick={handleSubmit}
          >
            Get Started
          </Button>
        </Form.Group>
      </Form.Row>
    </Form>
  );
}

export default GetStartedForm;
