import ModalNew from '@/src/components/ModalNew'; 
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { loadingFalse, loadingFalseAnimated, loadingTrue } from '@/src/redux/actions/loader';

function SanctionTabs() {
  const dispatch = useDispatch();
  const {token} = useSelector((initState) => initState.userInfo);  
  const [isShow, setShow] = useState(false);
  const [searchList, setSearchList] = useState([]);
  const [oldsearch, setOldSearch] = useState([]);
  const [studentnumber, setStudentNumber] = useState('');
  const [isSanction, setSanctions] = useState([]);
  const [isSanctionInput, setSanctionInput] = useState(null);
  const [isModal, setModal] = useState({});
  const [isStudentId, setStudentId] = useState(null); 
  const [isTextArea, setTextArea] = useState('');


  useEffect(() => {
    mountedValue();
  }, [isShow])

  const handleOnchange = (event) => {
    const eventValue = event.target.value;
    if(eventValue){
        let updatedList = [...oldsearch];
        updatedList = updatedList.filter((item) => item.student_id.toString().includes(eventValue))
        setSearchList(updatedList)
        setShow(true);
    } else {
        setShow(false); 
    } 
    setStudentNumber(eventValue); 
  }

 const mountedValue = () => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        axios.get(route('registrar_student_list')).then((response) =>{ 
            const {student_record, sanctions} = response.data; 
            setSearchList(student_record);
            setOldSearch(student_record);  
            setSanctions(sanctions);
        }); 
        window.document.addEventListener('click', (event) => {
            setShow(false)
        });
        $(document).on('keyup', (evt) => {
            if(evt.keyCode == 27){
                setShow(false)
            }
        });
    }
    const handleSanctions = (value) => { 
      setSanctionInput(parseInt(value.target.value)) 
  }


  const applyButton = () => { 
    setModal(initState => ({...initState, isVisible: false}));
    const payload = {
      student_refid: isStudentId,
      sanction_id: isSanctionInput, 
      others: isTextArea,
    }
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    dispatch(loadingTrue());
    axios.post(route('add_sanctions'), payload).then(async (response) => {
      if(!response.data.error) {
          await dispatch(loadingFalseAnimated());
      } else {
          dispatch(loadingFalse());
      }
    });
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

  return (<>
    <div className="mx-8 mt-4">
        <div className="flex">
            <form className="mb-3 xl:w-96">
              <label className="form-label inline-block text-gray-700 uppercase text-xs font-bold">Student number</label>
              <label className="relative block">
                  <span className="sr-only">Search</span>
                  <span className="absolute inset-y-0 left-2 flex items-center pl-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                      </svg>
                  </span>
                  <input required className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border 
                  border-slate-300 rounded-md py-2 pl-12 pr-3  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
                  value={studentnumber} placeholder="Search for student number" type="text" name="student_id"
                  onChange={handleOnchange} 
                  />
                  <div className={`absolute w-full bg-white left-0 max-h-32 overflow-y-auto mt-1 rounded-sm ${isShow && ' border border-black'} shadow-sm`}>
                      <ul className="w-full"> 
                          {isShow && searchList.map((value, index) => (
                              <li key={index} className='w-full py-2 px-3 flex flex-row'>
                                  <a className='flex-1 text-sm font-semibold' onClick={() => {
                                      setStudentNumber(value.student_id);
                                      console.log(value);
                                      setStudentId(value.id);
                                      setShow(false)
                                  }} href="#">{value.student_id}</a>
                              </li>
                          ))}

                          {searchList.length == 0 && isShow && (<li><div className="pl-4 py-3 text-slate-400 text-xs">Student number does not exists.</div></li>)}
                      </ul>
                  </div>
              </label>
              <div className="flex my-4 flex-col">
                <label htmlFor="exampleFormControlInput1" className="form-label inline-block text-gray-700 uppercase text-xs font-bold">Sanctions</label>
                <div className="xl:w-96">
                    <select required onChange={handleSanctions} defaultValue={0} className="form-select appearance-none block w-full px-3 py-2 text-sm font-normal text-gray-700
                    bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " aria-label="Default select example">
                        <option value={0} disabled className="text-sm">--------</option>
                        {isSanction.map((value, index) => (<option className="text-sm" key={index} value={value.id}>{value.description}</option>))}
                    </select>
                </div>
              </div>
              {isSanctionInput == 4 && <div className="mb-3 xl:w-96" >
                <label htmlFor="exampleFormControlInput1" className="form-label inline-block mb-2 text-gray-700 uppercase text-xs font-bold">Please Specify</label>
                <textarea type="text"  onChange={(event) => setTextArea(event.target.value)} className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border 
                    border-slate-300 rounded-md py-2 pr-3  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm h-28"
                    id="exampleFormControlInput1" 
                />
              </div>}
              <button
                type="button"
                className="inline-flex uppercase 
                  justify-center rounded-md border border-transparent bg-green-500 px-4 py-2 
                  text-sm font-medium text-white hover:bg-green-400 focus:outline-none
                  focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 shadow-sm"
                onClick={handlebuttonOn}
              >
                Apply
              </button> 
              <button
                type="button"
                className="ml-2 inline-flex uppercase 
                  justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 
                  text-sm font-medium text-white hover:bg-red-400 focus:outline-none
                  focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 shadow-sm"
              >
                cancel
              </button>
            </form>
        </div>
    </div>
    <ModalNew {...isModal}/>
  </>
  )
}

export default SanctionTabs