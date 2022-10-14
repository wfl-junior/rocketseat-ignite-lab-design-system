var z=Object.defineProperty;var s=(e,n)=>z(e,"name",{value:n,configurable:!0});import{r as l}from"./index.2c00b9d9.js";import{a as O,j as v}from"./jsx-runtime.d14e90d7.js";function f(){return f=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},f.apply(this,arguments)}s(f,"_extends");function _(e,n){typeof e=="function"?e(n):e!=null&&(e.current=n)}s(_,"$6ed0406888f73fc4$var$setRef");function w(...e){return n=>e.forEach(r=>_(r,n))}s(w,"$6ed0406888f73fc4$export$43e446d32b3d21af");function R(...e){return l.exports.useCallback(w(...e),e)}s(R,"$6ed0406888f73fc4$export$c7b2cbe3552a0d05");const V=l.exports.forwardRef((e,n)=>{const{children:r,...t}=e,o=l.exports.Children.toArray(r),i=o.find(I);if(i){const c=i.props.children,a=o.map(u=>u===i?l.exports.Children.count(c)>1?l.exports.Children.only(null):l.exports.isValidElement(c)?c.props.children:null:u);return l.exports.createElement(h,f({},t,{ref:n}),l.exports.isValidElement(c)?l.exports.cloneElement(c,void 0,a):null)}return l.exports.createElement(h,f({},t,{ref:n}),r)});V.displayName="Slot";const h=l.exports.forwardRef((e,n)=>{const{children:r,...t}=e;return l.exports.isValidElement(r)?l.exports.cloneElement(r,{...N(t,r.props),ref:w(n,r.ref)}):l.exports.Children.count(r)>1?l.exports.Children.only(null):null});h.displayName="SlotClone";const B=s(({children:e})=>l.exports.createElement(l.exports.Fragment,null,e),"$5e63c961fc1ce211$export$d9f1ccf0bdb05d45");function I(e){return l.exports.isValidElement(e)&&e.type===B}s(I,"$5e63c961fc1ce211$var$isSlottable");function N(e,n){const r={...n};for(const t in n){const o=e[t],i=n[t];/^on[A-Z]/.test(t)?r[t]=(...a)=>{i==null||i(...a),o==null||o(...a)}:t==="style"?r[t]={...o,...i}:t==="className"&&(r[t]=[o,i].filter(Boolean).join(" "))}return{...e,...r}}s(N,"$5e63c961fc1ce211$var$mergeProps");var S=l.exports.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),H=s(function(n,r,t){var o=t.get(n);return o?o(r):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)},"renderPathForWeight");function C(e,n){if(e==null)return{};var r={},t=Object.keys(e),o,i;for(i=0;i<t.length;i++)o=t[i],!(n.indexOf(o)>=0)&&(r[o]=e[o]);return r}s(C,"_objectWithoutPropertiesLoose");var b=l.exports.forwardRef(function(e,n){var r=e.alt,t=e.color,o=e.size,i=e.weight,c=e.mirrored,a=e.children,u=e.renderPath,y=C(e,["alt","color","size","weight","mirrored","children","renderPath"]),d=l.exports.useContext(S),x=d.color,p=x===void 0?"currentColor":x,m=d.size,g=d.weight,E=g===void 0?"regular":g,$=d.mirrored,P=$===void 0?!1:$,j=C(d,["color","size","weight","mirrored"]);return O("svg",{...Object.assign({ref:n,xmlns:"http://www.w3.org/2000/svg",width:o!=null?o:m,height:o!=null?o:m,fill:t!=null?t:p,viewBox:"0 0 256 256",transform:c||P?"scale(-1, 1)":void 0},j,y),children:[!!r&&v("title",{children:r}),a,v("rect",{width:"256",height:"256",fill:"none"}),u(i!=null?i:E,t!=null?t:p)]})});b.displayName="IconBase";const k=b;export{V as $,k as I,f as _,R as a,H as r};
//# sourceMappingURL=IconBase.esm.c2f3759f.js.map