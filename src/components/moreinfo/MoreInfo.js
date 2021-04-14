import React, {useState, useEffect} from 'react'
import SeasonSection from '../seasoncomponent/SeasonSection';
import SuggestionCard from '../suggestions_card/SuggestionCard';
import './MoreInfo.css'


function MoreInfo() {
    const [data, setData]= useState([])
    const [error, setError] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    let id = localStorage.getItem("id")
    let type = localStorage.getItem("type")
    useEffect(()=>{
        // fetch("http://localhost:8000/resources/moreinfo?id="+id+"&type="+type)
        fetch("http://localhost:8000/resources/moreinfo?id=1&type=tv_show")
        .then(res=>res.json())
        .then((result)=>{
            setIsLoaded(true);
            setData(result);
        },
        (error)=>{
            setIsLoaded(true);
            setError(error)
        }) 
    },[])
    
    if(error){
        return<div>Error:{error.massage}</div>
    }else{
        // check if array of data is empty or not
        if(data.length==0){
            return<div><h1>
                this movie will be published soon
                </h1></div>
        }
        else{
            return(<div style={{backgroundColor:'#181818'}}>
                <div>
                    <div>
                        <video id="video" autoPlay="true" src={data.trailer} loop={true}/>
                     </div>
                    {/* <div className="heroButtonContainer">

                       <Link to="/video" className="play"><div className='heroButton1'> <FontAwesomeIcon icon={faPlay} /> &nbsp; Play</div></Link>

                       <Link to="/video" className="moreInfo play" > <div className='heroButton2'> <FontAwesomeIcon icon={faInfoCircle}/> &nbsp; More Info</div></Link>

                    </div> */}

                </div>

                <div className="row justify-content-between" style={{marginLeft:'0px'}}>
            <div className="col-lg-5 col-md-5 col-sm-5">
                <span style={{display: 'inline'}} id="match">95% Match</span><span>  </span>
                <span style={{display: 'inline'}}>{data.year.slice(0, 4)}</span><span>  </span>
                <a href="#bottom" className="btn btn-sm rounded border-light"
                    style={{display: 'inline',color:'white'}}><span>+{data.age}</span></a><span>  </span>
                <span style={{display: 'inline'}}>{data.time}</span>

                <h2>{data.name}</h2>
                <p>{data.description}</p>

            </div>
            <div className="col-lg-3 col-sm-5 col-md-5 info">
                <span>cast:</span>
                <span className="moreinfo">{data.casts.map(val=>' '+val.name+', ')}</span><br></br>


                <span>Genres:</span>
                <span className="moreinfo">{data.genres.map(val=>' '+val.genre+', ')}</span><br></br>

                <span>This Show is:</span>
                <span className="moreinfo">{data.moods.map(val=>' '+val.mood+', ')}</span><br></br>
            </div>
        </div>
        {data.seasons ?<SeasonSection seasons={data}/>:<div></div> }
        <div>
            
            <br></br>
        </div>
        {/* suggestions_card (More like this)*/}
        <div>
            <SuggestionCard resource={data}/>
        </div>


            </div>
            );}
    }
}

export default MoreInfo
