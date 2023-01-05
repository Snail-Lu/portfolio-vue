import{D as te}from"./index.3ac7a9f1.js";import{_ as G,e as le}from"./index.457cee41.js";import{h as N,k as c,z as se,o as y,m as b,D as e,J as U,u as T,y as S,O as ae,b as X,f as ne,c as oe,w as ie,F as Y,G as A,H as $,I as B,a as H,K as re,L as ue,N as ce}from"./elementPlus.d15cb521.js";import{A as W}from"./AutoScrollText.23316a5f.js";const de={__name:"Slider",props:{modelValue:Number,min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},vertical:{type:Boolean,default:!1}},emits:["update:modelValue","change","drag"],setup(k,{emit:w}){const l=k,o=N(()=>l.vertical?{height:f.value}:{width:f.value}),i=N(()=>l.vertical?{bottom:f.value}:{left:f.value}),r=c(null),t=c(null),f=N(()=>(l.modelValue*100/(l.max-l.min)).toFixed(2)+"%"),V=N(()=>{const a=[l.min,l.max,l.step].map(p=>{const _=`${p}`.split(".")[1];return _?_.length:0});return Math.max.apply(null,a)}),n={};let m=0;se(()=>{const{offsetWidth:a,offsetHeight:p}=r.value;m=l.vertical?p:a});const I=a=>{a.preventDefault(),n.start=l.vertical?a.clientY:a.clientX,n.startPosition=l.modelValue/(l.max-l.min)*m,window.addEventListener("mousemove",v),window.addEventListener("mouseup",d),w("drag")},d=()=>{window.removeEventListener("mousemove",v),window.removeEventListener("mouseup",d),w("change",l.modelValue)},v=a=>{let p=a||window.event,_=l.vertical?n.start-p.clientY:p.clientX-n.start,C=n.startPosition+_;D(C)},g=c(null),M=a=>{let p=l.vertical?g.value.getBoundingClientRect().bottom-a.clientY:a.clientX-g.value.getBoundingClientRect().left;const _=D(p);w("change",_)},D=a=>{a<0&&(a=0),a>=m&&(a=m);const p=(l.max-l.min)/l.step;let C=Math.round(a/m*p)*l.step+l.min;return C=Number.parseFloat(C.toFixed(V.value)),w("update:modelValue",C),C};return(a,p)=>(y(),b("div",{class:S([k.vertical?"slider-vertical":"slider"]),ref_key:"slider",ref:g},[e("div",{class:"slider-runway",onClick:M,ref_key:"runway",ref:r},[e("div",{class:"slider-bar",style:U(T(o))},null,4),e("div",{class:"slider-dot",style:U(T(i)),onMousedown:I,ref_key:"dot",ref:t},null,36)],512)],2))}},q=G(de,[["__scopeId","data-v-a46cb1b5"]]);function ve(k,w){const l=o=>{const i={ti:"",ar:"",al:"",by:"",offset:0,ms:[]};if(o.length==0)return;const r=o.split(`
`);for(let t in r){r[t]=r[t].replace(/(^\s*)|(\s*$)/g,"");let V=r[t].substring(r[t].indexOf("[")+1,r[t].indexOf("]")).split(":");if(isNaN(parseInt(V[0])))for(let n in i)n!="ms"&&n==V[0].toLowerCase()&&(i[n]=V[1]);else{const n=r[t].match(/\[(\d+:.+?)\]/g);let m=0;for(let d in n)m+=n[d].length;let I=r[t].substring(m);for(let d in n){let g=n[d].substring(1,n[d].length-1).split(":");I&&i.ms.push({t:(parseFloat(g[0])*60+parseFloat(g[1])).toFixed(3),c:I})}}}return i.ms.sort(function(t,f){return t.t-f.t}),i};return new Promise((o,i)=>{le.get(w).then(({data:r})=>{let t=l(r);o(t)}).catch(r=>{i(r)})})}const me=k=>(re("data-v-2ce2b9bd"),k=k(),ue(),k),pe={class:"music-container"},fe=me(()=>e("div",{class:"header flex-box flex-v-center"},[e("span",{class:"logo iconfont icon-music"}),ce(" \u97F3\u4E50\u64AD\u653E\u5668 ")],-1)),_e={class:"content"},he={class:"playlist-item-name"},ye={class:"playlist-item-author"},ge=["onClick","title"],xe={class:"disc flex-box flex-v-center flex-h-center"},be={class:"disc-outer flex-box flex-v-center flex-h-center"},ke={class:"disc-inner"},we=["src"],Ce={class:"footer"},Ve={class:"music-info"},Se={class:"song-name"},Ne={class:"song-singer"},Ie={class:"music-duration"},De={class:"progress"},Le={class:"controls flex-box flex-v-center flex-h-between"},Pe=["title"],Fe={class:"volume"},Te={key:0,class:"volume-controls"},Me=["src"],Be={__name:"index",setup(k){const w={title:"\u97F3\u4E50\u64AD\u653E\u5668",url:""},{proxy:l}=ae(),o=c([]),i=c(0),r=()=>{i.value===1?i.value=2:i.value=1};l.req({url:"/demo/playlist"}).then(s=>{o.value=s.result.list});const t=c(0),f=c(0),V=N(()=>j(f.value)),n=c(0),m=c(0),I=N(()=>j(m.value)),d=c(!0),v=c(null),g=s=>{typeof s<"u"&&(t.value=s),v.value.paused?(v.value.play(),E.value=!0):(v.value.pause(),d.value=v.value.paused),R.value=!1},M=c(.2);X(M,s=>{v.value&&(v.value.volume=s)},{immediate:!0});const D=c(!1),a=s=>{D.value=!0},p=s=>{v.value.currentTime=s,D.value=!1},_=c(!1),C=()=>{_.value=!_.value},j=s=>{let u=Math.floor(s/60),x=Math.floor(s%60);return u=String(u).padStart(2,"0"),x=String(x).padStart(2,"0"),`${u}:${x}`};let L=ne({ms:[],al:"",ar:"",by:"",offset:0,ti:""});const R=c(!0),E=c(!1),J=()=>{f.value=Math.round(v.value.duration),ve("",o.value[t.value].lyricUrl).then(s=>{if(s)for(let u in s)L[u]=s[u]}),R.value||(v.value.play(),E.value=!0)},P=c(0);X(n,s=>{if(L.ms&&s>0){const u=L.ms.length;if(s>parseFloat(L.ms[u-1].t))P.value=u-1;else if(P.value<u-2){let x=L.ms.findIndex(O=>s<O.t);x>0&&(P.value=x-1)}}});const K=N(()=>{if(P.value*30>=150)return-(P.value*30-150)+"px"}),Q=()=>{if(D.value)return;let s=Math.round(v.value.currentTime);m.value=s,n.value=s,d.value=v.value.paused},Z=()=>{d.value=!0,n.value=0,E.value=!1,z()},z=()=>{t.value<o.value.length-1?t.value++:t.value=0},ee=()=>{t.value>0?t.value--:t.value=o.value.length-1};return(s,u)=>(y(),oe(te,{data:w},{default:ie(()=>{var x,O;return[e("div",pe,[fe,e("div",_e,[i.value!==0?(y(),b("div",{key:0,class:S(["playlist animate__animated animate__faster",{playlist__hidden:i.value===0,animate__slideInLeft:i.value===1,animate__slideOutLeft:i.value===2}])},[(y(!0),b(Y,null,A(o.value,(h,F)=>(y(),b("div",{class:S(["playlist-item flex-box flex-v-center",{"playlist-item-active":t.value===F}]),key:h.url},[e("div",he,[H(W,{text:h.name},null,8,["text"])]),e("div",ye,[H(W,{text:h.author},null,8,["text"])]),e("span",{class:S(["play-btn iconfont",t.value!==F||d.value?"icon-play":"icon-pause"]),onClick:Ee=>g(F),title:t.value!==F||d.value?"\u64AD\u653E":"\u6682\u505C"},null,10,ge)],2))),128))],2)):$("",!0),e("div",xe,[e("div",be,[e("div",ke,[o.value[t.value]?(y(),b("img",{key:0,src:o.value[t.value].coverUrl,class:S(["cover-img",{"cover-img-rotate":E.value,"cover-img-rotate-paused":d.value}]),alt:""},null,10,we)):$("",!0)])])]),e("div",{class:"lyric",style:U({marginTop:T(K)})},[(y(!0),b(Y,null,A(T(L).ms,(h,F)=>(y(),b("p",{class:S(["lyric-text",P.value===F?"lyric-text-current":""]),key:h.t},B(h.c),3))),128))],4)]),e("div",Ce,[e("div",Ve,[e("div",null,[e("span",Se,B((x=o.value[t.value])==null?void 0:x.name),1),e("span",Ne," - "+B((O=o.value[t.value])==null?void 0:O.author),1)]),e("div",Ie,[e("span",null,B(T(I)),1),e("span",null," / "+B(T(V)),1)])]),e("div",De,[H(q,{modelValue:m.value,"onUpdate:modelValue":u[0]||(u[0]=h=>m.value=h),max:f.value,onChange:p,onDrag:a},null,8,["modelValue","max"])]),e("div",Le,[e("div",{class:"playlist-btn iconfont icon-playlist",title:"\u64AD\u653E\u5217\u8868",onClick:r}),e("div",null,[e("span",{class:"prev iconfont icon-prev",title:"\u4E0A\u4E00\u9996",onClick:ee}),e("span",{class:S(["switch iconfont",d.value?"icon-play":"icon-pause"]),onClick:u[1]||(u[1]=h=>g()),title:d.value?"\u64AD\u653E":"\u6682\u505C"},null,10,Pe),e("span",{class:"next iconfont icon-next",title:"\u4E0B\u4E00\u9996",onClick:z})]),e("div",Fe,[e("span",{class:"volume-icon iconfont icon-volume",onClick:C}),_.value?(y(),b("div",Te,[H(q,{modelValue:M.value,"onUpdate:modelValue":u[2]||(u[2]=h=>M.value=h),max:1,step:.1,vertical:""},null,8,["modelValue","step"])])):$("",!0)])])]),o.value.length>0?(y(),b("audio",{key:0,ref_key:"audio",ref:v,onCanplay:J,onTimeupdate:Q,onEnded:Z,src:o.value[t.value].url},null,40,Me)):$("",!0)])]}),_:1}))}},je=G(Be,[["__scopeId","data-v-2ce2b9bd"]]);export{je as default};
