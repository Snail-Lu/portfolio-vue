import{D as u}from"./index.8ec9cf5e.js";import{g as _}from"./index.58558a70.js";import{_ as f}from"./index.90845e7b.js";import{o as i,c as p,w as g,y as o,t as a,z as r,F as c}from"./elementPlus.9b213846.js";const x={components:{Demo:u},data(){return{demoInfo:{title:"\u7011\u5E03\u6D41",url:""},data:[],insertIndex:0,data1:[],data2:[],data3:[]}},created(){this.initData()},methods:{async initData(){let e=[],s=await this.req({url:"/masonry/list"});s.result&&s.result.list&&(e=s.result.list),this.data1.push(e[0]),this.data2.push(e[1]),this.data3.push(e[2]),this.insertIndex=3,this.data=e.slice(0),this.insertData()},insertData(){this.$nextTick(()=>{const{data:e,insertIndex:s}=this;if(s<e.length){const l=this.$refs.column1.offsetHeight,d=this.$refs.column2.offsetHeight,n=this.$refs.column3.offsetHeight,m=_([l,d,n]);this[`data${m+1}`].push(e[s]),this.insertIndex=s+1,this.insertData()}})}}},y={class:"masonry"},I={class:"colmun",ref:"column1"},k=["src","title"],v={class:"colmun",ref:"column2"},D=["src","title"],H={class:"colmun",ref:"column3"},$=["src","title"];function B(e,s,l,d,n,m){const h=u;return i(),p(h,{data:n.demoInfo},{default:g(()=>[o("div",y,[o("div",I,[(i(!0),a(c,null,r(n.data1,t=>(i(),a("img",{class:"item",src:t.img,key:t.id,title:t.id},null,8,k))),128))],512),o("div",v,[(i(!0),a(c,null,r(n.data2,t=>(i(),a("img",{class:"item",src:t.img,key:t.id,title:t.id},null,8,D))),128))],512),o("div",H,[(i(!0),a(c,null,r(n.data3,t=>(i(),a("img",{class:"item",src:t.img,key:t.id,title:t.id},null,8,$))),128))],512)])]),_:1},8,["data"])}const q=f(x,[["render",B],["__scopeId","data-v-5fe65381"]]);export{q as default};
