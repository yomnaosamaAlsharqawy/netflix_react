import "./ProfileList.css";
import profileApi from "../../api/profile";
import { ProfileCard } from "./ProfileCard";
import { useEffect } from "react";
import { useState } from "react";

function ProfileList() {
  const [profileList, setProfileList] = useState([]);

  useEffect(async () => {
    const profileData = await profileApi.getProfiles();
    console.log("1-Profiles from ProfileList component", profileData);
    setProfileList(profileData);
  }, []);

  // const handleProfileClick = (event) => {
  //   const profileId = event.target.dataset.id  // set this to context

  //   // handle routing
  //   return false
  // }

  return (
    <div className="profile-list">
      {profileList.map((profile) => (
        <ProfileCard
          //onClick={handleProfileClick}
          data-id={profile.id}
          key={profile.id}
          profile={profile}
        />
      ))}
    </div>
  );
}

export default ProfileList;
