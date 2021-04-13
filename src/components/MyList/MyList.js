import {useState,useEffect} from 'react'
import Slider from '../slider/slider'
import Main from '../main/main.component'
import './MyList.css'

function MyList(){

    const [serieList1, setserieList1] = useState([])
    const [serieList2, setserieList2] = useState([])
    
    useEffect( async () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("http://localhost:8000/mylist?id=9", requestOptions)
            .then(response => response.json())
            .then(result => setserieList1(result))
            .catch(error => console.log('error', error));

            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
              };
              

              fetch("http://localhost:8000/resources/top_ten_movies/spain", requestOptions)
                .then(response => response.json())
                .then(result => setserieList2(result))
                .catch(error => console.log('error', error));
        }, [])
    
        return (
            <div>
            <Main />
             <Slider movie = {serieList1} title="My List" />
             <Slider movie = {serieList2} title="TopTen movies" />

        </div>
    )
}
export default MyList;