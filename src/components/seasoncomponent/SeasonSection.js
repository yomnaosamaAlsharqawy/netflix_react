import React, { useState, useEffect } from "react";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlay,faCoffee,faCaretDown } from '@fortawesome/free-solid-svg-icons'
// import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import $ from "jquery";
import Episodecomponent from "../episodecomponent/Episodecomponent";
import {DropdownButton, ButtonGroup, Dropdown} from 'react-bootstrap'

function SeasonSection(props) {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState({
    season: 1,
    tv_show: props.seasons.id,
  });

  const storedToken = localStorage.getItem("token");

  useEffect(() => {
    const fetchEpisode = () => {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token " + storedToken,
        },
      };

      fetch(
        "http://localhost:8000/resources/episodes?season=" +
          query.season +
          "&tv_show=" +
          query.tv_show,
        requestOptions
      )
        .then((res) => res.json())
        .then(setData)
        .catch(console.log);
    };
    fetchEpisode();
  }, [query]);

  return (
    <div>
      <div className="d-flex w-100 justify-content-between">
        <div className="">
          <h2 className="ml-3">Episodes</h2>
        </div>


        <DropdownButton
          as={ButtonGroup}
          key="secondary"
          id={`dropdown-variants-secondary`}
          variant='secondary'
          title="select Season"
        >
            {props.seasons.seasons.map((record) => 
            <Dropdown.Item eventKey="1"  onClick={() => setQuery(record)}>Season {record.season}</Dropdown.Item>)  
            }
        </DropdownButton>


      </div>
      <div className="mt-3">
      <Episodecomponent data={data} />
      </div>
    </div>
  );
}

export default SeasonSection;
