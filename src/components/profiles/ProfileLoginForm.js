import { useState } from "react";
import { useInput } from "../../hooks/useInput";
import {Form, Button} from 'react-bootstrap';
import profileApi from "../../api/profile";


function ProfileLoginForm() {
    const [nameProps, resetName] = useInput("");
    const [nameError, setNameError] = useState(null);
    const [pincodeProps, resetPincode] = useInput("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();

      const profileData = {
        name: nameProps.value,
        pin_code: pincodeProps.value,
      };

      const response = await profileApi.login(profileData);
      
      if (response.success) {
        console.log(response.message)
      } else {
        console.log(response.message)
        setNameError("Name/Pin Code us not correct!");
      }
    };

    return (
        <Form>
          {nameError && 
            <p className="text-danger small"> 
              {nameError}
            </p>}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Profile Name</Form.Label>
            <Form.Control type="text" placeholder="Enter profile name"  {...nameProps} />
          </Form.Group>
    
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Pin Code</Form.Label>
            <Form.Control type="password" placeholder="Enter your pin code" {...pincodeProps} />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit} >
            Start Watching
          </Button>
        </Form>
      );
}

export default ProfileLoginForm;