const o=["January","February","March","April","May","June","July","August","September","October","November","December"];function s(a){var e=a||{},n=e.count||12,c=e.section,t=[],r,u;for(r=0;r<n;++r)u=o[Math.ceil(r)%12],t.push(u.substring(0,c));return t}export{s as months};