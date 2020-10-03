(this.webpackJsonpcossy1011=this.webpackJsonpcossy1011||[]).push([[0],{30:function(e,t,n){e.exports=n(40)},34:function(e,t,n){},37:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(23),o=n.n(i),c=(n(34),n(6)),l=n(4);function s(){var e=Object(c.a)(["\n        height: 200px;\n        width: 500px;\n        color: white;\n    "]);return s=function(){return e},e}var u=function(e){var t=e.isUp,n=e.year,a=e.description,i=l.c.div(s());return t?r.a.createElement(i,{style:{position:"relative"}},r.a.createElement("p",{style:{margin:0,lineHeight:"20px"}},a),r.a.createElement("svg",{x:"0",y:"0",width:"500px",height:"100px",style:{position:"relative",top:0,left:0}},r.a.createElement("circle",{cx:"20px",cy:"80px",r:"10px",fill:"white"}),r.a.createElement("line",{x1:"20px",y1:"80px",x2:"100px",y2:"0px",stroke:"white","stroke-width":"1"}),r.a.createElement("line",{x1:"100px",y1:"0px",x2:"400px",y2:"0px",stroke:"white","stroke-width":"2"})),r.a.createElement("p",{style:{margin:0}},n)):r.a.createElement(i,{style:{position:"relative"}},r.a.createElement("p",{style:{margin:0,lineHeight:"80px"}},n),r.a.createElement("svg",{x:"0",y:"0",width:"500px",height:"100px",style:{position:"relative",top:0,left:0}},r.a.createElement("circle",{cx:"20px",cy:"20px",r:"10px",fill:"white"}),r.a.createElement("line",{x1:"20px",y1:"20px",x2:"100px",y2:"100px",stroke:"white","stroke-width":"1"}),r.a.createElement("line",{x1:"100px",y1:"100px",x2:"400px",y2:"100px",stroke:"white","stroke-width":"2"})),r.a.createElement("p",{style:{margin:0}},a))};function m(){var e=Object(c.a)(['\n        position: "fixed",\n        top: 0,\n        left: 0,\n        zIndex: -1,\n    ']);return m=function(){return e},e}var h=function(){l.c.svg(m());return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{position:"absolute",top:0,left:"110vw",zIndex:-1}},r.a.createElement("svg",{x:"0",y:"0",width:"200vw",height:"100vh"},r.a.createElement("line",{x1:"0",y1:"50vh",x2:"200vw",y2:"50vh",stroke:"white","stroke-width":"1"}))),r.a.createElement("div",{style:{display:"flex",alignItems:"center",paddingLeft:"20vw"}},r.a.createElement(u,{isUp:!0,year:1995,description:"I was born in Fukushima."}),r.a.createElement(u,{isUp:!1,year:2015,description:"I entered Kyoto Univ."}),r.a.createElement(u,{isUp:!0,year:2020,description:"I major X-ray astronomy in Cosmic-ray Lab."})))};n(37);function p(){var e=Object(c.a)(["\n      color: white;\n      animation: ","s "," ease-out;\n    "]);return p=function(){return e},e}function f(){var e=Object(c.a)(["\n      0% {\n        filter: blur(3rem);\n        opacity: 0;\n      }\n      100% {\n        filter: blur(0);\n        opacity: 1;\n      }\n    "]);return f=function(){return e},e}var d=function(){for(var e=Object(l.d)(f()),t=l.c.span(p(),(function(e){return e.random}),e),n=["\u2192","s","c","r","o","l","l"],a=[],i=0;i<n.length;i++){var o={random:2*Math.random()+1};a.push(r.a.createElement(t,o,n[i]))}return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"scroll",style:{height:"100vh",width:"100vw",display:"flex",alignItems:"center",justifyContent:"center"}},r.a.createElement("h1",{style:{letterSpacing:"1rem"}},a)),r.a.createElement(h,null))},y=n(27),v=n(3),E=n(5),x=n(2),b=n(8),g=n(10),w=r.a.createContext();function j(e){var t=e.children,n=Object(a.useState)((function(){return new b.World})),i=Object(v.a)(n,1)[0];return Object(a.useEffect)((function(){i.broadphase=new b.NaiveBroadphase,i.solver.iterations=10,i.gravity.set(0,0,-10)}),[i]),Object(g.b)((function(){return i.step(1/77)})),r.a.createElement(w.Provider,{value:i,children:t})}function M(e,t){var n=Object.assign({},e),r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=Object(a.useRef)(),o=Object(a.useContext)(w),c=Object(a.useState)((function(){return new b.Body(n)})),l=Object(v.a)(c,1),s=l[0];return Object(a.useEffect)((function(){return t(s),o.addBody(s),function(){return o.removeBody(s)}}),r),Object(g.b)((function(){i.current&&(i.current.position.copy(s.position),i.current.quaternion.copy(s.quaternion))})),i}function O(){var e=Object(c.a)(["\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100vw;\n        height: 100vh;\n        z-index: -1;\n    "]);return O=function(){return e},e}var F=l.c.div(O()),S=function(e){var t=e.position,n=e.args,a=e.isVisible,i=M({mass:1e5},(function(e){var n;e.addShape(new b.Sphere),(n=e.position).set.apply(n,Object(E.a)(t))}));return a?r.a.createElement("mesh",{ref:i,castShadow:!0,receiveShadow:!0},r.a.createElement("sphereBufferGeometry",{attach:"geometry",args:n}),r.a.createElement("meshStandardMaterial",{attach:"material"})):r.a.createElement(r.a.Fragment,null)},k=function(e){var t=e.position,n=e.isVisible,a=M({mass:0},(function(e){var n;e.addShape(new b.Plane),(n=e.position).set.apply(n,Object(E.a)(t))}));return n?r.a.createElement("mesh",{ref:a,receiveShadow:!0},r.a.createElement("planeBufferGeometry",{attach:"geometry",args:[1e3,1e3]}),r.a.createElement("meshPhongMaterial",{attach:"material",color:"#272727"})):r.a.createElement(r.a.Fragment,null)},C=function(e){var t=e.count,n=e.mouse,i=e.isVisible,o=Object(a.useRef)(),c=Object(a.useRef)(),l=Object(a.useMemo)((function(){return new x.Object3D}),[]),s=Object(a.useMemo)((function(){for(var e=[],n=0;n<t;n++){var a=100*Math.random(),r=20+100*Math.random(),i=.01+Math.random()/200,o=100*Math.random()-50,c=100*Math.random()-50,l=100*Math.random()-50,s=255*Math.random(),u=255*Math.random(),m=255*Math.random();e.push({t:a,factor:r,speed:i,xFactor:o,yFactor:c,zFactor:l,rColor:s,gColor:u,bColor:m,mx:0,my:0})}return e}),[t]);return Object(g.b)((function(e){s.forEach((function(e,t){var a=e.t,r=e.factor,i=e.speed,c=e.xFactor,s=e.yFactor,u=e.zFactor;e.rColor,e.gColor,e.bColor;a=e.t+=i/2;var m=Math.cos(a)+Math.sin(1*a)/10,h=Math.sin(a)+Math.cos(2*a)/10,p=Math.cos(a);e.mx+=.01*(n.current[0]-e.mx),e.my+=.01*(-1*n.current[1]-e.my),l.position.set(e.mx/10*m+c+Math.cos(a/10*r)+Math.sin(1*a)*r/10,e.my/10*h+s+Math.sin(a/10*r)+Math.cos(2*a)*r/10,e.my/10*h+u+Math.cos(a/10*r)+Math.sin(3*a)*r/10),l.scale.set(p,p,p),l.rotation.set(5*p,5*p,5*p),l.updateMatrix(),o.current.setMatrixAt(t,l.matrix)})),o.current.instanceMatrix.needsUpdate=!0})),i?r.a.createElement(r.a.Fragment,null,r.a.createElement("pointLight",{ref:c,distance:20,intensity:8,color:"lightblue"}),r.a.createElement("instancedMesh",{ref:o,args:[null,null,t]},r.a.createElement("bufferGeometry",{attach:"geometry"}),r.a.createElement("sphereBufferGeometry",{attach:"geometry",args:[.2,10]}),r.a.createElement("meshStandardMaterial",{attach:"material",color:"#ff00ff"}))):r.a.createElement(r.a.Fragment,null,r.a.createElement("instancedMesh",{ref:o,args:[null,null,t]},r.a.createElement("sphereBufferGeometry",{attach:"geometry",args:[.2,10]}),r.a.createElement("meshStandardMaterial",{attach:"material",color:"black"})))},B=function(){var e=Object(a.useState)(!0),t=Object(v.a)(e,2),n=t[0],i=(t[1],Object(a.useRef)([0,0]));return r.a.createElement(F,null,r.a.createElement(g.a,{camera:{position:[0,0,-12]}},r.a.createElement("ambientLight",{intensity:1}),r.a.createElement("spotLight",{intensity:.6,position:[0,0,50],angle:0,penumbra:1,castShadow:!0}),r.a.createElement(j,null,r.a.createElement(k,{position:[0,0,-10],isVisible:n}),r.a.createElement(S,{position:[0,0,10],args:[1,50,50],isVisible:n})),r.a.createElement(C,{mouse:i,count:2e4,isVisible:n})))};n(39);function I(){var e=Object(c.a)(["\n        color: gray;\n        animation: ","s "," ease-out;\n    "]);return I=function(){return e},e}function U(){var e=Object(c.a)(["\n        0% {\n            filter: blur(3rem);\n            opacity: 0;\n        }\n        100% {\n            filter: blur(0);\n            opacity: 1;\n        }\n    "]);return U=function(){return e},e}var V=function(){for(var e=Object(l.d)(U()),t=l.c.span(I(),(function(e){return e.random}),e),n=["C","o","m","i","n","g","","S","o","o","n","..."],a=[],i=0;i<n.length;i++){var o={random:2*Math.random()+1};a.push(r.a.createElement(t,o,n[i]))}return r.a.createElement("div",null,r.a.createElement(y.a,null),r.a.createElement(B,null),r.a.createElement("h1",{style:{color:"#FFFFFF",height:"100vh",width:"100vw",position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",letterSpacing:"0.3rem"}},a))};var z=function(){var e=window.innerWidth,t=window.innerHeight;return r.a.createElement("div",null,e>t?r.a.createElement(d,null):r.a.createElement(V,null))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.9b6cc04d.chunk.js.map