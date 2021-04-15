import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./m-card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faThumbsUp,
  faThumbsDown,
  faPlusCircle,
  faChevronCircleDown,
} from "@fortawesome/free-solid-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Mcard({ movie, url, like }) {
  const History = useHistory();
  const [updated, setUpdate] = useState("");
  const [show, setshow] = useState("");

  const storedToken = localStorage.getItem("token");

  function addlikes(event, id) {
    event.stopPropagation();
    var formdata = new FormData();
    formdata.append("id", id);
    formdata.append("type", movie.type);
    formdata.append("rate", "1");

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
      headers: {
        token: "Token " + storedToken,
      },
    };

    fetch("http://localhost:8000/resources/likes", requestOptions)
      .then((response) => response.json())
      .then((result) => setUpdate("like"))
      .catch((error) => console.log("error", error));
  }

  function adddislikes(event, id) {
    event.stopPropagation();
    var formdata = new FormData();
    formdata.append("id", id);
    formdata.append("type", movie.type);
    formdata.append("rate", "-1");

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + storedToken,
      },
    };

    fetch("http://localhost:8000/resources/likes", requestOptions)
      .then((response) => response.json())
      .then((result) => setUpdate("dislike"))
      .catch((error) => console.log("error", error));
  }

  // function increaseView(id) {
  //   console.log(window.location.href.split("/"));
  //   var formdata = new FormData();
  //   formdata.append("id", id);
  //   formdata.append("type", movie.type);

  //   var requestOptions = {
  //     method: "POST",
  //     body: formdata,
  //     redirect: "follow",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: "Token " + storedToken,
  //     },
  //   };

  function addtolist(event) {
    event.stopPropagation();

    // var formdata = new FormData();

    let profileId = localStorage.getItem("profileId");

    // formdata.append("profile", Number(profileId));
    // formdata.append("movie", movie.id);

    const listData = {
      profile: Number(profileId),
      movie: movie.id,
    };

    var requestOptions = {
      method: "POST",
      body: JSON.stringify(listData),
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + storedToken,
      },
    };

    fetch("http://localhost:8000/mylist/", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  function handleCardClick(id, type) {
    localStorage.setItem("id", id);
    localStorage.setItem("type", type);
    History.push("/moreInfo");
  }

  return (
    <div
      onClick={(event) => {
        event.stopPropagation();
        // increaseView(movie.id);
        handleCardClick(movie.id, movie.type);
      }}
    >
      <div className="poster-container indicator">
        <div className="big-poster">
          <div className="big-poster-img">
            <img
              src={
                typeof movie.movie == "object" ? movie.movie.image : movie.image
              }
            />
            <div class={"video-container"}>
              <video width="100%" height="100%" poster="./images/img1.jpg">
                <source src="./videoP.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="big-poster-details">
            <div>
              <Link onClick={(event) => addtolist(event)}>
                <FontAwesomeIcon icon={faPlusCircle} color={"white"} />
              </Link>

              <Link onClick={(event) => addlikes(event, movie.id)}>
                <FontAwesomeIcon
                  color={updated == "like" ? "blue" : "white"}
                  icon={faThumbsUp}
                />
              </Link>

              <Link onClick={(event) => adddislikes(event, movie.id)}>
                {" "}
                <FontAwesomeIcon
                  color={updated == "dislike" ? "blue" : "white"}
                  icon={faThumbsDown}
                />{" "}
              </Link>

              <Link
                onClick={(e) => {
                  e.stopPropagation();
                  // increaseView(movie.id);
                  localStorage.setItem("id", movie.id);
                  localStorage.setItem("type", movie.type);
                  History.push("moreInfo");
                }}
              >
                <FontAwesomeIcon icon={faChevronCircleDown} color={"white"} />
              </Link>
            </div>
            <div>
              <p>
                {typeof movie.movie == "object" ? movie.movie.name : movie.name}
              </p>
              <p>
                +{typeof movie.movie == "object" ? movie.movie.age : movie.age}
              </p>
              <p>
                {typeof movie.movie == "object" ? movie.movie.time : movie.time}
                h
              </p>
            </div>
            <div>
              <ul>
                {typeof movie.movie == "object"
                  ? movie.movie.moods.map((val, i) =>
                      i < 3 ? <li>{val.mood}</li> : ""
                    )
                  : movie.moods.map((val, i) =>
                      i < 3 ? <li>{val.mood}</li> : ""
                    )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Mcard;
