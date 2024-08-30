
import {Route,Routes,Link} from 'react-router-dom'
import Home from './Home';
import WatchList from './WatchList';
import Logo from '../assets/logo-image.png'
import SearchIcon from './mui/Icons/SearchIcon';
import SearchBar from './SearchBar';
function NavBar(){
    return(
        <div className='flex items-center gap-4 space-x-8 pl-3 py-4 bg-gray-900'>
        <Link to='/'>
            <img className='w-[50px]'src={Logo} alt='logo'></img>
        </Link>
        <div className='font-bold text-3xl space-x-5 text-red-200'>
            <Link className='hover:text-blue-500 ' to='/'>Movies</Link>
            <Link className='hover:text-blue-500 ' to='/series'>Series</Link>
        </div>
        <div className=''>
            {/* <input type='text' placeholder='Search for Movies' className='w-96 h-10 text-left bg-slate-200 rounded-lg'></input> */}
            {/* <SearchIcon/> */}
            <SearchBar/>
        </div>
        <div className='font-bold text-3xl space-x-5 text-red-200'>

            <Link className='hover:text-blue-500' to='/movies-watchlist'>Movies-WatchList</Link>
            <Link className='hover:text-blue-500' to='/series-watchlist'>Series-WatchList</Link>
        </div>
        </div>
    )
}

export default NavBar;

