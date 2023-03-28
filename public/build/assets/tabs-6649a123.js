import{r as o,R as A}from"./app-6766c3e7.js";import{j as K,L as O,y as M,s as G,o as S,l as B,D as _,I as X,u as F,A as D,N as U,e as te,a as v,b as R,c as T,t as re}from"./transition-bb879344.js";import{s as ne}from"./DropdownMenu-38d94a6c.js";import{c as J,p as ae}from"./dialog-f7bb68c4.js";function le({onFocus:e}){let[t,r]=o.useState(!0);return t?A.createElement(J,{as:"button",type:"button",features:ae.Focusable,onFocus:n=>{n.preventDefault();let a,s=50;function u(){if(s--<=0){a&&cancelAnimationFrame(a);return}if(e()){r(!1),cancelAnimationFrame(a);return}a=requestAnimationFrame(u)}a=requestAnimationFrame(u)}}):null}const Q=o.createContext(null);function se(){return{groups:new Map,get(e,t){var r;let n=this.groups.get(e);n||(n=new Map,this.groups.set(e,n));let a=(r=n.get(t))!=null?r:0;n.set(t,a+1);let s=Array.from(n.keys()).indexOf(t);function u(){let g=n.get(t);g>1?n.set(t,g-1):n.delete(t)}return[s,u]}}}function ue({children:e}){let t=o.useRef(se());return o.createElement(Q.Provider,{value:t},e)}function V(e){let t=o.useContext(Q);if(!t)throw new Error("You must wrap your component in a <StableCollection>");let r=oe(),[n,a]=t.current.get(e,r);return o.useEffect(()=>a,[]),n}function oe(){var e,t,r;let n=(r=(t=(e=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)==null?void 0:e.ReactCurrentOwner)==null?void 0:t.current)!=null?r:null;if(!n)return Symbol();let a=[],s=n;for(;s;)a.push(s.index),s=s.return;return"$."+a.join(".")}var ie=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(ie||{}),ce=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(ce||{}),de=(e=>(e[e.SetSelectedIndex=0]="SetSelectedIndex",e[e.RegisterTab=1]="RegisterTab",e[e.UnregisterTab=2]="UnregisterTab",e[e.RegisterPanel=3]="RegisterPanel",e[e.UnregisterPanel=4]="UnregisterPanel",e))(de||{});let pe={[0](e,t){var r;let n=D(e.tabs,c=>c.current),a=D(e.panels,c=>c.current),s=n.filter(c=>{var E;return!((E=c.current)!=null&&E.hasAttribute("disabled"))}),u={...e,tabs:n,panels:a};if(t.index<0||t.index>n.length-1){let c=F(Math.sign(t.index-e.selectedIndex),{[-1]:()=>1,[0]:()=>F(Math.sign(t.index),{[-1]:()=>0,[0]:()=>0,[1]:()=>1}),[1]:()=>0});return s.length===0?u:{...u,selectedIndex:F(c,{[0]:()=>n.indexOf(s[0]),[1]:()=>n.indexOf(s[s.length-1])})}}let g=n.slice(0,t.index),I=[...n.slice(t.index),...g].find(c=>s.includes(c));if(!I)return u;let b=(r=n.indexOf(I))!=null?r:e.selectedIndex;return b===-1&&(b=e.selectedIndex),{...u,selectedIndex:b}},[1](e,t){var r;if(e.tabs.includes(t.tab))return e;let n=e.tabs[e.selectedIndex],a=D([...e.tabs,t.tab],u=>u.current),s=(r=a.indexOf(n))!=null?r:e.selectedIndex;return s===-1&&(s=e.selectedIndex),{...e,tabs:a,selectedIndex:s}},[2](e,t){return{...e,tabs:e.tabs.filter(r=>r!==t.tab)}},[3](e,t){return e.panels.includes(t.panel)?e:{...e,panels:D([...e.panels,t.panel],r=>r.current)}},[4](e,t){return{...e,panels:e.panels.filter(r=>r!==t.panel)}}},j=o.createContext(null);j.displayName="TabsDataContext";function C(e){let t=o.useContext(j);if(t===null){let r=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,C),r}return t}let z=o.createContext(null);z.displayName="TabsActionsContext";function Y(e){let t=o.useContext(z);if(t===null){let r=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Y),r}return t}function fe(e,t){return F(t.type,pe,e,t)}let be=o.Fragment;function xe(e,t){let{defaultIndex:r=0,vertical:n=!1,manual:a=!1,onChange:s,selectedIndex:u=null,...g}=e;const I=n?"vertical":"horizontal",b=a?"manual":"auto";let c=u!==null,E=M(t),[i,m]=o.useReducer(fe,{selectedIndex:u??r,tabs:[],panels:[]}),p=o.useMemo(()=>({selectedIndex:i.selectedIndex}),[i.selectedIndex]),L=G(s||(()=>{})),k=G(i.tabs),f=o.useMemo(()=>({orientation:I,activation:b,...i}),[I,b,i]),x=S(d=>(m({type:1,tab:d}),()=>m({type:2,tab:d}))),y=S(d=>(m({type:3,panel:d}),()=>m({type:4,panel:d}))),$=S(d=>{w.current!==d&&L.current(d),c||m({type:0,index:d})}),w=G(c?e.selectedIndex:i.selectedIndex),W=o.useMemo(()=>({registerTab:x,registerPanel:y,change:$}),[]);B(()=>{m({type:0,index:u??r})},[u]),B(()=>{if(w.current===void 0||i.tabs.length<=0)return;let d=D(i.tabs,h=>h.current);d.some((h,l)=>i.tabs[l]!==h)&&$(d.indexOf(i.tabs[w.current]))});let q={ref:E};return A.createElement(ue,null,A.createElement(z.Provider,{value:W},A.createElement(j.Provider,{value:f},f.tabs.length<=0&&A.createElement(le,{onFocus:()=>{var d,h;for(let l of k.current)if(((d=l.current)==null?void 0:d.tabIndex)===0)return(h=l.current)==null||h.focus(),!0;return!1}}),_({ourProps:q,theirProps:g,slot:p,defaultTag:be,name:"Tabs"}))))}let me="div";function ge(e,t){let{orientation:r,selectedIndex:n}=C("Tab.List"),a=M(t);return _({ourProps:{ref:a,role:"tablist","aria-orientation":r},theirProps:e,slot:{selectedIndex:n},defaultTag:me,name:"Tabs.List"})}let ve="button";function Te(e,t){var r,n;let a=X(),{id:s=`headlessui-tabs-tab-${a}`,...u}=e,{orientation:g,activation:I,selectedIndex:b,tabs:c,panels:E}=C("Tab"),i=Y("Tab"),m=C("Tab"),p=o.useRef(null),L=M(p,t);B(()=>i.registerTab(p),[i,p]);let k=V("tabs"),f=c.indexOf(p);f===-1&&(f=k);let x=f===b,y=S(l=>{var P;let N=l();if(N===U.Success&&I==="auto"){let Z=(P=te(p))==null?void 0:P.activeElement,H=m.tabs.findIndex(ee=>ee.current===Z);H!==-1&&i.change(H)}return N}),$=S(l=>{let P=c.map(N=>N.current).filter(Boolean);if(l.key===v.Space||l.key===v.Enter){l.preventDefault(),l.stopPropagation(),i.change(f);return}switch(l.key){case v.Home:case v.PageUp:return l.preventDefault(),l.stopPropagation(),y(()=>R(P,T.First));case v.End:case v.PageDown:return l.preventDefault(),l.stopPropagation(),y(()=>R(P,T.Last))}if(y(()=>F(g,{vertical(){return l.key===v.ArrowUp?R(P,T.Previous|T.WrapAround):l.key===v.ArrowDown?R(P,T.Next|T.WrapAround):U.Error},horizontal(){return l.key===v.ArrowLeft?R(P,T.Previous|T.WrapAround):l.key===v.ArrowRight?R(P,T.Next|T.WrapAround):U.Error}}))===U.Success)return l.preventDefault()}),w=o.useRef(!1),W=S(()=>{var l;w.current||(w.current=!0,(l=p.current)==null||l.focus(),i.change(f),re(()=>{w.current=!1}))}),q=S(l=>{l.preventDefault()}),d=o.useMemo(()=>({selected:x}),[x]),h={ref:L,onKeyDown:$,onMouseDown:q,onClick:W,id:s,role:"tab",type:ne(e,p),"aria-controls":(n=(r=E[f])==null?void 0:r.current)==null?void 0:n.id,"aria-selected":x,tabIndex:x?0:-1};return _({ourProps:h,theirProps:u,slot:d,defaultTag:ve,name:"Tabs.Tab"})}let Ie="div";function Pe(e,t){let{selectedIndex:r}=C("Tab.Panels"),n=M(t),a=o.useMemo(()=>({selectedIndex:r}),[r]);return _({ourProps:{ref:n},theirProps:e,slot:a,defaultTag:Ie,name:"Tabs.Panels"})}let Ee="div",he=K.RenderStrategy|K.Static;function ye(e,t){var r,n,a,s;let u=X(),{id:g=`headlessui-tabs-panel-${u}`,tabIndex:I=0,...b}=e,{selectedIndex:c,tabs:E,panels:i}=C("Tab.Panel"),m=Y("Tab.Panel"),p=o.useRef(null),L=M(p,t);B(()=>m.registerPanel(p),[m,p]);let k=V("panels"),f=i.indexOf(p);f===-1&&(f=k);let x=f===c,y=o.useMemo(()=>({selected:x}),[x]),$={ref:L,id:g,role:"tabpanel","aria-labelledby":(n=(r=E[f])==null?void 0:r.current)==null?void 0:n.id,tabIndex:x?I:-1};return!x&&((a=b.unmount)==null||a)&&!((s=b.static)!=null&&s)?A.createElement(J,{as:"span",...$}):_({ourProps:$,theirProps:b,slot:y,defaultTag:Ee,features:he,visible:x,name:"Tabs.Panel"})}let $e=O(Te),we=O(xe),Se=O(ge),Re=O(Pe),Ae=O(ye),Fe=Object.assign($e,{Group:we,List:Se,Panels:Re,Panel:Ae});export{Fe as r};