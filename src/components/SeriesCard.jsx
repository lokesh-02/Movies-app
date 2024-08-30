import React from 'react'
import WatchListIcon from './mui/Icons/WatchListIcon';
import ButtonIcon from './mui/Icons/ButtonIcon';

const SeriesCard = ({seriesObj,index,addtoWatch,removefromWatch,watch}) => {

    function doesContain(seriesObj){
        for(let i=0;i<watch.length;i++){
            if(watch[i].id == seriesObj.id){
                return true;
            }
        }
        return false;
    }
    
  return (
    <>
        <div className='hover:scale-110 duration-300 cursor-pointer'>
            <div className='h-[40vh] w-[200px] bg-center bg-cover rounded-xl rounded-b-none  flex flex-col justify-end m-0'
             key={index} style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${seriesObj.backdrop_path})`}}/>
            <div className='text-black mt-0 p-2 bg-gray-400 w-[200px] rounded-xl rounded-t-none m-0'>
                <p className='font-bold '>{seriesObj.name}</p>
                <p>Rating: {Math.floor(seriesObj.vote_average)}</p>
                <p >Release Date: {seriesObj.release_date}</p>

                <div className='flex gap-1 items-center'>
                    {
                        doesContain(seriesObj)?(<button onClick={()=>removefromWatch(seriesObj)} className='bg-red-600 rounded-md w-full'>Remove to WatchList </button>)
                        :(<button onClick={()=>addtoWatch(seriesObj)} className='bg-gray-600 rounded-md w-full'>Add to WatchList </button>)
                    }
                    
                    {/* <span className='ml-2'><WatchListIcon/></span> */}
                </div>
            </div>
        </div>
    </>
)
}
export default SeriesCard;
