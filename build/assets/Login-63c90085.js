import{j as e,a,r as h,K as u,F as f,n as b}from"./app-2d0da2b0.js";import"./index-a7c3ff1c.js";import"./index-dcfd7a56.js";function g({display:l}){return e("div",{className:`loader absolute z-10 left-0 top-0 !bg-black/50 ${!l&&"d-none"}`,children:a("div",{className:"loading-animation ",children:[e("div",{}),e("div",{}),e("div",{}),e("div",{}),e("div",{children:e("img",{src:"assets/image/logo.png",alt:"bestlink-logo"})})]})})}function y(){const[l,d]=h.useState(!1),{setData:t,data:i,post:m,processing:n,errors:r}=u({email:"",password:""}),c=()=>{d(s=>!s)},p=s=>{s.preventDefault(),m(route("login"))},o=s=>{t(s.target.name,s.target.value)};return a(f,{children:[e(b,{children:e("title",{children:"Verify Login"})}),e("div",{className:"loginContainer",children:a("div",{className:"d-lg-flex position-relative",children:[a("div",{className:"d-flex logoContainer",children:[e("div",{className:"polygon1 position-relative"}),e("div",{className:"polygon2"})]}),e("div",{className:"form-container d-flex justify-content-center w-100 p-3 p-lg-5",children:a("div",{className:"m-auto",children:[a("div",{className:"form-header1 ps-2 mb-5",children:[e("h1",{className:"header1 fw-bold fs-1 m-0",children:"BCP"}),e("h1",{className:"header2 fw-bold fs-1 m-0",children:"PREFECT OF DISCIPLINE"})]}),a("form",{onSubmit:p,children:[e("span",{className:"loginLineBreak my-4"}),a("div",{className:"mb-3",children:[e("label",{htmlFor:"exampleInputEmail1",className:"form-label fw-semibold fs-6",children:"Email"}),e("input",{type:"email",className:"inputField input-form form-control px-3 fs-6 fw-normal",id:"exampleInputEmail1",name:"email",value:i.email,"aria-describedby":"emailHelp",onChange:o,required:!0})]}),e("div",{className:"mb-3",children:e("p",{className:"errorInput",children:r.email})}),a("div",{className:"mb-3",children:[e("label",{htmlFor:"inputPassword",className:"form-label fw-semibold fs-6",children:"Password"}),e("div",{id:"login",children:a("div",{className:"passwordContainer",children:[e("input",{type:l?"text":"password",className:"inputField input-form form-control px-3 fs-6 fw-normal",id:"inputPassword",value:i.password,name:"password",onChange:o,required:!0}),e("i",{className:`fa-solid ${l?"fa-eye":"fa-eye-slash"}`,onClick:c,id:"passwordIconId"})]})})]}),e("div",{className:"mb-3",children:e("p",{className:"errorInput",children:r.password})}),e("button",{disabled:n,type:"submit",className:"buttonTemplate sumbit-button btn rounded-2 w-100 mt-3",children:"Log in"})]})]})})]})}),e(g,{display:n})]})}export{y as default};
