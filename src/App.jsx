
import './App.css'
import NavBar from './components/NavBar'
import {Route,Routes} from 'react-router-dom'
import Home from './components/Home'
import WatchList from './components/WatchList'
import Series from './components/Series'
import SeriesWatchlist from './components/SeriesWatchlist'
function App() {

  return (
    <>
    <NavBar/>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/series' element={<Series/>}></Route>
        <Route path='/movies-watchlist' element={<WatchList/>}></Route>
        <Route path='/series-watchlist' element={<SeriesWatchlist/>}></Route>
    </Routes>
    </>
  )
}

export default App
