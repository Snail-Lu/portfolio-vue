"use strict";(self["webpackChunkprotfolio_vue"]=self["webpackChunkprotfolio_vue"]||[]).push([[354],{13957:function(e,t,n){n.d(t,{Z:function(){return d}});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo-wrapper"},[n("div",{staticClass:"header flex-box flex-v-center"},[n("div",{staticClass:"flex-item-1 title"},[e._v(e._s(e.data.title))]),e.data.url?n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"查看文章",placement:"top-start"}},[n("el-link",{staticClass:"article-link",attrs:{underline:!1,icon:"el-icon-view",href:e.data.url}})],1):e._e()],1),e._t("default")],2)},r=[],o={props:{data:Object}},i=o,s=n(1001),l=(0,s.Z)(i,a,r,!1,null,"bcbb0000",null),d=l.exports},70354:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("demo",{attrs:{data:e.demoInfo}},[n("canvas",{ref:"three",attrs:{id:"three"}})])},r=[],o=n(99477),i=n(69365),s=n(13957),l={name:"ThreeModel",components:{Demo:s.Z},data:function(){return{demoInfo:{title:"ThreeJS简单实践",url:""}}},mounted:function(){this.initThree()},methods:{initThree:function(){var e=new o.xsS,t=new o.y8_(250);e.add(t);var n=new o.DvJ(100,100,100),a=new o.YBo({color:255}),r=new o.Kj0(n,a);e.add(r);var s=new o.xo$(60,40,40),l=new o.xoR({color:16711935,specular:4491502,shininess:12}),d=new o.Kj0(s,l);d.translateY(110),e.add(d);var c=new o.fHI(50,50,100,25),u=new o.YBo({color:16776960}),f=new o.Kj0(c,u);f.position.set(120,0,0),e.add(f);var v=new o.cek(16777215);v.position.set(400,200,300),e.add(v);var w=new o.cek(16777215);w.position.set(-400,-200,-300),e.add(w);var p=new o.Mig(4473924);e.add(p);var h=700,m=600,_=h/m,k=200,C=new o.iKG(-k*_,k*_,k,-k,1,1e3);C.position.set(200,100,200),C.lookAt(e.position);var x=new o.CP7({canvas:this.$refs.three});x.setSize(h,m),x.setClearColor(16777215,1);new Date;function b(){var t=new Date;t,x.render(e,C)}b();var j=new i.z(C,x.domElement);j.addEventListener("change",b)}}},d=l,c=n(1001),u=(0,c.Z)(d,a,r,!1,null,"14076822",null),f=u.exports}}]);