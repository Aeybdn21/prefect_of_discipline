import React from 'react'
import ReactPaginate from 'react-paginate';


function Paginations() {
  return (
    <ReactPaginate
        className="flex flex-row gap-2"
        containerClassName=""
        breakLabel="..."
        // onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={10}
        previousLabel={(<div className="flex flex-row gap-1 items-center ">
            <Arrowleft/>
            <span className="text-sm text-gray-500 font-semibold">Previous</span>
        </div>)}
        nextLabel={<div className="flex flex-row gap-1 items-center">
            <span className="text-sm text-gray-500 font-semibold">Next</span>
            <div className="rotate-180">
                <Arrowleft/>
            </div>
        </div>}
        renderOnZeroPageCount={null}
        activeClassName="select-none"
        pageClassName="select-none"
        previousClassName="select-none active:bg-gray-200 px-2 rounded-full transform duration-200 ease-out"
        nextClassName="select-none active:bg-gray-200 px-2 rounded-full transform duration-200 ease-out"
        breakLinkClassName="font-bold transform duration-200 ease-out select-none"
        pageLinkClassName="text-gray-500 p-2 "
        activeLinkClassName="text-gray-700 font-bold px-2 "
        disabledLinkClassName=""
        breakClassName=""
    />
  )
}
function Arrowleft() { 
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="#a19f9f" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
        </svg>
    );
}

export default Paginations