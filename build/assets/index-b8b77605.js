const e={USER_INFO:"USER_INFO",USER_INFO_SUCCESS:"USER_INFO_SUCCESS",USER_INFO_ERROR:"USER_INFO_ERROR",USER_TOKEN:"USER_TOKEN",SET_LOADER:"SET_LOADER",USER_LOGOUT:"USER_LOGOUT",CASE_PARTIES:"CASE_PARTIES",CATEGORY_CASE:"CATEGORY_CASE"},a=S=>E=>{E({type:e.SET_LOADER,loading:!0,display:!0})},_=(S=2e3)=>E=>new Promise(R=>{setTimeout(()=>{E({type:e.SET_LOADER,loading:!1,display:!0}),setTimeout(()=>(E({type:e.SET_LOADER,loading:!1,display:!1}),R(!0)),S)},S)}),s=S=>E=>{E({type:e.SET_LOADER,loading:!1,display:!1})};export{e as A,_ as a,s as b,a as l};
