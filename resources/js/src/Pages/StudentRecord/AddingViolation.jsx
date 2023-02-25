import React from 'react'
import { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import ModalNew from '@/src/components/ModalNew';
import Loader from '@/src/components/Loader';
import { Actions } from '@/src/redux/Actions';


function AddingViolation() {
    const [studentnumber, setStudentNumber] = useState('');
    const {token} = useSelector((initState) => initState.userInfo);  
    const dispatch = useDispatch();
    const [isShow, setShow] = useState(false);
    const [searchList, setSearchList] = useState([]);
    const [oldsearch, setOldSearch] = useState([]);
    const [isOffenses, setOffense] = useState({
        minor: false, major: false
    });
    const [isCategorize, setCategorize] = useState([]);
    const [categorizeSelected, setCategorizeSelected] = useState(null);
    const [isModal, setModal] = useState({});
  
    const [isTextArea, setTextArea] = useState('');

    useEffect(() => {
        mountedValue();  
    }, []);
    
    const mountedValue = () => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        axios.get(route('registrar_student_list')).then((response) =>{ 
            const {registrar_recordslist, categorize} = response.data; 
            setSearchList(registrar_recordslist);
            setOldSearch(registrar_recordslist);
            setCategorize(categorize)
        }); 
    }
 
    const handleOnchange = (event) => { 
        const eventValue = event.target.value;
        if(eventValue){
            let updatedList = [...oldsearch];
            updatedList = updatedList.filter((item) => item.Student_ID.toString().includes(eventValue))
            setSearchList(updatedList)
            setShow(true);
        } else {
            setShow(false); 
        } 
        setStudentNumber(eventValue); 
    }
    const minorOffense = () => {
        setOffense({major: false, minor: true});
    }
    const majorOffense = () => {
        setOffense({major: true, minor: false});
    }

    const handleCategorize = (value) => { 
        setCategorizeSelected(value.target.value) 
    }
    
    const applyButton = () => {
        setModal(initState => ({...initState, isVisible: false}));
        const payload = {
            student_id: studentnumber,
            offense: isOffenses.minor ? 0: isOffenses.major? 1: null,
            categorize_case: parseInt(categorizeSelected),
            others: isTextArea
        }; 
        dispatch({type: Actions.SET_LOADER, loading: true, display: true});
        axios.post(route('add_violations'), payload).then((response) => {
            if(!response.data.error) {
                setTimeout(() => {
                    dispatch({type: Actions.SET_LOADER, loading: false, display: true});
                    setTimeout(() => {
                        dispatch({type: Actions.SET_LOADER, loading: false, display: false});
                    }, 2000);
                }, 2000);
            }
        }).catch((error) => {
            console.log({error})
        })
    }

    const handlebuttonOn = () => {
        setModal({
            title: "Confimation",  
            textMessage: "Do you want to Apply?", 
            isVisible: true,
            cancelButton: () => {
                setModal(initState => ({...initState, isVisible: false}));
            },
            applyButton
        });
    }
 
    const handleCancelOn = () => {
        
        
    }


  return (
    <>
    <div className="mx-8 mt-4">
        <div className="mb-3 xl:w-96">
            <label htmlFor="exampleFormControlInput1" className="form-label inline-block mb-2 text-gray-700 uppercase text-xs font-bold">student number</label>
            <label className="relative block">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-2 flex items-center pl-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </span>
                <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border 
                border-slate-300 rounded-md py-2 pl-12 pr-3  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
                value={studentnumber} placeholder="Search for student number" type="text" name="student_id"
                onChange={handleOnchange} 
                />
                <div className={`absolute w-full bg-white left-0 max-h-32 overflow-y-auto mt-1 rounded-sm ${isShow && ' border border-black'} shadow-sm`}>
                    <ul className="w-full"> 
                        {isShow && searchList.map((value, index) => (<li key={index} className='w-full py-2 px-3 flex flex-row'>
                            <a className='flex-1 text-sm font-semibold' onClick={() => {
                                setStudentNumber(value.Student_ID);
                                console.log(value.Student_ID)
                                setShow(false)
                            }} href="#">{value.Student_ID}</a>
                        </li>))}
                        {searchList.length == 0 && isShow && <li>
                            <div className="pl-4 py-3 text-slate-400 text-xs">Student number does not exists.</div>
                        </li>
                        }
                    </ul>
                </div>
            </label>
        </div>
        <div className="flex">
            <input id="link-checkbox" type="checkbox" value={0} onChange={minorOffense} checked={isOffenses.minor} 
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 
            rounded focus:ring-blue-500 dark:focus:ring-blue-600 transition duration-200"/>
            <label htmlFor="link-checkbox" className="ml-2 font-medium text-gray-900 text-xs uppercase">
                minor offence
            </label>
            <div className="mx-3"/>
            <input id="link-checkbox1" type="checkbox" value={1} onChange={majorOffense} checked={isOffenses.major}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 
            rounded focus:ring-blue-500 dark:focus:ring-blue-600 transition duration-200"/>
            <label htmlFor="link-checkbox1" className="ml-2   font-medium text-gray-900 text-xs uppercase">
                major offence   
            </label>
        </div>
        <div className="flex my-4 flex-col">
            <label htmlFor="exampleFormControlInput1" className="form-label inline-block text-gray-700 uppercase text-xs font-bold">Categorize case</label>
            <div className="xl:w-96">
                <select onChange={handleCategorize} defaultValue={0} className="form-select appearance-none block w-full px-3 py-2 text-sm font-normal text-gray-700
                bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " aria-label="Default select example">
                    <option value={0} disabled className="text-sm">--------</option>
                   {isCategorize.map((value, index) => (<option className="text-sm" key={index} value={value.id}>{value.description}</option>))}
                </select>
            </div>
        </div>
        {categorizeSelected == 6 && <div className="mb-3 xl:w-96" >
            <label htmlFor="exampleFormControlInput1" className="form-label inline-block mb-2 text-gray-700 uppercase text-xs font-bold">Please Specify</label>
            <textarea type="text" onChange={(event) => setTextArea(event.target.value)} className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border 
                border-slate-300 rounded-md py-1.5 pr-3  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                id="exampleFormControlInput1" 
            />
        </div>}
       
        <button type="button" className="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight 
        uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none 
        focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out" onClick={handlebuttonOn}>apply</button>
         <button type="button" className="ml-3  inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight 
         uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none 
         focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" onClick={handleCancelOn}>cancel</button>
    </div>
    
    <ModalNew {...isModal}/>
  
    </>
  )
}

export default AddingViolation