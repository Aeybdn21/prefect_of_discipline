import React from 'react'
import { classNames } from '../../utilities'



function LabelCheckBox(prop) {
  const {labelname, onChange, id, checked, error} = prop;
  return (
    <div className="flex flex-row items-center">
        <input type="checkbox" id={id} checked={checked} onChange={onChange} className={classNames('rounded-md transform ease-out duration-200')}/>
        <label htmlFor={id} className={classNames('text-sm mx-2 text-gray-600', error && "text-red-500")}>{labelname}</label>
    </div>
  )
}

export default LabelCheckBox