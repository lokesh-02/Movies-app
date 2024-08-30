
import './App.css'
import NavBar from './components/NavBar'
import {Route,Routes} from 'react-router-dom'
import Home from './components/Home'
import WatchList from './components/WatchList'
import Series from './components/Series'
import SeriesWatchlist from './components/SeriesWatchlist'
import SearchResults from './pages/SearchResults'
function App() {

  return (
    <>
    <NavBar/>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/series' element={<Series/>}></Route>
        <Route path='/movies-watchlist' element={<WatchList/>}></Route>
        <Route path='/series-watchlist' element={<SeriesWatchlist/>}></Route>
        <Route path='/search' element={<SearchResults/>}></Route>
    </Routes>
    </>
  )
}

export default App
