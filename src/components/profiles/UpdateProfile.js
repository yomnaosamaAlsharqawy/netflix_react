import { useState } from "react";
import { useInput } from "../../hooks/useInput";
import {Form, Button} from 'react-bootstrap';
import profileApi from "../../api/profile";

import ProfileList from './ProfileList';


function UpdateProfile() {
    const [nameProps, resetName] = useInput("");
    const [nameError, setNameError] = useState(null);
    const [imageProps, resetImage] = useInput("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();

      const profileData = {
        name: nameProps.value,
        image_id: imageProps.value,
      };

      const [response, status] = await profileApi.updateProfile(profileData);
      
      if(status == 400 && response.name) {
        setNameError("Profile name can't be empty")
        console.log("profile name error")
      }
      else if(status == 400 && response.image_id) {
        setNameError("Image ID can't be empty")
        console.log("Image ID error (there should be a default image)")
      }
      else if (status == 200) {
          console.log("Updated", response)  //Profile created -> route
      }
      else {
          console.log("Unknown error", response, status)
      }
    };

    return (
        <div>
        {/* For Testing */}
        <ProfileList /> 
        {/* ----------- */}
            <Form>
            {nameError && 
                <p className="text-danger small"> 
                {nameError}
                </p>}

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Profile Name</Form.Label>
                <Form.Control type="text" placeholder="Enter profile name"  {...nameProps} />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Image ID</Form.Label>
                <Form.Control type="number" placeholder="This will be image selector"  {...imageProps} />
            </Form.Group>
        
            <Button variant="primary" type="submit" onClick={handleSubmit} >
                Update Profile
            </Button>

            </Form>
        </div>
      );
}

export default UpdateProfile;