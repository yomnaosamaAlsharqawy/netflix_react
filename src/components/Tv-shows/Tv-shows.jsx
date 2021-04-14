import {useState,useEffect} from 'react'
import './tv-shows.css'
import Main from '../main/main.component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import Generes from '../genres/genres.js'
import {CardList} from '../card-list/card-list.component'
import { data } from 'jquery'
import Slider from '../slider/slider'
import Footer from '../footer/footer'

function TvShows(){

    const [heroHovered, setheroHovered] = useState(false)
    const [serieList1, setserieList1] = useState([])
    const [serieList2, setserieList2] = useState([])
    const [serieList3, setserieList3] = useState([])
    const [serieList4, setserieList4] = useState([])
    const [seriegenresfilter, setseriegenresfilter] = useState([])
    const [seriegenrestile, setseriegenrestitle] = useState([])
    const [flag, setflag] = useState(true)

    const storedToken = localStorage.getItem("token")
    
    const handleHeroHover = () => {
       setTimeout(() => {
        setheroHovered(true)
       }, 2000); 
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
    
    function genre_filter(e){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token '+storedToken, 
              }
          };
          
          fetch(`http://localhost:8000/resources/filters?type=tvshow&option=genre&value=${e.target.text}`, requestOptions)
            .then(response => response.json())
            .then(result => setseriegenresfilter(result))
            .catch(error => console.log('error', error));
            console.log(e.target.text)
            setseriegenrestitle(e.target.text)
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
          
          fetch("http://localhost:8000/resources/tv_show", requestOptions)
            .then(response => response.json())
            .then(result =>setserieList1(result))
            .catch(error => console.log('error', error));
    
            fetch(`http://localhost:8000/resources/filters?type=tvshow&option=mood&value=violent`, requestOptions)
            .then(response => response.json())
            .then(result => setserieList2(result))
            .catch(error => console.log('error', error));
    
            fetch(`http://localhost:8000/resources/filters?type=tvshow&option=genre&value=romance`, requestOptions)
            .then(response => response.json())
            .then(result => setserieList3(result))
            .catch(error => console.log('error', error));
    
            fetch(`http://localhost:8000/resources/filters?type=tvshow&option=genre&value=action`, requestOptions)
            .then(response => response.json())
            .then(result => setserieList4(result))
            .catch(error => console.log('error', error));
        }, [])
    
        return (
            <div className="tvshows-body-container">
            <Main search = {search} />
            <Generes type="Tv shows"  filter = {genre_filter}/>
            <div className={flag? `hide-tvshow-container` :`show-tvshow-container`}>
        <Slider movie = {seriegenresfilter} title={seriegenrestile} />
        </div>
        <div className={flag? `show-tvshow-container` :`hide-tvshow-container`}>
            <Slider movie = {serieList1} title="Tvshows" />
            <Slider movie = {serieList2} title="violent" />
            <Slider movie = {serieList3} title="romance" />
            <Slider movie = {serieList4} title="action" />
        </div>
            <Footer/>
        </div>
    )
}
export default TvShows