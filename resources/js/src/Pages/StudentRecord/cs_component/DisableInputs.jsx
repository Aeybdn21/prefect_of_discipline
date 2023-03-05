import React from 'react'
import { classNames } from '../../utilities';

function DisableInputs(props) {
    const {labeltext, setValue, id, error = false, errorMessage} = props;
  return (
    <div className="flex flex-col flex-1">
        <label htmlFor={id} className={classNames("text-sm text-gray-600", error && "text-red-500")}>{labeltext}</label>
        <input 
            id={id}
            type="text" 
            disabled 
            defaultValue={setValue}
            className={classNames(
              "rounded-md transition ease-out duration-200",
              "bg-gray-200 text-gray-500 text-sm",
              error ? "border-red-400" : "border-gray-300"  
            )}
          />
         {error && <span className="text-sm text-red-500 ">{errorMessage}</span>}
    </div>
  )
}

export default DisableInputs