import{R as s,a as r}from"./index-041a5b5b.js";import{r as S}from"./app-c7618102.js";function n(e=s){const t=e===s?r:()=>S.useContext(e);return function(){const{store:E}=t();return E}}const R=n();function u(e=s){const t=e===s?R:n(e);return function(){return t().dispatch}}const O=u(),o={USER_INFO:"USER_INFO",USER_INFO_SUCCESS:"USER_INFO_SUCCESS",USER_INFO_ERROR:"USER_INFO_ERROR",USER_TOKEN:"USER_TOKEN",SET_LOADER:"SET_LOADER",USER_LOGOUT:"USER_LOGOUT",CASE_PARTIES:"CASE_PARTIES",CATEGORY_CASE:"CATEGORY_CASE"},c=e=>t=>{t({type:o.SET_LOADER,loading:!0,display:!0})},l=(e=2e3)=>t=>new Promise(a=>{setTimeout(()=>{t({type:o.SET_LOADER,loading:!1,display:!0}),setTimeout(()=>(t({type:o.SET_LOADER,loading:!1,display:!1}),a(!0)),e)},e)}),A=e=>t=>{t({type:o.SET_LOADER,loading:!1,display:!1})};export{o as A,l as a,A as b,c as l,O as u};