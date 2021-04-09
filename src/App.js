import './App.css';
import './components/card-list/card-list.component'
import {useState, useEffect} from 'react'
import {CardList} from './components/card-list/card-list.component'
import Main from './components/main/main.component'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Hero} from './components/hero/hero.component'
import Home from './pages/Home/Home.page'
import TVShows from './pages/TVShows/TVShows.page'
import Movies from './pages/Movies/Movies.page'
import MyList from './pages/MyList/MyList.page'

function App() {

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
      <div className="App">
        <Switch>
          <Route path='/home' exact>
            <Home />
          </Route>

          <Route path='/tvshows' exact>
            <TVShows />
          </Route>

          <Route path='/movies' exact>
            <Movies />
          </Route>

          <Route path='/mylist' exact>
            <MyList />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
