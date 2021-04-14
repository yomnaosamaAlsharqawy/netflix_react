import React,{useState,useEffect} from 'react'
import './SeasonSection.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlay,faCoffee,faCaretDown } from '@fortawesome/free-solid-svg-icons'
// import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'; 
import Episodecomponent from '../episodecomponent/Episodecomponent';

function SeasonSection(props) {
    const [data, setData] = useState([])
    const [query, setQuery] = useState({
        'season':1,
        'tv_show':props.seasons.id
    })
    useEffect(() => {
        const fetchEpisode = () =>
          fetch("http://localhost:8000/resources/episodes?season="+query.season+"&tv_show="+query.tv_show)
            .then(res => res.json())
            .then((result) => { 
                setData(result)
            })
            fetchEpisode()
      }, [query])
    
    
    
    return (
        <div>
        <div className="d-flex w-100 justify-content-between">
            <div className="">
                <h2 className='ml-3'>Episodes</h2>
            </div>
            <button className="btn btn-dark btn-lg dropdown-toggle season_menue mr-5" role="button" id="dropdownMenuLink"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                Seasons
            </button>
            <div className="dropdown-menu season_menue1" aria-labelledby="dropdownMenuLink">
            {props.seasons.seasons.map(record => (
                <a className="dropdown-item" value={record} onClick={() => setQuery(record)}><span>Season {record.season}</span></a>

                ))}

            </div>
        </div>
        <Episodecomponent data={data}/>
        </div>
    )
}

export default SeasonSection
