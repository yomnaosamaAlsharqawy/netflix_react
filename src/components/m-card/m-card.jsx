import {useState,useEffect} from 'react'
import './m-card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay,faThumbsUp,faThumbsDown,faPlusCircle,faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';


function Mcard({movie,url,like}){

  const [updated,setUpdate] = useState("")
  const [show,setshow] = useState("")

  function addlikes(id){
    var formdata = new FormData();
    formdata.append("id",id);
    formdata.append("type", movie.type);
    formdata.append("rate", "1");

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

  fetch("http://localhost:8000/resources/likes", requestOptions)
    .then(response => response.json())
    .then(result => setUpdate("like"))
    .catch(error => console.log('error', error));
  }


  function adddislikes(id){
    var formdata = new FormData();
    formdata.append("id",id);
    formdata.append("type", movie.type);
    formdata.append("rate", "-1");

      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };

      fetch("http://localhost:8000/resources/likes", requestOptions)
        .then(response => response.json())
        .then(result => setUpdate("dislike"))
        .catch(error => console.log('error', error));
      }

  function increaseView (id){

    console.log(window.location.href.split('/'))
    var formdata = new FormData();
    formdata.append("id", id);
    formdata.append("type", movie.type);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
  };

  fetch("http://localhost:8000/resources/views", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    }

    function storeData(){
      localStorage.id = movie.id
      localStorage.type = movie.type
    }

    function storeVideoData (){
        localStorage.url = movie.id;
    }

  function addtolist(){
    var formdata = new FormData();
    formdata.append("profile", "9");
    formdata.append(movie.type, movie.id);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    fetch("http://localhost:8000/mylist/", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

    return(
      <Link to={window.innerWidth <= 1024 ? "/moreInfo" : "/video"} onClick={()=>increaseView(movie.id)} onClick={storeVideoData}>
        <div  className="poster-container indicator">
                <div className="big-poster">
                  <div className="big-poster-img">
                    <img src={movie.image} />
                    <div class={"video-container"}>
                      <video width="100%" height="100%" poster="./images/img1.jpg">
                        <source src="./videoP.mp4" type="video/mp4"/>
                    </video>
                    </div>
                  </div>
                  <div className="big-poster-details">
                    <div >
                      <Link to="/video">  <FontAwesomeIcon icon={faPlay} /></Link>
                        
                      <Link onClick={addtolist}><FontAwesomeIcon icon={faPlusCircle} /></Link>
    
                      <Link onClick={()=>addlikes(movie.id)} ><FontAwesomeIcon color={updated=="like"?"blue":"white"} icon={faThumbsUp} /></Link> 
                    
                      <Link  onClick={()=>adddislikes(movie.id)}>  <FontAwesomeIcon color={updated=="dislike"?"blue":"white"}  icon={faThumbsDown} /> </Link>
                        
                      <Link to="/moreInfo" onClick={storeData}><FontAwesomeIcon icon={faChevronCircleDown} /></Link>
                    </div>
                    <div>
                      <p>{movie.name}</p>
                      <p>+{movie.age}</p>
                      <p>{movie.time}h</p>
                      </div>
                    <div>
                      <ul>
                      {movie.moods.map((val,i)=> i<3 ? <li>{val.mood}</li>:"")}
                      </ul>        
                    </div>
                  </div> 
                  </div>
                  </div>
                  </Link>
    );
} 
export default Mcard