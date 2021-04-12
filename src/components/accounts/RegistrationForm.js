import { useState } from "react";
import { useInput } from "../../hooks/useInput";
import accountApi from "../../api/account";
import { Form, Button, FormCheck } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function RegistrationForm() {
  const History = useHistory()
  const account = JSON.parse(localStorage.getItem('account'));
  const [emailProps,] = useInput(account.username);
  const [emailError, setEmailError] = useState(null);
  const [passwordProps,] = useInput("");
  const [passwordError, setPasswordError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const [data, status] = await accountApi.register({
      username: emailProps.value,
      password: passwordProps.value,
      password1: passwordProps.value,
    });

    if (status === 400 && data.username) {
      setEmailError(data.username)
    }

    if (status === 400 && data.password) {
      setPasswordError(data.password)
    }

    if (status === 201) {
      console.log('created')       // <-- handle router
      console.log(data);
      await localStorage.setItem("account", JSON.stringify(data));
      History.push("/signup")
    }
  };

  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          {...emailProps}
          isInvalid={emailError ? true : false}
        />
        {emailError && (
          <Form.Control.Feedback type="invalid">
            {emailError}
          </Form.Control.Feedback>
        )}
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          {...passwordProps}
          isInvalid={passwordError ? true : false}
        />
        {passwordError && (
          <Form.Control.Feedback type="invalid">
            {passwordError}
          </Form.Control.Feedback>
        )}
      </Form.Group>

      <Button
        className="w-100"
        variant="danger"
        type="submit"
        onClick={handleSubmit}
      >
        Continue
      </Button>
    </Form>
  );
}

export default RegistrationForm;
