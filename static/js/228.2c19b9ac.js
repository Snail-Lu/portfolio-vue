"use strict";(self["webpackChunkprotfolio_vue"]=self["webpackChunkprotfolio_vue"]||[]).push([[228],{3957:function(e,l,t){t.d(l,{Z:function(){return o}});var a=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{staticClass:"demo-wrapper"},[t("div",{staticClass:"header flex-box flex-v-center"},[t("div",{staticClass:"flex-item-1 title"},[e._v(e._s(e.data.title))]),e.data.url?t("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"查看文章",placement:"top-start"}},[t("el-link",{staticClass:"article-link",attrs:{underline:!1,icon:"el-icon-view",href:e.data.url}})],1):e._e()],1),e._t("default")],2)},n=[],i={props:{data:Object}},r=i,d=t(1001),s=(0,d.Z)(r,a,n,!1,null,"bcbb0000",null),o=s.exports},7228:function(e,l,t){t.r(l),t.d(l,{default:function(){return c}});var a=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("demo",{attrs:{data:e.demoInfo}},[t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.onExpand}},[e._v(e._s(e.expandAll?"收缩":"展开")+"所有节点")]),t("el-tree",{ref:"tree",attrs:{data:e.data}})],1)},n=[],i=t(3957),r={components:{Demo:i.Z},data(){return{demoInfo:{title:"节点树展开/收缩",url:"https://snail-lu.vercel.app/2020-05-05-element-ui-zhong-el-tree-zu-jian-jie-dian-quan-zhan-kai-yu-quan-shou-suo-gong-neng-shi-xian.html"},expandAll:!1,data:[{label:"一级 1",children:[{label:"二级 1-1",children:[{label:"三级 1-1-1"}]}]},{label:"一级 2",children:[{label:"二级 2-1",children:[{label:"三级 2-1-1"}]},{label:"二级 2-2",children:[{label:"三级 2-2-1"}]}]},{label:"一级 3",children:[{label:"二级 3-1",children:[{label:"三级 3-1-1"}]},{label:"二级 3-2",children:[{label:"三级 3-2-1"}]}]},{label:"一级 4",children:[{label:"二级 4-1",children:[{label:"三级 4-1-1"},{label:"三级 4-1-2"}]},{label:"二级 4-2",children:[{label:"三级 4-2-1"},{label:"三级 4-2-2"}]}]}]}},methods:{async onExpand(){this.expandAll=!this.expandAll,this.changeTreeNodeStatus(this.$refs.tree.store.root)},changeTreeNodeStatus(e){e.expanded=this.expandAll;for(let l=0;l<e.childNodes.length;l++)e.childNodes[l].expanded=this.expandAll,e.childNodes[l].childNodes.length>0&&this.changeTreeNodeStatus(e.childNodes[l])}}},d=r,s=t(1001),o=(0,s.Z)(d,a,n,!1,null,"e2671f1e",null),c=o.exports}}]);