import { useState } from "react";
import './ProfileCard.css'

export const ProfileCard = ({profile, editMode}) => {

  return (
    <div>
      
      <div className="profile-card">
        
        <div className="component-container">
          <a><img 
          className={`${editMode && 'edit-image'} profile-image`}
          src={profile.image_url}/>
          </a>
          <div><div className={`${editMode? 'edit-active' : 'edit-disabled'} fa fa-pencil-square-o`}></div></div>
        </div>

        <div className="profile-details">
          <div className="profile-name mt-2">{profile.name}</div>
          <div className="profile-lock fa fa-lock mt-2"></div>
        </div>
      </div>

    </div>
  );
};