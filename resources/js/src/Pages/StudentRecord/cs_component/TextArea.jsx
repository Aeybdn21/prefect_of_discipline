import React from 'react'
import { classNames } from '../../utilities';

function TextArea(props) {
  const {labelText, id, onChange, placeholder, error = false, errorMessage} = props;
  return (
    <div className="md:w-1/2">
        <label htmlFor={id} className={classNames("text-sm", error && "text-red-500 mt-2")}>{labelText}<span className="text-red-600">*</span></label>
        <textarea 
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        className={classNames(
            "placeholder:italic placeholder:text-slate-400", 
            "block bg-white w-full  ",
            "rounded-md py-1.5 pr-3  focus:outline-none focus:border-sky-500",
            "focus:ring-sky-500 focus:ring-1 sm:text-sm h-28",
            error ? "border-red-400" : "border-slate-300"  
            )}>
        </textarea>
        {error && <span className="text-sm text-red-500 ">{errorMessage}</span>}
    </div>
  )
}

export default TextArea