var Te=t=>{throw TypeError(t)};var le=(t,e,s)=>e.has(t)||Te("Cannot "+s);var r=(t,e,s)=>(le(t,e,"read from private field"),s?s.call(t):e.get(t)),m=(t,e,s)=>e.has(t)?Te("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),l=(t,e,s,i)=>(le(t,e,"write to private field"),i?i.call(t,s):e.set(t,s),s),u=(t,e,s)=>(le(t,e,"access private method"),s);import{S as Ae,p as De,d as D,s as ue,e as ne,n as tt,i as de,g as Me,t as st,h as rt,k as it,l as Fe,m as Z,o as nt,r as E,u as qe,c as ze,j as a,B as at,q as ot,b as ct}from"../script.js";import{m as M}from"./proxy-CzE6vpZy.js";import{M as lt}from"./map-pin-Dh5sOFp6.js";import{U as ht}from"./users-BmJA6T-g.js";import{S as ut}from"./star-DBf-izIT.js";var S,h,ee,C,L,G,F,T,te,V,W,P,H,U,J,d,Y,fe,pe,me,ge,be,xe,ye,Be,Pe,Ee=(Pe=class extends Ae{constructor(e,s){super();m(this,d);m(this,S);m(this,h);m(this,ee);m(this,C);m(this,L);m(this,G);m(this,F);m(this,T);m(this,te);m(this,V);m(this,W);m(this,P);m(this,H);m(this,U);m(this,J,new Set);this.options=s,l(this,S,e),l(this,T,null),l(this,F,De()),this.options.experimental_prefetchInRender||r(this,F).reject(new Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(s)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(r(this,h).addObserver(this),Ue(r(this,h),this.options)?u(this,d,Y).call(this):this.updateResult(),u(this,d,ge).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return ve(r(this,h),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return ve(r(this,h),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,u(this,d,be).call(this),u(this,d,xe).call(this),r(this,h).removeObserver(this)}setOptions(e,s){const i=this.options,c=r(this,h);if(this.options=r(this,S).defaultQueryOptions(e),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof D(this.options.enabled,r(this,h))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");u(this,d,ye).call(this),r(this,h).setOptions(this.options),i._defaulted&&!ue(this.options,i)&&r(this,S).getQueryCache().notify({type:"observerOptionsUpdated",query:r(this,h),observer:this});const o=this.hasListeners();o&&_e(r(this,h),c,this.options,i)&&u(this,d,Y).call(this),this.updateResult(s),o&&(r(this,h)!==c||D(this.options.enabled,r(this,h))!==D(i.enabled,r(this,h))||ne(this.options.staleTime,r(this,h))!==ne(i.staleTime,r(this,h)))&&u(this,d,fe).call(this);const n=u(this,d,pe).call(this);o&&(r(this,h)!==c||D(this.options.enabled,r(this,h))!==D(i.enabled,r(this,h))||n!==r(this,U))&&u(this,d,me).call(this,n)}getOptimisticResult(e){const s=r(this,S).getQueryCache().build(r(this,S),e),i=this.createResult(s,e);return ft(this,i)&&(l(this,C,i),l(this,G,this.options),l(this,L,r(this,h).state)),i}getCurrentResult(){return r(this,C)}trackResult(e,s){const i={};return Object.keys(e).forEach(c=>{Object.defineProperty(i,c,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(c),s==null||s(c),e[c])})}),i}trackProp(e){r(this,J).add(e)}getCurrentQuery(){return r(this,h)}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){const s=r(this,S).defaultQueryOptions(e),i=r(this,S).getQueryCache().build(r(this,S),s);return i.fetch().then(()=>this.createResult(i,s))}fetch(e){return u(this,d,Y).call(this,{...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),r(this,C)))}createResult(e,s){var ke;const i=r(this,h),c=this.options,o=r(this,C),n=r(this,L),g=r(this,G),f=e!==i?e.state:r(this,ee),{state:R}=e;let p={...R},q=!1,y;if(s._optimisticResults){const j=this.hasListeners(),B=!j&&Ue(e,s),$=j&&_e(e,i,s,c);(B||$)&&(p={...p,...it(R.data,e.options)}),s._optimisticResults==="isRestoring"&&(p.fetchStatus="idle")}let{error:I,errorUpdatedAt:v,status:x}=p;if(s.select&&p.data!==void 0)if(o&&p.data===(n==null?void 0:n.data)&&s.select===r(this,te))y=r(this,V);else try{l(this,te,s.select),y=s.select(p.data),y=Fe(o==null?void 0:o.data,y,s),l(this,V,y),l(this,T,null)}catch(j){l(this,T,j)}else y=p.data;if(s.placeholderData!==void 0&&y===void 0&&x==="pending"){let j;if(o!=null&&o.isPlaceholderData&&s.placeholderData===(g==null?void 0:g.placeholderData))j=o.data;else if(j=typeof s.placeholderData=="function"?s.placeholderData((ke=r(this,W))==null?void 0:ke.state.data,r(this,W)):s.placeholderData,s.select&&j!==void 0)try{j=s.select(j),l(this,T,null)}catch(B){l(this,T,B)}j!==void 0&&(x="success",y=Fe(o==null?void 0:o.data,j,s),q=!0)}r(this,T)&&(I=r(this,T),y=r(this,V),v=Date.now(),x="error");const O=p.fetchStatus==="fetching",z=x==="pending",ce=x==="error",Qe=z&&O,Ie=y!==void 0,k={status:x,fetchStatus:p.fetchStatus,isPending:z,isSuccess:x==="success",isError:ce,isInitialLoading:Qe,isLoading:Qe,data:y,dataUpdatedAt:p.dataUpdatedAt,error:I,errorUpdatedAt:v,failureCount:p.fetchFailureCount,failureReason:p.fetchFailureReason,errorUpdateCount:p.errorUpdateCount,isFetched:p.dataUpdateCount>0||p.errorUpdateCount>0,isFetchedAfterMount:p.dataUpdateCount>f.dataUpdateCount||p.errorUpdateCount>f.errorUpdateCount,isFetching:O,isRefetching:O&&!z,isLoadingError:ce&&!Ie,isPaused:p.fetchStatus==="paused",isPlaceholderData:q,isRefetchError:ce&&Ie,isStale:Ne(e,s),refetch:this.refetch,promise:r(this,F)};if(this.options.experimental_prefetchInRender){const j=ie=>{k.status==="error"?ie.reject(k.error):k.data!==void 0&&ie.resolve(k.data)},B=()=>{const ie=l(this,F,k.promise=De());j(ie)},$=r(this,F);switch($.status){case"pending":e.queryHash===i.queryHash&&j($);break;case"fulfilled":(k.status==="error"||k.data!==$.value)&&B();break;case"rejected":(k.status!=="error"||k.error!==$.reason)&&B();break}}return k}updateResult(e){const s=r(this,C),i=this.createResult(r(this,h),this.options);if(l(this,L,r(this,h).state),l(this,G,this.options),r(this,L).data!==void 0&&l(this,W,r(this,h)),ue(i,s))return;l(this,C,i);const c={},o=()=>{if(!s)return!0;const{notifyOnChangeProps:n}=this.options,g=typeof n=="function"?n():n;if(g==="all"||!g&&!r(this,J).size)return!0;const b=new Set(g??r(this,J));return this.options.throwOnError&&b.add("error"),Object.keys(r(this,C)).some(f=>{const R=f;return r(this,C)[R]!==s[R]&&b.has(R)})};(e==null?void 0:e.listeners)!==!1&&o()&&(c.listeners=!0),u(this,d,Be).call(this,{...c,...e})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&u(this,d,ge).call(this)}},S=new WeakMap,h=new WeakMap,ee=new WeakMap,C=new WeakMap,L=new WeakMap,G=new WeakMap,F=new WeakMap,T=new WeakMap,te=new WeakMap,V=new WeakMap,W=new WeakMap,P=new WeakMap,H=new WeakMap,U=new WeakMap,J=new WeakMap,d=new WeakSet,Y=function(e){u(this,d,ye).call(this);let s=r(this,h).fetch(this.options,e);return e!=null&&e.throwOnError||(s=s.catch(tt)),s},fe=function(){u(this,d,be).call(this);const e=ne(this.options.staleTime,r(this,h));if(de||r(this,C).isStale||!Me(e))return;const i=st(r(this,C).dataUpdatedAt,e)+1;l(this,P,setTimeout(()=>{r(this,C).isStale||this.updateResult()},i))},pe=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(r(this,h)):this.options.refetchInterval)??!1},me=function(e){u(this,d,xe).call(this),l(this,U,e),!(de||D(this.options.enabled,r(this,h))===!1||!Me(r(this,U))||r(this,U)===0)&&l(this,H,setInterval(()=>{(this.options.refetchIntervalInBackground||rt.isFocused())&&u(this,d,Y).call(this)},r(this,U)))},ge=function(){u(this,d,fe).call(this),u(this,d,me).call(this,u(this,d,pe).call(this))},be=function(){r(this,P)&&(clearTimeout(r(this,P)),l(this,P,void 0))},xe=function(){r(this,H)&&(clearInterval(r(this,H)),l(this,H,void 0))},ye=function(){const e=r(this,S).getQueryCache().build(r(this,S),this.options);if(e===r(this,h))return;const s=r(this,h);l(this,h,e),l(this,ee,e.state),this.hasListeners()&&(s==null||s.removeObserver(this),e.addObserver(this))},Be=function(e){Z.batch(()=>{e.listeners&&this.listeners.forEach(s=>{s(r(this,C))}),r(this,S).getQueryCache().notify({query:r(this,h),type:"observerResultsUpdated"})})},Pe);function dt(t,e){return D(e.enabled,t)!==!1&&t.state.data===void 0&&!(t.state.status==="error"&&e.retryOnMount===!1)}function Ue(t,e){return dt(t,e)||t.state.data!==void 0&&ve(t,e,e.refetchOnMount)}function ve(t,e,s){if(D(e.enabled,t)!==!1){const i=typeof s=="function"?s(t):s;return i==="always"||i!==!1&&Ne(t,e)}return!1}function _e(t,e,s,i){return(t!==e||D(i.enabled,t)===!1)&&(!s.suspense||t.state.status!=="error")&&Ne(t,s)}function Ne(t,e){return D(e.enabled,t)!==!1&&t.isStaleByTime(ne(e.staleTime,t))}function ft(t,e){return!ue(t.getCurrentResult(),e)}function Le(t,e){return t.filter(s=>!e.includes(s))}function pt(t,e,s){const i=t.slice(0);return i[e]=s,i}var K,N,A,X,Q,_,se,re,w,we,Re,ae,Oe,je,He,mt=(He=class extends Ae{constructor(e,s,i){super();m(this,w);m(this,K);m(this,N);m(this,A);m(this,X);m(this,Q);m(this,_);m(this,se);m(this,re);l(this,K,e),l(this,X,i),l(this,A,[]),l(this,Q,[]),l(this,N,[]),this.setQueries(s)}onSubscribe(){this.listeners.size===1&&r(this,Q).forEach(e=>{e.subscribe(s=>{u(this,w,Oe).call(this,e,s)})})}onUnsubscribe(){this.listeners.size||this.destroy()}destroy(){this.listeners=new Set,r(this,Q).forEach(e=>{e.destroy()})}setQueries(e,s,i){l(this,A,e),l(this,X,s),Z.batch(()=>{const c=r(this,Q),o=u(this,w,ae).call(this,r(this,A));o.forEach(f=>f.observer.setOptions(f.defaultedQueryOptions,i));const n=o.map(f=>f.observer),g=n.map(f=>f.getCurrentResult()),b=n.some((f,R)=>f!==c[R]);c.length===n.length&&!b||(l(this,Q,n),l(this,N,g),this.hasListeners()&&(Le(c,n).forEach(f=>{f.destroy()}),Le(n,c).forEach(f=>{f.subscribe(R=>{u(this,w,Oe).call(this,f,R)})}),u(this,w,je).call(this)))})}getCurrentResult(){return r(this,N)}getQueries(){return r(this,Q).map(e=>e.getCurrentQuery())}getObservers(){return r(this,Q)}getOptimisticResult(e,s){const c=u(this,w,ae).call(this,e).map(o=>o.observer.getOptimisticResult(o.defaultedQueryOptions));return[c,o=>u(this,w,Re).call(this,o??c,s),()=>u(this,w,we).call(this,c,e)]}},K=new WeakMap,N=new WeakMap,A=new WeakMap,X=new WeakMap,Q=new WeakMap,_=new WeakMap,se=new WeakMap,re=new WeakMap,w=new WeakSet,we=function(e,s){const i=u(this,w,ae).call(this,s);return i.map((c,o)=>{const n=e[o];return c.defaultedQueryOptions.notifyOnChangeProps?n:c.observer.trackResult(n,g=>{i.forEach(b=>{b.observer.trackProp(g)})})})},Re=function(e,s){return s?((!r(this,_)||r(this,N)!==r(this,re)||s!==r(this,se))&&(l(this,se,s),l(this,re,r(this,N)),l(this,_,nt(r(this,_),s(e)))),r(this,_)):e},ae=function(e){const s=new Map(r(this,Q).map(c=>[c.options.queryHash,c])),i=[];return e.forEach(c=>{const o=r(this,K).defaultQueryOptions(c),n=s.get(o.queryHash);n?i.push({defaultedQueryOptions:o,observer:n}):i.push({defaultedQueryOptions:o,observer:new Ee(r(this,K),o)})}),i},Oe=function(e,s){const i=r(this,Q).indexOf(e);i!==-1&&(l(this,N,pt(r(this,N),i,s)),u(this,w,je).call(this))},je=function(){var e;if(this.hasListeners()){const s=r(this,_),i=u(this,w,Re).call(this,u(this,w,we).call(this,r(this,N),r(this,A)),(e=r(this,X))==null?void 0:e.combine);s!==i&&Z.batch(()=>{this.listeners.forEach(c=>{c(r(this,N))})})}},He),$e=E.createContext(!1),Ge=()=>E.useContext($e);$e.Provider;function gt(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}var bt=E.createContext(gt()),Ve=()=>E.useContext(bt);function xt(t,e){return typeof t=="function"?t(...e):!!t}function Ce(){}var We=(t,e)=>{(t.suspense||t.throwOnError||t.experimental_prefetchInRender)&&(e.isReset()||(t.retryOnMount=!1))},Je=t=>{E.useEffect(()=>{t.clearReset()},[t])},Ke=({result:t,errorResetBoundary:e,throwOnError:s,query:i})=>t.isError&&!e.isReset()&&!t.isFetching&&i&&xt(s,[t.error,i]),Xe=t=>{const e=t.staleTime;t.suspense&&(t.staleTime=typeof e=="function"?(...s)=>Math.max(e(...s),1e3):Math.max(e??1e3,1e3),typeof t.gcTime=="number"&&(t.gcTime=Math.max(t.gcTime,1e3)))},Ye=(t,e)=>t.isLoading&&t.isFetching&&!e,Se=(t,e)=>(t==null?void 0:t.suspense)&&e.isPending,oe=(t,e,s)=>e.fetchOptimistic(t).catch(()=>{s.clearReset()});function yt({queries:t,...e},s){const i=qe(),c=Ge(),o=Ve(),n=E.useMemo(()=>t.map(v=>{const x=i.defaultQueryOptions(v);return x._optimisticResults=c?"isRestoring":"optimistic",x}),[t,i,c]);n.forEach(v=>{Xe(v),We(v,o)}),Je(o);const[g]=E.useState(()=>new mt(i,n,e)),[b,f,R]=g.getOptimisticResult(n,e.combine),p=!c&&e.subscribed!==!1;E.useSyncExternalStore(E.useCallback(v=>p?g.subscribe(Z.batchCalls(v)):Ce,[g,p]),()=>g.getCurrentResult(),()=>g.getCurrentResult()),E.useEffect(()=>{g.setQueries(n,e,{listeners:!1})},[n,e,g]);const y=b.some((v,x)=>Se(n[x],v))?b.flatMap((v,x)=>{const O=n[x];if(O){const z=new Ee(i,O);if(Se(O,v))return oe(O,z,o);Ye(v,c)&&oe(O,z,o)}return[]}):[];if(y.length>0)throw Promise.all(y);const I=b.find((v,x)=>{const O=n[x];return O&&Ke({result:v,errorResetBoundary:o,throwOnError:O.throwOnError,query:i.getQueryCache().get(O.queryHash)})});if(I!=null&&I.error)throw I.error;return f(R())}function vt(t,e,s){var p,q,y,I,v;const i=qe(),c=Ge(),o=Ve(),n=i.defaultQueryOptions(t);(q=(p=i.getDefaultOptions().queries)==null?void 0:p._experimental_beforeQuery)==null||q.call(p,n),n._optimisticResults=c?"isRestoring":"optimistic",Xe(n),We(n,o),Je(o);const g=!i.getQueryCache().get(n.queryHash),[b]=E.useState(()=>new e(i,n)),f=b.getOptimisticResult(n),R=!c&&t.subscribed!==!1;if(E.useSyncExternalStore(E.useCallback(x=>{const O=R?b.subscribe(Z.batchCalls(x)):Ce;return b.updateResult(),O},[b,R]),()=>b.getCurrentResult(),()=>b.getCurrentResult()),E.useEffect(()=>{b.setOptions(n,{listeners:!1})},[n,b]),Se(n,f))throw oe(n,b,o);if(Ke({result:f,errorResetBoundary:o,throwOnError:n.throwOnError,query:i.getQueryCache().get(n.queryHash)}))throw f.error;if((I=(y=i.getDefaultOptions().queries)==null?void 0:y._experimental_afterQuery)==null||I.call(y,n,f),n.experimental_prefetchInRender&&!de&&Ye(f,c)){const x=g?oe(n,b,o):(v=i.getQueryCache().get(n.queryHash))==null?void 0:v.promise;x==null||x.catch(Ce).finally(()=>{b.updateResult()})}return n.notifyOnChangeProps?f:b.trackResult(f)}function wt(t,e){return vt(t,Ee)}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=ze("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=ze("GitFork",[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]]);function jt({user:t,role:e,description:s}){return a.jsxs(M.div,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},className:"bg-white shadow-lg rounded-lg p-6 border border-gray-200 flex flex-col justify-between",children:[a.jsxs("div",{className:"flex items-start gap-4",children:[a.jsx("img",{src:t.avatar_url,alt:`${t.login}'s avatar`,className:"w-16 h-16 rounded-full border-2 border-cornflower-blue"}),a.jsxs("div",{children:[a.jsx("h3",{className:"font-semibold text-gray-900 text-lg",children:t.name||t.login}),a.jsx("p",{className:"text-sm text-cornflower-blue font-medium",children:e}),t.location&&a.jsxs("div",{className:"flex items-center gap-1 text-sm text-gray-500 mt-1",children:[a.jsx(lt,{className:"h-4 w-4"}),a.jsx("span",{children:t.location})]})]})]}),a.jsx("p",{className:"mt-4 text-gray-600 flex-grow",children:s}),a.jsxs("div",{className:"mt-4 flex items-center gap-4 text-sm text-gray-500",children:[a.jsxs("div",{className:"flex items-center gap-1",children:[a.jsx(ht,{className:"h-4 w-4"}),a.jsxs("span",{children:[t.followers.toLocaleString()," followers"]})]}),a.jsxs("div",{className:"flex items-center gap-1",children:[a.jsx(at,{className:"h-4 w-4"}),a.jsxs("span",{children:[t.public_repos," repos"]})]})]}),a.jsx("a",{href:t.html_url,target:"_blank",rel:"noopener noreferrer",className:"mt-4 inline-flex items-center text-sm text-cornflower-blue hover:underline transition-colors duration-200",children:"View GitHub Profile →"})]})}function Ct({repo:t}){return a.jsxs(M.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},whileHover:{y:-5,scale:1.02},whileTap:{scale:.98},transition:{type:"spring",stiffness:300},className:"bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300",children:[a.jsx("h3",{className:"text-xl font-semibold text-gray-900",children:a.jsx("a",{href:t.html_url,target:"_blank",rel:"noopener noreferrer",className:"hover:text-cornflower-blue transition-colors","aria-label":`Visit ${t.name} repository`,children:t.name})}),t.description&&a.jsx("p",{className:"mt-2 text-gray-600 line-clamp-3",children:t.description}),a.jsxs("div",{className:"mt-4 flex items-center gap-6 text-sm text-gray-500",children:[t.language&&a.jsxs("span",{className:"flex items-center gap-1",children:[a.jsx("span",{className:"w-3 h-3 rounded-full bg-cornflower-blue","aria-hidden":"true"}),a.jsx("span",{children:t.language})]}),a.jsxs(M.span,{className:"flex items-center gap-1",whileHover:{scale:1.1},children:[a.jsx(ut,{className:"h-5 w-5 text-yellow-500"}),a.jsx("span",{children:t.stargazers_count})]}),a.jsxs(M.span,{className:"flex items-center gap-1",whileHover:{scale:1.1},children:[a.jsx(Ot,{className:"h-5 w-5 text-gray-600"}),a.jsx("span",{children:t.forks_count})]}),a.jsxs(M.span,{className:"flex items-center gap-1",whileHover:{scale:1.1},children:[a.jsx(Rt,{className:"h-5 w-5 text-gray-600"}),a.jsx("span",{children:ot(t.updated_at)})]})]})]})}const Ze="https://api.github.com";function St(t){const e=localStorage.getItem(t);if(!e)return!0;const{timestamp:s}=JSON.parse(e);return Date.now()-s>36e5}async function et(t,e){if(!St(e)){const o=localStorage.getItem(e);if(o)return console.log("Serving from cache"),JSON.parse(o).data}console.log("Fetching from GitHub API");const s=await fetch(t);if(!s.ok){const o=await s.json().catch(()=>({}));throw console.error(`GitHub API Error (${s.status}):`,o),new Error(`Failed to fetch data: ${s.statusText}`)}const i=await s.json(),c={data:i,timestamp:Date.now()};return localStorage.setItem(e,JSON.stringify(c)),i}async function Et(t){const e=`github-user-${t}`,s=`${Ze}/users/${t}`;return et(s,e)}async function Nt(t){const e=`github-org-repos-${t}`,s=`${Ze}/orgs/${t}/repos?sort=updated&per_page=100`;return et(s,e)}const he=[{username:"eshanized",role:"Lead Developer & Maintainer",description:"Oversees the development and maintenance of the Snigdha OS core system, ensuring a robust and scalable architecture."},{username:"d3v1l0n",role:"Co-Maintainer & Tools Developer",description:"Specializes in integrating security tools and maintaining critical packages for enhanced system functionality."},{username:"iconized",role:"Co-Maintainer & Server Designer",description:"Focuses on designing and optimizing server infrastructures for seamless tool integration and performance."},{username:"alokified",role:"Web Infrastructure Developer",description:"Develops and maintains the web infrastructure, ensuring efficient and secure online operations."},{username:"utkrshift",role:"UI/UX Designer for DM/WM",description:"Leads the design and customization of desktop and window manager interfaces to enhance user experience."}];function Ut(){const t=yt({queries:he.map(n=>({queryKey:["github-user",n.username],queryFn:()=>Et(n.username)}))}),{data:e,isLoading:s,error:i}=wt({queryKey:["github-repos","Snigdha-OS"],queryFn:()=>Nt("Snigdha-OS")}),c=t.some(n=>n.isLoading)||s,o=t.some(n=>n.isError)||i;return c?a.jsx("div",{className:"min-h-[50vh] flex items-center justify-center",children:a.jsx(ct,{className:"h-8 w-8 animate-spin text-cornflower-blue"})}):o?a.jsx("div",{className:"min-h-[50vh] flex items-center justify-center",children:a.jsx("p",{className:"text-red-500 text-lg font-semibold",children:"Oops! Something went wrong. Please try again later."})}):a.jsx("div",{className:"py-16 bg-gradient-to-b from-gray-50 to-gray-100",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-6 sm:px-8 lg:px-12",children:[a.jsxs(M.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},className:"text-center mb-16",children:[a.jsx("h1",{className:"text-4xl md:text-5xl font-extrabold text-gray-900",children:"Meet Our Team"}),a.jsxs("p",{className:"mt-4 text-lg md:text-xl text-gray-600",children:["The talented developers behind ",a.jsx("span",{className:"text-cornflower-blue font-semibold",children:"Snigdha OS"})]})]}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10",children:t.map((n,g)=>n.data&&a.jsx(M.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{delay:g*.2},className:"bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300",children:a.jsx(jt,{user:n.data,role:he[g].role,description:he[g].description})},n.data.login))}),a.jsxs(M.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},className:"mt-20 text-center",children:[a.jsx("h2",{className:"text-3xl md:text-4xl font-semibold text-gray-900 mb-8",children:"Our Repositories"}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-10",children:e==null?void 0:e.map(n=>a.jsx(M.div,{className:"bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300",children:a.jsx(Ct,{repo:n})},n.id))})]})]})})}export{Ut as default};
