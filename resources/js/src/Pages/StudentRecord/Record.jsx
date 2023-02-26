import React, { useState } from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import axios from 'axios';
import ModalForm from '@/src/components/ModalForm';
import Loader from '@/src/components/Loader';
export default function Record() {

  const selector = useSelector((initState) => initState);
  const [renderDataRecordStudent, setRenderDataRecordStudent] = useState([]);

  useEffect(() => {
    handleFetchStudents();
  }, [selector.loaderComponent.loading])

  const handleFetchStudents = () => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${selector.userInfo.token}`;
    axios.post(route('student_records')).then(({data}) => {
      const response = data;
      setRenderDataRecordStudent(response.student_records); 
    });
  }


  return ( <>
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
                      Full name
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
                      sanctions
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-3 text-left uppercase">
                      offence
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-3 text-left uppercase">
                      status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {renderDataRecordStudent.map((value, index) =>(
                    <tr key={index}>
                      <td>{value.student_id}</td>
                      <td>{value.students_info.Lastname}, {value.students_info.Firstname} {value.students_info.Middlename}.</td> 
                      <td>{value.students_info.Course}</td>
                      <td></td>
                      <td>{value.violations.id == 6 ? value.others: value.violations.description}</td>
                      <td>{value.sanctions?.sancat_id == 4 ? value.sanctions?.other : value.sanctions?.sanction_desc || value.sanctions == null && 'Pending'}</td>
                      <td>{value.offenses}</td>
                      <td>{value.status !== null ? value.status.description : '-----'}</td>
                    </tr>
                    )
                  )}
                   {/* <tr>
                    <td colSpan={8}>
                      <div>
                        
                      </div>
                    </td>
                   </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div> 
      {/* <ModalForm /> */} 
  </>
  )
}
