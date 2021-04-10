import { useState } from "react";
import { useInput } from "../../hooks/useInput";
import accountApi from "../../api/account";
import { Col, Form, Button, } from "react-bootstrap";

function RegistrationForm() {
  const [countryCodeProps, resetCoutnryCode] = useInput("EG");
  const [phoneNumberProps, resetPhoneNumber] = useInput("");
  const [phoneNumberError, setPhoneNumberError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const [data, status] = await accountApi.registerPhoneNumber({
      id: 1,                                             // <-- from context
      country_code: countryCodeProps.value,
      phone_number: phoneNumberProps.value,
    });
    console.log(data, status)
    if (status === 400 && data.phone_number) {
      setPhoneNumberError(data.phone_number)
    }
  };

  return (
    <Form>
      <Form.Group as={Col} xs="3" >
        <Form.Control
          type="text"
          placeholder="code"
          {...countryCodeProps}
        />
      </Form.Group>
      <Form.Group as={Col} xs="5">
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