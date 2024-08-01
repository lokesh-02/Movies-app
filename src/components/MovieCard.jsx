import React from 'react'
import axios from 'axios'

function MovieCard({key,moviesObj,addWatch,remove,watchList}) {

    function doesContain(moviesObj){
        for(let i=0;i<watchList.length;i++){
            if(watchList[i].id == moviesObj.id){
                return true;
            }
        }
        return false;
    }
 
  return (
    <div>
    <div className='h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 cursor-pointer flex flex-col justify-end'
    key={key} style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${moviesObj.backdrop_path})`}}>
    <div className='flex justify-start'>
        {doesContain(moviesObj)
        ?(<div className=' m-2' onClick={() => remove(moviesObj)}><i className="fa-solid fa-trash fa-lg"></i></div>)
        :(<div className=' m-2' onClick={() => addWatch(moviesObj)}><i className="fa-solid fa-basket-shopping fa-lg "></i></div>)}
        
    </div>
    <div className='text-2xl font-bold text-center bg-slate-600 rounded-lg'>{moviesObj.title}</div>
    
    </div>
    </div>
  )
}

export default MovieCard