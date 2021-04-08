import './App.css';
import './components/card-list/card-list.component'
import {useState, useEffect} from 'react'
import {CardList} from './components/card-list/card-list.component'
import Main from './components/main/main.component'
import {BrowserRouter as Router} from 'react-router-dom'
import {Hero} from './components/hero/hero.component'

function App() {

const [movieList1, setmovieList1] = useState([])
const [movieList2, setmovieList2] = useState([])

useEffect( async () => {
  const data = await fetch('./movies.json')
  const dataJson = await data.json() 
  setmovieList1(dataJson)
  setmovieList2(dataJson)

}, [])


  return (
    <div className="App">
      <Router>
        <Hero/>
        <h1>My list</h1>
        <CardList movieList={movieList1}/>
        <CardList movieList={movieList2}/>
      </Router>
    </div>
  );
}

export default App;
