import React, { useEffect, useState } from 'react'
import SeriesCard from './SeriesCard';
import Pagination from './Pagination';
import ShimmerEffect from './ShimmerEffect';

const Series = () => {
    const [series,setSeries]=useState([]);
    const [pageN,setPageN]=useState(1);
    const [watchList, setWatchList] = useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        const seriesFromLocalStorage=JSON.parse(localStorage.getItem('series'));
        if(seriesFromLocalStorage){
            setWatchList(seriesFromLocalStorage)
        }
    },[])

    const addToWatchList = (seriesObj) => {
      const updatedWatchlist = [...watchList, seriesObj];
      setWatchList(updatedWatchlist);
      localStorage.setItem('series',JSON.stringify(updatedWatchlist))
    };

    const removeFromWatchList=(seriesObj)=>{
        const filteredWatchList=watchList.filter((serie)=>serie.id !== seriesObj.id)
        setWatchList(filteredWatchList) 
        localStorage.setItem('series',JSON.stringify(filteredWatchList))
    }

    const getSeriesData=async ()=>{
        const resp=await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=3fd18cf52ae8d3a13924e94167d3e374&include_adult=false&language=en-US&sort_by=popularity.desc&page=${pageN}`);
        const data=await resp.json();
        // console.log(data);
        setSeries(data.results);
        setLoading(false)
    }
    useEffect(()=>{
        getSeriesData();
    },[pageN])

    const handleNext=()=>{
        setPageN(pageN+1);
    }
    const handlePrevious=()=>{
        if(pageN===1){
            setPageN(1);
        }
        else{
            setPageN(pageN-1)
        }
    }

  return (
    <>
    <div className='text-2xl font-bold text-4xl text-center m-5 text-yellow-600'>
        <h1>Trending Series</h1>
    </div>
    {
        loading ? (<ShimmerEffect/>)
        :(<div className='flex flex-wrap justify-evenly gap-8 m-10'>
            {
                series.map((serie,index)=>{
                    return(
                        <SeriesCard key={index} seriesObj={serie} addtoWatch={addToWatchList} removefromWatch={removeFromWatchList} watch={watchList}/>
                    )
                })
            }
        </div>) 
    }
    
    <Pagination nextPageFn={handleNext} prevPageFn={handlePrevious} pageNumber={pageN}/>
    </>
)
}

export default Series