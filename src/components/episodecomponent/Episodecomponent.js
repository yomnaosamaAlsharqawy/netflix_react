import { data } from "jquery";
import React from "react";
import { Link, useHistory } from "react-router-dom";

function Episodecomponent(props) {
  const History = useHistory();
  return (
    <div className="list-group">
      {props.data.map((record) => (
        <div
          onClick={() => {
            localStorage.setItem("episode_id", record.id);
            localStorage.setItem("type", "tv_show");
            History.push("/video");
          }}
        >
          <div>
            <div
              style={{color: "white", backgroundColor: "#141414"}}
              className="d-flex align-items-center list-group-item list-group-item-action c-bg-dark justify-content-start shadow"
            >
              {/* <div className="h3 mr-4">{props.data.findIndex()}</div> */}
              <div className="btn-img-wrapper w-25">
                <img src={record.image} className="w-100" />
                {/* <i className="far fa-play-circle"></i> */}
              </div>
              <div className="w-100 ml-2">
                <div className="d-flex w-100 justify-content-between p-0">
                  <h5 className="mb-1">{record.name}</h5>
                  <small>{record.time}</small>
                </div>
                <p className="mb-1">{record.description}</p>
              </div>
            </div>

            <hr className="light w-100"></hr>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Episodecomponent;
