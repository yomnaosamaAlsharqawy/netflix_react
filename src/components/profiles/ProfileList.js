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
      const profileObj = await profileApi.getOneProfile()
      localStorage.setItem("profile", JSON.stringify(profileObj))

      // handle routing
      History.push(`/profiles/edit`);
      window.location.reload();
    } else {
      // Route to Profile Browse Page               <====== Resources Gate
      console.log('get me to my movies')
      // History.push('/browse')
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
