import{r as u,R}from"./app-93a8ba8d.js";import{c as L,d as J,p as re,j as K,L as O,y as _,s as G,o as S,D as N,I as Q,e as M,f as F,N as B,g as ne,h as v,i as A,k as T,m as ae}from"./index-a4f8be24.js";function X(e){var t;if(e.type)return e.type;let r=(t=e.as)!=null?t:"button";if(typeof r=="string"&&r.toLowerCase()==="button")return"button"}function le(e,t){let[r,n]=u.useState(()=>X(e));return L(()=>{n(X(e))},[e.type,e.as]),L(()=>{r||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&n("button")},[r,t]),r}function se({onFocus:e}){let[t,r]=u.useState(!0);return t?R.createElement(J,{as:"button",type:"button",features:re.Focusable,onFocus:n=>{n.preventDefault();let a,s=50;function o(){if(s--<=0){a&&cancelAnimationFrame(a);return}if(e()){r(!1),cancelAnimationFrame(a);return}a=requestAnimationFrame(o)}a=requestAnimationFrame(o)}}):null}const V=u.createContext(null);function ue(){return{groups:new Map,get(e,t){var r;let n=this.groups.get(e);n||(n=new Map,this.groups.set(e,n));let a=(r=n.get(t))!=null?r:0;n.set(t,a+1);let s=Array.from(n.keys()).indexOf(t);function o(){let m=n.get(t);m>1?n.set(t,m-1):n.delete(t)}return[s,o]}}}function oe({children:e}){let t=u.useRef(ue());return u.createElement(V.Provider,{value:t},e)}function Z(e){let t=u.useContext(V);if(!t)throw new Error("You must wrap your component in a <StableCollection>");let r=ie(),[n,a]=t.current.get(e,r);return u.useEffect(()=>a,[]),n}function ie(){var e,t,r;let n=(r=(t=(e=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)==null?void 0:e.ReactCurrentOwner)==null?void 0:t.current)!=null?r:null;if(!n)return Symbol();let a=[],s=n;for(;s;)a.push(s.index),s=s.return;return"$."+a.join(".")}var ce=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(ce||{}),de=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(de||{}),pe=(e=>(e[e.SetSelectedIndex=0]="SetSelectedIndex",e[e.RegisterTab=1]="RegisterTab",e[e.UnregisterTab=2]="UnregisterTab",e[e.RegisterPanel=3]="RegisterPanel",e[e.UnregisterPanel=4]="UnregisterPanel",e))(pe||{});let fe={[0](e,t){var r;let n=F(e.tabs,c=>c.current),a=F(e.panels,c=>c.current),s=n.filter(c=>{var E;return!((E=c.current)!=null&&E.hasAttribute("disabled"))}),o={...e,tabs:n,panels:a};if(t.index<0||t.index>n.length-1){let c=M(Math.sign(t.index-e.selectedIndex),{[-1]:()=>1,[0]:()=>M(Math.sign(t.index),{[-1]:()=>0,[0]:()=>0,[1]:()=>1}),[1]:()=>0});return s.length===0?o:{...o,selectedIndex:M(c,{[0]:()=>n.indexOf(s[0]),[1]:()=>n.indexOf(s[s.length-1])})}}let m=n.slice(0,t.index),I=[...n.slice(t.index),...m].find(c=>s.includes(c));if(!I)return o;let b=(r=n.indexOf(I))!=null?r:e.selectedIndex;return b===-1&&(b=e.selectedIndex),{...o,selectedIndex:b}},[1](e,t){var r;if(e.tabs.includes(t.tab))return e;let n=e.tabs[e.selectedIndex],a=F([...e.tabs,t.tab],o=>o.current),s=(r=a.indexOf(n))!=null?r:e.selectedIndex;return s===-1&&(s=e.selectedIndex),{...e,tabs:a,selectedIndex:s}},[2](e,t){return{...e,tabs:e.tabs.filter(r=>r!==t.tab)}},[3](e,t){return e.panels.includes(t.panel)?e:{...e,panels:F([...e.panels,t.panel],r=>r.current)}},[4](e,t){return{...e,panels:e.panels.filter(r=>r!==t.panel)}}},j=u.createContext(null);j.displayName="TabsDataContext";function C(e){let t=u.useContext(j);if(t===null){let r=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,C),r}return t}let z=u.createContext(null);z.displayName="TabsActionsContext";function H(e){let t=u.useContext(z);if(t===null){let r=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,H),r}return t}function be(e,t){return M(t.type,fe,e,t)}let xe=u.Fragment;function ge(e,t){let{defaultIndex:r=0,vertical:n=!1,manual:a=!1,onChange:s,selectedIndex:o=null,...m}=e;const I=n?"vertical":"horizontal",b=a?"manual":"auto";let c=o!==null,E=_(t),[i,g]=u.useReducer(be,{selectedIndex:o??r,tabs:[],panels:[]}),p=u.useMemo(()=>({selectedIndex:i.selectedIndex}),[i.selectedIndex]),k=G(s||(()=>{})),D=G(i.tabs),f=u.useMemo(()=>({orientation:I,activation:b,...i}),[I,b,i]),x=S(d=>(g({type:1,tab:d}),()=>g({type:2,tab:d}))),y=S(d=>(g({type:3,panel:d}),()=>g({type:4,panel:d}))),$=S(d=>{w.current!==d&&k.current(d),c||g({type:0,index:d})}),w=G(c?e.selectedIndex:i.selectedIndex),W=u.useMemo(()=>({registerTab:x,registerPanel:y,change:$}),[]);L(()=>{g({type:0,index:o??r})},[o]),L(()=>{if(w.current===void 0||i.tabs.length<=0)return;let d=F(i.tabs,P=>P.current);d.some((P,l)=>i.tabs[l]!==P)&&$(d.indexOf(i.tabs[w.current]))});let q={ref:E};return R.createElement(oe,null,R.createElement(z.Provider,{value:W},R.createElement(j.Provider,{value:f},f.tabs.length<=0&&R.createElement(se,{onFocus:()=>{var d,P;for(let l of D.current)if(((d=l.current)==null?void 0:d.tabIndex)===0)return(P=l.current)==null||P.focus(),!0;return!1}}),N({ourProps:q,theirProps:m,slot:p,defaultTag:xe,name:"Tabs"}))))}let me="div";function ve(e,t){let{orientation:r,selectedIndex:n}=C("Tab.List"),a=_(t);return N({ourProps:{ref:a,role:"tablist","aria-orientation":r},theirProps:e,slot:{selectedIndex:n},defaultTag:me,name:"Tabs.List"})}let Te="button";function Ie(e,t){var r,n;let a=Q(),{id:s=`headlessui-tabs-tab-${a}`,...o}=e,{orientation:m,activation:I,selectedIndex:b,tabs:c,panels:E}=C("Tab"),i=H("Tab"),g=C("Tab"),p=u.useRef(null),k=_(p,t);L(()=>i.registerTab(p),[i,p]);let D=Z("tabs"),f=c.indexOf(p);f===-1&&(f=D);let x=f===b,y=S(l=>{var h;let U=l();if(U===B.Success&&I==="auto"){let ee=(h=ne(p))==null?void 0:h.activeElement,Y=g.tabs.findIndex(te=>te.current===ee);Y!==-1&&i.change(Y)}return U}),$=S(l=>{let h=c.map(U=>U.current).filter(Boolean);if(l.key===v.Space||l.key===v.Enter){l.preventDefault(),l.stopPropagation(),i.change(f);return}switch(l.key){case v.Home:case v.PageUp:return l.preventDefault(),l.stopPropagation(),y(()=>A(h,T.First));case v.End:case v.PageDown:return l.preventDefault(),l.stopPropagation(),y(()=>A(h,T.Last))}if(y(()=>M(m,{vertical(){return l.key===v.ArrowUp?A(h,T.Previous|T.WrapAround):l.key===v.ArrowDown?A(h,T.Next|T.WrapAround):B.Error},horizontal(){return l.key===v.ArrowLeft?A(h,T.Previous|T.WrapAround):l.key===v.ArrowRight?A(h,T.Next|T.WrapAround):B.Error}}))===B.Success)return l.preventDefault()}),w=u.useRef(!1),W=S(()=>{var l;w.current||(w.current=!0,(l=p.current)==null||l.focus(),i.change(f),ae(()=>{w.current=!1}))}),q=S(l=>{l.preventDefault()}),d=u.useMemo(()=>({selected:x}),[x]),P={ref:k,onKeyDown:$,onMouseDown:q,onClick:W,id:s,role:"tab",type:le(e,p),"aria-controls":(n=(r=E[f])==null?void 0:r.current)==null?void 0:n.id,"aria-selected":x,tabIndex:x?0:-1};return N({ourProps:P,theirProps:o,slot:d,defaultTag:Te,name:"Tabs.Tab"})}let he="div";function Ee(e,t){let{selectedIndex:r}=C("Tab.Panels"),n=_(t),a=u.useMemo(()=>({selectedIndex:r}),[r]);return N({ourProps:{ref:n},theirProps:e,slot:a,defaultTag:he,name:"Tabs.Panels"})}let Pe="div",ye=K.RenderStrategy|K.Static;function $e(e,t){var r,n,a,s;let o=Q(),{id:m=`headlessui-tabs-panel-${o}`,tabIndex:I=0,...b}=e,{selectedIndex:c,tabs:E,panels:i}=C("Tab.Panel"),g=H("Tab.Panel"),p=u.useRef(null),k=_(p,t);L(()=>g.registerPanel(p),[g,p]);let D=Z("panels"),f=i.indexOf(p);f===-1&&(f=D);let x=f===c,y=u.useMemo(()=>({selected:x}),[x]),$={ref:k,id:m,role:"tabpanel","aria-labelledby":(n=(r=E[f])==null?void 0:r.current)==null?void 0:n.id,tabIndex:x?I:-1};return!x&&((a=b.unmount)==null||a)&&!((s=b.static)!=null&&s)?R.createElement(J,{as:"span",...$}):N({ourProps:$,theirProps:b,slot:y,defaultTag:Pe,features:ye,visible:x,name:"Tabs.Panel"})}let we=O(Ie),Se=O(ge),Ae=O(ve),Re=O(Ee),Le=O($e),De=Object.assign(we,{Group:Se,List:Ae,Panels:Re,Panel:Le});export{De as r};
