import React from 'react'
import { useSelector } from 'react-redux'

export default function Record() {

  const selector = useSelector((initState) => initState);

  const handleSearchButton = () => {
    console.log({selector})
  }


  return ( 
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-3 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="flex justify-end">
                <div className="xl:w-96">
                    <div className="input-group relative flex flex-wrap items-stretch w-full mb-2">
                    <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 
                    text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 
                    rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white 
                    focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" 
                    aria-describedby="button-addon2"/>
                    <button onClick={handleSearchButton} className="btn inline-block px-6 py-3.5 bg-blue-600 text-white font-medium text-xs leading-tight
                        uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg 
                        focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150
                        ease-in-out items-center" type="button" id="button-addon2">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 
                        208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 
                        336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                        </svg>
                    </button>
                    </div>
                </div>
            </div> 
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-3 text-left uppercase">
                      Student number
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-3 text-left uppercase">
                      last name
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-3 text-left uppercase">
                      first name
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-3 text-left uppercase">
                      strand/course
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-3 text-left uppercase">
                      year/section
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-3 text-left uppercase">
                      violation
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-3 text-left uppercase">
                      sunction
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-3 text-left uppercase">
                      offence
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className=" border-b transition duration-300 ease-in-out hover:bg-gray-100">
                    <td className="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                      19018291
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-3 whitespace-nowrap">
                      Ebdani
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-3 whitespace-nowrap">
                      Aeron Noel
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-3 whitespace-nowrap">
                      BSIT
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-3 whitespace-nowrap">
                      4106
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-3 whitespace-nowrap"> 
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-3 whitespace-nowrap"> 
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-3 whitespace-nowrap"> 
                    </td>
                  </tr> 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div> 
  )
}
