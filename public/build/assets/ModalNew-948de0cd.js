import{j as e,F as u,r as t,a as i}from"./app-fe5871cc.js";import{d as n}from"./transition-3a983702.js";import{S as a}from"./dialog-e9a84081.js";function g(s){const{title:l,textMessage:o,okbuttonText:c="CONFIRM",isVisible:d=!1,cancelButton:r,applyButton:m}=s;return e(u,{children:e(n,{appear:!0,show:d,as:t.Fragment,children:i(a,{as:"div",className:"relative z-[1000]",onClose:r,children:[e(n.Child,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),e("div",{className:"fixed inset-0 overflow-y-auto",children:e("div",{className:"flex min-h-full items-center justify-center p-4 text-center",children:e(n.Child,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:i(a.Panel,{className:"w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",children:[e(a.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900",children:l}),e("div",{className:"mt-2",children:e("p",{className:"text-sm text-gray-500",children:o})}),i("div",{className:"mt-4 flex flex-row justify-end",children:[e("button",{type:"button",className:"inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",onClick:r,children:"CANCEL"}),e("div",{className:"mx-1"}),e("button",{type:"button",className:`inline-flex \r
                        justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 \r
                        text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none\r
                        focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2`,onClick:m,children:c})]})]})})})})]})})})}export{g as M};
