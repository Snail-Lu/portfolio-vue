import{r as _}from"./index.3994fdff.js";import{_ as p}from"./index.e56b94ce.js";import{o as d,m as l,z as r,y as h,J as c,L as m,M as u}from"./elementPlus.921bee1b.js";const f="/portfolio/assets/smile.51ebec29.svg",v="/portfolio/assets/wink.4148e61b.svg";const g={props:{data:{type:Object}},data(){return{isLoading:!0,isError:!1,colorIndex:0}},created(){this.colorIndex=_(1,30)},methods:{pushUrl(){const{data:s}=this;"url"in s||"reposity"in s?window.open(s.url||s.reposity,"_blank"):this.$router.push({path:`/demo/${s.path}`})},load(){this.isLoading=!1},error(){this.isError=!0,this.isLoading=!1}}},n=s=>(m("data-v-3a954e5a"),s=s(),u(),s),x=["src"],y={key:1,class:"placeholder-cover"},b=n(()=>r("img",{class:"placeholder-cover1",src:f},null,-1)),k=n(()=>r("img",{class:"placeholder-cover2",src:v},null,-1)),I=[b,k],L={class:"card-info"},E={class:"card-info-title"},w={class:"card-info-desc"};function C(s,o,t,S,i,e){return d(),l("div",{class:"card flex-box-column",onClick:o[2]||(o[2]=(...a)=>e.pushUrl&&e.pushUrl(...a))},[r("div",{class:h(`header bg-color${i.colorIndex} ${i.isLoading?"animated-bg":""}`)},[i.isError?(d(),l("div",y,I)):(d(),l("img",{key:0,class:"cover",src:t.data.coverUrl,onLoad:o[0]||(o[0]=(...a)=>e.load&&e.load(...a)),onError:o[1]||(o[1]=(...a)=>e.error&&e.error(...a)),loading:"lazy"},null,40,x))],2),r("div",L,[r("div",E,c(t.data.title),1),r("div",w,c(t.data.desc),1)])])}const D=p(g,[["render",C],["__scopeId","data-v-3a954e5a"]]);export{D as C};
