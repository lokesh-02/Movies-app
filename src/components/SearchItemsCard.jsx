import React from 'react'

const SearchItemsCard = ({resultObj}) => {

    const placeholderImage = 'https://via.placeholder.com/200x300?text=No+Image'; // Placeholder image URL

  const imageUrl = resultObj.poster_path
    ? `https://image.tmdb.org/t/p/original/${resultObj.poster_path}`
    : placeholderImage;


  return (
    <>
        <div className='flex flex-wrap'>
            <div className='hover:scale-110 duration-300 cursor-pointer'>
                <div className='h-[40vh] w-[200px] bg-center bg-cover rounded-xl rounded-b-none  flex flex-col justify-end m-0'
                 style={{ backgroundImage: `url(${imageUrl})` }}/>
                <div className='text-black mt-0 p-2 bg-gray-400 w-[200px] rounded-xl rounded-t-none m-0'>
                    <p className='font-bold '>{resultObj.title}</p>
                    <p>Rating: {Math.floor(resultObj.vote_average)}</p>
                    <p >Release Date: {resultObj.release_date}</p>
                </div>
            </div>
        </div>
    </>
)
}

export default SearchItemsCard