import { useState } from "react";
import { useInput } from "../../hooks/useInput";
import accountApi from "../../api/account";
import { Row, Col, Form, Button } from "react-bootstrap";
import {useHistory} from "react-router-dom";

function RegistrationForm() {
  const [countryCodeProps, resetCoutnryCode] = useInput("EG");
  const [phoneNumberProps, resetPhoneNumber] = useInput("");
  const [phoneNumberError, setPhoneNumberError] = useState(null);
  const History = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const account = await JSON.parse(localStorage.getItem("account"));
    const [data, status] = await accountApi.registerPhoneNumber({
      id: account.id,
      country_code: countryCodeProps.value,
      phone_number: phoneNumberProps.value,
    });
    console.log(data, status);

    if (status === 400 && data.phone_number) {
      setPhoneNumberError(data.phone_number);
    }
    if (status === 500) {
      setPhoneNumberError("Invalid phone number")
    }
    if (status === 200) {
      History.push('/profiles/add')
    }
  };

  return (
    <Form>
      <Row>
      <Form.Group as={Col} xs="3">
        <Form.Control type="text" placeholder="code" {...countryCodeProps} />
      </Form.Group>
      <Form.Group as={Col} xs="7">
        <Form.Control
          type="text"
          placeholder="Phone Number"
          {...phoneNumberProps}
          isInvalid={phoneNumberError ? true : false}
        />
        {phoneNumberError && (
          <Form.Control.Feedback type="invalid">
            {phoneNumberError}
          </Form.Control.Feedback>
        )}
      </Form.Group>
      </Row>

      <div class="mt-4 small text-muted">
        By checking the checkbox below, you agree to our Terms of Use, Privacy
        Statement, and that you are over 18. Netflix will automatically continue
        your membership and charge the monthly membership fee (currently EGP200)
        to your payment method until you cancel. You may cancel at any time to
        avoid future charges.
      </div>
      
      <Button
        className="w-100"
        variant="danger"
        type="submit"
        onClick={handleSubmit}
      >
        Start Membership
      </Button>
    </Form>
  );
}

export default RegistrationForm;
