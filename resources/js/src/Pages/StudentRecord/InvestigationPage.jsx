import React, { useEffect, useState } from 'react'
import { classNames } from '../utilities'
import Lottie from "lottie-react";
import EmptyAnimation from '../../lottie/79572-empty-state.json';
import LoadingFiles from '../../lottie/99297-loading-files.json';
import axios from 'axios';
import { useSelector } from 'react-redux';
import DropdownMenu from './in_components/DropdownMenu';
import OpenDetailsModal from './in_components/OpenDetialsModal';
import ReactQuill from 'react-quill'; 
import "react-quill/dist/quill.snow.css";


function InvestigationPage() {
    const [inTabledata, setTableData] = useState([]);
    const {token} = useSelector((initState) => initState.userInfo); 
    const [isLoading, setLoading] = useState(false);
    const [isOpenDetails, setOpenDetails] = useState({});
    
    useEffect(() => {
        showInvestigations();
    }, []);

    const showInvestigations = async () => {
        setLoading(true);
        try {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            const response = await axios.post(route('show_investigations'));
            setTableData(response.data.datalists);
            setLoading(false);
        } catch (error) {
            console.log({error});
        }
    }

    const colorStyle = (status_id) => {
        switch(status_id) {
            case 1: return 'text-red-400';
            case 2: return 'text-red-600';
            case 3: return 'text-green-500'
        }
    }

    const handleOnEdit = (value) => {
        console.log(value);
        
    }
    const handleOpenDetails = (value) => { 
        setOpenDetails((initState) => ({...initState,
            isVisible: true,
            onChangeClose() {
                setOpenDetails((initState) =>({...initState, isVisible: false}));
            },
            body: value.data.details_html
        }))
    }
    const handleOnDelete = (value) => {

    }

  return (<>
   <div className={classNames('relative')}>
    <div className="flex flex-row justify-end px-4 py-3">
      <div className="my-auto search-boxContainer d-none d-lg-block mr-2">
          <input type="text" className="form-control search-box"  placeholder="Search..." aria-label="Example text with button addon" aria-describedby="button-addon1"/>
      </div>
    </div>
    <div className={classNames("overflow-auto  w-full rounded-lg", "border border-gray-200 shadow ")}>
      <table className={classNames("w-full border-collapse", "bg-white text-left", "text-sm text-gray-500 ")}>
        <thead className="bg-gray-200">
          <tr>
            <th scope="col" className={classNames("px-6 py-4 font-bold text-gray-600 ")}>Student number</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900 ">Student Information</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900 ">Case Parties involved</th> 
            <th scope="col" className="px-6 py-4 font-medium text-gray-900 ">Violation Case</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900 ">Violation Details</th> 
            <th scope="col" className="px-6 py-4 font-medium text-gray-900 text-center">Status</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {inTabledata.map((data, index) => (<tr className="hover:bg-gray-50 " key={index}>
                <th className=" px-12 py-4 ">
                    <div className="font-bold">{data.student_num}</div>
                </th>
                <th className="gap-3 px-6 py-3 font-normal text-gray-900"> 
                    <div className="text-sm">
                        <div className="text-gray-700">{data.student_info.Course}-{data.student_info.sections.Section}</div>
                        <div className="font-medium text-gray-500">{data.student_info.Lastname}, {data.student_info.Firstname} {data.student_info.Middlename}.</div>
                        <div className="text-gray-400">{data.student_info.Email}</div>
                        <div className="text-gray-400">{data.student_info.Contact_No && `+63${data.student_info.Contact_No}`}</div>
                    </div>
                </th>
                <td className="px-6 py-3 ">
                    <div className="text-sm font-semibold">
                        {data.case_parties?.description || '------'}
                    </div>
                </td> 
                <th className="px-6 py-3">
                    <div className="font-bold">
                        {data.violation_case.description}
                    </div>
                    {data.claimable && (
                        <div className="font-normal text-xs">
                            {data.claimable}
                        </div>
                    )}
                </th> 
                <td className="px-6 py-3">
                    {data.specify_desc || '------'}
                </td>
                <th className="">
                    <div className={classNames("font-bold text-center", colorStyle(data.investigate_status_id))}>
                        {data.investigation_status.description}
                    </div> 
                </th>
                <td>
                    <DropdownMenu 
                        onChangeEdit={() => handleOnEdit({data, index})} 
                        onChangeOpenDetails = {() => handleOpenDetails({data, index})}
                        onChangeDelete={() => handleOnDelete({data, index})}
                    />
                </td>
            </tr>))}
            {(inTabledata.length <= 0 && !isLoading ) && (<tr>
                <td colSpan={7} className="pb-4">
                    <div className="flex flex-col items-center">
                        <Lottie style={{width: 100, height: 100}} animationData={EmptyAnimation} loop={true}/>
                        <span className='uppercase text-sm'>no record found</span>
                    </div>
                </td>
            </tr>
            )}
            {(isLoading && inTabledata.length <= 0) && 
            <tr>
                <td colSpan={7} className="pb-4">
                    <div className="flex flex-col items-center">
                        <Lottie style={{width: 120, height: 120}} animationData={LoadingFiles} loop={true}/>
                        <span className='uppercase text-sm font-bold'>{'   '} loading ...</span>
                    </div>
                </td>
            </tr>} 
        </tbody>
      </table>
    </div> 
    <div className="my-36"/>
   </div>
   <OpenDetailsModal {...isOpenDetails}/>
   </>
  )
}



export default InvestigationPage