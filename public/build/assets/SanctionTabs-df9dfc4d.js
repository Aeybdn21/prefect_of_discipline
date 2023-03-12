import{r as n,c as i,a,F as V,j as t}from"./app-6766c3e7.js";import{M as B}from"./ModalNew-09a2d76a.js";import{u as T}from"./index-d88e2845.js";import{l as z,a as D,b as E}from"./index-b8b77605.js";import{u as O}from"./useDispatch-07221b34.js";import"./transition-bb879344.js";import"./dialog-f7bb68c4.js";import"./index-dcfd7a56.js";function R(){const c=O(),{token:u}=T(e=>e.userInfo),[r,o]=n.useState(!1),[m,p]=n.useState([]),[h,x]=n.useState([]),[g,f]=n.useState(""),[y,w]=n.useState([]),[b,S]=n.useState(null),[N,d]=n.useState({}),[v,k]=n.useState(null),[C,_]=n.useState("");n.useEffect(()=>{I()},[r]);const F=e=>{const s=e.target.value;if(s){let l=[...h];l=l.filter(M=>M.student_id.toString().includes(s)),p(l),o(!0)}else o(!1);f(s)},I=()=>{i.defaults.headers.common.Authorization=`Bearer ${u}`,i.get(route("registrar_student_list")).then(e=>{const{student_record:s,sanctions:l}=e.data;p(s),x(s),w(l)}),window.document.addEventListener("click",e=>{o(!1)}),$(document).on("keyup",e=>{e.keyCode==27&&o(!1)})},A=e=>{S(parseInt(e.target.value))},j=()=>{d(s=>({...s,isVisible:!1}));const e={student_refid:v,sanction_id:b,others:C};i.defaults.headers.common.Authorization=`Bearer ${u}`,c(z()),i.post(route("add_sanctions"),e).then(async s=>{s.data.error?c(E()):await c(D())})},L=()=>{d({title:"Confimation",textMessage:"Do you want to Apply?",isVisible:!0,cancelButton:()=>{d(e=>({...e,isVisible:!1}))},applyButton:j})};return a(V,{children:[t("div",{className:"mx-8 mt-4",children:t("div",{className:"flex",children:a("form",{className:"mb-3 xl:w-96",children:[t("label",{className:"form-label inline-block text-gray-700 uppercase text-xs font-bold",children:"Student number"}),a("label",{className:"relative block",children:[t("span",{className:"sr-only",children:"Search"}),t("span",{className:"absolute inset-y-0 left-2 flex items-center pl-2",children:t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-4 h-4",children:t("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})})}),t("input",{required:!0,className:`placeholder:italic placeholder:text-slate-400 block bg-white w-full border \r
                  border-slate-300 rounded-md py-2 pl-12 pr-3  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm`,value:g,placeholder:"Search for student number",type:"text",name:"student_id",onChange:F}),t("div",{className:`absolute w-full bg-white left-0 max-h-32 overflow-y-auto mt-1 rounded-sm ${r&&" border border-black"} shadow-sm`,children:a("ul",{className:"w-full",children:[r&&m.map((e,s)=>t("li",{className:"w-full py-2 px-3 flex flex-row",children:t("a",{className:"flex-1 text-sm font-semibold cursor-pointer",onClick:()=>{f(e.student_id),k(e.id),o(!1)},children:e.student_id})},s)),m.length==0&&r&&t("li",{children:t("div",{className:"pl-4 py-3 text-slate-400 text-xs",children:"Student number does not exists."})})]})})]}),a("div",{className:"flex my-4 flex-col",children:[t("label",{htmlFor:"exampleFormControlInput1",className:"form-label inline-block text-gray-700 uppercase text-xs font-bold",children:"Sanctions"}),t("div",{className:"xl:w-96",children:a("select",{required:!0,onChange:A,defaultValue:0,className:`form-select appearance-none block w-full px-3 py-2 text-sm font-normal text-gray-700\r
                    bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0\r
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none `,"aria-label":"Default select example",children:[t("option",{value:0,disabled:!0,className:"text-sm",children:"--------"}),y.map((e,s)=>t("option",{className:"text-sm",value:e.id,children:e.description},s))]})})]}),b==4&&a("div",{className:"mb-3 xl:w-96",children:[t("label",{htmlFor:"exampleFormControlInput1",className:"form-label inline-block mb-2 text-gray-700 uppercase text-xs font-bold",children:"Please Specify"}),t("textarea",{type:"text",onChange:e=>_(e.target.value),className:`placeholder:italic placeholder:text-slate-400 block bg-white w-full border \r
                    border-slate-300 rounded-md py-2 pr-3  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm h-28`,id:"exampleFormControlInput1"})]}),t("button",{type:"button",className:`inline-flex uppercase \r
                  justify-center rounded-md border border-transparent bg-green-500 px-4 py-2 \r
                  text-sm font-medium text-white hover:bg-green-400 focus:outline-none\r
                  focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 shadow-sm`,onClick:L,children:"Apply"}),t("button",{type:"button",className:`ml-2 inline-flex uppercase \r
                  justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 \r
                  text-sm font-medium text-white hover:bg-red-400 focus:outline-none\r
                  focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 shadow-sm`,children:"cancel"})]})})}),t(B,{...N})]})}export{R as default};
