(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{220:function(e,t,a){},221:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(83),o=a.n(c),l=(a(91),a(92),a(33)),s=a(1),i=a(18),u=a.n(i),m=a(32),f=a(8);function p(e){var t=e.msg,a=e.type,c=Object(n.useState)(!1),o=Object(f.a)(c,2),l=o[0],s=o[1];return Object(n.useEffect)((function(){t&&(s(!0),setInterval((function(){s(!1)}),2e3))}),[t]),r.a.createElement(r.a.Fragment,null,l&&r.a.createElement("div",{className:"alert alert-".concat(a)},t))}function d(){var e=Object(n.useState)(""),t=Object(f.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),l=Object(f.a)(o,2),s=l[0],i=l[1],d=Object(n.useState)(),v=Object(f.a)(d,2),b=v[0],h=v[1],E=Object(n.useState)(""),g=Object(f.a)(E,2),j=g[0],O=g[1],w=Object(n.useState)(""),y=Object(f.a)(w,2),N=y[0],S=y[1],k=function(e){var t=new FileReader;t.readAsDataURL(e),t.onloadend=function(){i(t.result)}},x=function(){var e=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/upload",{method:"POST",body:JSON.stringify({data:t}),headers:{"Content-Type":"application/json"}});case 3:c(""),i(""),O("Image uploaded successfully"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),S("Something went wrong!");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("h1",{className:"title"},"Upload an Image"),r.a.createElement(p,{msg:N,type:"danger"}),r.a.createElement(p,{msg:j,type:"success"}),r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),b){var t=new FileReader;t.readAsDataURL(b),t.onloadend=function(){x(t.result)},t.onerror=function(){console.error("AHHHHHHHH!!"),S("something went wrong!")}}},className:"form"},r.a.createElement("input",{id:"fileInput",type:"file",name:"image",onChange:function(e){var t=e.target.files[0];k(t),h(t),c(e.target.value)},value:a,className:"form-input"}),r.a.createElement("button",{className:"btn",type:"submit"},"Submit")),s&&r.a.createElement("img",{src:s,alt:"chosen",style:{height:"300px"}}))}var v=a(84);function b(){var e=Object(n.useState)(),t=Object(f.a)(e,2),a=t[0],c=t[1],o=function(){var e=Object(m.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/images");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,c(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){o()}),[]),r.a.createElement("div",null,r.a.createElement("h1",{className:"title"},"Galeria Cloudinary"),r.a.createElement("div",{className:"gallery"},a&&a.map((function(e,t){return r.a.createElement(v.Image,{key:t,cloudName:"febb-cloud-imagenes",publicId:e,width:"300",crop:"scale"})}))))}var h=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(l.a,null,r.a.createElement("nav",{className:"nav"},r.a.createElement("div",{className:"nav-brand"},"Cloudinary Demo"),r.a.createElement("ul",{className:"nav-items"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/"},"Mi Galeria")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/upload"},"Cargar Imagen")))),r.a.createElement(s.c,null,r.a.createElement(s.a,{component:d,path:"/upload"}),r.a.createElement(s.a,{component:b,path:"/"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(220);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},86:function(e,t,a){e.exports=a(221)},91:function(e,t,a){},92:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.c40c9e6e.chunk.js.map