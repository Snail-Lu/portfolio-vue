import{D as c}from"./index.323ec64a.js";import{_ as A}from"./index.1d645095.js";import{o,t as g,a as r,K as m,B as s,c as p,w as R,y as w,F as G,b}from"./elementPlus.8cc4687e.js";let l=null;const C={name:"LazyLoadImg",props:{borderRadius:{type:String,default:"0"},width:{type:String,default:"200px"},height:{type:String,default:"200px"},src:{type:String,default:""},minTimeOut:{type:String||Number,default:"300"},showDistance:{type:Object,default:()=>{}},effect:{type:String,default:"linear"},duration:{type:String||Number,default:"300"},loadSrc:{type:String,default:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiBub25lOyBkaXNwbGF5OiBibG9jazsgc2hhcGUtcmVuZGVyaW5nOiBhdXRvOyIgd2lkdGg9IjIwMHB4IiBoZWlnaHQ9IjIwMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgo8ZGVmcz4KICA8cGF0aCBpZD0icGF0aCIgZD0iTTUwIDE1QTE1IDM1IDAgMCAxIDUwIDg1QTE1IDM1IDAgMCAxIDUwIDE1IiBmaWxsPSJub25lIj48L3BhdGg+CiAgPHBhdGggaWQ9InBhdGhhIiBkPSJNMCAwQTE1IDM1IDAgMCAxIDAgNzBBMTUgMzUgMCAwIDEgMCAwIiBmaWxsPSJub25lIj48L3BhdGg+CjwvZGVmcz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgwIDUwIDUwKSI+Cjx1c2UgeGxpbms6aHJlZj0iI3BhdGgiIHN0cm9rZT0iI2RmZGZkZiIgc3Ryb2tlLXdpZHRoPSIzIj48L3VzZT4KPC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDYwIDUwIDUwKSI+Cjx1c2UgeGxpbms6aHJlZj0iI3BhdGgiIHN0cm9rZT0iI2RmZGZkZiIgc3Ryb2tlLXdpZHRoPSIzIj48L3VzZT4KPC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDEyMCA1MCA1MCkiPgo8dXNlIHhsaW5rOmhyZWY9IiNwYXRoIiBzdHJva2U9IiNkZmRmZGYiIHN0cm9rZS13aWR0aD0iMyI+PC91c2U+CjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgwIDUwIDUwKSI+CjxjaXJjbGUgY3g9IjUwIiBjeT0iMTUiIHI9IjkiIGZpbGw9IiNlMTViNjQiPgogIDxhbmltYXRlTW90aW9uIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMHMiPgogICAgPG1wYXRoIHhsaW5rOmhyZWY9IiNwYXRoYSI+PC9tcGF0aD4KICA8L2FuaW1hdGVNb3Rpb24+CjwvY2lyY2xlPgo8L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNjAgNTAgNTApIj4KPGNpcmNsZSBjeD0iNTAiIGN5PSIxNSIgcj0iOSIgZmlsbD0iI2Y4YjI2YSI+CiAgPGFuaW1hdGVNb3Rpb24gZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC4xNjY2NjY2NjY2NjY2NjY2NnMiPgogICAgPG1wYXRoIHhsaW5rOmhyZWY9IiNwYXRoYSI+PC9tcGF0aD4KICA8L2FuaW1hdGVNb3Rpb24+CjwvY2lyY2xlPgo8L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDUwIDUwKSI+CjxjaXJjbGUgY3g9IjUwIiBjeT0iMTUiIHI9IjkiIGZpbGw9IiNhYmJkODEiPgogIDxhbmltYXRlTW90aW9uIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuMzMzMzMzMzMzMzMzMzMzM3MiPgogICAgPG1wYXRoIHhsaW5rOmhyZWY9IiNwYXRoYSI+PC9tcGF0aD4KICA8L2FuaW1hdGVNb3Rpb24+CjwvY2lyY2xlPgo8L2c+CjwhLS0gZ2VuZXJhdGVkIGJ5IGh0dHBzOi8vbG9hZGluZy5pby8gLS0+PC9zdmc+"},errorSrc:{type:String,default:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAAEVpJREFUeF7tnQ+MZVddx3+/MzOYbltkJ5RkVyMilbYUWmpLW1GxhRBdpQssZbB/Ekk6c899GQq4EoxBpIppgpGt0J1999y3TSAsJW7F7m5rlqJtsWAtpSAbSwVsRYnsxtYMVVqN7cz5mbO+aeq4s/PO79775t13vjeZzLb5/Tm/z+985/55553LhAMEQGBNAgw2IAACaxOAQDA7QOAkBCAQTA8QgEAwB0BARwBnEB03eCVCAAJJpNEoU0cAAtFxg1ciBCCQRBqNMnUEIBAdN3glQgACSaTRKFNHAALRcYNXIgQgkEQajTJ1BCAQHTd4JUIAAkmk0ShTRwAC0XGDVyIEIJBEGo0ydQQgEB03eCVCAAJJpNEoU0cAAtFxg1ciBCCQRBqNMnUEIBAdN3glQgACSaTRKFNHAALRcYNXIgQgkEQajTJ1BDZUIL1e78KlpaUrjDFbiCj8bGXmLSKyVVcOvNpMgJmPisgxIjpKRMe898empqb+dHZ29uGNqmvoAinLcpv3fhszbyOiMzeqcORtDwFm/qaIHBSRe/I8v3uYIx+aQJxzv05E80T02mEWiFxjR+CrRLRgrf3UMCprXCBlWb5dRIIwLh9GQciRDIF7mXkhy7LPNVlxYwLZu3fv9PLycklEb2+yAMROm4CI3C4i13c6ne83QaIRgRRF8Upm3kdEFzQxaMQEgVUE/tl7/65Op/PFusnULpCiKN7EzF+oe6CIBwIDEJiz1u4dwG5gk1oF4pz7ABF9dODsMASB+glcb63dXVfY2gRSFMUOZm70hqmuohFnvAkw88VZloWnXZWPWgSyZ8+e8yYmJsKAXlB5RAgAAtUJ/CcRnWOt/V7VUJUFsmvXrlM2bdp0DzNfWnUw8AeBugiIyF3T09PbZ2ZmnqkSs7JAnHO/T0QfqjII+IJAQwQ+Yq393SqxKwlkYWHhzMnJya8Q0XSVQfR9HyeiEOv4Gpwa4iFEywisrMlj5gtrWo+3uLS0dMn8/PyjWhSVBOKc20VEv6FNTkRPicg+Y8zhLMsOVYgD1zEjUBTFG4noSma+lohOq1DeTdbanVp/tUCKojifmR/U3ph773/PGPNpa+1j2sHDb/wJOOdeTkRBJDcoq31GRC7O8/yIxr+KQP6Ymd+rSUpE1loblqHgAIGBCBRF0WXmfCDjVUYicnOe5+/R+KoF4pwLa/TPjU0qInvyPA+LF3GAQBSBbrd7gzHmw1FO/2v8qLX2pxV+pBKIc+4SInpAkfA2a+2Mwg8uIHCcgHMufEoe/QfWe3+5Zq2WViBBxVHXhOFLL8aY18/Ozi6i1yCgJRBWiXvv7xOR2KuXj1lr3x+bVyWQsiwfjh1geBqRZdlnYgcIexBYTaAsy2vC089IMt+x1p4V6RN/iXXLLbecvrS09B+RiR6y1uKbhJHQYL42AedceCp1XgyjycnJF1533XU/jPGJPoOUZfkKEfl2TBIiutFa+8FIH5iDwJoENPcizHxWlmXficEaLZBut3uZMebemCTaG6SYHLBNi8Cw5mG0QHq93lXe+1tj2qFRbkx82KZHQHMlY4y5em5u7rMxtKIF4pz7TSL6o5gkmmu/mPiwTY+A8l74/dbaj8XQihaI5sMaa210npgiYJsmAeecxFQeljd1Op24jydiEgRbCCSWGOybIgCBNEUWcceCAAQyFm1EEU0RgECaIou4Y0EAAhmLNqKIpghAIE2RRdyxIACBjEUbUURTBCCQpsgi7lgQgEDGoo0ooikCEEhTZBF3LAhAIGPRRhTRFAEIpGayzrktK5uSee+3GmOOhhdHLi8vP9jpdMLGdTj6BNrACgKpYbouLCycNjU1da2IXElEYTOytY5DzHz42Wef3Tc/P/9UDalbF6JtrCCQilOsv7AybDoWNh8b9HjMe78vdtXnoMFH1a6NrCCQCrOpLMtcRLpVQoTd7Sr4t8a1rawgEOUU0yzJP1EqZp7PsmyPchitcGszKwhEMcWcc2FTsdpewUVEM9ba2xRDGXmXtrOCQCKnWP/tul+q6XUMK9kXReQX8jx/JHI4I20+DqwgkMgpVhTFPma+JtJtXXMR+Uye5+Fmf2yOcWAFgURMx16vd573XrXF/SBpROS1eZ4/NIjtqNuMCysIJGKmNXA9vTr7B621N0YMaWRNx4UVBBIxxcqyvFdELotwiTJl5i9mWXZ5lNOIGo8LKwgkYoI558J2qK+IcIk1VW1+HJtkGPbjwgoCiZgtzrmwofbpES6xpj+01r4w1mkU7ceFFQQSMbvGpekRJatNx4UVBBIxBcblsiGiZLXpuLCCQCKmwLjceEaUrDYdF1YQSMQUcM7NElEvwiXWNHrj49gEw7IfF1YQSMSM6fV6L/Pe/2OES5TpOL3CYVxYQSBRU5ioKIoq725fM5uIfDzP8/dFDmekzceBFQQSOcX6fxnD66lfEul6MvPHjTGXzs3NfbfGmBseahxYQSCKadTAMgosdx+8D0NlBYEM3pj/Y9nmLwEpS1a7tZkVBKJuO5Fz7h1EtF8bQvM2Im2ujfZrKysIpOLMKctyu4i8Z53dTFZnuZuZP5Fl2aGK6Vvl3kZWEEhNU6z/3P/X1tv2h4jusNburSltK8O0iRUEUvMUa8NmaDWXrA7XBlYQiLq9cEyBAASSQpdRo5oABKJGB8cUCEAgKXQZNaoJQCBqdHBMgQAEkkKXUaOaAASiRgfHFAhAICl0GTWqCUAganRwTIEABJJCl1GjmgAEokYHxxQIQCApdBk1qglAIGp0cEyBAASSQpdRo5oABKJGB8cUCEAgKXQZNaoJQCBqdHBMgQAEkkKXUaOaAASiRgfHFAhAICl0GTWqCUAganRwTIEABJJCl1GjmgAEokYHxxQIQCApdBk1qglAIGp0cEyBAASSQpdRo5oABKJGB8cUCEAgKXQZNaoJQCBqdHBMgQAEkkKXUaOaAASiRgfHFAhAICl0GTWqCUAganRwTIEABJJCl1GjmgAEokYHxxQIQCApdBk1qglAIGp07XHctWvXKaeeeuqLiOhHjTHhN3nvnySif3/66aef3Llz53+1p5rhjhQCGS7v2rI55zaJyEXGmIuIaIuIHBcAM79o5d9EdPz/EdGPrJP4v4NYiOi4aJj5SRF57t/e+2PM/ODmzZu/NjMzk5SYIJDapmxzgZxzU88Tw0Ui8jNE9KrmMp408t8S0YMi8lUiOsLMR6y1z27QWBpPC4E0jjg+QbfbvWBiYuICEbmAmY//JqJN8ZGG4vF0EAwRfcMY843l5eUjeZ4fGUrmISSBQIYAeZAUvV7v0uXl5bcy81uI6OxBfEbY5lsicnBiYuLA3NzcAyM8znWHBoGsi6g5g16v9zLvfRDEW4noF5vLtKGR/4qIDhhjDs7NzX13Q0eiSA6BKKBVcdm/f/8pi4uLK2eKIIz1bqCrpBsl3/Ag4EA4s0xPTx9oy80+BDKkKdTtdt9gjFk5W/zEkNKOaprvBbF47w92Op17RnWQYVwQSMPdcc7NMvOciFzccKpWhg+Pj733ZZ7nt4xiARBIQ10py/JdIpIT0SUNpRi3sF8moq619tZRKgwCqbkbZVle0xfGz9ccOolwzPwXIrLHWntgFAqGQGrqQlEU7ySinJkvqylk6mEOMfOeLMvu2kgQEEhF+kVR7DDG5CLypoqh4H5iAn8Szih5nt+3EYAgECX1siy39y+ltilDNO32FBEtEtEP+r8XmTn8d/gJx7SITIff/Z/N/d+nNT0wTXwR+aQxJpxRwhKXoR0QiAJ1t9u9wRjzYYVrnS5PMfPD3vuwxOPrxphHlpaWfrC8vLx4xhlnLM7MzDyjSbZ///4XPPHEE9MTExPTk5OTm0XkbO/9a5j5fBF5DRGdrolbo8+Mtfa2GuOdNBQEEkl6g8TxL0T0MBF9k4j+joi+bq0Nv4d+9Hq9c0Tk1SJyHhG9mojOJ6KXDnkgQxMJBBLR2W63+5PGmGEsl1giooPMfNB7/0Ce5/8QMcyhmzrnXs7MrxOR8EFo+JlseBD3W2t/ruEcx8NDIBGUh3D2uC+IIizHsNY+FjG0kTHti+UtfbG8vqmBMfOOLMtubyr+SlwIJIJwWZb3ikitj3GZ+e+DIETkUJ7nfxMxnJE3LYriZ5l5e1ihLCLn1Dzgm6y1O2uO+f/CQSARhGsUyL+FMwURHcqy7FDEEFprGp76EVF48hcuwV5cQyGfs9ZeWUMc3KTXBdE5t5+I3lEhXnj0utt7v7vT6Xy/QpzWuna73R8zxrybiMKP+pGyiNye5/mOpkHgDBJBuCiKa5n50xEuz5mKSEFEN+d5/ojGf9x8iqJ4JRFdz8xhvVr0wcydLMsC00YPCCQC7+7du186NTX1TxEuxMyfDWeNLMvuj/FLxbYsy9eFs4mIXBVZ85nDeJABgUR2pSiK32bmGwdwO8zMN2dZdngA2+RNyrLcJiLXE9EgKxPwOUjsJ9XWWh7WLCvL8taT/MW7X0R253kezhw4IgkURXEVM4f7k3BmOdExNHGE5DiDRDZwxbwsyzeLSEZE5xLRTzHzJ733X4AwlEBXufWF8gYiemNYP8bMnzLGHJ6dnX20ngyDRYFABuMEq0QJQCCJNh5lD0YAAhmME6wSJQCBJNp4lD0YAQhkME6wSpQABJJo41H2YAQgkME4wSpRAhBIoo1H2YMRgEAG4wSrRAlAIIk2HmUPRgACGYwTrBIlAIEk2niUPRgBCGQwTrBKlMBICsQ5F1bJusiebLXWHov0gTkIrEnAObeFiI5GIrLW2jLGJ/p7Gv2l5HfEJAmvQ56bm/tajA9sQeBkBHq93oXe+4diKDHzFVmW3RnlE2McbDUDI6Jo5caOC/ZpEXDOvY+IboqpWvOHOvoMojy13WGtDVvL4ACBWgg45/6y/4WtmHjRl/rRAgmjib056ldwqbX2KzHVwBYETkTAORfeDBb9CmvNV7+1AonegyrsIJJl2dVoOQhUJbDOvgNrhVddxagE0v9OsuZ9dUP9Un/VRsB/9Ah0u923GWP+TDEy1X2wSiDdbvclxph/VQySRORcbNCmIQef/s6P4XUTmiP6/iMkUQmkfx8S9q9V3Xh773881e09NZ2FD1HY7ZGZwztYNMdha+2vaBzVAul2u3PGmKgPXZ4/QO/9jk6n0/gW+Roo8BktAs65sOdyuO9VHd77rNPp9DTOaoGEZEVRfJmZ1S9LCTfuIvJxPN3StG78fcLTKmZ+r2Lr0+fgiMhf53mufu13VYGEnfY0N+uru3s3Ed1pjPmS9/4olqWM/+Q/UYXhMzZjzFbv/YVE9GYiuqIqCRG5usqGgZUE0j+LfJ6Zf6lqIfAHgboJiMhdeZ7/cpW4dQjkCmZO4kUzVUDDd/gERGR7nudR6wZXj7KyQPpnkY8w8+8MHwEygsCaBN5trV2oyqcWgYRBOOfCKslfrTog+INADQT+0Fr7WzXE0X8OssZNVlifH9bp4wCBDSEgIt/O8/zsupLXdgZZGVBRFN9i5rPqGiDigEAEgWPW2q0R9uua1i6Q/uXWR4noA+tmhwEI1Efgz6214dFwrUcjAumLZD68/6/W0SIYCJyAgIj8QZ7nH2oCTmMCCYMtiiJ80DOPz0maaB1ihs85iGih6qPck5FsVCDPuy8Jb0kNQlEvS8F0AIEVAmH5SF8Yjb9rcigCWSmsv8DxbQO+LRUzAgRWEzjkvb9Tu/BQg3OoAlkZYP977eHyq5b1NprC4dMaAreJyO0icnen03l82KPeEIGsLnJlkZqIbBGRsFit1kd1w4aKfDoCxpijzBx+jo3KotWREIgOJ7xAoHkCEEjzjJGhxQQgkBY3D0NvngAE0jxjZGgxAQikxc3D0JsnAIE0zxgZWkwAAmlx8zD05glAIM0zRoYWE4BAWtw8DL15AhBI84yRocUEIJAWNw9Db54ABNI8Y2RoMYH/AcXl3V+P/dRrAAAAAElFTkSuQmCC"}},data(){return{status:0,isShow:!1}},watch:{src(){!this.isShow||(this.status=0,this.isShow=!1,this.$nextTick(()=>{this.status=1}))}},mounted(){let e=new IntersectionObserver(([{isIntersecting:a}])=>{a&&(this.status=1,l=new Date().getTime(),e.unobserve(this.$refs.loadImg))},{rootMargin:"0px 0px 100px 0px"});e.observe(this.$refs.loadImg)},destroyed(){this.$emit("destroyed")},methods:{load(){if(this.minTimeOut==0){this.isShow=!0;return}let e=new Date().getTime()-l;e<this.minTimeOut?setTimeout(()=>{this.isShow=!0},this.minTimeOut-e):this.isShow=!0},error(){this.status=2,this.isShow=!0}}},y={class:"lazy-load-wrapper"},M=["src"],f=["src"],S=["src"];function J(e,a,i,u,t,d){return o(),g("div",y,[r("img",{src:i.loadSrc,ref:"loadImg",class:"loading-placeholder",style:m({display:t.isShow?"none":"relative",opacity:t.isShow?"0":"1",borderRadius:i.borderRadius,width:i.width,height:i.height,transition:`opacity ${i.duration/1e3}s ${i.effect}`})},null,12,M),t.status==1?(o(),g("img",{key:0,class:"main-img",onLoad:a[0]||(a[0]=(...I)=>d.load&&d.load(...I)),onError:a[1]||(a[1]=(...I)=>d.error&&d.error(...I)),src:i.src,style:m({opacity:t.isShow?"1":"0",borderRadius:i.borderRadius,width:i.width,transition:`opacity ${i.duration/1e3}s ${i.effect}`})},null,44,f)):s("",!0),t.status==2?(o(),g("img",{key:1,class:"loading-placeholder",src:i.errorSrc,style:m({opacity:t.isShow?"1":"0",borderRadius:i.borderRadius,width:i.width,height:i.height,transition:`opacity ${i.duration/1e3}s ${i.effect}`})},null,12,S)):s("",!0)])}var n=A(C,[["render",J],["__scopeId","data-v-75191300"]]);const N={name:"lazyLoad",components:{Demo:c,LazyLoadImg:n},data(){return{demoInfo:{title:"\u56FE\u7247\u61D2\u52A0\u8F7D",url:""},list:["https://img0.baidu.com/it/u=1935280827,2072276192&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281","https://img2.baidu.com/it/u=4255816616,2719846955&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500","https://img1.baidu.com/it/u=2925040134,2161267160&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=313","https://img0.baidu.com/it/u=3810029785,1422155344&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500","https://img2.baidu.com/it/u=1378801680,115323224&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800","https://img1.baidu.com/it/u=1055292963,704550004&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500","https://img2.baidu.com/it/u=1463605021,1779581844&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500","https://img2.baidu.com/it/u=3316751696,261998796&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500","https://img1.baidu.com/it/u=3906918928,3518209927&fm=253&fmt=auto&app=138&f=PNG?w=889&h=500"]}},mounted(){},methods:{}},x={class:"goods-list"};function Z(e,a,i,u,t,d){const I=n,h=c;return o(),p(h,{data:t.demoInfo},{default:R(()=>[r("div",x,[(o(!0),g(G,null,w(t.list,(E,B)=>(o(),g("div",{class:"goods-item",key:B},[b(I,{src:E,width:"100%"},null,8,["src"])]))),128))])]),_:1},8,["data"])}var P=A(N,[["render",Z],["__scopeId","data-v-8dbf9ece"]]);export{P as default};
