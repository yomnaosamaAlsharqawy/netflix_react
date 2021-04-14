import React, {useState, useEffect} from 'react'

function SuggestionCard(props) {
    const [data, setData]= useState([])
    const [error, setError] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(()=>{
        fetch("http://localhost:8000/resources/suggestion?type="+props.resource.type+"&id="+props.resource.id+"&genre="+props.resource.genres[0].genre)
        .then(res=>res.json())
        .then((result)=>{
            setIsLoaded(true);
            setData(result);
            // console.log(result);
        },
        (error)=>{
            setIsLoaded(true);
            setError(error)
        }) 
    },[])
    return (
        <div>
            <h1 className='ml-3'>More Like This </h1>
        <div className="row">
                {data.map(record => (
                <a  href="#" className="mr-3 card d-flex list-group-item list-group-item-action c-bg-dark justify-content-start" style={{width: '18rem',backgroundColor:'#181818',display:'grid'}}>

                <img src={record.image} className="card-img-top" alt="..." style={{height:'150px'}}/>

                <div className="card-body">

                <span style={{display: 'inline'}} id="match">95% Match</span><span>  </span>
                <span style={{display: 'inline'}}>{record.year.slice(0, 4)}</span><span>  </span>
                <a href="#bottom" className="btn btn-sm rounded border-light"
                    style={{display: 'inline',color:'white'}}><span>+{record.age}</span></a><span>  </span>
                <span style={{display: 'inline'}}>{record.time}</span>

                    <h5 className="card-title">{record.name}</h5>
                    <p className="card-text">{record.description}</p>
                </div>
                </a>
                
                
                ))}
            </div>
            </div>
    )
}

export default SuggestionCard
