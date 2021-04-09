import { useState } from "react";
import { useInput } from "../../hooks/useInput";
import accountsApi from "../../api/accounts";
import {Form, Button} from 'react-bootstrap';

function LoginForm() {
  const [emailProps, resetEmail] = useInput("");
  const [emailError, setEmailError] = useState(null);
  const [passwordProps, resetPassword] = useInput("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await accountsApi.login({
      username: emailProps.value,
      password: passwordProps.value,
    });
    if (data.token) {
      localStorage.setItem("token", data.token);
    } else {
      setEmailError("Email or Password is not correct!");
    }
  };

  return (
    <Form>
      {emailError && 
        <p className="text-danger small"> 
          {emailError}
        </p>}
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  {...emailProps} />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" {...passwordProps} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit} >
        Login
      </Button>
    </Form>
  );
}

export default LoginForm;
