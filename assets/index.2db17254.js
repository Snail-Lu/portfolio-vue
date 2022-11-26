import{D as M}from"./index.323ec64a.js";import{_ as C}from"./index.1d645095.js";/* empty css                   *//* empty css                  *//* empty css                     *//* empty css                       *//* empty css                 *//* empty css                     */import{r as P,d as D,a as $,b as E,c as I}from"./date.9f348999.js";import{o as m,t as u,a as p,F as x,y as v,A as k,x as w,Z as F,K as z,b as h,_ as B,a6 as R,a7 as A,a8 as L,P as N,a3 as q,c as U,w as b,z as T}from"./elementPlus.8cc4687e.js";const Y={props:{date:Date,schedule:Array},inject:["Calendar"],data(){return{weekDays:["\u5468\u4E00","\u5468\u4E8C","\u5468\u4E09","\u5468\u56DB","\u5468\u4E94","\u5468\u516D","\u5468\u65E5"]}},methods:{getFormateDate(e,t){let r=this.curMonthDatePrefix;return t==="prev"?r=this.prevMonthDatePrefix:t==="next"&&(r=this.nextMonthDatePrefix),e=`0${e}`.slice(-2),`${r}-${e}`},getFormateDateTimestamp(e){const t=e.split("-");return new Date(t[0],t[1]-1,t[2]).getTime()},getCellClass({type:e,formatedDate:t}){const r=[e];return e==="current"&&t===this.formatedToday&&r.push("is-today"),r},transformMonthDays(e,t){return e.map(r=>{const n=this.getFormateDate(r,t),o=this.getFormateDateTimestamp(n);return{formatedDate:n,timestamp:o,text:r,type:t}})},toNestedArr(e){return P(e.length/7).map((t,r)=>{const n=r*7;return e.slice(n,n+7)})},getInsertRow(e,t,r){if(e.length===0)return 0;const n=t+r>7?7:t+r+1;let o=-1;for(let a=0,l=e.length;a<l;a++)if(e[a].slice(t,n).every(d=>d.isPlaceholder)){o=a;break}return o},onPickDay(e){this.Calendar.pickDay(e)},onPickSchedule(e){this.Calendar.pickSchedule(e)}},computed:{prevMonthDatePrefix(){const e=new Date(this.date.getTime());return e.setDate(0),D(e,"yyyy-mm")},curMonthDatePrefix(){return D(this.date,"yyyy-mm")},nextMonthDatePrefix(){const e=new Date(this.date.getFullYear(),this.date.getMonth()+1,1);return D(e,"yyyy-mm")},formatedToday(){return this.Calendar.formatedToday},rows(){const{date:e}=this;let t=[],r=$(e);r=r===0?7:r;const n=this.transformMonthDays(E(e,r-1),"prev"),o=this.transformMonthDays(I(e),"current");t=[...n,...o];const a=this.transformMonthDays(P(42-t.length),"next");return t=t.concat(a),this.toNestedArr(t)},scheduleList(){const e=[[],[],[],[],[],[]],{rows:t,schedule:r}=this,n=["#99CCCC","#99CCFF","#FF99CC","#FF9999","#99CC66","#FF9900","#666699","#FF6666"];return r.map((a,l)=>{const d=this.getFormateDateTimestamp(a.startDate),c=this.getFormateDateTimestamp(a.endDate),s=(c-d)/(24*60*60*1e3);return{...a,startTimestamp:d,endTimestamp:c,bgColor:n[l%8],durationDays:s}}).forEach(a=>{t.forEach((l,d)=>{const c=[{isPlaceholder:!0},{isPlaceholder:!0},{isPlaceholder:!0},{isPlaceholder:!0},{isPlaceholder:!0},{isPlaceholder:!0},{isPlaceholder:!0}];let s=0;l.forEach((i,_)=>{if(i.timestamp>=a.startTimestamp&&i.timestamp<=a.endTimestamp){const y=i.timestamp===a.startTimestamp,g=e[d];if(y)s=this.getInsertRow(g,_,a.durationDays);else if(_===0){const f=(a.endTimestamp-i.timestamp)/864e5;s=this.getInsertRow(g,_,f)}g.length==0?g.push(c):s===-1&&(g.push(c),s=g.length-1),g[s][_]={isStart:y,showTitle:y||_===0,title:a.title||"",id:a.id,bgColor:a.bgColor}}})})}),e}}},j={class:"calendar-table",cellspacing:0,cellpadding:0},K={class:"calendar-table-head"},O=["onClick"],Z={key:0,class:"schedule-placeholder"},G=["onClick"];function H(e,t,r,n,o,a){return m(),u("table",j,[p("thead",K,[(m(!0),u(x,null,v(o.weekDays,l=>(m(),u("th",{key:l},k(l),1))),128))]),p("tbody",null,[(m(!0),u(x,null,v(a.rows,(l,d)=>(m(),u("tr",{key:d,class:w({"calendar-table__row":!0})},[(m(!0),u(x,null,v(l,(c,s)=>(m(),u("td",{key:s,class:w(a.getCellClass(c))},[p("div",{class:"calendar-day",onClick:F(i=>a.onPickDay(c),["stop"])},[p("span",null,k(c.text),1),(m(!0),u(x,null,v(a.scheduleList[d],(i,_)=>(m(),u("div",{key:_},[i[s].isPlaceholder?(m(),u("div",Z)):(m(),u("div",{key:1,class:w(["schedule-item",{"is-start":i[s].isStart}]),style:z({"background-color":i[s].bgColor}),onClick:F(y=>a.onPickSchedule(i[s]),["stop"])},k(i[s].showTitle?i[s].title:""),15,G))]))),128))],8,O)],2))),128))]))),128))])])}var V=C(Y,[["render",H],["__scopeId","data-v-987376d8"]]);const J={name:"Calendar",components:{DateTable:V},props:{schedule:Array},provide(){return{Calendar:this}},data(){return{selectedDay:"",now:new Date}},methods:{selectDate(e){let t="";e==="prev-month"?t=`${this.prevMonthDatePrefix}-01`:e==="next-month"?t=`${this.nextMonthDatePrefix}-01`:t=this.formatedToday,this.selectedDay=t},pickDay(e){this.$emit("pick-day",e)},pickSchedule(e){const{id:t,title:r}=e;this.$emit("pick-schedule",{id:t,title:r})}},computed:{prevMonthDatePrefix(){const e=new Date(this.date.getTime());return e.setDate(0),D(e,"yyyy-mm")},nextMonthDatePrefix(){const e=new Date(this.date.getFullYear(),this.date.getMonth()+1,1);return D(e,"yyyy-mm")},currentDate(){const e=this.date.getFullYear(),t=this.date.getMonth()+1;return`${e} \u5E74 ${t} \u6708`},formatedToday(){return D(this.now,"yyyy-mm-dd")},date(){if(this.selectedDay){const e=this.selectedDay.split("-");return new Date(e[0],e[1]-1,e[2])}return this.now}}},Q={class:"calendar"},W={class:"calendar__header"},X={class:"calendar__title"},ee={class:"calendar__button-group"},te={class:"calendar__body"};function ae(e,t,r,n,o,a){const l=V;return m(),u("div",Q,[p("div",W,[p("div",X,k(a.currentDate),1),p("div",ee,[p("button",{class:"btn",onClick:t[0]||(t[0]=d=>a.selectDate("prev-month"))},"\u4E0A\u4E2A\u6708"),p("button",{class:"btn",onClick:t[1]||(t[1]=d=>a.selectDate("today"))},"\u4ECA\u5929"),p("button",{class:"btn",onClick:t[2]||(t[2]=d=>a.selectDate("next-month"))},"\u4E0B\u4E2A\u6708")])]),p("div",te,[h(l,{date:a.date,schedule:r.schedule},null,8,["date","schedule"])])])}var S=C(J,[["render",ae],["__scopeId","data-v-57cf5868"]]);const re={components:{Demo:M,Calendar:S},name:"PromotionCalendar",data(){return{demoInfo:{title:"\u4FC3\u9500\u65E5\u5386",url:""},schedule:[],dialogFormVisible:!1,form:{title:"",startDate:"",endDate:""},formRules:{title:[{required:!0,message:"\u8BF7\u8F93\u5165\u6D3B\u52A8\u540D\u79F0",trigger:"blur"}],startDate:[{required:!0,message:"\u8BF7\u9009\u62E9\u65E5\u671F",trigger:"change"}],endDate:[{required:!0,message:"\u8BF7\u9009\u62E9\u65E5\u671F",trigger:"change"}]}}},created(){this.getScheduleList()},methods:{async getScheduleList(){let e=await this.req({url:"/demo/calendar"});e.result&&e.result.list&&(this.schedule=e.result.list)},onPickDay(e){const{formatedDate:t}=e;this.dialogFormVisible=!0,this.form.startDate=t},onPickSchedule(e){const{id:t}=e,r=this.schedule.find(n=>n.id===t);r&&(this.form={...r},this.dialogFormVisible=!0)},onDialogBtnClick(e){e==="cancel"?(this.dialogFormVisible=!1,this.$refs.form.resetFields(),this.form={title:"",startDate:"",endDate:""}):e==="confirm"&&this.$refs.form.validate(async t=>{if(t){const{schedule:r,form:n}=this;if(n.id){const o=this.schedule.findIndex(a=>a.id===n.id);this.$set(this.schedule,o,n)}else{const o=r[r.length-1].id+1,a={...n,id:o};this.schedule.push(a)}this.dialogFormVisible=!1}})}}},oe=T("\u53D6 \u6D88"),ne=T("\u786E \u5B9A");function se(e,t,r,n,o,a){const l=S,d=B,c=R,s=A,i=L,_=N,y=q,g=M;return m(),U(g,{data:o.demoInfo},{default:b(()=>[h(l,{schedule:o.schedule,onPickDay:a.onPickDay,onPickSchedule:a.onPickSchedule},null,8,["schedule","onPickDay","onPickSchedule"]),h(y,{title:"\u65B0\u589E\u4FC3\u9500\u6D3B\u52A8",modelValue:o.dialogFormVisible,"onUpdate:modelValue":t[5]||(t[5]=f=>o.dialogFormVisible=f),width:"500px"},{footer:b(()=>[h(_,{onClick:t[3]||(t[3]=f=>a.onDialogBtnClick("cancel"))},{default:b(()=>[oe]),_:1}),h(_,{type:"primary",onClick:t[4]||(t[4]=f=>a.onDialogBtnClick("confirm"))},{default:b(()=>[ne]),_:1})]),default:b(()=>[h(i,{model:o.form,rules:o.formRules,"label-width":"100px",ref:"form"},{default:b(()=>[h(c,{label:"\u6D3B\u52A8\u540D\u79F0:",prop:"title"},{default:b(()=>[h(d,{modelValue:o.form.title,"onUpdate:modelValue":t[0]||(t[0]=f=>o.form.title=f),autocomplete:"off",style:{width:"300px"}},null,8,["modelValue"])]),_:1}),h(c,{label:"\u5F00\u59CB\u65E5\u671F\uFF1A",prop:"startDate"},{default:b(()=>[h(s,{modelValue:o.form.startDate,"onUpdate:modelValue":t[1]||(t[1]=f=>o.form.startDate=f),type:"date",style:{width:"300px"},"value-format":"yyyy-MM-dd"},null,8,["modelValue"])]),_:1}),h(c,{label:"\u7ED3\u675F\u65E5\u671F\uFF1A",prop:"endDate"},{default:b(()=>[h(s,{modelValue:o.form.endDate,"onUpdate:modelValue":t[2]||(t[2]=f=>o.form.endDate=f),type:"date",style:{width:"300px"},"value-format":"yyyy-MM-dd"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])]),_:1},8,["data"])}var ge=C(re,[["render",se],["__scopeId","data-v-5b3e8f60"]]);export{ge as default};
