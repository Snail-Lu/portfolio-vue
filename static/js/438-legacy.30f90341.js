"use strict";(self["webpackChunkprotfolio_vue"]=self["webpackChunkprotfolio_vue"]||[]).push([[438],{73929:function(t,e,i){i.r(e),i.d(e,{default:function(){return S}});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"photo-wall-container"},[i("div",{staticClass:"btn-groups flex-box flex-h-center",class:{"btn-groups-screenfull":t.isScreenFull}},[i("el-upload",{attrs:{action:"#",multiple:"","auto-upload":!1,"on-change":t.onUploadFile,"show-file-list":!1}},[i("i",{staticClass:"btn el-icon-picture-outline upload-btn",attrs:{title:"打开本地图片"}})]),i("i",{staticClass:"btn el-icon-full-screen",attrs:{title:t.isScreenFull?"退出全屏":"全屏"},on:{click:t.handleFullScreen}})],1),0==t.fileList.length?i("div",{staticClass:"photo-list"},t._l(t.exampleList,(function(e){return i("photo",{key:e.uid,attrs:{src:e.src,"start-x":e.startX,"start-y":e.startY,"initial-width":e.initialWidth,"initial-height":e.initialHeight},on:{onDelete:function(i){return t.onDelete(e.uid)}}})})),1):i("div",{staticClass:"photo-list"},t._l(t.fileList,(function(e){return i("photo",{key:e.uid,attrs:{src:t._f("imgUrlFilter")(e.raw)},on:{onDelete:function(i){return t.onDelete(e.uid)}}})})),1)])},l=[],s=(i(41539),i(78783),i(33948),i(60285),i(41637),i(34553),i(40561),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("vue-draggable-resizable",{attrs:{x:t.x,y:t.y,w:t.width,h:t.height,parent:!0,"class-name":"my-photo"},on:{dragging:t.onDrag,resizing:t.onResize}},[i("div",{staticClass:"close-icon",attrs:{title:"删除"},on:{click:t.onDelete}},[t._v("×")]),i("img",{staticClass:"pic",attrs:{src:t.src},on:{load:t.onImgLoad}})])}),r=[],a=(i(9653),i(40764)),c=i.n(a),u={components:{VueDraggableResizable:c()},props:{src:{type:String,default:""},startX:{type:Number,default:0},startY:{type:Number,default:0},initialWidth:{type:Number,default:200},initialHeight:{type:Number,default:200}},data:function(){return{x:this.startX,y:this.startY,width:this.initialWidth,height:this.initialHeight}},methods:{onResize:function(t,e,i,n){this.x=t,this.y=e,this.width=i,this.height=n},onDrag:function(t,e){this.x=t,this.y=e},onDelete:function(){this.$emit("onDelete")},onImgLoad:function(t){console.log(t,"img data")}}},o=u,h=i(1001),d=(0,h.Z)(o,s,r,!1,null,"6629bf02",null),f=d.exports,g=i.p+"static/img/photo-1.c7f027cd.jpg",m=i.p+"static/img/photo-2.90958839.jpg",p=i.p+"static/img/photo-3.2a767dfd.jpg",F=i(47187),b={mixins:[F.Z],components:{Photo:f},filters:{imgUrlFilter:function(t){return URL.createObjectURL(t)}},data:function(){return{fileList:[],exampleList:[{uid:1,src:g,initialWidth:577,initialHeight:346,startX:430,startY:400},{uid:2,src:m,initialWidth:426,initialHeight:258,startX:830,startY:106},{uid:3,src:p,initialWidth:486,initialHeight:290,startX:147,startY:78}]}},methods:{onUploadFile:function(t,e){this.fileList=e},onDelete:function(t){var e=-1;this.fileList.length>0?(e=this.fileList.findIndex((function(e){return e.uid===t})),this.fileList.splice(e,1)):(e=this.exampleList.findIndex((function(e){return e.uid===t})),this.exampleList.splice(e,1))}}},v=b,x=(0,h.Z)(v,n,l,!1,null,"b17015d2",null),S=x.exports},47187:function(t,e,i){var n=i(93019),l=i(20629);e["Z"]={computed:(0,n.Z)({},(0,l.rn)("settings",["isScreenFull"])),destoryed:function(){},methods:(0,n.Z)((0,n.Z)({},(0,l.nv)("settings",["changeSetting"])),{},{handleFullScreen:function(){var t=document.documentElement;this.isScreenFull?(document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen(),this.changeSetting({key:"isScreenFull",value:!1}),window.removeEventListener("fullscreenchange",this.fullscreenchangeHandler)):(t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullScreen?t.webkitRequestFullScreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen&&t.msRequestFullscreen(),this.changeSetting({key:"isScreenFull",value:!0}),window.addEventListener("fullscreenchange",this.fullscreenchangeHandler))},fullscreenchangeHandler:function(){var t=document.fullscreenElement;t||this.changeSetting({key:"isScreenFull",value:!1})}})}}}]);