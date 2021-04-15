import React, { useState, useEffect } from "react";
import SeasonSection from "../seasoncomponent/SeasonSection";
import SuggestionCard from "../suggestions_card/SuggestionCard";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

function MoreInfo() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  let id = localStorage.getItem("id");
  let type = localStorage.getItem("type");

  const storedToken = localStorage.getItem("token");

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + storedToken,
      },
    };

    // fetch("http://localhost:8000/resources/moreinfo?id="+id+"&type="+type)
    fetch(
      "http://localhost:8000/resources/moreinfo?id=" + id + "&type=" + type,
      requestOptions
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error:{error.massage}</div>;
  } else {
    // check if array of data is empty or not
    if (data.length == 0) {
      return (
        <div>
          <h1>this movie will be published soon</h1>
        </div>
      );
    } else {
      return (
        <div
          style={{
            minHeight: "100%",
            backgroundColor: "#181818",
            color: "white",
            margin: "0",
            padding: "0",
          }}
        >
          <div style={{ position: "relative" }}>
            <video
              muted
              style={{ width: "100%" }}
              autoPlay="true"
              src={data.trailer}
              loop={true}
            />
            <div style={{ position: "absolute", bottom: "100px", left: "100px" }}>
            <div
              style={{
                fontSize: "8em",
                fontWeight: "bolder",
                marginBottom: "0",
                lineHeight: "0.9em",
                width: "60%",
                marginTop: "2em",
              }}
            >{data.name}</div>
            <div className="d-flex mt-3">
            <Link
              to="/video"
              className="play"
            >
              <div className="heroButton1">
                <FontAwesomeIcon icon={faPlay} /> &nbsp; Play
              </div>
            </Link>
            </div>
            </div>
          </div>
          <div className="container-fluid px-5 mt-5">
            <div
              className="row justify-content-between"
              style={{ marginLeft: "0px" }}
            >
              <div className="col-lg-5 col-md-5 col-sm-5">
                <span
                  style={{ display: "inline", color: "#44c965" }}
                  id="match"
                >
                  95% Match
                </span>
                <span> </span>
                <span style={{ display: "inline" }}>
                  {data.year}
                </span>
                <span> </span>
                <a
                  href="#bottom"
                  className="btn btn-sm rounded border-light"
                  style={{ display: "inline", color: "white" }}
                >
                  <span>+{data.age}</span>
                </a>
                <span> </span>
                <span style={{ display: "inline" }}>{data.time}</span>

                <h2>{data.name}</h2>
                <p>{data.description}</p>
              </div>
              <div className="col-lg-3 col-sm-5 col-md-5 info">
                <span>cast:</span>
                <span className="moreinfo">
                  {data.casts.map((val) => " " + val.name + ", ")}
                </span>
                <br></br>

                <span>Genres:</span>
                <span className="moreinfo">
                  {data.genres.map((val) => " " + val.genre + ", ")}
                </span>
                <br></br>

                <span>This Show is:</span>
                <span className="moreinfo">
                  {data.moods.map((val) => " " + val.mood + ", ")}
                </span>
                <br></br>
              </div>
            </div>
            {data.seasons ? <SeasonSection seasons={data} /> : <div></div>}
            <div>
              <br></br>
            </div>
            {/* suggestions_card (More like this)*/}
            <div>
              <SuggestionCard resource={data} />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default MoreInfo;
