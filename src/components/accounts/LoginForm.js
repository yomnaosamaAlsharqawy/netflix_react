import { useEffect, useState } from "react";
import { useInput } from "../../hooks/useInput";
import accountApi from "../../api/account";
import { Form, Button } from "react-bootstrap";
import { useHistory } from 'react-router-dom';

// import AccountContext from "../../context/AccountContext";
// import { useContext } from "react";

function LoginForm() {
  const account = JSON.parse(localStorage.getItem('account'));
  const email = account ? account.username : "";
  const [emailProps, resetEmail] = useInput(email);
  const [emailError, setEmailError] = useState(null);
  const [passwordProps, resetPassword] = useInput("");
  const History = useHistory()

  const getAccountObject = async (e) => {
    e.preventDefault();
    const [data, status] = await accountApi.getStarted({
      username: emailProps.value,
    });
  
    const accountDetails = await accountApi.accountDetails(data.id);
    localStorage.setItem("account", JSON.stringify(accountDetails));

    History.push('/profiles/view');
    window.location.reload()
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await accountApi.login({
      username: emailProps.value,
      password: passwordProps.value,
    });
    if (data.token) {
      localStorage.setItem("token", data.token);
    } else {
      setEmailError("Email or Password is not correct!");
    }
    getAccountObject(e);
  };

  return (
    <Form>
      {emailError && <p className="text-danger">{emailError}</p>}
      <Form.Group controlId="formBasicEmail">
        <Form.Label className="text-white">Email address</Form.Label>
        <Form.Control style={{height: "3em"}} className="LoginInput" type="email" placeholder="Email Address" {...emailProps} />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label className="text-white">Password</Form.Label>
        <Form.Control
         style={{height: "3em"}} 
          type="password"
          placeholder="Password"
          {...passwordProps}
        />
      </Form.Group>
      <Button style={{height: "3em", backgroundColor:"red"}} className="w-100 border-radius-0 mt-3" variant="danger" type="submit" onClick={handleSubmit}>
        Login
      </Button>
    </Form>
  );
}

export default LoginForm;
