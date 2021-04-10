import { useState } from "react";
import './ProfileCard.css'

export const ProfileCard = (props) => {

  return (
    <div>
      
      <div className="profile-card">
        <a><img className="profile-image" alt="profile" src={props.profile.image_url} /></a>
        <div className="profile-details">
          <div className="profile-name mt-2">{props.profile.name}</div>
          <div className="profile-lock fa fa-lock mt-2"></div>
        </div>
      </div>

    </div>
  );
};
