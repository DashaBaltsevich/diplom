!function(e){var t={};function l(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=t,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(o,n,function(t){return e[t]}.bind(null,n));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l(l.s=0)}([function(e,t,l){"use strict";l.r(t);var o=(e,t)=>{e.addEventListener("click",()=>{event.preventDefault(),t.style.opacity=0;let e=0;e=.01;let l=setInterval(()=>{t.style.display="block",t.style.opacity=+t.style.opacity+.01,t.style.opacity>=1&&clearInterval(l)},10)}),t.addEventListener("click",()=>{let e=event.target;e.classList.contains("popup-close")?t.style.display="none":(e=e.closest(".popup-content"),e||(t.style.display="none"))})};var n=()=>{const e=document.querySelectorAll(".discount-btn"),t=document.querySelector(".popup-discount");e.forEach(e=>{e.addEventListener("click",()=>{t.style.opacity=0;let e=0;e=.01;let l=setInterval(()=>{t.style.display="block",t.style.opacity=+t.style.opacity+.01,t.style.opacity>=1&&clearInterval(l)},10)})}),t.addEventListener("click",()=>{let e=event.target;e.classList.contains("popup-close")?t.style.display="none":(e=e.closest(".popup-content"),e||(t.style.display="none"))})};var c=()=>{const e=document.querySelector(".add-sentence-btn"),t=document.querySelectorAll(".hidden"),l=document.querySelector(".visible-sm-block");e.addEventListener("click",()=>{l.style.setProperty("display","block","important"),t.forEach(e=>{e.style.setProperty("display","block","important")}),e.style.display="none"})};var r=()=>{const e=document.getElementById("accordion-two"),t=e.querySelectorAll(".panel-collapse.collapse"),l=e.querySelectorAll(".panel-default");e.addEventListener("click",e=>{e.preventDefault();let o=e.target;if(o.closest(".panel-default")){let e=o.closest(".panel-default");l.forEach((l,o)=>{e===l&&("block"===t[o].style.display?t[o].style.display="none":t.forEach(e=>{e===t[o]?(e.style.display="block",e.style.maxHeight=e.scrollHeight+"px"):e.style.display="none"}))})}})};var s=e=>{const t=document.querySelector('[name = "user_quest"]'),l=document.createElement("div");l.style.cssText="font-size: 2rem;",l.style.color="#000000",e.addEventListener("submit",o=>{o.preventDefault(),e.appendChild(l),l.textContent="Идет отправка...";const n=new FormData(e);let c={};n.forEach((e,t)=>{c[t]=e}),t.value&&(c.inputQuestion=t.value),t.value="";(e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}))(c).then(t=>{if(console.log(t),l.textContent="Спасибо! Мы скоро с вами свяжемся!",setTimeout(()=>{l.textContent=""},5e3),e.querySelectorAll("input").forEach(e=>{e.value=""}),200!==t.status)throw new Error("status network not 200")}).catch(e=>{l.textContent="Ошибка",console.error(e)})});const o=document.querySelectorAll(".phone-user"),n=document.querySelectorAll('[name = "user_name"]');o.forEach((function(e){e.addEventListener("input",(function(e){e.target.value=e.target.value.replace(/[^\+\d]/gi,"")}))})),n.forEach((function(e){e.addEventListener("input",(function(e){e.target.value=e.target.value.replace(/[^а-яё]/gi,"")}))}))};var a=(e=1e4)=>{const t=document.getElementById("accordion"),l=t.querySelectorAll(".panel-collapse.collapse"),o=t.querySelectorAll(".panel-default"),n=t.querySelectorAll(".panel-heading"),c=document.querySelectorAll("a.button.construct-btn"),r=document.querySelector("select.form-control.expand"),s=document.querySelectorAll("select.form-control.expand")[1],a=document.querySelectorAll("select.form-control.expand")[2],u=document.querySelectorAll("select.form-control.expand")[3],d=document.getElementById("calc-result"),i=document.querySelector("input.onoffswitch-checkbox"),p=document.querySelector("#myonoffswitch-two"),y=document.querySelectorAll(".title-text")[1],m=document.querySelectorAll(".select-box")[2],f=document.querySelectorAll(".select-box")[3],h=document.querySelector(".button.construct-btn.call-btn");let v,b,k,S,q,E,g,x,A,L=1e4;const w=document.querySelector(".panel-body > input"),I=document.querySelector(".form-discount");t.addEventListener("change",e=>{const t=e.target;(t.matches("select")||t.matches("input")||t.matches(".onoffswitch-label"))&&O()}),n.forEach(e=>{e.addEventListener("click",e=>{e.preventDefault();let t=e.target;if(t.closest(".panel-heading")){let e=t.closest(".panel-default");o.forEach((t,o)=>{e===t&&("block"===l[o].style.display?l[o].style.display="none":l.forEach(e=>{e===l[o]?(e.style.display="block",e.style.maxHeight=e.scrollHeight+"px"):e.style.display="none"}))})}})}),c.forEach((e,t)=>{e.addEventListener("click",()=>{const o=event.target;event.preventDefault(),o.closest("a.button.construct-btn")===e&&("block"===l[t].style.display?(l[t].style.display="none",l[t+1].style.display="block"):l.forEach(e=>{e===l[t]?(e.style.display="block",e.style.maxHeight=e.scrollHeight+"px"):e.style.display="none"}))})}),p.checked=!1;const C=()=>(!1===i.checked?(i.removeAttribute("checked"),i.setAttribute("unchecked","unchecked"),y.style.display="block",m.style.display="block",f.style.display="block",e=15e3):!0===i.checked&&(i.removeAttribute("unchecked"),i.setAttribute("checked","checked"),y.style.display="none",m.style.display="none",f.style.display="none",e=1e4),d.placeholder=e,e);C();const O=()=>(v=r.options[r.selectedIndex].value,b=s.options[s.selectedIndex].value,k=a.options[a.selectedIndex].value,S=u.options[u.selectedIndex].value,C(),"1.4 метра"===v?E=1:"2 метра"===v&&(E=1.2),"1 штука"===b?g=1:"2 штуки"===b&&(g=1.3),"3 штуки"===b&&(g=1.5),"1.4 метра"===k?x=1:"2 метра"===k&&(x=1.2),"1 штука"===S?A=1:"2 штуки"===S&&(A=1.3),"3 штуки"===S&&(A=1.5),!1===p.checked?(p.removeAttribute("checked"),p.setAttribute("unchecked","unchecked")):(p.removeAttribute("unchecked"),p.setAttribute("checked","checked")),i.hasAttribute("checked")?(L=e*E*g,p.hasAttribute("checked")&&(L+=1e3)):i.hasAttribute("unchecked")&&(L=e*E*g*x*A,p.hasAttribute("checked")&&(L+=2e3)),d.placeholder=L,S);h.addEventListener("click",()=>{q=p.checked;const e=document.querySelector(".popup-discount");event.preventDefault(),e.style.opacity=0;let t=0;t=.01;let l=setInterval(()=>{e.style.display="block",e.style.opacity=+e.style.opacity+.01,e.style.opacity>=1&&clearInterval(l)},10);e.addEventListener("click",()=>{let t=event.target;t.classList.contains("popup-close")?e.style.display="none":(t=t.closest(".popup-content"),t||(e.style.display="none"))});const o=document.createElement("div");o.style.cssText="font-size: 2rem;",o.style.color="#000000",I.addEventListener("submit",e=>{e.preventDefault(),I.appendChild(o),o.textContent="Идет отправка...";const t=new FormData(I);let l={};l.resultSum=L,l.diameterValueStr=v,l.colValueStr=b,l.diameter2ValueStr=k,l.col2ValueStr=S,l.inputDist=w.value,l.checkbox2=!0===q?"Днище колодца в наличии":"Днище колодца нет в наличии";for(let e of t.entries())l[e[0]]=e[1];(e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}))(l).then(e=>{if(o.textContent="Спасибо! Мы скоро с вами свяжемся!",setTimeout(()=>{o.textContent=""},5e3),I.querySelectorAll("input").forEach(e=>{e.value=""}),200!==e.status)throw new Error("status network not 200")}).catch(e=>{o.textContent="Ошибка",console.error(e)})})})};const u=document.querySelector(".call-btn"),d=document.querySelector(".popup-call"),i=document.querySelector(".check-btn"),p=document.querySelector(".popup-check"),y=document.querySelector(".consultation-btn"),m=document.querySelector(".popup-consultation");o(u,d),o(i,p),o(y,m),n(),c(),r(),a();document.querySelector(".main-form"),document.querySelector(".capture-form"),document.querySelector(".director-form");document.querySelectorAll("form").forEach(e=>{s(e)})}]);