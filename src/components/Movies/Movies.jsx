import {useState,useEffect} from 'react'
import './movies.css'
import Main from '../main/main.component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import Generes from '../genres/genres.js'
import Slider from '../slider/slider'
import Footer from '../footer/footer'
function Movies(){
    
const [heroHovered, setheroHovered] = useState(false)
const [movieList1, setmovieList1] = useState([])
const [movieList2, setmovieList2] = useState([])
const [movieList3, setmovieList3] = useState([])
const [movieList4, setmovieList4] = useState([])
const [seriegenresfilter, setseriegenresfilter] = useState([])
const [seriegenrestile, setseriegenrestitle] = useState([])
const [flag, setflag] = useState(true)

const storedToken = localStorage.getItem("token")

const handleHeroHover = () => {
   setTimeout(() => {
    setheroHovered(true)
   }, 2000); 
}

function genre_filter(e){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token '+storedToken, 
          }
      };
      
      fetch(`http://localhost:8000/resources/filters?type=movie&option=genre&value=${e.target.text}`, requestOptions)
        .then(response => response.json())
        .then(result => setseriegenresfilter(result))
        .catch(error => console.log('error', error));
        console.log(e.target.text)
        setseriegenrestitle(e.target.text)
        setflag(false)        
}


function search(e){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token '+storedToken, 
          }
      };
      
      fetch(`http://localhost:8000/resources/search?name=${e.target.value}`, requestOptions)
        .then(response => response.json())
        .then(result =>setseriegenresfilter(result))
        .catch(error => console.log('error', error));

        setflag(false)
}

const handleHeroLeave = () => {
    setheroHovered(false)
}

useEffect( async () => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token '+storedToken, 
          }
          };
      
      fetch("http://localhost:8000/resources/movie", requestOptions)
        .then(response => response.json())
        .then(result =>setmovieList1(result))
        .catch(error => console.log('error', error));

        fetch(`http://localhost:8000/resources/filters?type=movie&option=mood&value=violent`, requestOptions)
        .then(response => response.json())
        .then(result => setmovieList2(result))
        .catch(error => console.log('error', error));

        fetch(`http://localhost:8000/resources/filters?type=movie&option=genre&value=romance`, requestOptions)
        .then(response => response.json())
        .then(result => setmovieList3(result))
        .catch(error => console.log('error', error));

        fetch(`http://localhost:8000/resources/filters?type=movie&option=genre&value=horror`, requestOptions)
        .then(response => response.json())
        .then(result => setmovieList4(result))
        .catch(error => console.log('error', error));
    }, [])

    return (
        <div className="movies-body-container">
            <Main search = {search}  />  
            <Generes type="Movies"  filter = {genre_filter}/>
        <div className={flag? `hide-movies-container` :`show-movies-container`}>
        <Slider movie = {seriegenresfilter} title={seriegenrestile}  />
        </div>
        <div className={flag? `show-movies-container` :`hide-movies-container`}>
            <Slider movie = {movieList1} title="Movies" />
            <Slider movie = {movieList2} title="violent" />
            <Slider movie = {movieList3} title="romance" />
            <Slider movie = {movieList4} title="horror" />
        </div>
        <Footer/>        
        </div>        
)
}

export default Movies