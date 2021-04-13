import './AddProfile.css'
import { useState } from "react";
import { useInput } from "../../../hooks/useInput";
import profileApi from "../../../api/profile";
import {useHistory} from "react-router-dom";



function AddProfile (){
    const account = JSON.parse(localStorage.getItem("account"));
    const [nameProps, resetName] = useInput("");
    const [nameError, setNameError] = useState(null);
    const History = useHistory(); 

    const handleSubmit = async (e) => {
      e.preventDefault();

      const profileData = {
        name: nameProps.value,
        account_id: account.id,
        pin_code: "",
        image_id: 1
      };

      const [response, status] = await profileApi.createProfile(profileData);
      
      if(status == 400) {
        setNameError("Profile name can't be empty")
        console.log("profile name error")
      }
      else if (status == 201) {
          console.log("Created", response);  //Profile created -> route
          History.push("/profiles/view");
          window.location.reload();
      }
      else {
          console.log("Unknown error", response, status)
      }
      
    };

    return (
        <div className="add-profile-body">
            <div className="add-profiles-container">
                <div className="profiles-sub-container">
                    <h1 className="title">Add Profile</h1>
                    <p className="sub-title">Add a profile for another person watching Netflix</p>
                    
                    <hr className="line" />

                    {nameError && 
                    <p className="error-message text-danger small"> 
                    {nameError}
                    </p>}
                    
                    <div className="mt-4 mb-4">
                        <span><img className="default-image" src="https://ia801509.us.archive.org/20/items/profiles_202104/default.png"></img></span>
                        <div className="name-input ml-5"><input className="add-profile-input" placeholder="Name" type="text" {...nameProps}></input></div>
                    </div>

                    <hr className="line" />

                    <div className="profile-buttons mt-5">
                        <span className="continue-button px-4 py-2"><a onClick={handleSubmit}>CONTINUE</a></span>
                        <span className="cancel-button ml-3 px-4 py-2"><a>CANCEL</a></span>
                    </div>
                </div>
            </div>
        </div>
      );
}

export default AddProfile;
