import {useState,useEffect} from 'react'
import Slider from '../slider/slider'
import Main from '../main/main.component'
import './MyList.css'

function MyList(){

    const [serieList1, setserieList1] = useState([])
    const [serieList2, setserieList2] = useState([])

    const profileId = localStorage.getItem("profileId")
    const storedToken = localStorage.getItem("token")
    
    useEffect( async () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Token '+storedToken, 
            }
          };
          
          fetch(`http://localhost:8000/mylist?id=${profileId}`, requestOptions)
            .then(response => response.json())
            .then(result => setserieList1(result))
            .catch(error => console.log('error', error));

            var requestOptions = {
                method: 'GET',
                redirect: 'follow',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Token '+storedToken, 
                }
              };
              

              fetch("http://localhost:8000/resources/top_ten_movies/spain", requestOptions)
                .then(response => response.json())
                .then(result => setserieList2(result))
                .catch(error => console.log('error', error));
        }, [])
    
        return (
          <div className="mylist-body-container">
            <Main />
             <Slider movie = {serieList1} title="My List" />
             <Slider movie = {serieList2} title="TopTen movies" />
        </div>
    )
}
export default MyList;