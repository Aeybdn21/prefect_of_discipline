import React from 'react'

function Loading({display}) {
  return (
    <div className={`loader absolute z-10 left-0 top-0 !bg-black/50 ${!display && 'd-none'}`}>
        <div className="loading-animation ">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div>
            <img src="assets/image/logo.png" alt="bestlink-logo" />
        </div>
        </div>
    </div>
  )
}

export default Loading