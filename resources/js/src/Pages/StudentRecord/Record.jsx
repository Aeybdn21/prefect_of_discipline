import React, { useState } from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import axios from 'axios';
import ModalForm from '@/src/components/ModalForm';
import Loader from '@/src/components/Loader';
import { DeleteIcon, MessageIcon, PencilIcon } from '@/src/components/IconsTable';
import ModalMessage from '@/src/components/ModalMessage';
import Lottie from "lottie-react";
import EmptyAnimation from '../../lottie/79572-empty-state.json'; 
import LoadingFiles from '../../lottie/99297-loading-files.json';

export default function Record() {

  const selector = useSelector((initState) => initState);
  const [renderDataRecordStudent, setRenderDataRecordStudent] = useState([]);
  const [isFormModal, setFormModal] = useState({});
  const [isMessageModal, setMessageModal] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    handleFetchStudents();
  }, [selector.loaderComponent.loading])

  const handleFetchStudents = () => {
    setLoading(true);
    axios.defaults.headers.common['Authorization'] = `Bearer ${selector.userInfo.token}`;
    axios.post(route('student_records')).then(({data}) => {
      const response = data;
      console.log({response})
      setRenderDataRecordStudent(response.student_records); 
      setLoading(false);
    });
  }

  const handlePencilEdit = (value) => {
    setFormModal((initState) => ({
      ...initState, 
      isVisible: true,
      params: value,
      cancelButton: () => {
        console.log({value})
        setFormModal((initstate) => ({...initstate, isVisible: false}));
      }
    }));
  }

  const handleMessageModal = (value) => {
    setMessageModal((initState) => ({
      ...initState,
      isOpen: true,
      message: value,
      closeModal: () => {
        setMessageModal((initState) => ({
          ...initState, 
          isOpen: false
        }));
      }
    }));
  }


  return ( 
    <>
    <div className="flex flex-row justify-end px-4 py-3">
      <div className="my-auto search-boxContainer d-none d-lg-block mr-2">
          <input type="text" className="form-control search-box"  placeholder="Search..." aria-label="Example text with button addon" aria-describedby="button-addon1"/>
      </div>
    </div>
    <div className="overflow-auto rounded-lg border border-gray-200 shadow">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead className="bg-gray-200">
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
                <div className="text-gray-400">{value.year_section.Section}</div>
            </td>
            <td className="px-6 py-4"> 
              {value.violations.id == 6 ? value.others: value.violations.description}
            </td>
            <td className="px-6 py-4">
              <div className="flex justify-center">
                {value.sanctions?.sancat_id == 4 ? value.sanctions?.other : value.sanctions?.sanction_desc || value.sanctions == null && 'Pending'}
              </div>
            </td>
            <td className="px-6 py-4">
              <div className="flex justify-end gap-4">
                {value.offenses}
              </div>
            </td>
            <td className="px-6 py-4">
              <div className="flex justify-center gap-4 text-center">
                {value.status !== null ? value.status.description : ' '}
              </div>
            </td>
            <td className="px-6 py-4">
              <div className="flex justify-end gap-3">
                {value.message && <MessageIcon onClick={() => handleMessageModal(value.message)}/>}
                <DeleteIcon/>
                <PencilIcon onClick={() => handlePencilEdit(value)}/>
              </div>
            </td>
          </tr>
          )}
          {(renderDataRecordStudent.length == 0 && !isLoading ) && 
           <tr>
            <td colSpan={9} className="pb-4">
                <div className="flex flex-col items-center">
                    <Lottie style={{width: 100, height: 100}} animationData={EmptyAnimation} loop={true}/>
                    <span className='uppercase text-sm'>no record found</span>
                </div>
            </td>
          </tr>
          }
          {(isLoading && renderDataRecordStudent.length <= 0) && 
            <tr>
                <td colSpan={9} className="pb-3">
                    <div className="flex flex-col items-center">
                        <Lottie style={{width: 120, height: 120}} animationData={LoadingFiles} loop={true}/>
                        <span className='uppercase text-sm font-bold'> loading ...</span>
                    </div>
                </td>
            </tr>} 
        </tbody>
      </table>
    </div>
    <ModalForm {...isFormModal}/>
    <ModalMessage {...isMessageModal}/>
    </>
  )
}



