import React from 'react'
import PDTable from '../components/PDTable' 
import ClinicDropdown from './components/ClinicDropdown'
import { connect } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react'; 
import { approveDecline, clinicReport } from '../../redux/actions/index';
import Lottie from 'lottie-react';
import EmptyAnimation from '../../lottie/79572-empty-state.json';
import LoadingFiles from '../../lottie/99297-loading-files.json'
import { classNames } from '../utilities';
import ModalNew from '@/src/components/ModalNew';
function Clinic({listState, getRequest, approveDecline}) { 
    const [isLoading, setLoading] = useState(false);
    const [clinic_request, setClinic] = useState([]);
    const [isModal, setModal] = useState({});

    useEffect(() => { 
        setLoading(true);
        handlegetRequest();
    },[]); 

    const handlegetRequest = () => {
        getRequest(route('clinic_request_list')).then((response) => {
            setClinic(response.data.clinic_request);
            setLoading(false);
        }); 
    }

    const onChangeApprove = (id) => {
        setModal({
            title: "Confimation",  
            textMessage: "Do you want to Approve?", 
            isVisible: true,
            cancelButton: () => {
                setModal(initState => ({...initState, isVisible: false}));
            },
            applyButton () {
                approveDecline({url: route('cl_request_approve_decline'), payload: {
                    req_id: id,
                    status: 'approved'
                }}).then((response) => {
                    setModal(initState => ({...initState, isVisible: false}));
                    handlegetRequest();
                })
            }
        });
        
    }

    const onChangeDecline = (id) => { 
        setModal({
            title: "Confimation",  
            textMessage: "Do you want to Decline?", 
            isVisible: true,
            cancelButton: () => {
                setModal(initState => ({...initState, isVisible: false}));
            },
            applyButton () {
                approveDecline({url: route('cl_request_approve_decline'), payload: {
                    req_id: id,
                    status: 'decline'
                }}).then((response) => {
                    setModal(initState => ({...initState, isVisible: false}));
                    handlegetRequest();
                })
            }
        });
    }

   
   return (
    <div>
        <div className=" ">
            <h1 className="font-bold text-2xl text-gray-500 uppercase">clinic report case</h1>
        </div>
        <div className="flex flex-row justify-end px-4 py-3">
            <div className="my-auto search-boxContainer d-none d-lg-block mr-2">
                <input type="text" className="form-control search-box"  placeholder="Search..." aria-label="Example text with button addon" aria-describedby="button-addon1"/>
            </div>
        </div>
        <PDTable>
            <PDTable.Header>
                <PDTable.Theader className="font-bold text-gray-600">student number</PDTable.Theader>
                <PDTable.Theader className="font-medium">name</PDTable.Theader>
                <PDTable.Theader className="font-medium">position</PDTable.Theader>
                <PDTable.Theader className="font-medium">Cases</PDTable.Theader>
                <PDTable.Theader className="font-medium">Recommendation</PDTable.Theader>
                <PDTable.Theader className="font-medium">Date Report</PDTable.Theader>
                <PDTable.Theader className="font-medium">status</PDTable.Theader>
                <PDTable.Theader className="font-medium"></PDTable.Theader>
            </PDTable.Header>
            <PDTable.TBody> 
                {clinic_request.map((data, index) => <PDTable.TBodyRow key={index}>
                    <PDTable.Theader className="font-bold text-gray-600">{data.student_id}</PDTable.Theader>
                    <PDTable.TBodyColumn className="px-6">{data.name}</PDTable.TBodyColumn>
                    <PDTable.TBodyColumn className="px-6">{data.position || '-'}</PDTable.TBodyColumn>
                    <PDTable.TBodyColumn className="px-6">{data.cases}</PDTable.TBodyColumn>
                    <PDTable.TBodyColumn className="px-6">{data.recommendation}</PDTable.TBodyColumn>
                    <PDTable.TBodyColumn className="px-6">{data.datereport}</PDTable.TBodyColumn>
                    <PDTable.TBodyColumn className={classNames("px-6 capitalize", 
                        data.status=='approved' ? "text-green-600" : "text-red-600")}>{data.status}</PDTable.TBodyColumn>
                    <PDTable.TBodyColumn className="px-6">
                        <ClinicDropdown onChangeApprove={() => onChangeApprove(data.id)} onChangeDecline={() => onChangeDecline(data.id)}/>
                    </PDTable.TBodyColumn>
                </PDTable.TBodyRow>)}
                {(clinic_request.length <= 0 && !isLoading ) && (<tr>
                    <td colSpan={8} className="pb-4">
                        <div className="flex flex-col items-center">
                            <Lottie style={{width: 100, height: 100}} animationData={EmptyAnimation} loop={true}/>
                            <span className='uppercase text-sm'>no record found</span>
                        </div>
                    </td>
                </tr>
                )}
                {(isLoading && clinic_request.length <= 0) && 
                <tr>
                    <td colSpan={8} className="pb-4">
                        <div className="flex flex-col items-center">
                            <Lottie style={{width: 120, height: 120}} animationData={LoadingFiles} loop={true}/>
                            <span className='uppercase text-sm font-bold'>{'   '} loading ...</span>
                        </div>
                    </td>
                </tr>} 
            </PDTable.TBody>
        </PDTable>
        <ModalNew {...isModal}/>
    </div>
  )
}

const mapToStateProps = (state) => ({
    listState: state.clinicRequest
});
const mapToDispatchProps = (dispatch) => ({
    getRequest: (url) => dispatch(clinicReport(url)),
    approveDecline: (params) => dispatch(approveDecline(params))
});

export default connect(mapToStateProps, mapToDispatchProps)(Clinic);