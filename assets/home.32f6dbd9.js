import{S as w,C as S,P as b,W as C,V as v,B as z,F as u,a as y,A as I,b as A,c as B}from"./threejs.66e2067b.js";import{O as H}from"./OrbitControls.c70c0f2e.js";import{_ as T}from"./index.90845e7b.js";import{H as W,o as k,t as E}from"./elementPlus.9b213846.js";const F={id:"star-river"},R={__name:"home",setup(L){const _=()=>{let n=new w;n.background=new S(2632246);let t=new b(60,innerWidth/innerHeight,1,1e3);t.position.set(0,5,49);let o=new C;const g=(Math.floor(innerHeight*devicePixelRatio)/devicePixelRatio).toFixed(2);o.setSize(innerWidth,g),document.querySelector("#star-river").appendChild(o.domElement),window.addEventListener("resize",e=>{t.aspect=innerWidth/innerHeight,t.updateProjectionMatrix(),o.setSize(innerWidth,innerHeight)});let r=new H(t,o.domElement);r.enableDamping=!0,r.enablePan=!1;let l={time:{value:0}},a=[],d=[],c=()=>{d.push(Math.random()*Math.PI,Math.random()*Math.PI*2,(Math.random()*.9+.1)*Math.PI*.1,Math.random()*.9+.1)},m=new Array(5e4).fill().map(e=>(a.push(Math.random()*1.5+.5),c(),new v().randomDirection().multiplyScalar(Math.random()*.5+9.5)));for(let e=0;e<1e5;e++){let p=10,h=40,f=Math.pow(Math.random(),1.5),P=Math.sqrt(h*h*f+(1-f)*p*p);m.push(new v().setFromCylindricalCoords(P,Math.random()*2*Math.PI,(Math.random()-.5)*2)),a.push(Math.random()*1.5+.5),c()}let s=new z().setFromPoints(m);s.setAttribute("sizes",new u(a,1)),s.setAttribute("shift",new u(d,4));let M=new y({size:.125,transparent:!0,depthTest:!1,blending:I,onBeforeCompile:e=>{e.uniforms.time=l.time,e.vertexShader=`
      uniform float time;
      attribute float sizes;
      attribute vec4 shift;
      varying vec3 vColor;
      ${e.vertexShader}
    `.replace("gl_PointSize = size;","gl_PointSize = size * sizes;").replace("#include <color_vertex>",`#include <color_vertex>
        float d = length(abs(position) / vec3(40., 10., 40));
        d = clamp(d, 0., 1.);
        vColor = mix(vec3(227., 155., 0.), vec3(100., 50., 255.), d) / 255.;
      `).replace("#include <begin_vertex>",`#include <begin_vertex>
        float t = time;
        float moveT = mod(shift.x + shift.z * t, PI2);
        float moveS = mod(shift.y + shift.z * t, PI2);
        transformed += vec3(cos(moveS) * sin(moveT), cos(moveT), sin(moveS) * sin(moveT)) * shift.w;
      `),console.log(e.vertexShader),e.fragmentShader=`
      varying vec3 vColor;
      ${e.fragmentShader}
    `.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
        float d = length(gl_PointCoord.xy - 0.5);
        //if (d > 0.5) discard;
      `).replace("vec4 diffuseColor = vec4( diffuse, opacity );","vec4 diffuseColor = vec4( vColor, smoothstep(0.5, 0.1, d)/* * 0.5 + 0.5*/ );"),console.log(e.fragmentShader)}}),i=new A(s,M);i.rotation.order="ZYX",i.rotation.z=.2,n.add(i);let x=new B;o.setAnimationLoop(()=>{r.update();let e=x.getElapsedTime()*.5;l.time.value=e*Math.PI,i.rotation.y=e*.05,o.render(n,t)})};return W(()=>{_()}),(n,t)=>(k(),E("div",F))}},$=T(R,[["__scopeId","data-v-84d967cb"]]);export{$ as default};
