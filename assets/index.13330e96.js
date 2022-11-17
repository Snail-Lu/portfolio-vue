import{P as g,A as b,G as _,H as x,D as W,S as k,i as L,o as C,q as p,y,c as h,x as R,z as S,W as v,C as M}from"./threejs.ec33633d.js";import{O as z}from"./OrbitControls.afb368f0.js";import{_ as G}from"./index.9b7dad36.js";import{o as H,t as P}from"./elementPlus.7f4dbe24.js";function A(){const e=new g(35,1,.1,100);return e.position.set(-5,5,7),e}function D(){const e=new b(3);return e.position.set(-3.5,0,-3.5),e}function E(){return new _(6)}function $(){const e=new x("white","darkslategray",3),t=new W("white",2);return t.position.set(10,10,10),{ambientLight:e,mainLight:t}}function j(){const e=new k;return e.background=new L("skyblue"),e}function B(){const e=new C(2,2.25,1.5),t=new p(.75,.75,3,12),s=new p(.4,.4,1.75,16),n=new p(.3,.1,.5);return{cabin:e,nose:t,wheel:s,chimney:n}}function F(){const e=new y({color:"firebrick",flatShading:!0}),t=new y({color:"darkslategray",flatShading:!0});return{body:e,detail:t}}function I(){const e=B(),t=F(),s=new h(e.cabin,t.body);s.position.set(1.5,1.4,0);const n=new h(e.chimney,t.detail);n.position.set(-2,1.9,0);const o=new h(e.nose,t.body);o.position.set(-1,1,0),o.rotation.z=Math.PI/2;const i=new h(e.wheel,t.detail);i.position.y=.5,i.rotation.x=Math.PI/2;const u=i.clone();u.position.x=-1;const w=i.clone();w.position.x=-2;const m=i.clone();return m.position.set(1.5,.9,0),m.scale.set(2,1.25,2),{nose:o,cabin:s,chimney:n,smallWheelRear:i,smallWheelCenter:u,smallWheelFront:w,bigWheel:m}}const d=R.degToRad(24);class T extends S{constructor(){super(),this.meshes=I(),this.add(this.meshes.nose,this.meshes.cabin,this.meshes.chimney,this.meshes.smallWheelRear,this.meshes.smallWheelCenter,this.meshes.smallWheelFront,this.meshes.bigWheel)}tick(t){this.meshes.bigWheel.rotation.y+=d*t,this.meshes.smallWheelRear.rotation.y+=d*t,this.meshes.smallWheelCenter.rotation.y+=d*t,this.meshes.smallWheelFront.rotation.y+=d*t}}function q(e,t){const s=new z(e,t);return s.enableDamping=!0,s.target.y=1,s.tick=()=>s.update(),s}function O(){const e=new v({antialias:!0});return e.physicallyCorrectLights=!0,e}const f=(e,t,s)=>{t.aspect=e.clientWidth/e.clientHeight,t.updateProjectionMatrix(),s.setSize(e.clientWidth,e.clientHeight),s.setPixelRatio(window.devicePixelRatio)};class U{constructor(t,s,n){f(t,s,n),window.addEventListener("resize",()=>{f(t,s,n),this.onResize()})}onResize(){}}const J=new M;class K{constructor(t,s,n){this.camera=t,this.scene=s,this.renderer=n,this.updatables=[]}start(){this.renderer.setAnimationLoop(()=>{this.tick(),this.renderer.render(this.scene,this.camera)})}stop(){this.renderer.setAnimationLoop(null)}tick(){const t=J.getDelta();for(const s of this.updatables)s.tick(t)}}let r,a,c,l;const N={name:"Train",data(){return{}},mounted(){this.init()},methods:{init(){const e=document.querySelector("#train-container");r=A(),a=O(),c=j(),l=new K(r,c,a),e.append(a.domElement);const t=q(r,a.domElement),{ambientLight:s,mainLight:n}=$(),o=new T;l.updatables.push(t,o),c.add(s,n,o),new U(e,r,a),c.add(D(),E()),l.start()},render(){render.render(c,r)},start(){l.start()},stop(){l.stop}}},Q={class:"three-js-container",id:"train-container"};function V(e,t,s,n,o,i){return H(),P("div",Q)}var te=G(N,[["render",V],["__scopeId","data-v-37c90e10"]]);export{te as default};
