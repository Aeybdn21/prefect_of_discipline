import{r as s,c as u,a as l,F as M,j as e}from"./app-c7618102.js";import{u as B}from"./index-041a5b5b.js";import{M as E}from"./ModalNew-804b297c.js";import{u as T,l as P,a as W,b as q}from"./index-670d24a0.js";import"./index-dcfd7a56.js";import"./transition-9c96bbcc.js";import"./dialog-62c01d30.js";function X(){const[m,h]=s.useState(""),{token:w}=B(t=>t.userInfo),i=T(),[c,n]=s.useState(!1),[f,p]=s.useState([]),[y,k]=s.useState([]),[r,b]=s.useState({minor:!1,major:!1}),[v,N]=s.useState([]),[g,S]=s.useState(null),[C,d]=s.useState({}),[F,j]=s.useState("");s.useEffect(()=>{_()},[]);const _=()=>{u.defaults.headers.common.Authorization=`Bearer ${w}`,u.get(route("registrar_student_list")).then(t=>{const{registrar_recordslist:o,categorize:a,statuses:x}=t.data;p(o),k(o),N(a)}),window.document.addEventListener("click",t=>{n(!1)}),$(document).on("keyup",t=>{t.keyCode==27&&n(!1)})},z=t=>{const o=t.target.value;if(o){let a=[...y];a=a.filter(x=>x.Student_ID.toString().includes(o)),p(a),n(!0)}else n(!1);h(o)},I=()=>{b({major:!1,minor:!0})},D=()=>{b({major:!0,minor:!1})},O=t=>{S(t.target.value)},A=()=>{d(o=>({...o,isVisible:!1}));const t={student_id:m,offense:r.minor?0:r.major?1:null,categorize_case:parseInt(g),others:F};i(P()),u.post(route("add_violations"),t).then(async o=>{if(o.data.error)i(q());else{const a=await i(W());console.log(a)}}).catch(o=>{console.log({error:o})})},V=()=>{d({title:"Confimation",textMessage:"Do you want to Apply?",isVisible:!0,cancelButton:()=>{d(t=>({...t,isVisible:!1}))},applyButton:A})},L=()=>{};return l(M,{children:[l("div",{className:"mx-8 mt-4",children:[l("div",{className:"mb-3 xl:w-96",children:[e("label",{htmlFor:"exampleFormControlInput1",className:"form-label inline-block mb-2 text-gray-700 uppercase text-xs font-bold",children:"student number"}),l("label",{className:"relative block",children:[e("span",{className:"sr-only",children:"Search"}),e("span",{className:"absolute inset-y-0 left-2 flex items-center pl-2",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-4 h-4",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})})}),e("input",{className:`placeholder:italic placeholder:text-slate-400 block bg-white w-full border \r
                border-slate-300 rounded-md py-2 pl-12 pr-3  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm`,value:m,placeholder:"Search for student number",type:"text",name:"student_id",onChange:z}),e("div",{className:`absolute w-full bg-white left-0 max-h-32 overflow-y-auto mt-1 rounded-sm ${c&&" border border-black"} shadow-sm`,children:l("ul",{className:"w-full",children:[c&&f.map((t,o)=>e("li",{className:"w-full py-2 px-3 flex flex-row",children:e("a",{className:"flex-1 text-sm font-semibold cursor-pointer",onClick:a=>{a.preventDefault(),h(t.Student_ID),console.log(t.Student_ID),n(!1)},children:t.Student_ID})},o)),f.length==0&&c&&e("li",{children:e("div",{className:"pl-4 py-3 text-slate-400 text-xs",children:"Student number does not exists."})})]})})]})]}),l("div",{className:"flex",children:[e("input",{id:"link-checkbox",type:"checkbox",value:0,onChange:I,checked:r.minor,className:`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 \r
            rounded focus:ring-blue-500 dark:focus:ring-blue-600 transition duration-200`}),e("label",{htmlFor:"link-checkbox",className:"ml-2 font-medium text-gray-900 text-xs uppercase",children:"minor offence"}),e("div",{className:"mx-3"}),e("input",{id:"link-checkbox1",type:"checkbox",value:1,onChange:D,checked:r.major,className:`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 \r
            rounded focus:ring-blue-500 dark:focus:ring-blue-600 transition duration-200`}),e("label",{htmlFor:"link-checkbox1",className:"ml-2   font-medium text-gray-900 text-xs uppercase",children:"major offence"})]}),l("div",{className:"flex my-4 flex-col",children:[e("label",{htmlFor:"exampleFormControlInput1",className:"form-label inline-block text-gray-700 uppercase text-xs font-bold",children:"Categorize case"}),e("div",{className:"xl:w-96",children:l("select",{onChange:O,defaultValue:0,className:`form-select appearance-none block w-full px-3 py-2 text-sm font-normal text-gray-700\r
                bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0\r
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none `,"aria-label":"Default select example",children:[e("option",{value:0,disabled:!0,className:"text-sm",children:"--------"}),v.map((t,o)=>e("option",{className:"text-sm",value:t.id,children:t.description},o))]})})]}),g==6&&l("div",{className:"mb-3 xl:w-96",children:[e("label",{htmlFor:"exampleFormControlInput1",className:"form-label inline-block mb-2 text-gray-700 uppercase text-xs font-bold",children:"Please Specify"}),e("textarea",{type:"text",onChange:t=>j(t.target.value),className:`placeholder:italic placeholder:text-slate-400 block bg-white w-full border \r
                border-slate-300 rounded-md py-1.5 pr-3  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm h-28`,id:"exampleFormControlInput1"})]}),e("button",{type:"button",className:`inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight \r
        uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none \r
        focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out`,onClick:V,children:"apply"}),e("button",{type:"button",className:`ml-3  inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight \r
         uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none \r
         focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out`,onClick:L,children:"cancel"})]}),e(E,{...C})]})}export{X as default};