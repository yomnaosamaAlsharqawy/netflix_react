import './ViewProfiles.css'
import ProfileList from '../../../components/profiles/ProfileList'

function ViewProfiles (){

    return (
        <div className="profile-body">
          <div className="view-profiles-container">
            <h1 className="question">Who's watching?</h1>
            <ProfileList className="profile-list" />
            <div className="manage-button px-3 py-1"><a>MANAGE PROFILES</a></div>
          </div>
        </div>
      );
}

export default ViewProfiles;
