import './ManageProfiles.css'
import ProfileList from '../../components/profiles/ProfileList'
import { useState } from 'react'

function ManageProfile (){

    const [editMode, seteditMode] = useState(true)

    const handleDone = () => {
      seteditMode(false)
    }

    return (
        <div>
          <div className="profiles-container mt-5">
            <h1 className="question">Manage Profiles:</h1>
            <ProfileList className="profile-list" editMode={editMode} seteditMode={seteditMode}/>
            <span className="done-button px-4 py-2"><a onClick={handleDone}>DONE</a></span>
          </div>
        </div>
      );
}

export default ManageProfile;
