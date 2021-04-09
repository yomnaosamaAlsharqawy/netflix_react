import './Movies.css';
import {useState, useEffect} from 'react'
import {CardList} from '../../components/card-list/card-list.component'
import Main from '../../components/main/main.component'
import {BrowserRouter as Router} from 'react-router-dom'
import {Hero} from '../../components/hero/hero.component'

function Movies() {

const [movieList1, setmovieList1] = useState([])
const [movieList2, setmovieList2] = useState([])
const [movieList3, setmovieList3] = useState([])

useEffect( async () => {
  const data = await fetch('./movies.json')
  const dataJson = await data.json() 
  setmovieList1(dataJson)
  setmovieList2(dataJson)
  setmovieList3(dataJson)

}, [])


  return (
    <Router>
      <div className="Movies">
        <Hero/>
        <h1>My list</h1>
        <CardList movieList={movieList1}/>
        <h1>Continue Watching</h1>
        <CardList movieList={movieList2}/>
        <h1>TV Shows</h1>
        <CardList movieList={movieList3}/> 
      </div>
    </Router>
  );
}

export default Movies;
