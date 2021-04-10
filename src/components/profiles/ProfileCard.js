import { useState } from "react";
import './card.styles.css'

export const Card = (props) => {

  console.log(props)

  return (
    <div>
      <img className="cardimg" alt="profile" src={props.profile.image_url} />
      <h2 className="secondRowInfo">{props.profile.name}</h2>
    </div>
  );
};
