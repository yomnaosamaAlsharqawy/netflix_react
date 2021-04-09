import { useInput } from "../../hooks/useInput";
import accountApi from "../../api/account";
import { Col, Form, Button } from "react-bootstrap";

function LoginForm() {
  const [emailProps, resetEmail] = useInput("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await accountApi.getStarted({
      username: emailProps.value,
    });
    if (data.exists) {
      console.log("userID", data.id);
      const accountDetails = await accountApi.accountDetails(data.id); // <-- save user details into context
      console.log(accountDetails);
      console.log("redirect to login page");                           // <-- Handle routing
    } else {
      console.log("redirect to register page");
    }
  };

  return (
    <Form>
      <Form.Row className="align-items-center">
        <Form.Group as={Col} xs="8" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Email Address"
            {...emailProps}
          />
        </Form.Group>
        <Form.Group as={Col} xs="4">
          <Button
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

export default LoginForm;
