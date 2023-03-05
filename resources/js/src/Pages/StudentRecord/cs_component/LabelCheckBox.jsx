import React from 'react'
import { classNames } from '../../utilities'



function LabelCheckBox(prop) {
  const {labelname, onChange, id} = prop;
  return (
    <div className="flex flex-row items-center">
        <input type="checkbox" id={id} onChange={onChange} className={classNames('rounded-md transform ease-out duration-200')}/>
        <label htmlFor={id} className={classNames('text-sm mx-2 text-gray-600')}>{labelname}</label>
    </div>
  )
}

export default LabelCheckBox