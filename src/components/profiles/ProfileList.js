import { Card } from "./ProfileCard";
import "./card-list.styles.css";
import profileApi from "../../api/profile";
import { useEffect } from "react";
import { useState } from "react";

function ProfileList() {

  const [profileList, setProfileList] = useState([])
  
  useEffect(async () => {

    const profileData = await profileApi.getProfiles();
    console.log("1-Profiles from ProfileList component", profileData)
    setProfileList(profileData)

  }, []);

  return (
    <div className="card-list">
      {profileList.map((profile) => (
        <Card key={profile.id} profile={profile} />
      ))}
    </div>
  );
};

export default ProfileList;
