import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'  
import ReactQuill from 'react-quill'; 
import "react-quill/dist/quill.snow.css";
import Writing from '../../../lottie/41460-writing.json';
import Lottie from 'lottie-react';


function OpenDetailsModal(prop) { 
  const {isVisible=false, onChangeClose = () => {}, body =''} = prop; 
  const [isRender, setRender] = useState(false);
  useEffect(() => {
    if(isVisible){
      handleTimeout();
    } else {
      setRender(false)
    }
  },[isVisible]);

  const handleTimeout = () => {
    setTimeout(()=> {
      setRender(true); 
    }, 500);
  }

  return (
    <Transition appear show={isVisible} as={Fragment} >
        <Dialog as="div" className="relative z-[1000]" onClose={onChangeClose}>
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
                <Dialog.Panel className="w-full  max-w-4xl transform overflow-hidden rounded-xl 
                bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-base font-bold leading-6 text-gray-900 uppercase"
                  >
                    Open Details
                  </Dialog.Title>
                  <div className="mt-3 max-h-96 overflow-y-auto p-2"> 
                      {isRender  && <ReactQuill  value={body} readOnly={true} theme="bubble" /> }
                      {(!isRender && isVisible) && <div className="flex flex-col items-center">
                        <Lottie animationData={Writing} style={{width: 50, height: 50}} loop={true}/>
                        <div className="font-bold text-base">Loading ...</div>
                      </div>}
                  </div> 
                  <div className="mt-4 flex flex-row justify-end bg-white">
                    <button
                      onClick={onChangeClose}
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-600 
                      px-4 py-2 text-sm font-medium text-white hover:bg-red-200 focus:outline-none focus-visible:ring-2 
                      focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    >
                    Close
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

export default OpenDetailsModal