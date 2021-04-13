import "./ManageProfiles.css";
import ProfileList from "../../../components/profiles/ProfileList";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function ManageProfile() {
  const History = useHistory()
  const [editMode, seteditMode] = useState(true);

  const handleDone = () => {
    if (editMode) {
      seteditMode(false);
      History.push("/profiles/view")
      window.location.reload();
    }
  };

  return (
    <div className="manage-profile-body">
      <div className="manage-profiles-container">
        <h1 className="question">Manage Profiles:</h1>
        <ProfileList
          className="profile-list"
          editMode={editMode}
          seteditMode={seteditMode}
        />
        <span className="done-button px-4 py-2">
          <a onClick={handleDone}>DONE</a>
        </span>
      </div>
    </div>
  );
}

export default ManageProfile;
