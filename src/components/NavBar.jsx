
import {Route,Routes,Link} from 'react-router-dom'
import Home from './Home';
import WatchList from './WatchList';
import Logo from '../assets/logo-image.png'

function NavBar(){
    return(
        <div className='flex items-center space-x-8 pl-3 py-4 bg-gray-900'>
        <Link to='/'>
            <img className='w-[50px]'src={Logo} alt='logo'></img>
        </Link>
        <div className='font-bold text-3xl space-x-5 text-red-200'>
            <Link className='hover:text-blue-500 ' to='/'>Movies</Link>
            <Link className='hover:text-blue-500' to='/watchlist'>WatchList</Link>
        </div>
        </div>
    )
}

export default NavBar;