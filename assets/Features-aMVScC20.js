import{c as m,j as e,r}from"./index-D2sRvuJr.js";import{m as s}from"./proxy-st5n46wf.js";import{T as p}from"./terminal-DGO-CWn-.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=m("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);function u({value:o,onChange:n}){return e.jsxs("div",{className:"relative",children:[e.jsx(g,{className:"absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 transition-all"}),e.jsx("input",{type:"text",value:o,onChange:n,placeholder:"Search tools...",className:"w-full pl-12 pr-6 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-cornflower-blue focus:border-cornflower-blue outline-none transition-all duration-300 ease-in-out hover:border-gray-300 hover:bg-white/90"})]})}function f({categories:o,selectedCategory:n,onSelect:i}){return e.jsx("div",{className:"flex flex-wrap gap-2",children:o.map(t=>e.jsx(s.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>i(t),className:`px-4 py-2 rounded-full text-sm font-medium transition-colors ${n===t?"bg-cornflower-blue text-white":"bg-white/80 text-gray-600 hover:bg-gray-100"}`,children:t},t))})}function y({name:o,description:n,category:i,command:t}){return e.jsxs(s.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},whileHover:{scale:1.05,y:-5},transition:{duration:.3},className:"bg-gradient-to-r from-cornflower-blue/10 to-white p-6 rounded-lg shadow-lg border border-gray-100 transform hover:shadow-2xl transition-all",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[e.jsx("div",{className:"p-3 bg-cornflower-blue/20 rounded-full",children:e.jsx(p,{className:"h-6 w-6 text-cornflower-blue"})}),e.jsx("h3",{className:"text-2xl font-semibold text-gray-900",children:o})]}),e.jsx("p",{className:"text-gray-600 text-lg mb-4",children:n}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium text-cornflower-blue",children:i}),e.jsx("code",{className:"text-sm bg-gray-100 px-3 py-1 rounded",children:t})]})]})}const h=[{id:"1",name:"Nmap",description:"Network exploration tool and security scanner",category:"Information Gathering",command:"nmap"},{id:"2",name:"Wireshark",description:"Network protocol analyzer for real-time packet capture",category:"Sniffing & Spoofing",command:"wireshark"},{id:"3",name:"Metasploit",description:"Penetration testing framework",category:"Exploitation Tools",command:"msfconsole"},{id:"4",name:"Burp Suite",description:"Web vulnerability scanner and proxy tool",category:"Web Applications",command:"burpsuite"},{id:"5",name:"Aircrack-ng",description:"Complete suite for wireless network security assessment",category:"Wireless Attacks",command:"aircrack-ng"},{id:"6",name:"John the Ripper",description:"Password cracker and hash analyzer",category:"Password Attacks",command:"john"},{id:"7",name:"Hydra",description:"Brute-force password cracking tool",category:"Password Attacks",command:"hydra"},{id:"8",name:"Nikto",description:"Web server scanner for vulnerabilities",category:"Web Applications",command:"nikto"},{id:"9",name:"Airgeddon",description:"Multi-use bash script for wireless pentesting",category:"Wireless Attacks",command:"airgeddon"},{id:"10",name:"OWASP ZAP",description:"Open-source web application security scanner",category:"Web Applications",command:"zap"},{id:"11",name:"Ettercap",description:"Comprehensive suite for man-in-the-middle attacks",category:"Sniffing & Spoofing",command:"ettercap"},{id:"12",name:"Kali Linux",description:"Linux distribution with pre-installed security tools",category:"All",command:"kali"},{id:"13",name:"Netcat",description:"Network utility for reading/writing network connections",category:"Information Gathering",command:"nc"},{id:"14",name:"Netdiscover",description:"Network discovery tool for locating devices on a network",category:"Information Gathering",command:"netdiscover"},{id:"15",name:"SQLmap",description:"Automated SQL injection and database takeover tool",category:"Exploitation Tools",command:"sqlmap"},{id:"16",name:"Gobuster",description:"Directory and DNS busting tool for web enumeration",category:"Information Gathering",command:"gobuster"},{id:"17",name:"Nikto2",description:"Web scanner for vulnerabilities, similar to Nikto",category:"Web Applications",command:"nikto2"},{id:"18",name:"The Harvester",description:"Information gathering tool for open-source intelligence (OSINT)",category:"Information Gathering",command:"theharvester"},{id:"19",name:"Social-Engineer Toolkit (SET)",description:"Penetration testing framework for social engineering",category:"Exploitation Tools",command:"setoolkit"},{id:"20",name:"Burp Suite Pro",description:"Advanced web vulnerability scanner with additional features",category:"Web Applications",command:"burpsuite_pro"},{id:"21",name:"Beef",description:"The Browser Exploitation Framework for testing browser security",category:"Exploitation Tools",command:"beef"},{id:"22",name:"Sn1per",description:"Automated pentesting tool for information gathering",category:"Information Gathering",command:"sn1per"},{id:"23",name:"Responder",description:"Lateral movement tool for exploiting network protocols",category:"Sniffing & Spoofing",command:"responder"},{id:"24",name:"Sublist3r",description:"Subdomain enumeration tool for information gathering",category:"Information Gathering",command:"sublist3r"},{id:"25",name:"Hashcat",description:"Advanced password cracking tool",category:"Password Attacks",command:"hashcat"},{id:"26",name:"Mimikatz",description:"Windows credential dumper for obtaining passwords",category:"Exploitation Tools",command:"mimikatz"},{id:"27",name:"HashID",description:"Hash identifier tool for identifying hash types",category:"Password Attacks",command:"hashid"},{id:"28",name:"BloodHound",description:"Active Directory enumeration tool for post-exploitation",category:"Exploitation Tools",command:"bloodhound"},{id:"29",name:"Lynis",description:"Security auditing tool for Unix-based systems",category:"Information Gathering",command:"lynis"},{id:"30",name:"Wfuzz",description:"Web fuzzing tool for finding vulnerabilities in web apps",category:"Web Applications",command:"wfuzz"},{id:"31",name:"Cobalt Strike",description:"Adversary simulation software for penetration testers",category:"Exploitation Tools",command:"cobaltstrike"},{id:"32",name:"Shodan",description:"Search engine for Internet-connected devices",category:"Information Gathering",command:"shodan"},{id:"33",name:"CloudBrute",description:"Brute force cloud storage services",category:"Password Attacks",command:"cloudbrute"},{id:"34",name:"FuzzBunch",description:"A penetration testing framework developed by the NSA",category:"Exploitation Tools",command:"fuzzbunch"},{id:"35",name:"PowerSploit",description:"A PowerShell-based exploitation framework",category:"Exploitation Tools",command:"powersploit"},{id:"36",name:"Powershell Empire",description:"Post-exploitation and agent-based framework",category:"Exploitation Tools",command:"empire"},{id:"37",name:"Reaver",description:"Wi-Fi Protected Setup (WPS) attack tool",category:"Wireless Attacks",command:"reaver"},{id:"38",name:"Kismet",description:"Wireless network detector, sniffer, and intrusion detection system",category:"Wireless Attacks",command:"kismet"},{id:"39",name:"Nikto3",description:"Web server scanner that identifies vulnerabilities",category:"Web Applications",command:"nikto3"},{id:"40",name:"Scapy",description:"Network manipulation tool for penetration testing",category:"Sniffing & Spoofing",command:"scapy"},{id:"41",name:"SSLScan",description:"SSL scanner for finding vulnerabilities in SSL implementations",category:"Web Applications",command:"sslscan"},{id:"42",name:"Gophish",description:"Open-source phishing framework for social engineering testing",category:"Social Engineering",command:"gophish"},{id:"43",name:"Empire",description:"Post-exploitation framework with PowerShell agents",category:"Exploitation Tools",command:"empire"},{id:"44",name:"Pipal",description:"Password analysis tool to identify weak passwords",category:"Password Attacks",command:"pipal"},{id:"45",name:"Rekall",description:"Forensic memory analysis tool for investigating malware",category:"Forensics",command:"rekall"}],x=["All","Information Gathering","Sniffing & Spoofing","Exploitation Tools","Web Applications","Wireless Attacks","Password Attacks","Social Engineering","Forensics"];function S(){const[o,n]=r.useState(""),[i,t]=r.useState("All"),c=r.useMemo(()=>h.filter(a=>{const d=a.name.toLowerCase().includes(o.toLowerCase())||a.description.toLowerCase().includes(o.toLowerCase()),l=i==="All"||a.category===i;return d&&l}),[o,i]);return e.jsx("div",{className:"py-12",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs(s.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"text-center mb-12",children:[e.jsx("h1",{className:"text-4xl font-bold text-gray-900",children:"Snigdha OS Tools"}),e.jsx("p",{className:"mt-4 text-lg text-gray-600",children:"Explore our comprehensive collection of security and penetration testing tools"})]}),e.jsxs("div",{className:"space-y-8",children:[e.jsx("div",{className:"max-w-xl mx-auto",children:e.jsx(u,{value:o,onChange:a=>n(a.target.value)})}),e.jsx(f,{categories:x,selectedCategory:i,onSelect:t}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:c.map(a=>e.jsx(y,{...a},a.id))}),c.length===0&&e.jsx("div",{className:"text-center py-12",children:e.jsx("p",{className:"text-gray-500",children:"No tools found matching your criteria"})})]})]})})}export{S as default};
