import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { classNames } from '../../utilities';

function LabelSelect(props) {  
  const {disabled, onChange, setData = [], id,  error = false, errorMessage} = props;
  return (
    <div className={classNames('my-2 ', 'flex flex-col')}>  
        <select disabled={disabled} onChange={onChange} defaultValue={0} id={id} 
            className={classNames('w-full lg:w-1/3 text-sm', 'rounded-lg border-gray-300', 
                'text-base p-2 px-2', 'transform ease-in duration-200',
                 disabled && 'bg-gray-200 text-black/40', 
                 !disabled && 'text-black/70',
                 error ? "border-red-400" : "border-gray-300"
                )}>
            <option value={0} disabled className={classNames('italic')}>Please Select items</option>
            {setData.map((response, index) => (
                <option key={index} value={response.id}>{response.description}</option>
            ))}
        </select>
        {error && <span className="text-sm text-red-500 ">{errorMessage}</span>}
    </div>
  );
}

 

export default LabelSelect