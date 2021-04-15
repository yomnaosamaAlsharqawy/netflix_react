import "./ProfileList.css";
import profileApi from "../../api/profile";
import { ProfileCard } from "./ProfileCard";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

// const storage = localStorage.getItem("profiles_list")
// const localStorageProfiles = storage ? JSON.parse(storage) : null;


function ProfileList(props) {

  const History = useHistory();
  const [profileList, setProfileList] = useState([]);
  // const [profileHasLock, setprofileHasLock] = useState(false)

  useEffect(async () => {
    const profileData = await profileApi.getProfiles();
    setProfileList(profileData);
  }, []);

  const handleProfileClick = async (profileId) => {
    
    if (props.editMode) {
      localStorage.setItem("profileId", profileId);
      const [profileObj, status] = await profileApi.getOneProfile()
      
      if (status === 404){
        console.log("profile not found")
      }
      else if (status === 200) {
        localStorage.setItem("profile", JSON.stringify(profileObj))
      }
      else {
        console.log("Unknown error")
      }

      // handle routing
      History.push(`/profiles/edit`);
      window.location.reload();
    } else {
      // Route to Profile Browse Page               <====== Resources Gate
      localStorage.setItem("profileId", profileId);
      const [profileObj, status] = await profileApi.getOneProfile()
      
      if (status === 404){
        console.log("profile not found")
      }
      else if (status === 200) {
        localStorage.setItem("profile", JSON.stringify(profileObj))
      }
      else {
        console.log("Unknown error")
      }
      History.push('/home')
    }
  };

  return (
    <div className="profile-list">
      {profileList.map((profile) => (
        <ProfileCard
          handleProfileClick={handleProfileClick}
          id={profile.id}
          key={profile.id}
          profile={profile}
          editMode={props.editMode}
          profileHasLock={profile.pin_code == "" ? false : true}
        />
      ))}
    </div>
  );
}

export default ProfileList;
