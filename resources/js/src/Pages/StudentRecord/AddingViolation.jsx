import React from 'react'

function AddingViolation() {
  return (
    <div className="mx-8 mt-4">
        <div className="mb-3 xl:w-96">
            <label htmlFor="exampleFormControlInput1" className="form-label inline-block mb-2 text-gray-700 uppercase text-xs font-bold">student number</label>
            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal
                text-gray-700bg-white bg-clip-padding border border-solid border-gray-300 rounded
                transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlInput1" 
            />
        </div>
        <div className="flex">
            <input id="link-checkbox" type="checkbox" value="" 
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 
            rounded focus:ring-blue-500 dark:focus:ring-blue-600 transition duration-200"/>
            <label htmlFor="link-checkbox" className="ml-2   font-medium text-gray-900 text-xs uppercase">
                minor offence
            </label>
            <div className="mx-3"/>
            <input id="link-checkbox1" type="checkbox" value="" 
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 
            rounded focus:ring-blue-500 dark:focus:ring-blue-600 transition duration-200"/>
            <label htmlFor="link-checkbox1" className="ml-2   font-medium text-gray-900 text-xs uppercase">
                major offence   
            </label>
        </div>
        <div className="flex my-4 flex-col">
            <label htmlFor="exampleFormControlInput1" className="form-label inline-block text-gray-700 uppercase text-xs font-bold">Categorize case</label>
            <div className="xl:w-96">
                <select className="form-select appearance-none
                block
                w-full
                px-3
                py-2
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                    
                </select>
            </div>
        </div>
        <div className="mb-3 xl:w-96">
            <label htmlFor="exampleFormControlInput1" className="form-label inline-block mb-2 text-gray-700 uppercase text-xs font-bold">others</label>
            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal
                text-gray-700bg-white bg-clip-padding border border-solid border-gray-300 rounded
                transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlInput1" 
            />
        </div>
       
        <button type="button" className="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight 
        uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none 
        focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">apply</button>
         <button type="button" className="ml-3  inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight 
         uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none 
         focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">cancel</button>
    </div>
  )
}

export default AddingViolation