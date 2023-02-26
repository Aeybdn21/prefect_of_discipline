import React, { useState } from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import axios from 'axios';
import ModalForm from '@/src/components/ModalForm';
import Loader from '@/src/components/Loader';
import { DeleteIcon, PencilIcon } from '@/src/components/IconsTable';


export default function Record() {

  const selector = useSelector((initState) => initState);
  const [renderDataRecordStudent, setRenderDataRecordStudent] = useState([]);
  const [isFormModal, setFormModal] = useState({});


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

  const handlePencilEdit = () => {
    setFormModal((initState) => ({
      ...initState, 
      isVisible: true,
      cancelButton: () => {
        setFormModal((initstate) => ({...initstate, isVisible: false}));
      }
    }));
  }


  return ( 
    <>
    <div className="overflow-auto rounded-lg border border-gray-200 shadow-md m-5">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Student number</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Name</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Strand/course</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Year/section</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Violation</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Sanctions</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Offence</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Status</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {renderDataRecordStudent.map((value, index) => 
          <tr className="hover:bg-gray-50" key={index}>
            <td className="px-12 py-4">
              <div className="font-bold">{value.student_id}</div>
            </td>
            <th className="flex gap-3 px-6 py-4 font-normal text-gray-900"> 
              <div className="text-sm">
                <div className="font-medium text-gray-700">{value.students_info.Lastname}, {value.students_info.Firstname} {value.students_info.Middlename}.</div>
                <div className="text-gray-400">{value.students_info.Email}</div>
              </div>
            </th>
            <td className="px-6 py-4"> 
              {value.students_info.Course}
            </td>
            <td className="px-6 py-4 "> 
              <div className="text-sm">
                <div className="font-medium text-gray-700">Year: {value.year_section.Year_Level}</div>
                <div className="text-gray-400">Section: {value.year_section.Section}</div>
              </div>
            </td>
            <td className="px-6 py-4"> 
              {value.violations.id == 6 ? value.others: value.violations.description}
            </td>
            <td className="px-6 py-4">
              <div className="flex justify-end gap-4">
                {value.sanctions?.sancat_id == 4 ? value.sanctions?.other : value.sanctions?.sanction_desc || value.sanctions == null && 'Pending'}
              </div>
            </td>
            <td className="px-6 py-4">
              <div className="flex justify-end gap-4">
                {value.offenses}
              </div>
            </td>
            <td className="px-6 py-4">
              <div className="flex justify-end gap-4">
                {value.status !== null ? value.status.description : ' '}
              </div>
            </td>
            <td className="px-6 py-4">
              <div className="flex justify-end gap-4">
                <DeleteIcon/>
                <PencilIcon onClick={handlePencilEdit}/>
              </div>
            </td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
    <ModalForm {...isFormModal}/>
    </>
  )
}



