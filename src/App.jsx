
import './App.css'
import NavBar from './components/NavBar'
import {Route,Routes} from 'react-router-dom'
import Home from './components/Home'
import WatchList from './components/WatchList'
function App() {

  return (
    <>
    <NavBar/>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/watchlist' element={<WatchList/>}></Route>
    </Routes>
    </>
  )
}

export default App
