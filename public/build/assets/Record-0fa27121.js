import{r as o,j as e,a as s,F as M,c as j}from"./app-fe5871cc.js";import{a as L}from"./index-b6042d42.js";import{l as R,a as W,b as $}from"./index-2e57147f.js";import{u as H}from"./useDispatch-82ff32a5.js";import"./index-214273b9.js";import{d as p}from"./transition-3a983702.js";import{S as f}from"./dialog-e9a84081.js";import{L as _}from"./index.es-1d18b60d.js";import{E as G,L as U}from"./99297-loading-files-9e06f5df.js";import"./Actions-0e71cdcf.js";function q(r){const{okbuttonText:d="UPDATE",isVisible:m=!1,cancelButton:u=()=>{},applyButton:N=()=>{},params:a}=r,h=H(),{token:g}=L(n=>n.userInfo),[b,v]=o.useState([]),[w,k]=o.useState([]),[t,l]=o.useState({minor:!1,major:!1}),[i,x]=o.useState(null),[y,C]=o.useState(""),[E,F]=o.useState(0),[T,S]=o.useState("");o.useEffect(()=>{z()},[]),o.useEffect(()=>{m&&(l({minor:a.offense_id==0&&!0,major:a.offense_id==1&&!0}),x(a==null?void 0:a.violations.id),F(a.status_id),S(a.message),C(a.others))},[m]);const z=()=>{axios.defaults.headers.common.Authorization=`Bearer ${g}`,axios.get(route("registrar_student_list")).then(n=>{const{categorize:c,statuses:P}=n.data;v(c),k(P)})},I=()=>{const n={student_id:a==null?void 0:a.student_id,offense:t.minor?0:t.major?1:null,categorize_case:parseInt(i),others:y,status_id:E,message:T};h(R()),axios.post(route("update_student_info"),n).then(async c=>{c.data.error?h($()):await h(W())}).catch(c=>{console.log(c)}),u()},V=n=>{x(n.target.value)},A=()=>{l({major:!1,minor:!0})},D=()=>{l({major:!0,minor:!1})},O=n=>{F(n.target.value)},B=n=>{S(n.target.value)};return e(p,{appear:!0,show:m,as:o.Fragment,children:s(f,{as:"div",className:"relative z-[1000]",onClose:u,children:[e(p.Child,{as:o.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),e("div",{className:"fixed inset-0 overflow-y-auto",children:e("div",{className:"flex min-h-full items-center justify-center p-4 text-center",children:e(p.Child,{as:o.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:s(f.Panel,{className:"w-full  max-w-3xl transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all",children:[e(f.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900",children:"Student Record information"}),s("div",{className:"mt-3 max-h-96 overflow-y-auto p-2",children:[s("div",{className:"xl:w-96",children:[e("label",{htmlFor:"exampleFormControlInput1",className:"form-label inline-block text-gray-700 uppercase text-xs font-bold",children:"student number"}),s("label",{className:"relative block ",children:[e("span",{className:"sr-only",children:"Search"}),e("input",{className:`placeholder:italic block bg-white w-full border \r
                                rounded-md py-2 pr-3 focus:outline-none focus:ring-1 text-gray-400 sm:text-sm`,type:"text",name:"student_id",disabled:!0,defaultValue:a==null?void 0:a.student_id})]})]}),s("div",{className:"flex my-3",children:[e("input",{id:"link-checkbox",type:"checkbox",onChange:A,checked:t.minor,value:0,className:`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 \r
                        rounded   dark:focus:ring-blue-600 transition duration-200`}),e("label",{htmlFor:"link-checkbox",className:"ml-2 font-medium text-gray-900 text-xs uppercase",children:"minor offence"}),e("div",{className:"mx-3"}),e("input",{id:"link-checkbox1",type:"checkbox",onChange:D,checked:t.major,value:1,className:`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 \r
                        rounded focus:ring-blue-500 dark:focus:ring-blue-600 transition duration-200`}),e("label",{htmlFor:"link-checkbox1",className:"ml-2 font-medium text-gray-900 text-xs uppercase",children:"major offence"})]}),e("div",{className:"xl:w-96 my-2",children:s("div",{className:"flex my-2 flex-col",children:[e("label",{htmlFor:"exampleFormControlInput1",className:"form-label inline-block text-gray-700 uppercase text-xs font-bold",children:"Categorize case"}),s("select",{onChange:V,defaultValue:a==null?void 0:a.violations.id,className:`form-select appearance-none block w-full px-3 py-2 text-sm font-normal text-gray-700\r
                            bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0\r
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none `,"aria-label":"Default select example",children:[e("option",{value:0,disabled:!0,className:"text-sm",children:"--------"}),b.map((n,c)=>e("option",{className:"text-sm",value:n.id,children:n.description},c))]})]})}),i==6&&s("div",{className:"mb-3 xl:w-96",children:[e("label",{htmlFor:"exampleFormControlInput1",className:"form-label inline-block mb-2 text-gray-700 uppercase text-xs font-bold",children:"Please Specify"}),e("textarea",{onChange:n=>C(n.target.value),defaultValue:a==null?void 0:a.others,type:"text",placeholder:"text here...",className:`placeholder:italic placeholder:text-slate-400 block bg-white w-full border \r
                            border-slate-300 rounded-md py-1.5 pr-3  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm h-28`,id:"exampleFormControlInput1"})]}),e("div",{className:"xl:w-96 my-3",children:s("div",{className:"flex my-2 flex-col",children:[e("label",{htmlFor:"exampleFormControlInput1",className:"form-label inline-block text-gray-700 uppercase text-xs font-bold",children:"status"}),s("select",{defaultValue:(a==null?void 0:a.status_id)==null&&0,onChange:O,className:`form-select appearance-none block w-full px-3 py-2 text-sm font-normal text-gray-700\r
                            bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0\r
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none `,"aria-label":"Default select example",children:[e("option",{value:0,disabled:!0,className:"text-sm",children:"--------"}),w.map((n,c)=>e("option",{className:"text-sm",value:n.id,children:n.description},c))]})]})}),s("div",{className:"mb-3 xl:w-96",children:[e("label",{htmlFor:"exampleFormControlInput1",className:"form-label inline-block mb-2 text-gray-700 uppercase text-xs font-bold",children:"MESSAGE"}),e("textarea",{type:"text",onChange:B,placeholder:"text here...",defaultValue:a==null?void 0:a.message,className:`placeholder:italic placeholder:text-slate-400 block bg-white w-full border \r
                            border-slate-300 rounded-md py-1.5 pr-3  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm h-28`,id:"exampleFormControlInput1"})]})]}),s("div",{className:"mt-4 flex flex-row justify-end bg-white",children:[e("button",{type:"button",className:"inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",onClick:u,children:"CANCEL"}),e("div",{className:"mx-1"}),e("button",{type:"button",className:`inline-flex \r
                        justify-center rounded-md border border-transparent bg-green-500 px-4 py-2 \r
                        text-sm font-medium text-white hover:bg-green-400 focus:outline-none\r
                        focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2`,onClick:I,children:d})]})]})})})})]})})}function J(){return e("a",{"x-data":"{ tooltip: 'Delete' }",className:"cursor-pointer",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"h-6 w-6","x-tooltip":"tooltip",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})})})}function K(r){return e("a",{"x-data":"{ tooltip: 'Edite' }",className:"cursor-pointer",onClick:r.onClick,children:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"h-6 w-6","x-tooltip":"tooltip",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"})})})}function Q(r){return e("a",{"x-data":"{tooltip: 'Message'}",className:"cursor-pointer",onClick:r.onClick,children:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"})})})}function X(r){const{closeModal:d,isOpen:m=!1,message:u}=r;return e(M,{children:e(p,{appear:!0,show:m,as:o.Fragment,children:s(f,{as:"div",className:"relative z-[1000]",onClose:d,children:[e(p.Child,{as:o.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),e("div",{className:"fixed inset-0 overflow-y-auto",children:e("div",{className:"flex min-h-full items-center justify-center p-4 text-center",children:e(p.Child,{as:o.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:s(f.Panel,{className:"w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",children:[e(f.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900",children:"Message"}),e("div",{className:"mt-2",children:e("p",{className:"text-sm text-gray-500",children:u})}),e("div",{className:"mt-4 flex flex-row justify-end",children:e("button",{type:"button",className:`inline-flex justify-center rounded-md border border-transparent \r
                      bg-red-400 px-4 py-2 text-sm font-medium text-white hover:bg-red-200 \r
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2`,onClick:d,children:"CLOSE"})})]})})})})]})})})}function ie(){const r=L(t=>t),[d,m]=o.useState([]),[u,N]=o.useState({}),[a,h]=o.useState({}),[g,b]=o.useState(!1);o.useEffect(()=>{v()},[r.loaderComponent.loading]);const v=()=>{b(!0),j.defaults.headers.common.Authorization=`Bearer ${r.userInfo.token}`,j.post(route("student_records")).then(({data:t})=>{const l=t;console.log({response:l}),m(l.student_records),b(!1)})},w=t=>{N(l=>({...l,isVisible:!0,params:t,cancelButton:()=>{console.log({value:t}),N(i=>({...i,isVisible:!1}))}}))},k=t=>{h(l=>({...l,isOpen:!0,message:t,closeModal:()=>{h(i=>({...i,isOpen:!1}))}}))};return s(M,{children:[e("div",{className:"flex flex-row justify-end px-4 py-3",children:e("div",{className:"my-auto search-boxContainer d-none d-lg-block mr-2",children:e("input",{type:"text",className:"form-control search-box",placeholder:"Search...","aria-label":"Example text with button addon","aria-describedby":"button-addon1"})})}),e("div",{className:"overflow-auto rounded-lg border border-gray-200 shadow",children:s("table",{className:"w-full border-collapse bg-white text-left text-sm text-gray-500",children:[e("thead",{className:"bg-gray-200",children:s("tr",{children:[e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Student number"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Name"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Course/Section"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Violation"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Sanctions"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Offence"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Status"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900"})]})}),s("tbody",{className:"divide-y divide-gray-100 border-t border-gray-100",children:[d.map((t,l)=>{var i,x,y;return s("tr",{className:"hover:bg-gray-50",children:[e("td",{className:"px-12 py-4",children:e("div",{className:"font-bold",children:t.student_id})}),e("th",{className:" gap-3 px-6 py-4 font-normal text-gray-900",children:s("div",{className:"text-sm",children:[s("div",{className:"font-medium text-gray-700",children:[t.students_info.Lastname,", ",t.students_info.Firstname," ",t.students_info.Middlename,"."]}),e("div",{className:"text-gray-400",children:t.students_info.Email})]})}),e("td",{className:"px-6 py-4",children:t.students_info.year_section||"-"}),e("td",{className:"py-4",children:s("div",{children:[e("div",{className:"font-bold",children:t.violations.description}),e("div",{className:"text-xs mt-2",children:t.others})]})}),e("td",{className:"px-3 py-4",children:e("div",{className:"flex justify-center",children:((i=t.sanctions)==null?void 0:i.sancat_id)==4?(x=t.sanctions)==null?void 0:x.other:((y=t.sanctions)==null?void 0:y.sanction_desc)||t.sanctions==null&&"Pending"})}),e("td",{className:"px-6 py-4",children:e("div",{className:"flex justify-end gap-4",children:t.offenses||"-"})}),e("td",{className:"px-6 py-4",children:e("div",{className:"flex justify-center gap-4 text-center",children:t.status!==null?t.status.description:" - "})}),e("td",{className:"px-6 py-4",children:s("div",{className:"flex justify-end gap-3",children:[t.message&&e(Q,{onClick:()=>k(t.message)}),e(J,{}),e(K,{onClick:()=>w(t)})]})})]},l)}),d.length==0&&!g&&e("tr",{children:e("td",{colSpan:9,className:"pb-4",children:s("div",{className:"flex flex-col items-center",children:[e(_,{style:{width:100,height:100},animationData:G,loop:!0}),e("span",{className:"uppercase text-sm",children:"no record found"})]})})}),g&&d.length<=0&&e("tr",{children:e("td",{colSpan:9,className:"pb-3",children:s("div",{className:"flex flex-col items-center",children:[e(_,{style:{width:120,height:120},animationData:U,loop:!0}),e("span",{className:"uppercase text-sm font-bold",children:" loading ..."})]})})})]})]})}),e(q,{...u}),e(X,{...a})]})}export{ie as default};
