
import {Route,Routes,Link, useNavigate} from 'react-router-dom'
import Home from './Home';
import WatchList from './WatchList';
import Logo from '../assets/logo-image.png'
import SearchIcon from './mui/Icons/SearchIcon';
import SearchBar from './SearchBar';
import { useState } from 'react';
function NavBar(){

    const [searchText, setSearchText] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchText.trim()) {
        navigate(`/search?query=${searchText}`);
        }
    };

    return(
        <div className='flex items-center gap-4 space-x-8 pl-3 py-4 bg-gray-900'>
        <Link to='/'>
            <img className='w-[50px]'src={Logo} alt='logo'></img>
        </Link>
        <div className='font-bold text-3xl space-x-5 text-red-200'>
            <Link className='hover:text-blue-500 ' to='/'>Movies</Link>
            <Link className='hover:text-blue-500 ' to='/series'>Series</Link>
        </div>
        <div className='flex'>
            <SearchBar searchText={searchText} setSearchText={setSearchText} onSearch={handleSearch}/>
            <button className='w-20 h-10 text-center bg-blue-400 rounded-lg rounded-l-none' onClick={handleSearch}>Search</button>
        </div>
        <div className='flex font-bold text-3xl space-x-5 text-red-200 border-red-300'>

            <div><Link className='hover:text-blue-500' to='/movies-watchlist'>Movies-WatchList</Link></div>
            <Link className='hover:text-blue-500' to='/series-watchlist'>Series-WatchList</Link>
        </div>
        </div>
    )
}

export default NavBar;

