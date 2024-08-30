import React from 'react'
import axios from 'axios'

function MovieCard({moviesObj,addWatch,remove,watchList}) {

    function doesContain(moviesObj){
        for(let i=0;i<watchList.length;i++){
            if(watchList[i].id == moviesObj.id){
                return true;
            }
        }
        return false;
    }

  return (
    <>
        <div className='hover:scale-110 duration-300 cursor-pointer'>
            <div className='h-[40vh] w-[200px] bg-center bg-cover rounded-xl rounded-b-none  flex flex-col justify-end m-0'
              style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${moviesObj.backdrop_path})`}}/>
            <div className='text-black mt-0 p-2 bg-gray-400 w-[200px] rounded-xl rounded-t-none m-0'>
                <p className='font-bold '>{moviesObj.title}</p>
                <p>Rating: {Math.floor(moviesObj.vote_average)}</p>
                <div className='flex gap-1 items-center'>
                    {
                        doesContain(moviesObj)?(<button onClick={()=>remove(moviesObj)} className='bg-red-600 rounded-md w-full'>Remove to WatchList </button>)
                        :(<button onClick={()=>addWatch(moviesObj)} className='bg-gray-600 rounded-md w-full'>Add to WatchList </button>)
                    }
                    
                    {/* <span className='ml-2'><WatchListIcon/></span> */}
                </div>
                
            </div>
        </div>
    </>
  )
}

export default MovieCard