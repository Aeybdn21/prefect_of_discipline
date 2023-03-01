import React, { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react' 
import { useDispatch, useSelector } from 'react-redux';
import { loadingFalse, loadingFalseAnimated, loadingTrue } from '../redux/actions/loader';


function ModalForm(prop) { 
    const { 
        okbuttonText = "UPDATE", 
        isVisible = false, 
        cancelButton = () => {},
        applyButton = () => {},
        params
    } = prop;
    const dispatch = useDispatch();
    const {token} = useSelector((initState) => initState.userInfo);  
    const [isCategorize, setCategorize] = useState([]);
    const [statuses, setStatuses] = useState([]);
    const [isOffenses, setOffense] = useState({
      minor: false, major: false
    });
    const [categorizeSelected, setCategorizeSelected] = useState(null);
    const [isTextArea, setTextArea] = useState('');
    const [isStatusId, setStatus] = useState(0);
    const [isMessage, setMessage] = useState('');

    useEffect(() => { 
      mountedValue();
    }, []) 

    useEffect(() => {
      if(isVisible) {
        setOffense({minor: params.offense_id == 0 && true, major: params.offense_id == 1 && true});
        setCategorizeSelected(params?.violations.id)
        setStatus(params.status_id)
        setMessage(params.message); 
      }
    }, [isVisible])
    
  const mountedValue = () => { 
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    axios.get(route('registrar_student_list')).then((response) =>{ 
        const {categorize, statuses} = response.data;   
        setCategorize(categorize); 
        setStatuses(statuses); 
    }); 
  }

  const handleSubmit = () => {
    const payload = {
      student_id: params?.student_id,
      offense: isOffenses.minor ? 0: isOffenses.major? 1: null,
      categorize_case: parseInt(categorizeSelected),
      others: isTextArea,
      status_id: isStatusId,
      message: isMessage,
    };
    dispatch(loadingTrue());
    axios.post(route('update_student_info'), payload).then(async (response) => {
      if(!response.data.error) {
        const finishloading = await dispatch(loadingFalseAnimated()); 
        // gesss
      }else {
        dispatch(loadingFalse());
      }
    }).catch((error) => {
      console.log(error)
    })
    cancelButton();
  }

  const handleCategorize = (value) => { 
      setCategorizeSelected(value.target.value) 
  }

  const minorOffense = () => {
      setOffense({major: false, minor: true});
  }
  const majorOffense = () => {
      setOffense({major: true, minor: false});
  }

  const handleStatusonChange = (event) => {
    setStatus(event.target.value); 
  }
  const handleOnChangeMessage = (event) => {
    setMessage(event.target.value); 
  }

  return (
    <Transition appear show={isVisible} as={Fragment}>
        <Dialog as="div" className="relative z-[1000]" onClose={cancelButton}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full  max-w-3xl transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Student Record information
                  </Dialog.Title>
                  <div className="mt-3 max-h-96 overflow-y-auto p-2">
                    <div className="xl:w-96">
                        <label htmlFor="exampleFormControlInput1" className="form-label inline-block text-gray-700 uppercase text-xs font-bold">student number</label>
                        <label className="relative block ">
                            <span className="sr-only">Search</span> 
                            <input className="placeholder:italic block bg-white w-full border 
                                rounded-md py-2 pr-3 focus:outline-none focus:ring-1 text-gray-400 sm:text-sm" 
                                type="text" name="student_id" disabled
                                defaultValue={params?.student_id}/> 
                        </label>
                    </div>
                   <div className="flex my-3">
                        <input id="link-checkbox" type="checkbox" onChange={minorOffense} checked={isOffenses.minor}  value={0}  
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 
                        rounded   dark:focus:ring-blue-600 transition duration-200"/>
                        <label htmlFor="link-checkbox" className="ml-2 font-medium text-gray-900 text-xs uppercase">
                            minor offence
                        </label>
                        <div className="mx-3"/>
                        <input id="link-checkbox1" type="checkbox" onChange={majorOffense} checked={isOffenses.major} value={1} 
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 
                        rounded focus:ring-blue-500 dark:focus:ring-blue-600 transition duration-200"/>
                        <label htmlFor="link-checkbox1" className="ml-2 font-medium text-gray-900 text-xs uppercase">
                            major offence   
                        </label>
                    </div>
                    
                    <div className='xl:w-96 my-2'>
                        <div className="flex my-2 flex-col">
                            <label htmlFor="exampleFormControlInput1" className="form-label inline-block text-gray-700 uppercase text-xs font-bold">Categorize case</label>
                            <select  onChange={handleCategorize} defaultValue={params?.violations.id} className="form-select appearance-none block w-full px-3 py-2 text-sm font-normal text-gray-700
                            bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " aria-label="Default select example">
                                <option value={0} disabled className="text-sm">--------</option>
                                {isCategorize.map((value, index) => (
                                  <option className="text-sm" key={index} value={value.id}>{value.description}</option>))}
                            </select> 
                        </div> 
                    </div> 
                    {categorizeSelected == 6 && <div className="mb-3 xl:w-96" >
                        <label htmlFor="exampleFormControlInput1" className="form-label inline-block mb-2 text-gray-700 uppercase text-xs font-bold">Please Specify</label>
                        <textarea onChange={(event) => setTextArea(event.target.value)}
                          defaultValue={params?.others}
                        type="text" placeholder="text here..." className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border 
                            border-slate-300 rounded-md py-1.5 pr-3  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm h-28"
                            id="exampleFormControlInput1" 
                        />
                    </div>}


                    <div className='xl:w-96 my-3'>
                        <div className="flex my-2 flex-col">
                            <label htmlFor="exampleFormControlInput1" className="form-label inline-block text-gray-700 uppercase text-xs font-bold">status</label>
                            <select defaultValue={params?.status_id == undefined && 0} onChange={handleStatusonChange} className="form-select appearance-none block w-full px-3 py-2 text-sm font-normal text-gray-700
                            bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " aria-label="Default select example">
                                <option value={0} disabled className="text-sm">--------</option> 
                                {statuses.map((value, index) => (<option className="text-sm" key={index} value={value.id}>{value.description}</option>))}
                            </select> 
                        </div> 
                    </div> 

                    <div className="mb-3 xl:w-96" >
                        <label htmlFor="exampleFormControlInput1" className="form-label inline-block mb-2 text-gray-700 uppercase text-xs font-bold">MESSAGE</label>
                        <textarea type="text" onChange={handleOnChangeMessage} placeholder="text here..." defaultValue={params?.message} className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border 
                            border-slate-300 rounded-md py-1.5 pr-3  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm h-28"
                            id="exampleFormControlInput1" 
                        />
                    </div>

                  </div>

                  <div className="mt-4 flex flex-row justify-end bg-white">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={cancelButton}
                    >
                    CANCEL
                    </button>
                    <div className="mx-1"/>
                    <button
                      type="button"
                      className="inline-flex 
                        justify-center rounded-md border border-transparent bg-green-500 px-4 py-2 
                        text-sm font-medium text-white hover:bg-green-400 focus:outline-none
                        focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                      onClick={handleSubmit}
                    >
                      {okbuttonText}
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
  )
}

export default ModalForm