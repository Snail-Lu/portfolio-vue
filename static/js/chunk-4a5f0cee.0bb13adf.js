(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a5f0cee"],{"02a4":function(e,t,l){},2402:function(e,t,l){},"29dd":function(e,t,l){"use strict";l("02a4")},4364:function(e,t,l){"use strict";var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"demo-wrapper"},[l("div",{staticClass:"header flex-box flex-v-center"},[l("div",{staticClass:"flex-item-1 title"},[e._v(e._s(e.data.title))]),e.data.url?l("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"查看文章",placement:"top-start"}},[l("el-link",{staticClass:"article-link",attrs:{underline:!1,icon:"el-icon-view",href:e.data.url}})],1):e._e()],1),e._t("default")],2)},n=[],r={props:{data:Object}},i=r,c=(l("29dd"),l("2877")),d=Object(c["a"])(i,a,n,!1,null,"bcbb0000",null);t["a"]=d.exports},aee8:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("demo",{attrs:{data:e.demoInfo}},[l("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.onExpand}},[e._v(e._s(e.expandAll?"收缩":"展开")+"所有节点")]),l("el-tree",{ref:"tree",attrs:{data:e.data}})],1)},n=[],r=l("1da1"),i=(l("96cf"),l("4364")),c={components:{Demo:i["a"]},data:function(){return{demoInfo:{title:"节点树展开/收缩",url:"https://snail-lu.vercel.app/2020-05-05-element-ui-zhong-el-tree-zu-jian-jie-dian-quan-zhan-kai-yu-quan-shou-suo-gong-neng-shi-xian.html"},expandAll:!1,data:[{label:"一级 1",children:[{label:"二级 1-1",children:[{label:"三级 1-1-1"}]}]},{label:"一级 2",children:[{label:"二级 2-1",children:[{label:"三级 2-1-1"}]},{label:"二级 2-2",children:[{label:"三级 2-2-1"}]}]},{label:"一级 3",children:[{label:"二级 3-1",children:[{label:"三级 3-1-1"}]},{label:"二级 3-2",children:[{label:"三级 3-2-1"}]}]},{label:"一级 4",children:[{label:"二级 4-1",children:[{label:"三级 4-1-1"},{label:"三级 4-1-2"}]},{label:"二级 4-2",children:[{label:"三级 4-2-1"},{label:"三级 4-2-2"}]}]}]}},methods:{onExpand:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.expandAll=!e.expandAll,e.changeTreeNodeStatus(e.$refs.tree.store.root);case 2:case"end":return t.stop()}}),t)})))()},changeTreeNodeStatus:function(e){e.expanded=this.expandAll;for(var t=0;t<e.childNodes.length;t++)e.childNodes[t].expanded=this.expandAll,e.childNodes[t].childNodes.length>0&&this.changeTreeNodeStatus(e.childNodes[t])}}},d=c,s=(l("d78c"),l("2877")),o=Object(s["a"])(d,a,n,!1,null,"e2671f1e",null);t["default"]=o.exports},d78c:function(e,t,l){"use strict";l("2402")}}]);