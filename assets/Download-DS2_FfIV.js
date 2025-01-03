import{c as j,j as e,D as u,r as l,f as y,b as N}from"../script.js";import{m as d}from"./proxy-D4owT0uO.js";import{C as v}from"./check-DuEcDcyK.js";import{S,G as k,W as f}from"./wifi-BFpP70R6.js";import{M}from"./map-pin-Dh5sOFp6.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=j("Clipboard",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]]);function C({version:s,size:t,url:a}){return e.jsxs(d.a,{href:a,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05},whileTap:{scale:.98},className:"flex items-center justify-between w-full p-5 bg-gradient-to-r from-cornflower-blue/10 to-white rounded-lg border border-gray-200 hover:border-cornflower-blue transition-all duration-300 ease-in-out transform hover:scale-105 focus:ring-2 focus:ring-cornflower-blue focus:outline-none shadow-md hover:shadow-lg","aria-label":`Download Snigdha OS ${s} - ${t}`,children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("h3",{className:"text-xl font-semibold text-gray-900 transition duration-200 ease-in-out hover:text-cornflower-blue",children:["Snigdha OS ",s]}),e.jsx("p",{className:"text-sm text-gray-500",children:t})]}),e.jsx(d.div,{whileHover:{scale:1.2},transition:{type:"spring",stiffness:300,damping:20},className:"flex items-center justify-center",children:e.jsx(u,{className:"h-6 w-6 text-cornflower-blue transition-all duration-200 ease-in-out transform"})})]})}const E=["Minimum 2GB RAM (4GB recommended)","20GB disk space","CPU with virtualization support","DVD drive / USB boot support","Internet connectivity for updates"];function G(){return e.jsxs("div",{className:"bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 mb-6",children:"System Requirements"}),e.jsx("ul",{className:"space-y-4",children:E.map(s=>e.jsxs("li",{className:"flex items-center gap-3",children:[e.jsx(v,{className:"h-5 w-5 text-green-500 flex-shrink-0 transition-all duration-300 ease-in-out transform hover:scale-110"}),e.jsx("span",{className:"text-gray-600",children:s})]},s))})]})}function L({sha256:s,gpg:t}){const[a,r]=l.useState(null),i=(n,c)=>{navigator.clipboard.writeText(n).then(()=>{r(c),setTimeout(()=>r(null),2e3)})};return e.jsxs("div",{className:"bg-white p-8 rounded-3xl shadow-xl max-w-4xl mx-auto",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-8",children:[e.jsx(S,{className:"h-8 w-8 text-cornflower-blue"}),e.jsx("h2",{className:"text-3xl font-extrabold text-gray-900",children:"Verify Download"})]}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{className:"w-3/4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"SHA256 Checksum"}),e.jsx("code",{className:"block p-4 bg-gray-100 rounded-lg text-sm break-all text-gray-900 border border-gray-300 shadow-md",children:s})]}),e.jsxs("button",{onClick:()=>i(s,"sha256"),className:"ml-6 p-3 text-cornflower-blue hover:bg-blue-50 hover:text-cornflower-blue rounded-full transition-all transform active:scale-95 animate-button","aria-label":"Copy SHA256 checksum",children:[e.jsx(p,{className:"h-6 w-6"}),a==="sha256"&&e.jsx("span",{className:"text-xs text-green-500 ml-2 animate-fade-in",children:"Copied!"})]})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{className:"w-3/4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"GPG Signature"}),e.jsx("code",{className:"block p-4 bg-gray-100 rounded-lg text-sm break-all text-gray-900 border border-gray-300 shadow-md",children:t})]}),e.jsxs("button",{onClick:()=>i(t,"gpg"),className:"ml-6 p-3 text-cornflower-blue hover:bg-blue-50 hover:text-cornflower-blue rounded-full transition-all transform active:scale-95 animate-button","aria-label":"Copy GPG signature",children:[e.jsx(p,{className:"h-6 w-6"}),a==="gpg"&&e.jsx("span",{className:"text-xs text-green-500 ml-2 animate-fade-in",children:"Copied!"})]})]})]})]})}function T({mirrors:s,onSelect:t}){return e.jsx("div",{className:"space-y-6",children:s.map((a,r)=>e.jsx(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:r*.1},className:"bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-2xl hover:border-cornflower-blue transition-all duration-300 ease-in-out",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(k,{className:"h-6 w-6 text-cornflower-blue"}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-900",children:a.name}),e.jsx("p",{className:"text-sm text-gray-600",children:a.location})]})]}),e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-600",children:[e.jsx(f,{className:"h-5 w-5"}),y(a.speed)]}),e.jsxs("button",{onClick:()=>t(a),className:"flex items-center gap-3 px-5 py-2 bg-cornflower-blue text-white rounded-lg hover:bg-cornflower-blue/80 transition-all duration-300 ease-in-out transform hover:scale-105",children:[e.jsx(u,{className:"h-5 w-5"}),"Select"]})]})]})},a.id))})}function B({speed:s}){const t=r=>r>=100?"Excellent for fast downloads":r>=50?"Good for normal downloads":r>=20?"Moderate speed, downloads may take longer":"Slow connection, consider using a different mirror",a=r=>r>=100?"text-green-500":r>=50?"text-blue-500":r>=20?"text-yellow-500":"text-red-500";return e.jsxs("div",{className:"bg-white/90 backdrop-blur-lg p-8 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx(f,{className:"h-8 w-8 text-cornflower-blue"}),e.jsx("h2",{className:"text-3xl font-extrabold text-gray-900",children:"Network Speed"})]}),e.jsxs("div",{className:"space-y-5",children:[e.jsx("div",{className:"flex items-center gap-5",children:e.jsxs("span",{className:`text-5xl font-bold ${a(s)}`,children:[s," Mbps"]})}),e.jsx("p",{className:"text-lg text-gray-600",children:t(s)})]}),e.jsx("div",{className:"mt-6 flex items-center justify-between",children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:`font-medium text-gray-800 ${a(s)}`,children:"Speed Quality:"}),e.jsx("span",{className:`${a(s)} font-semibold`,children:s>=100?"Excellent":s>=50?"Good":s>=20?"Moderate":"Poor"})]})})]})}function D({mirror:s,userLocation:t,onSelect:a}){return e.jsxs("div",{className:"bg-white/90 backdrop-blur-lg p-6 rounded-lg shadow-lg border-2 border-cornflower-blue hover:shadow-xl transition-shadow ease-in-out duration-300",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-5",children:[e.jsx(M,{className:"h-7 w-7 text-cornflower-blue"}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-3xl font-semibold text-gray-900",children:"Suggested Mirror"}),e.jsxs("p",{className:"text-sm text-gray-600",children:["Based on your location: ",t.city,", ",t.country]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"font-semibold text-2xl text-gray-900",children:s.name}),e.jsx("p",{className:"text-sm text-gray-600",children:s.location}),e.jsxs(d.button,{onClick:()=>a(s),className:"w-full mt-4 px-6 py-3 bg-cornflower-blue text-white rounded-lg hover:bg-blue-600 active:scale-95 transition-all ease-in-out flex items-center justify-center gap-2",whileHover:{scale:1.05},whileTap:{scale:.98},children:[e.jsx(u,{className:"h-5 w-5"}),e.jsx("span",{children:"Download"})]})]})]})}const A=[{version:"Arctic V",size:"1.4 GB",url:"https://snigdhaos.org/downloads/snigdhaos-2024.1-installer-amd64.iso",sha256:"e4654e5633f4e1f8f57a9fb3dca02f9db06e9acb5e346f0fae9d9f5c3a9c0e9",gpg:`-----BEGIN PGP SIGNATURE-----
Version: GnuPG v2
...`}],P=[{id:"us-east",name:"US East Mirror",location:"New York, USA 🇺🇸",url:"https://mirror-east.snigdhaos.org",speed:120},{id:"eu-central",name:"EU Central Mirror",location:"Frankfurt, Germany 🇩🇪",url:"https://mirror-eu.snigdhaos.org",speed:100},{id:"asia-east",name:"Asia East Mirror",location:"Singapore 🇸🇬",url:"https://mirror-asia.snigdhaos.org",speed:80},{id:"uk-london",name:"UK London Mirror",location:"London, United Kingdom 🇬🇧",url:"https://mirror-uk.snigdhaos.org",speed:95},{id:"india-bangalore",name:"India Bangalore Mirror",location:"Bangalore, India 🇮🇳",url:"https://mirror-india.snigdhaos.org",speed:75},{id:"australia-sydney",name:"Australia Sydney Mirror",location:"Sydney, Australia 🇦🇺",url:"https://mirror-aus.snigdhaos.org",speed:85},{id:"canada-toronto",name:"Canada Toronto Mirror",location:"Toronto, Canada 🇨🇦",url:"https://mirror-canada.snigdhaos.org",speed:110},{id:"brazil-sao-paulo",name:"Brazil São Paulo Mirror",location:"São Paulo, Brazil 🇧🇷",url:"https://mirror-brazil.snigdhaos.org",speed:60},{id:"japan-tokyo",name:"Japan Tokyo Mirror",location:"Tokyo, Japan 🇯🇵",url:"https://mirror-japan.snigdhaos.org",speed:90},{id:"south-korea-seoul",name:"South Korea Seoul Mirror",location:"Seoul, South Korea 🇰🇷",url:"https://mirror-korea.snigdhaos.org",speed:95},{id:"south-africa-cape-town",name:"South Africa Cape Town Mirror",location:"Cape Town, South Africa 🇿🇦",url:"https://mirror-sa.snigdhaos.org",speed:50}];async function I(){try{const s=performance.now(),t=await fetch("https://www.cloudflare.com/cdn-cgi/trace",{cache:"no-store"});if(!t.ok)throw new Error(`Failed to fetch, status: ${t.status}`);const r=performance.now()-s,i=t.headers.get("Content-Length"),n=i?parseInt(i,10):new Blob([await t.text()]).size;if(n===0)throw new Error("Response has no content size");const c=n*8/(r/1e3)/1e6,o=Math.round(c*100)/100;return console.log(`Measured network speed: ${o} Mbps`),o}catch(s){throw console.error("Error measuring network speed:",s),new Error("Network speed measurement failed")}}function U(){const[s,t]=l.useState(null),[a,r]=l.useState(!0),[i,n]=l.useState(null);return l.useEffect(()=>{async function c(){try{const o=await I();t(o)}catch(o){n(o instanceof Error?o:new Error("Failed to measure network speed"))}finally{r(!1)}}c()},[]),{speed:s,isLoading:a,error:i}}async function z(){const s=await fetch("https://ipapi.co/json/");if(!s.ok)throw new Error("Failed to fetch location");const t=await s.json();return{country:t.country_name,city:t.city,continent:t.continent_code}}function $(){const[s,t]=l.useState(null),[a,r]=l.useState(!0),[i,n]=l.useState(null);return l.useEffect(()=>{async function c(){try{const o=await z();t(o)}catch(o){n(o instanceof Error?o:new Error("Failed to get location"))}finally{r(!1)}}c()},[]),{location:s,isLoading:a,error:i}}function O(){const s=A[0],[t,a]=l.useState(null),{speed:r,isLoading:i}=U(),{location:n,isLoading:c}=$(),o=m=>{a(m)},h=[...P].sort((m,g)=>{if(!r)return 0;const w=Math.abs(m.speed-r),b=Math.abs(g.speed-r);return w-b}),x=n?h[0]:null;return i||c?e.jsx("div",{className:"min-h-[50vh] flex items-center justify-center",children:e.jsx(N,{className:"h-8 w-8 animate-spin text-cornflower-blue"})}):e.jsx("div",{className:"py-12",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"text-center mb-12",children:[e.jsx("h1",{className:"text-4xl font-bold text-gray-900",children:"Download Snigdha OS"}),e.jsx("p",{className:"mt-4 text-lg text-gray-600",children:"Get the latest version of the most advanced penetration testing distribution"})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[e.jsxs("div",{className:"lg:col-span-2 space-y-8",children:[e.jsx(C,{...s}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Download Mirrors"}),e.jsx("p",{className:"text-sm text-gray-600 mb-4",children:"Mirrors are sorted by compatibility with your connection speed for optimal download performance"}),e.jsx(T,{mirrors:h,onSelect:o})]}),e.jsx(L,{sha256:s.sha256,gpg:s.gpg})]}),e.jsxs("div",{className:"space-y-6",children:[r!==null&&e.jsx(B,{speed:r}),n&&x&&e.jsx(D,{mirror:x,userLocation:n,onSelect:o}),e.jsx(G,{})]})]})]})})}export{O as default};