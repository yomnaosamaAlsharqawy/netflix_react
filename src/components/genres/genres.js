import React,{useState,useEffect} from 'react'
import './genres.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay,faCoffee,faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'; 

function  Genres (props){

    const [type,setType] = useState("") 
    const [genres,setGenre] = useState([]) 

    const storedToken = localStorage.getItem("token")

    useEffect(()=>{
        setType(props.type)
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token '+storedToken, 
              }
          };
          
          fetch("http://localhost:8000/resources/genres", requestOptions)
            .then(response => response.json())
            .then(result => setGenre(result))
            .catch(error => console.log('error', error));
    },[])

    function displaylistbody(){
       $('.list-body').toggleClass('s')
    }

    return (
        <div className="genres_container row">
            <div className="s-t">
            <div className="side-title" >{type}</div>
            </div>
            <div className="genres">
                <div className="list-genres" onClick={displaylistbody}>Genres <span className="drop-icon"> 
                    <FontAwesomeIcon icon={faCaretDown} /></span>
                </div> 
                <div className="list-body row">
                        {genres.map((val,index)=><a onClick={props.filter} defaultValue={val.genre} key={index} className="col-sm-4">{val.genre}</a>)}
                        
                    </div>
            </div>
        </div>
    )            
};

export default Genres