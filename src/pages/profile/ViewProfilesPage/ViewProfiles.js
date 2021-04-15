import "./ViewProfiles.css";
import ProfileList from "../../../components/profiles/ProfileList";
import { useHistory } from "react-router-dom";
import { useEffect } from 'react';

function ViewProfiles() {
  const History = useHistory();

  return (
    <div className="view-profiles-body">
      <div className="view-profiles-container">
        <h1 className="question">Who's watching?</h1>
        <ProfileList className="profile-list" />
        <div
          className="manage-button px-3 py-1"
          onClick={() => {
            History.push("/profiles/manage");
          }}
        >
          MANAGE PROFILES
        </div>
      </div>
    </div>
  );
}

export default ViewProfiles;
