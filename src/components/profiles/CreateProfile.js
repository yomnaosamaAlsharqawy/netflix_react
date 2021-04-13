import { useState } from "react";
import { useInput } from "../../hooks/useInput";
import { Form, Button } from "react-bootstrap";
import profileApi from "../../api/profile";

const ACCOUNT_ID = 2;

function CreateProfile() {
  const [nameProps, resetName] = useInput("");
  const [nameError, setNameError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const profileData = {
      name: nameProps.value,
      account_id: account.id,
      pin_code: "",
      image_id: 1,
    };

    const [response, status] = await profileApi.createProfile(profileData);

    if (status == 400) {
      setNameError("Profile name can't be empty");
      console.log("profile name error");
    } else if (status == 201) {
      console.log("Created", response); //Profile created -> route
    } else {
      console.log("Unknown error", response, status);
    }
  };

  return (
    <Form>
      {nameError && <p className="text-danger small">{nameError}</p>}

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Profile Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter profile name"
          {...nameProps}
        />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Add Profile
      </Button>
    </Form>
  );
}

export default CreateProfile;
