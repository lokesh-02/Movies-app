import React, { useEffect, useState } from 'react'
import Pagination from './Pagination';
import MovieCard from './MovieCard';
import axios from'axios';
function Movies() {
    const [movies, setMovies] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [watchList, setWatchList] = useState([]);
  
    useEffect(()=>{
        const moviesFromLocalStorage=JSON.parse(localStorage.getItem('movies'));
        if(moviesFromLocalStorage){
            setWatchList(moviesFromLocalStorage)
        }
    },[])

    const addToWatchList = (moviesObj) => {
      const updatedWatchlist = [...watchList, moviesObj];
      setWatchList(updatedWatchlist);
      localStorage.setItem('movies',JSON.stringify(updatedWatchlist))
    };

    const removeFromWatchList=(moviesObj)=>{
        const filteredWatchList=watchList.filter((movie)=>movie.id !== moviesObj.id)
        setWatchList(filteredWatchList) 
        localStorage.setItem('movies',JSON.stringify(filteredWatchList))
 
    }
    console.log(watchList);
        
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=3fd18cf52ae8d3a13924e94167d3e374&language=en-US&page=${pageNo}`)
        .then((response)=>{
            const moviesData=response.data.results;
            // console.log(moviesData);
            setMovies(moviesData)
        })     
    },[pageNo])

    const handleNext=()=>{
        setPageNo(pageNo+1);
    }
    const handlePrevious=()=>{
        if(pageNo===1){
            setPageNo(1);
        }
        else{
            setPageNo(pageNo-1)
        }
    }
  return (
    <div>
        <div className='text-2xl font-bold text-center m-5 text-yellow-600'>
            <h1>Trending Movies</h1>
        </div>
        <div className='flex flex-wrap justify-evenly gap-8'>
            {movies.map((movie,idx)=>{
                return(
                    <MovieCard key={idx} moviesObj={movie} addWatch={addToWatchList} remove={removeFromWatchList} watchList={watchList}/>
                )
            })
            }
            
        </div>
        <Pagination nextPageFn={handleNext} prevPageFn={handlePrevious} pageNumber={pageNo}/>
    </div>
  )
}

export default Movies