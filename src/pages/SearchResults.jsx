import React, { useState } from 'react'
import { useEffect } from 'react';
import {useLocation, useParams} from 'react-router-dom'
import SearchItemsCard from '../components/SearchItemsCard';
const SearchResults = () => {
    const [searchResults,setSearchResults]=useState([]);
    const [query, setQuery] = useState('');
    const [loading,setLoading]=useState(true);
    const location = useLocation();
  
    useEffect(() => {
      const queryParams = new URLSearchParams(location.search);
      const searchQuery = queryParams.get('query') || '';
      setQuery(searchQuery);
      if (searchQuery) {
          const getResults = async () => {
              const resp = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=3fd18cf52ae8d3a13924e94167d3e374&query=${encodeURIComponent(searchQuery)}`);
              const data = await resp.json();
              setSearchResults(data.results);
              setLoading(false)
          };
          getResults();
      }
  }, [location.search]);

  return (
    <>
      {

        loading
        ? (
        <div className='text-2xl font-bold text-4xl text-center m-5 text-yellow-600'>
          <h1 >Please Wait while Loading</h1>
          
        </div>
        ) 
        : 
          (<div className='flex flex-wrap justify-evenly gap-8 m-10'>
            {
              searchResults.map((result,idx) => (
                <SearchItemsCard key={idx} resultObj={result}/>
              ))
            }
          </div>)

      }

      {/* {
        searchResults.length ===0 ?
          (<div className='text-2xl font-bold text-4xl text-center m-5 text-yellow-600'>
            <h1 >Oops No Movies/Series Available</h1>
            <div>Try searching for more popular Movies/Series</div>
          </div>)
      } */}
    </>
  )
}

export default SearchResults