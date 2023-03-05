import React from 'react'
import { classNames } from '../../utilities'

function ButtonSuccess(prop) {
    const {onClick, buttonText} = prop;
    return (
    <button type="button" onClick={onClick} className={classNames(
        "inline-block px-6 py-2.5 bg-green-500 text-white", 
        "font-medium text-xs leading-tight uppercase rounded shadow-md", 
        "hover:bg-green-600 hover:shadow-lg focus:bg-green-600",
        "focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700", 
        "focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
    )}>{buttonText}</button>
  )
}

export default ButtonSuccess