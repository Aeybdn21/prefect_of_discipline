import{r as i,j as e,a as t}from"./app-2dcd630c.js";import{C as s}from"./auto-d3cf1122.js";import{months as n}from"./Utils-bd3f3493.js";function m(){i.useEffect(()=>{a()},[]);const a=()=>{const l={labels:n({count:7}),datasets:[{label:"My First Dataset",data:[65,59,80,81,56,55,40],fill:!1,borderColor:"rgb(75, 192, 192)",tension:.1}]};new s(document.getElementById("acquisitions"),{type:"line",data:l}),new s(document.getElementById("acquisitions1"),{type:"line",data:l})};return e("section",{className:"home-section mx-3 bg-light rounded shadow overflow-hidden",children:t("div",{className:"flex flex-row flex-1 flex-wrap",children:[e("div",{className:"flex-1 p-9",children:t("div",{className:"relative w-full h-96 items-center flex flex-col justify-center",children:[e("canvas",{id:"acquisitions"}),e("div",{className:"absolute text-red-500 text-7xl",children:"10"}),e("div",{className:"text-3xl mt-3",children:"Daily Report"})]})}),e("div",{className:"flex-1 p-9",children:t("div",{className:"w-full h-96 items-center flex flex-col justify-center",children:[e("canvas",{id:"acquisitions1"}),e("div",{className:"absolute text-red-500 text-7xl",children:"30"}),e("div",{className:"text-3xl mt-3",children:"Monthly Report"})]})})]})})}export{m as default};
