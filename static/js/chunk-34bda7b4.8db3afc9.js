(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34bda7b4"],{"02a4":function(t,e,i){},"12d1":function(t,e,i){},"29dd":function(t,e,i){"use strict";i("02a4")},"33d7":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("demo",{attrs:{data:t.demoInfo}},[i("div",{staticClass:"img-box",on:{mouseup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])||"button"in e&&0!==e.button?null:(e.stopPropagation(),t.mouseUp(e))}}},[i("img",{staticClass:"img",attrs:{src:"https://fastly.jsdelivr.net/gh/Snail-Lu/imageGalleries/gh-pages/2021-12/hotspot-example.webp",alt:""},on:{mousedown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])||"button"in e&&0!==e.button?null:(e.stopPropagation(),t.mouseDown(e))}}}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.drawBoxVisible,expression:"drawBoxVisible"}],staticClass:"spot",style:{width:t.width+"px",height:t.height+"px",left:t.startX+"px",top:t.startY+"px"}}),t._l(t.spotDataList,(function(e,a){return i("hot-spot-item",{key:a,attrs:{id:a,"area-init":e},on:{del:t.delSpot}})}))],2),i("div",{staticClass:"hot-spot-list flex-box flex-wrap"},t._l(t.spotDataList,(function(e,a){return i("div",{key:a,staticClass:"hot-spot-item"},[i("div",{staticClass:"info-header"},[t._v("热区"+t._s(a+1))]),i("div",{staticClass:"title"},[t._v("起点坐标：")]),i("div",{staticClass:"flex-box flex-v-center"},[i("div",{staticClass:"label"},[t._v("x：")]),i("el-input",{attrs:{disabled:!0},model:{value:e.startX,callback:function(i){t.$set(e,"startX",i)},expression:"item.startX"}}),i("div",{staticClass:"label",staticStyle:{"margin-left":"20px"}},[t._v("y：")]),i("el-input",{attrs:{disabled:!0},model:{value:e.startY,callback:function(i){t.$set(e,"startY",i)},expression:"item.startY"}})],1),i("div",{staticClass:"title"},[t._v("热区宽高：")]),i("div",{staticClass:"flex-box flex-v-center"},[i("div",{staticClass:"label"},[t._v("宽：")]),i("el-input",{attrs:{disabled:!0},model:{value:e.width,callback:function(i){t.$set(e,"width",i)},expression:"item.width"}}),i("div",{staticClass:"label",staticStyle:{"margin-left":"20px"}},[t._v("高：")]),i("el-input",{attrs:{disabled:!0},model:{value:e.height,callback:function(i){t.$set(e,"height",i)},expression:"item.height"}})],1),i("div",{staticClass:"title"},[t._v("热区链接：")]),i("div",{staticClass:"flex-box"},[i("el-input",{model:{value:e.link,callback:function(i){t.$set(e,"link",i)},expression:"item.link"}})],1)])})),0)])},s=[],n=(i("a434"),i("4364")),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"areaBox",style:{width:t.areaInit.width+"px",height:t.areaInit.height+"px",left:t.areaInit.startX+"px",top:t.areaInit.startY+"px"},on:{dblclick:function(e){t.editBoxShow=!0},mousedown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])||"button"in e&&0!==e.button?null:(e.stopPropagation(),t.mouseDown(e))},mouseup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])||"button"in e&&0!==e.button?null:(e.stopPropagation(),t.mouseUp(e))}}},[i("span",{staticClass:"promptText"},[t._v("热区"+t._s(t.id+1))]),i("div",{staticClass:"del",on:{click:function(e){return e.stopPropagation(),t.del()}}},[t._v("×")]),i("div",{staticClass:"shape",on:{mousedown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])||"button"in e&&0!==e.button?null:(e.stopPropagation(),t.shapeDown(e))},mouseup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])||"button"in e&&0!==e.button?null:(e.stopPropagation(),t.mouseUp(e))}}})])},r=[],l=(i("a9e3"),{name:"HotSpotItem",props:{areaInit:{type:Object,default:function(){}},id:{type:Number,default:null}},data:function(){return{}},methods:{del:function(){this.$emit("del",this.id)},mouseDown:function(t){var e=this;if(this.startX=t.clientX,this.startY=t.clientY,!document.onmousemove){var i=this.areaInit.startX,a=this.areaInit.startY;document.onmousemove=function(t){e.areaInit.startX=i+t.clientX-e.startX,e.areaInit.startY=a+t.clientY-e.startY}}},mouseUp:function(){document.onmousemove=null},shapeDown:function(t){var e=this;if(this.start1X=t.clientX,this.start1Y=t.clientY,!document.onmousemove){var i=this.areaInit.width,a=this.areaInit.height;document.onmousemove=function(t){e.areaInit.width=i+t.clientX-e.start1X,e.areaInit.height=a+t.clientY-e.start1Y}}}}}),u=l,c=(i("567f"),i("2877")),d=Object(c["a"])(u,o,r,!1,null,"2f925199",null),f=d.exports,p={components:{Demo:n["a"],HotSpotItem:f},data:function(){return{demoInfo:{title:"绘制热区",url:""},spotDataList:[],startX:0,startY:0,width:0,height:0,drawBoxVisible:!1}},methods:{mouseDown:function(t){var e=this;this.drawBoxVisible=!0,this.startX=t.layerX,this.startY=t.layerY,document.onmousemove||(document.onmousemove=function(t){e.width=t.layerX-e.startX,e.height=t.layerY-e.startY})},mouseMove:function(t){this.drawBoxVisible&&(this.width=t.layerX-this.startX,this.height=t.layerY-this.startY)},mouseUp:function(t){document.onmousemove=null;var e=this.drawBoxVisible,i=this.startX,a=this.startY,s=this.width,n=this.height;if(e&&s>10&&n>10){var o={startX:i,startY:a,width:s,height:n,link:""};this.spotDataList.push(o)}this.drawBoxVisible=!1,this.startX=0,this.startY=0,this.width=0,this.height=0},delSpot:function(t){this.spotDataList.splice(t,1)}}},h=p,m=(i("eb21"),Object(c["a"])(h,a,s,!1,null,"c949a18a",null));e["default"]=m.exports},"408a":function(t,e,i){var a=i("e330");t.exports=a(1..valueOf)},4364:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"demo-wrapper"},[i("div",{staticClass:"header flex-box flex-v-center"},[i("div",{staticClass:"flex-item-1 title"},[t._v(t._s(t.data.title))]),t.data.url?i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"查看文章",placement:"top-start"}},[i("el-link",{staticClass:"article-link",attrs:{underline:!1,icon:"el-icon-view",href:t.data.url}})],1):t._e()],1),t._t("default")],2)},s=[],n={props:{data:Object}},o=n,r=(i("29dd"),i("2877")),l=Object(r["a"])(o,a,s,!1,null,"bcbb0000",null);e["a"]=l.exports},"567f":function(t,e,i){"use strict";i("12d1")},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,i){var a=i("e330"),s=i("1d80"),n=i("577e"),o=i("5899"),r=a("".replace),l="["+o+"]",u=RegExp("^"+l+l+"*"),c=RegExp(l+l+"*$"),d=function(t){return function(e){var i=n(s(e));return 1&t&&(i=r(i,u,"")),2&t&&(i=r(i,c,"")),i}};t.exports={start:d(1),end:d(2),trim:d(3)}},a434:function(t,e,i){"use strict";var a=i("23e7"),s=i("da84"),n=i("23cb"),o=i("5926"),r=i("07fa"),l=i("7b0b"),u=i("65f0"),c=i("8418"),d=i("1dde"),f=d("splice"),p=s.TypeError,h=Math.max,m=Math.min,v=9007199254740991,b="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!f},{splice:function(t,e){var i,a,s,d,f,x,w=l(this),g=r(w),y=n(t,g),k=arguments.length;if(0===k?i=a=0:1===k?(i=0,a=g-y):(i=k-2,a=m(h(o(e),0),g-y)),g+i-a>v)throw p(b);for(s=u(w,a),d=0;d<a;d++)f=y+d,f in w&&c(s,d,w[f]);if(s.length=a,i<a){for(d=y;d<g-a;d++)f=d+a,x=d+i,f in w?w[x]=w[f]:delete w[x];for(d=g;d>g-a+i;d--)delete w[d-1]}else if(i>a)for(d=g-a;d>y;d--)f=d+a-1,x=d+i-1,f in w?w[x]=w[f]:delete w[x];for(d=0;d<i;d++)w[d+y]=arguments[d+2];return w.length=g-a+i,s}})},a9e3:function(t,e,i){"use strict";var a=i("83ab"),s=i("da84"),n=i("e330"),o=i("94ca"),r=i("6eeb"),l=i("1a2d"),u=i("7156"),c=i("3a9b"),d=i("d9b5"),f=i("c04e"),p=i("d039"),h=i("241c").f,m=i("06cf").f,v=i("9bf2").f,b=i("408a"),x=i("58a8").trim,w="Number",g=s[w],y=g.prototype,k=s.TypeError,_=n("".slice),I=n("".charCodeAt),C=function(t){var e=f(t,"number");return"bigint"==typeof e?e:X(e)},X=function(t){var e,i,a,s,n,o,r,l,u=f(t,"number");if(d(u))throw k("Cannot convert a Symbol value to a number");if("string"==typeof u&&u.length>2)if(u=x(u),e=I(u,0),43===e||45===e){if(i=I(u,2),88===i||120===i)return NaN}else if(48===e){switch(I(u,1)){case 66:case 98:a=2,s=49;break;case 79:case 111:a=8,s=55;break;default:return+u}for(n=_(u,2),o=n.length,r=0;r<o;r++)if(l=I(n,r),l<48||l>s)return NaN;return parseInt(n,a)}return+u};if(o(w,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var Y,L=function(t){var e=arguments.length<1?0:g(C(t)),i=this;return c(y,i)&&p((function(){b(i)}))?u(Object(e),i,L):e},N=a?h(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),E=0;N.length>E;E++)l(g,Y=N[E])&&!l(L,Y)&&v(L,Y,m(g,Y));L.prototype=y,y.constructor=L,r(s,w,L)}},d928:function(t,e,i){},eb21:function(t,e,i){"use strict";i("d928")}}]);