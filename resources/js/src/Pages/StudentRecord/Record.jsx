import React from 'react'
import { useSelector } from 'react-redux'

export default function Record() {

  const selector = useSelector((initState) => initState);

  const handleSearchButton = () => {
    console.log({selector})
  }


  return ( 
      <div className="flex flex-col px-8">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 ">
          <div className="py-3 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="flex justify-end">
                <div className="xl:w-96">
                    <div className="input-group relative flex flex-wrap items-stretch w-full mb-2">
                    <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 
                    text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 
                    rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white 
                    focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" 
                    aria-describedby="button-addon2"/> 
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
                   <tr>
                    <td colSpan={8}>
                      <div>
                        
                      </div>
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
