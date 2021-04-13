import "./ProfileList.css";
import profileApi from "../../api/profile";
import { ProfileCard } from "./ProfileCard";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function ProfileList(props) {
  const History = useHistory();
  const [profileList, setProfileList] = useState([]);

  useEffect(async () => {
    const profileData = await profileApi.getProfiles();
    setProfileList(profileData);
  }, []);

  const handleProfileClick = (profileId) => {
    if (props.editMode) {
      localStorage.setItem("profileId", profileId);
      // handle routing
      History.push("/profiles/edit");
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
        />
      ))}
    </div>
  );
}

export default ProfileList;
