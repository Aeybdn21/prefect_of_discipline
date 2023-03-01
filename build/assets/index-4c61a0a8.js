import{r as l,b as _}from"./app-93a8ba8d.js";import"./index-dcfd7a56.js";var h={},j={get exports(){return h},set exports(t){h=t}},V={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=l;function D(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var O=typeof Object.is=="function"?Object.is:D,k=f.useState,q=f.useEffect,z=f.useLayoutEffect,B=f.useDebugValue;function W(t,e){var u=e(),o=k({inst:{value:u,getSnapshot:e}}),n=o[0].inst,r=o[1];return z(function(){n.value=u,n.getSnapshot=e,p(n)&&r({inst:n})},[t,u,e]),q(function(){return p(n)&&r({inst:n}),t(function(){p(n)&&r({inst:n})})},[t]),B(u),u}function p(t){var e=t.getSnapshot;t=t.value;try{var u=e();return!O(t,u)}catch{return!0}}function N(t,e){return e()}var U=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?N:W;V.useSyncExternalStore=f.useSyncExternalStore!==void 0?f.useSyncExternalStore:U;(function(t){t.exports=V})(j);var E={},H={get exports(){return E},set exports(t){E=t}},$={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v=l,I=h;function L(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var M=typeof Object.is=="function"?Object.is:L,A=I.useSyncExternalStore,F=v.useRef,G=v.useEffect,J=v.useMemo,K=v.useDebugValue;$.useSyncExternalStoreWithSelector=function(t,e,u,o,n){var r=F(null);if(r.current===null){var c={hasValue:!1,value:null};r.current=c}else c=r.current;r=J(function(){function S(s){if(!m){if(m=!0,x=s,s=o(s),n!==void 0&&c.hasValue){var a=c.value;if(n(a,s))return d=a}return d=s}if(a=d,M(x,s))return a;var g=o(s);return n!==void 0&&n(a,g)?a:(x=s,d=g)}var m=!1,x,d,w=u===void 0?null:u;return[function(){return S(e())},w===null?void 0:function(){return S(w())}]},[e,u,o,n]);var i=A(t,r[0],r[1]);return G(function(){c.hasValue=!0,c.value=i},[i]),K(i),i};(function(t){t.exports=$})(H);function P(t){t()}let C=P;const Q=t=>C=t,nt=()=>C,y=l.createContext(null);function T(){return l.useContext(y)}const X=()=>{throw new Error("uSES not initialized!")};let R=X;const Y=t=>{R=t},Z=(t,e)=>t===e;function b(t=y){const e=t===y?T:()=>l.useContext(t);return function(o,n=Z){const{store:r,subscription:c,getServerState:i}=e(),S=R(c.addNestedSub,r.getState,i||r.getState,o,n);return l.useDebugValue(S),S}}const rt=b();Y(E.useSyncExternalStoreWithSelector);Q(_.unstable_batchedUpdates);export{y as R,T as a,nt as g,rt as u};
