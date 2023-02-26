import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react' 


function ModalForm(prop) { 
    const { 
        okbuttonText = "UPDATE", 
        isVisible = true, 
        cancelButton = () => {},
        applyButton = () => {}
    } = prop;


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
                                defaultValue={19018110}/> 
                        </label>
                    </div>
                   <div className="flex p-2">
                        <input id="link-checkbox" type="checkbox" value={0}  
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 
                        rounded focus:ring-blue-500 dark:focus:ring-blue-600 transition duration-200"/>
                        <label htmlFor="link-checkbox" className="ml-2 font-medium text-gray-900 text-xs uppercase">
                            minor offence
                        </label>
                        <div className="mx-3"/>
                        <input id="link-checkbox1" type="checkbox" value={1} 
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 
                        rounded focus:ring-blue-500 dark:focus:ring-blue-600 transition duration-200"/>
                        <label htmlFor="link-checkbox1" className="ml-2   font-medium text-gray-900 text-xs uppercase">
                            major offence   
                        </label>
                    </div>
                    
                    <div className='xl:w-96'>
                        <div className="flex my-2 flex-col">
                            <label htmlFor="exampleFormControlInput1" className="form-label inline-block text-gray-700 uppercase text-xs font-bold">Categorize case</label>
                            <select defaultValue={0} className="form-select appearance-none block w-full px-3 py-2 text-sm font-normal text-gray-700
                            bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " aria-label="Default select example">
                                <option value={0} disabled className="text-sm">--------</option> 
                            </select> 
                        </div> 
                    </div> 
                    <div className="mb-3 xl:w-96" >
                        <label htmlFor="exampleFormControlInput1" className="form-label inline-block mb-2 text-gray-700 uppercase text-xs font-bold">Please Specify</label>
                        <textarea type="text" placeholder="text here..." className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border 
                            border-slate-300 rounded-md py-1.5 pr-3  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm h-28"
                            id="exampleFormControlInput1" 
                        />
                    </div>
                    <div className='xl:w-96'>
                        <div className="flex my-2 flex-col">
                            <label htmlFor="exampleFormControlInput1" className="form-label inline-block text-gray-700 uppercase text-xs font-bold">status</label>
                            <select defaultValue={0} className="form-select appearance-none block w-full px-3 py-2 text-sm font-normal text-gray-700
                            bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " aria-label="Default select example">
                                <option value={0} disabled className="text-sm">--------</option> 
                            </select> 
                        </div> 
                    </div> 

                    <div className="mb-3 xl:w-96" >
                        <label htmlFor="exampleFormControlInput1" className="form-label inline-block mb-2 text-gray-700 uppercase text-xs font-bold">MESSAGE</label>
                        <textarea type="text" placeholder="text here..." className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border 
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
                      onClick={applyButton}
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