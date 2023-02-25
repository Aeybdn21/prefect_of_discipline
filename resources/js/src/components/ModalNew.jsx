import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function ModalNew(prop) {
    const {
        title, 
        textMessage, 
        okbuttonText = "CONFIRM", 
        isVisible = false, 
        cancelButton,
        applyButton
    } = prop;
 

  return (
    <> 
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {/* Payment successful */}{title}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      {/* Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order. */}
                      {textMessage}
                    </p>
                  </div>

                  <div className="mt-4 flex flex-row justify-end">
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
                        justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 
                        text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none \
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
    </>
  )
}
