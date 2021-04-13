import './ProfileLogin.css'
import { useState } from "react";
import { useInput } from "../../../hooks/useInput";
import profileApi from "../../../api/profile";


function ProfileLogin (){
    
    const [pincodeError, setPincodeError] = useState(null);
    const [pincodeProps, resetPincode] = useInput("");

    const handleSubmit = async (e) => {
      e.preventDefault();

      const profileData = {
        pin_code: pincodeProps.value,
      };


      const response = await profileApi.login(profileData);
      
      if (response.success) {
        console.log(response.message)
      } else {
        console.log(response.message)
        setPincodeError("Pin code is not correct.");
      }
    };

    return (
        <div className="profile-login-body">
          <div className="login-form-container">
            <h1 className="login-lock-on">Profile lock is currently on.</h1>
            <h1 className="profile-login-message">Enter your PIN to access this profile.</h1>
            <input className="profile-login-input" type="password" {...pincodeProps} />
            {pincodeError && 
            <p className="text-danger small profile-login-error"> 
              {pincodeError}
            </p>} 
            <span className="start-watching-button px-4 py-2"><a onClick={handleSubmit}>START WATCHING</a></span>
          </div>
        </div>
      );
}

export default ProfileLogin;