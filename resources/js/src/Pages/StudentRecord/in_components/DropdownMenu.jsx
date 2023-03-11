import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

export default function DropdownMenu(props) {
  const {onChangeEdit, onChangeOpenDetails, onChangeDelete} = props;

  return ( 
      <Menu as="div" className=" text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md
           bg-opacity-20 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none 
           focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <EllipsisVerticalIcon
              className=" h-5 w-5 text-gray-500 hover:text-gray-500"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-5 mt-1 w-56 origin-top-right divide-y 
          divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none  ">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button className={`${
                      active ? 'bg-blue-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`} onClick={onChangeEdit}>
                    {active ? (
                      <EditActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <EditInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Edit
                  </button>
                )}
              </Menu.Item> 
            </div>
            <div className="px-1 py-1 "> 
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-blue-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={onChangeOpenDetails}
                  >
                    {active ? (
                      <MoveActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <MoveInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Open Details
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-blue-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={onChangeDelete}
                  >
                    {active ? (
                      <DeleteActiveIcon
                        className="mr-2 h-5 w-5 text-red-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <DeleteInactiveIcon
                        className="mr-2 h-5 w-5 text-red-400"
                        aria-hidden="true"
                      />
                    )}
                    Delete
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
  );
}

function EditInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#3b82f6"
        strokeWidth="2"
      />
    </svg>
  )
}

function EditActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#3b82f6"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  )
} 

function MoveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#3b82f6" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#3b82f6" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#3b82f6" strokeWidth="2" />
    </svg>
  )
}

function MoveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="white" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="white" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="white" strokeWidth="2" />
    </svg>
  )
}

function DeleteInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#f5beba"
        stroke="#f5574c"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#f5574c" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#f5574c" strokeWidth="2" />
    </svg>
  )
}

function DeleteActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="#f5574c"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#3b82f6"
        stroke="white"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="white" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="white" strokeWidth="2" />
    </svg>
  )
}
