import React, { useEffect, useState } from 'react'
import axios from 'axios';


function Banner() {

  const [bannerImage,setbannerImage]=useState("");
  const [title,setTitle]=useState("");
  useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=3fd18cf52ae8d3a13924e94167d3e374&language=en-US&page=1').then((response)=>{
      // console.log(response.data)
      const firstMovie=response.data.results[0];
      const firstMovieTitle=firstMovie.title;
      const firstMoviePoster=firstMovie.backdrop_path
      setTitle(firstMovieTitle);
      setbannerImage(`https://image.tmdb.org/t/p/original/${firstMoviePoster}`)
    })
  },[])

  return (
    <div className='h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end'
    style={{backgroundImage:`url(${bannerImage})`}}
    >
    <div className='text-yellow-600 font-bold bg-gray-600 opacity-85 w-full text-center text-2xl'>{title}</div>
        
    </div>
  )
}
export default Banner;