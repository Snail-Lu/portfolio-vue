import"./index.457cee41.js";/* empty css                   *//* empty css                    *//* empty css                */import{o as i,m as d,D as c,d as w,f as V,k as p,a as s,w as u,u as x,ae as P,F as $,ah as k,Y as y,ab as B}from"./elementPlus.d15cb521.js";/*! Element Plus Icons Vue v2.0.10 */var C=(a,n)=>{let l=a.__vccOpts||a;for(let[o,e]of n)l[o]=e;return l},E={name:"Plus"},U={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},I=c("path",{fill:"currentColor",d:"M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"},null,-1),b=[I];function D(a,n,l,o,e,_){return i(),d("svg",U,b)}var F=C(E,[["render",D],["__file","plus.vue"]]);const H=["src"],O=w({__name:"Uploader",props:{modelValue:{type:Array,default:()=>[]}},setup(a){const l=V(a.modelValue),o=p(""),e=p(!1),_=(t,r)=>{console.log(t,r)},m=t=>{o.value=t.url,e.value=!0};return(t,r)=>{const v=k,f=y,g=B;return i(),d($,null,[s(f,P({"file-list":l,"on-preview":m,"on-remove":_},t.$attrs),{default:u(()=>[s(v,null,{default:u(()=>[s(x(F))]),_:1})]),_:1},16,["file-list"]),s(g,{modelValue:e.value,"onUpdate:modelValue":r[0]||(r[0]=h=>e.value=h)},{default:u(()=>[c("img",{"w-full":"",src:o.value,alt:"Preview Image"},null,8,H)]),_:1},8,["modelValue"])],64)}}});export{O as default};
