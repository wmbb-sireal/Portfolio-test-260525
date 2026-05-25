(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}})();/**
 * @license lucide v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=([e,t,a])=>{const s=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(t).forEach(o=>{s.setAttribute(o,String(t[o]))}),a!=null&&a.length&&a.forEach(o=>{const n=ae(o);s.appendChild(n)}),s},fe=(e,t={})=>{const s={...se,...t};return ae(["svg",s,e])};/**
 * @license lucide v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=(...e)=>e.filter((t,a,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===a).join(" ").trim();/**
 * @license lucide v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,a,s)=>s?s.toUpperCase():a.toLowerCase());/**
 * @license lucide v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=e=>{const t=pe(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=e=>Array.from(e.attributes).reduce((t,a)=>(t[a.name]=a.value,t),{}),K=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",Q=(e,{nameAttr:t,icons:a,attrs:s})=>{var J;const o=e.getAttribute(t);if(o==null)return;const n=ye(o),r=a[n];if(!r)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const d=ve(e),q=he(d)?{}:{"aria-hidden":"true"},O={...se,"data-lucide":o,...q,...s,...d},W=K(d),Y=K(s),F=ge("lucide",`lucide-${o}`,...W,...Y);F&&Object.assign(O,{class:F});const ue=fe(r,O);return(J=e.parentNode)==null?void 0:J.replaceChild(ue,e)};/**
 * @license lucide v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]];/**
 * @license lucide v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"}],["circle",{cx:"12",cy:"8",r:"6"}]];/**
 * @license lucide v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]];/**
 * @license lucide v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"}],["circle",{cx:"12",cy:"13",r:"3"}]];/**
 * @license lucide v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=[["path",{d:"m9 18 6-6-6-6"}]];/**
 * @license lucide v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];/**
 * @license lucide v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]];/**
 * @license lucide v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"}],["path",{d:"M22 10v6"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5"}]];/**
 * @license lucide v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"}]];/**
 * @license lucide v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}]];/**
 * @license lucide v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["circle",{cx:"12",cy:"10",r:"3"}]];/**
 * @license lucide v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];/**
 * @license lucide v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"}]];/**
 * @license lucide v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=[["circle",{cx:"18",cy:"5",r:"3"}],["circle",{cx:"6",cy:"12",r:"3"}],["circle",{cx:"18",cy:"19",r:"3"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49"}]];/**
 * @license lucide v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pe=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];/**
 * @license lucide v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"}]];/**
 * @license lucide v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Te=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];/**
 * @license lucide v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2"}]];/**
 * @license lucide v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];/**
 * @license lucide v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]];/**
 * @license lucide v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=({icons:e={},nameAttr:t="data-lucide",attrs:a={},root:s=document,inTemplates:o}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof s>"u")throw new Error("`createIcons()` only works in a browser environment.");if(Array.from(s.querySelectorAll(`[${t}]`)).forEach(r=>Q(r,{nameAttr:t,icons:e,attrs:a})),o&&Array.from(s.querySelectorAll("template")).forEach(d=>oe({icons:e,nameAttr:t,attrs:a,root:d.content,inTemplates:o})),t==="data-lucide"){const r=s.querySelectorAll("[icon-name]");r.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(r).forEach(d=>Q(d,{nameAttr:"icon-name",icons:e,attrs:a})))}};oe({icons:{Zap:je,Mail:Ce,Phone:ze,Globe:ke,Menu:Be,X:Re,ChevronRight:Ee,Sparkles:Pe,ArrowRight:xe,MapPin:Se,Layers:Ae,Workflow:Oe,Award:we,Star:$e,CheckCircle:Me,GraduationCap:Ie,BookOpen:be,Share2:Ne,Camera:Le,Trash2:Te}});const M=document.querySelector("header");window.addEventListener("scroll",()=>{var e,t,a,s;M&&(window.scrollY>50?(M.classList.add("py-2"),(e=M.firstElementChild)==null||e.classList.remove("glass-card-light"),(t=M.firstElementChild)==null||t.classList.add("bg-[#050508]/85","border-[#3d5afe]/10")):(M.classList.remove("py-2"),(a=M.firstElementChild)==null||a.classList.add("glass-card-light"),(s=M.firstElementChild)==null||s.classList.remove("bg-[#050508]/85","border-[#3d5afe]/10")))});const _=document.getElementById("mobile-menu-btn"),H=document.getElementById("mobile-close-btn"),w=document.getElementById("mobile-menu"),qe=()=>{w==null||w.classList.remove("translate-x-full")},ne=()=>{w==null||w.classList.add("translate-x-full")};_==null||_.addEventListener("click",qe);H==null||H.addEventListener("click",ne);const X=w==null?void 0:w.querySelectorAll("a");X==null||X.forEach(e=>{e.addEventListener("click",ne)});const v=document.getElementById("custom-cursor"),x=document.getElementById("custom-cursor-dot");window.addEventListener("mousemove",e=>{!v||!x||(v.style.left=`${e.clientX}px`,v.style.top=`${e.clientY}px`,x.style.left=`${e.clientX}px`,x.style.top=`${e.clientY}px`)});const We=document.querySelectorAll("a, button, select, input, textarea, select option, .tilt-card");We.forEach(e=>{e.addEventListener("mouseenter",()=>{v==null||v.classList.add("scale-125","border-[#4ecca3]"),x==null||x.classList.add("scale-75","bg-[#3d5afe]")}),e.addEventListener("mouseleave",()=>{v==null||v.classList.remove("scale-125","border-[#4ecca3]"),x==null||x.classList.remove("scale-75","bg-[#3d5afe]")})});const V=document.getElementById("hero-typing-target"),Z=["Notion Systems Expert","Zapier & Make Automation Architect","Business Process Optimization Consultant","Digital Transformation strategy catalyst"];let D=0,I=0,$=!1,T=100;function re(){if(!V)return;const e=Z[D];$?(V.textContent=e.substring(0,I-1),I--,T=40):(V.textContent=e.substring(0,I+1),I++,T=100),!$&&I===e.length?($=!0,T=2e3):$&&I===0&&($=!1,D=(D+1)%Z.length,T=500),setTimeout(re,T)}re();const Ye=document.querySelectorAll(".tilt-card");Ye.forEach(e=>{const t=e;t.addEventListener("mousemove",a=>{const s=t.getBoundingClientRect(),o=a.clientX-s.left,n=a.clientY-s.top,r=s.width/2,d=s.height/2,q=-(n-d)/(d/10),O=(o-r)/(r/10);t.style.transform=`perspective(1000px) rotateX(${q}deg) rotateY(${O}deg) scale3d(1.03, 1.03, 1.03)`;const W=o/s.width*100,Y=n/s.height*100;t.style.backgroundImage=`radial-gradient(circle at ${W}% ${Y}%, rgba(255, 255, 255, 0.08) 0%, transparent 80%)`}),t.addEventListener("mouseleave",()=>{t.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",t.style.backgroundImage=""})});const c=document.getElementById("ambient-canvas"),m=c==null?void 0:c.getContext("2d");let k=[],_e=40,G=140;function ce(){c&&(c.width=window.innerWidth,c.height=window.innerHeight)}window.addEventListener("resize",()=>{ce(),le()});function le(){if(!c)return;k=[];const e=["rgba(78, 204, 163, 0.5)","rgba(61, 90, 254, 0.5)","rgba(78, 204, 163, 0.3)"];for(let t=0;t<_e;t++)k.push({x:Math.random()*c.width,y:Math.random()*c.height,vx:(Math.random()-.5)*.6,vy:(Math.random()-.5)*.6,radius:Math.random()*2+1.5,color:e[Math.floor(Math.random()*e.length)]})}let j=-1e3,U=-1e3;window.addEventListener("mousemove",e=>{j=e.clientX,U=e.clientY});window.addEventListener("mouseleave",()=>{j=-1e3,U=-1e3});function ie(){if(!(!c||!m)){m.clearRect(0,0,c.width,c.height),k.forEach(e=>{if(e.x+=e.vx,e.y+=e.vy,(e.x<0||e.x>c.width)&&(e.vx*=-1),(e.y<0||e.y>c.height)&&(e.vy*=-1),j>-1e3){const t=j-e.x,a=U-e.y,s=Math.sqrt(t*t+a*a);s<200&&(e.x-=t/s*.15,e.y-=a/s*.15)}m.beginPath(),m.arc(e.x,e.y,e.radius,0,Math.PI*2),m.fillStyle=e.color,m.fill()});for(let e=0;e<k.length;e++)for(let t=e+1;t<k.length;t++){const a=k[e],s=k[t],o=a.x-s.x,n=a.y-s.y,r=Math.sqrt(o*o+n*n);if(r<G){const d=(1-r/G)*.18;m.beginPath(),m.moveTo(a.x,a.y),m.lineTo(s.x,s.y),m.strokeStyle=`rgba(78, 204, 163, ${d})`,m.lineWidth=.8,m.stroke()}}requestAnimationFrame(ie)}}ce();le();c&&requestAnimationFrame(ie);const R=document.getElementById("automation-form"),p=document.getElementById("simulator-status"),z=document.getElementById("terminal-consoles"),y=document.getElementById("line-trigger-zapier"),L=document.getElementById("line-zapier-notion"),E=document.getElementById("line-zapier-slack"),A=document.getElementById("node-trigger-graphic"),u=document.getElementById("node-trigger-badge"),C=document.getElementById("node-zapier-graphic"),f=document.getElementById("node-zapier-pulse"),S=document.getElementById("node-notion-graphic"),B=document.getElementById("node-slack-graphic"),g=document.getElementById("form-submit-btn");function ee(){z&&(z.innerHTML="")}function i(e,t="text-slate-400",a=!1){if(!z)return;const s=document.createElement("p");s.className=`text-xs font-mono leading-relaxed tracking-wide fade-in ${t}`,s.innerHTML=a?e:`>> ${e}`,z.appendChild(s),z.scrollTop=z.scrollHeight}R==null||R.addEventListener("submit",e=>{e.preventDefault();const t=document.getElementById("form-name").value,a=document.getElementById("form-email").value,s=document.getElementById("form-category"),o=s.options[s.selectedIndex].text,n=document.getElementById("form-message").value;!t||!a||!n||(g&&(g.disabled=!0,g.innerHTML=`
      <svg class="animate-spin -ml-1 mr-3 h-4 w-4 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      워크플로우 처리 중...
    `),p&&(p.textContent="⚡ RUNNING",p.className="px-2.5 py-0.5 bg-yellow-500/10 border border-yellow-500/30 rounded text-[9px] font-mono font-bold text-yellow-400 uppercase tracking-widest"),ee(),i("Incoming Workspace Packet Received.","text-amber-400"),setTimeout(()=>{i(`Initial values parsed. User: "${t}" (Email: ${a})`,"text-slate-300"),A==null||A.classList.add("bg-[#4ecca3]/10","border-[#4ecca3]/50","scale-105"),u==null||u.classList.remove("scale-0"),u==null||u.classList.add("scale-100"),y&&(y.style.stroke="#4ecca3",y.style.strokeWidth="3px",y.classList.add("flow-wire-moving"))},600),setTimeout(()=>{i("Transmitting raw payload to [Zapier Cloud Hub] via webhook gateway...","text-slate-400"),i(`Action Routing mapped to segment: [${o}]`,"text-[#4ecca3]"),C==null||C.classList.add("bg-[#3d5afe]/10","border-[#3d5afe]/50","scale-110"),f==null||f.classList.remove("opacity-0","scale-75"),f==null||f.classList.add("ping-glow"),y&&L&&E&&(L.style.stroke="#3d5afe",L.style.strokeWidth="3px",L.classList.add("flow-wire-moving"),E.style.stroke="#4ecca3",E.style.strokeWidth="3px",E.classList.add("flow-wire-moving"))},1800),setTimeout(()=>{i("Notion integration: Processing Relation DB schemas...","text-slate-400"),i('Writing row successfully into "[Sijin CRM] Inbound Inquiries" 테이블 ✅',"text-[#3d5afe]"),S==null||S.classList.add("bg-[#3d5afe]/10","border-[#3d5afe]/50","scale-105","text-[#3d5afe]")},3e3),setTimeout(()=>{i("Slack integration: Dispatching webhook message packet...","text-slate-400"),i("Slack notification ping delivered safely to Sijin Jeon's mobile! 💬","text-[#4ecca3]"),B==null||B.classList.add("bg-[#4ecca3]/10","border-[#4ecca3]/50","scale-105","text-[#4ecca3]")},4100),setTimeout(()=>{i("-------------------------------------------","text-slate-600",!0),i("Workflow Run Successful! Transmit Pack complete.","text-emerald-400 font-bold"),i(`Sijin Jeon will review your specs and respond to ${a} within 24 hours.`,"text-slate-300"),p&&(p.textContent="🟢 SUCCESS",p.className="px-2.5 py-0.5 bg-emerald-500/10 border border-emerald-500/30 rounded text-[9px] font-mono font-bold text-emerald-400 uppercase tracking-widest"),g&&(g.disabled=!1,g.className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white rounded-xl font-bold tracking-widest uppercase text-xs flex items-center justify-center gap-2 transition-all duration-300",g.innerHTML=`
        <i data-lucide="check-circle" class="w-4 h-4 text-white"></i>
        워크플로우 전송 완료! (성공)
      `),setTimeout(()=>{R.reset(),A==null||A.classList.remove("bg-[#4ecca3]/10","border-[#4ecca3]/50","scale-105"),u==null||u.classList.add("scale-0"),u==null||u.classList.remove("scale-100"),C==null||C.classList.remove("bg-[#3d5afe]/10","border-[#3d5afe]/50","scale-110"),f==null||f.classList.add("opacity-0","scale-75"),f==null||f.classList.remove("ping-glow"),S==null||S.classList.remove("bg-[#3d5afe]/10","border-[#3d5afe]/50","scale-105","text-[#3d5afe]"),B==null||B.classList.remove("bg-[#4ecca3]/10","border-[#4ecca3]/50","scale-105","text-[#4ecca3]"),y&&L&&E&&(y.style.stroke="rgba(255,255,255,0.05)",y.style.strokeWidth="2px",y.classList.remove("flow-wire-moving"),L.style.stroke="rgba(255,255,255,0.05)",L.style.strokeWidth="2px",L.classList.remove("flow-wire-moving"),E.style.stroke="rgba(255,255,255,0.05)",E.style.strokeWidth="2px",E.classList.remove("flow-wire-moving")),p&&(p.textContent="● READY",p.className="px-2.5 py-0.5 bg-emerald-500/10 border border-emerald-500/30 rounded text-[9px] font-mono font-bold text-emerald-400 uppercase tracking-widest"),g&&(g.className="w-full py-4 bg-gradient-to-r from-[#4ecca3] to-[#3d5afe] hover:brightness-110 text-white rounded-xl font-bold tracking-widest uppercase text-xs flex items-center justify-center gap-2 group shadow-[0_4px_25px_rgba(78,204,163,0.35)] transition-all duration-300 transform active:scale-[0.98]",g.innerHTML=`
          <i data-lucide="zap" class="w-4 h-4 text-white group-hover:scale-125 transition-transform"></i>
          워크플로우 자동 배송 실행
        `),ee(),i("System initialization... OK"),i("Ready to route cloud automation request packets."),i(">> waiting for form inputs...","text-[#4ecca3]/80 font-bold")},8e3)},5200))});const He=document.querySelectorAll(".scroll-reveal-timeline"),de=new IntersectionObserver(e=>{e.forEach(t=>{const a=t.target;t.isIntersecting&&(a.style.opacity="1",a.style.transform="translateY(0)",de.unobserve(a))})},{threshold:.15,rootMargin:"0px 0px -50px 0px"});He.forEach(e=>{const t=e;t.style.opacity="0",t.style.transform="translateY(30px)",t.style.transition="opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",de.observe(t)});const l=document.getElementById("avatar-container"),N=document.getElementById("avatar-input"),b=document.getElementById("avatar-preview"),P=document.getElementById("avatar-default-icon"),h=document.getElementById("avatar-delete-btn"),te=localStorage.getItem("profile-avatar");te&&b&&P&&h&&(b.src=te,b.classList.remove("hidden"),P.classList.add("hidden"),h.classList.remove("hidden"),h.classList.add("inline-flex"));function me(e){if(!e.type.startsWith("image/")){console.error("Only image files (*.jpg, *.png, etc.) are allowed for avatar upload.");return}const t=new FileReader;t.onload=a=>{var o;const s=(o=a.target)==null?void 0:o.result;s&&b&&P&&h&&(localStorage.setItem("profile-avatar",s),b.src=s,b.classList.remove("hidden"),P.classList.add("hidden"),h.classList.remove("hidden"),h.classList.add("inline-flex"))},t.readAsDataURL(e)}l==null||l.addEventListener("click",()=>{N==null||N.click()});N==null||N.addEventListener("change",e=>{const t=e.target;t.files&&t.files[0]&&me(t.files[0])});l==null||l.addEventListener("dragover",e=>{e.preventDefault(),l.classList.add("border-[#4ecca3]","scale-105","shadow-[0_0_15px_rgba(78,204,163,0.3)]")});l==null||l.addEventListener("dragleave",()=>{l.classList.remove("border-[#4ecca3]","scale-105","shadow-[0_0_15px_rgba(78,204,163,0.3)]")});l==null||l.addEventListener("drop",e=>{e.preventDefault(),l.classList.remove("border-[#4ecca3]","scale-105","shadow-[0_0_15px_rgba(78,204,163,0.3)]");const t=e.dataTransfer;t&&t.files&&t.files[0]&&me(t.files[0])});h==null||h.addEventListener("click",e=>{e.stopPropagation(),b&&P&&h&&(localStorage.removeItem("profile-avatar"),b.src="/Portfolio-test-260525/images/avatar_sijin.png",b.classList.remove("hidden"),P.classList.add("hidden"),h.classList.remove("inline-flex"),h.classList.add("hidden"))});
