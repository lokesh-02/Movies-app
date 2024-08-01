import React from 'react'

function Pagination({pageNumber,nextPageFn,prevPageFn}) {
  return (
    <div className='bg-yellow-400 p-4 h-[50px] w-full mt-8 flex justify-center gap-2 '>
            <div onClick={prevPageFn} className='px-8 hover:cursor-pointer'>
                <i className='fa-solid fa-arrow-left'></i>
            </div>
            <div>{pageNumber}</div>
            <div onClick={nextPageFn} className='px-8 hover:cursor-pointer'>
                <i className='fa-solid fa-arrow-right'></i>
            </div>
        </div>
  )
}

export default Pagination