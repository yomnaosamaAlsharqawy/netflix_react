import {useState,useEffect} from 'react'
import './Home.css'
import Main from '../main/main.component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import Generes from '../genres/genres.js'
import { data } from 'jquery'
import Slider from '../slider/slider'
import { Link } from 'react-router-dom'
import Footer from '../footer/footer'

function Home(){

    const [heroHovered, setheroHovered] = useState(false)
    const [serieList1, setserieList1] = useState([])
    const [serieList2, setserieList2] = useState([])
    const [serieList3, setserieList3] = useState([])
    const [serieList4, setserieList4] = useState([])
    const [serieList5, setserieList5] = useState([])
    const [seriegenresfilter, setseriegenresfilter] = useState([])
    const [seriegenrestile, setseriegenrestitle] = useState([])
    const [flag, setflag] = useState(true)

    const storedToken = localStorage.getItem("token")
    
    const handleHeroHover = () => {
       setTimeout(() => {
        setheroHovered(true)
       }, 2000); 
    }
    
    
    const handleHeroLeave = () => {
        setheroHovered(false)
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


    useEffect(() => {

        const getData = () => {

            var requestOptions = {
                method: 'GET',
                redirect: 'follow', 
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token '+storedToken, 
                  }
            };
              
            fetch("http://localhost:8000/resources/tv_show", requestOptions)
            .then(response => response.json())
            .then(result =>setserieList1(result))
            .catch(error => console.log('error', error));
    
            fetch(`http://localhost:8000/homepage/popular`, requestOptions)
            .then(response => response.json())
            .then(result => setserieList2(result))
            .catch(error => console.log('error', error));
    
            fetch(`http://localhost:8000/resources/movie`, requestOptions)
            .then(response => response.json())
            .then(result => setserieList3(result))
            .catch(error => console.log('error', error));
    
            fetch(`http://localhost:8000/homepage/generator?genre=romance`, requestOptions)
            .then(response => response.json())
            .then(result => setserieList4(result))
            .catch(error => console.log('error', error));

            fetch(`http://localhost:8000/homepage/generator?genre=action`, requestOptions)
            .then(response => response.json())
            .then(result => setserieList5(result))
            .catch(error => console.log('error', error));
            }

            getData();

        }, [])
    
        return (
            <div className="home-body-container">
            <div onMouseEnter={handleHeroHover} onMouseLeave={handleHeroLeave} className={`bigPosterContainer wallpaperImg` }>
                <Main search={search} /> 
                <div className="heroContent">
                    <div className="movieTitle text-white"><p>Joker</p></div>
                    <div className="heroParagraph text-white">
                        <p>In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society.</p>
                    </div>
                    <div className="heroButtonContainer">
                       <Link to="/video" className="play"><div className='heroButton1' onClick={()=>{localStorage.setItem("id", 11);localStorage.setItem("type", "movie")}}> <FontAwesomeIcon icon={faPlay} /> &nbsp; Play</div></Link>
                       <Link to="/moreinfo" className="moreInfo play" > <div className='heroButton2' onClick={()=>{localStorage.setItem("id", 11);localStorage.setItem("type", "movie")}} > <FontAwesomeIcon icon={faInfoCircle}/> &nbsp; More Info</div></Link>
                    </div>
                </div>
            </div>
            <div className={flag? `hide-home-container` :`show-home-container`}>
        <Slider movie = {seriegenresfilter} title={seriegenrestile} />
        </div>
        <div className={flag? `show-home-container` :`hide-home-container`}>
            <Slider movie = {serieList2} title="Popular" />
            <Slider movie = {serieList4} title="Romance Movies && Tv-shows" />
            <Slider movie = {serieList3} title="Movies" />
            <Slider movie = {serieList1} title="Tvshows" />
            <Slider movie = {serieList5} title="Action Movies && Tv-shows" />
        </div>  
        <Footer/>
        </div>
    )
}
export default Home