import { useState, useEffect } from "react";
import "./slider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import Mcard from "../m-card/m-card";
import { Card } from "../card/card.component";

function Slider({ movie, title }) {
  let count = 0;
  let offset = -(movie.length - 5) * 250;

  function slidetoleft(e) {
    if (count != offset) {
      count -= 750;
      console.log(e.target.parentNode.previousElementSibling);
      let x = e.target.parentNode.previousElementSibling;
      // x.style.transform = `translateX(${count}px)`
      x.style.marginLeft = `${count}px`;
      console.log(count);
      console.log(offset);
    }
  }

  function slidetoright(e) {
    if (count < 0) {
      count += 750;
      console.log(e.target.parentNode.previousElementSibling);
      let x = e.target.parentNode.previousElementSibling;
      //  x.style.transform = `translateX(${count}px)`
      x.style.marginLeft = `${count}px`;
      console.log(count);
    }
  }

  function hidearrow1(e) {
    console.log(e.target.firstChild);
    e.target.firstChild.style.display = "none";
  }

  function showarrow1(e) {
    console.log(e.target.firstChild);
    e.target.firstChild.style.display = "block";
  }

  function hidearrow2(e) {
    console.log(e.target.firstChild);
    e.target.firstChild.style.display = "none";
  }

  function showarrow2(e) {
    console.log(e.target.firstChild);
    e.target.firstChild.style.display = "block";
  }

  return (
    <div className="main-div">
      <span className="mediatype">{title}</span>
      <div className="center-div" id="centerdiv">
        {movie.map((val) => (
          <div className="c">
            <Mcard
              movie={val}
              url="https://occ-0-4609-784.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdxTC0_BQ1EG1Z7dw8m0kqy33fyfKZOg-samS-5nW7o7LaDZb-0Nxl7dePzGdV46ZLV1nHmDX5RMKnPQO7al1YgqSbY.webp?r=538"
            />
          </div>
        ))}
      </div>
      <div className="control">
        <div
          onClick={slidetoright}
          onMouseEnter={hidearrow1}
          onMouseLeave={showarrow1}
          className={movie.length < 8 ? `hide-button` : `show-button`}
          id="back"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <div
          onClick={slidetoleft}
          onMouseEnter={hidearrow2}
          onMouseLeave={showarrow2}
          className={movie.length < 8 ? `hide-button` : `show-button`}
          id="forward"
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
    </div>
  );
}

export default Slider;
