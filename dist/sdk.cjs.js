var Ze=Object.create,Re=Object.defineProperty,et=Object.getPrototypeOf,tt=Object.prototype.hasOwnProperty,rt=Object.getOwnPropertyNames,nt=Object.getOwnPropertyDescriptor;var ie=Object.assign,ke=a=>Re(a,"__esModule",{value:!0});var at=(a,c)=>()=>(c||(c={exports:{}},a(c.exports,c)),c.exports),it=(a,c)=>{for(var w in c)Re(a,w,{get:c[w],enumerable:!0})},ot=(a,c,w)=>{if(c&&typeof c=="object"||typeof c=="function")for(let g of rt(c))!tt.call(a,g)&&g!=="default"&&Re(a,g,{get:()=>c[g],enumerable:!(w=nt(c,g))||w.enumerable});return a},He=a=>ot(ke(Re(a!=null?Ze(et(a)):{},"default",a&&a.__esModule&&"default"in a?{get:()=>a.default,enumerable:!0}:{value:a,enumerable:!0})),a);var Ie=(a,c,w)=>new Promise((g,W)=>{var q=A=>{try{O(w.next(A))}catch(G){W(G)}},B=A=>{try{O(w.throw(A))}catch(G){W(G)}},O=A=>A.done?g(A.value):Promise.resolve(A.value).then(q,B);O((w=w.apply(a,c)).next())});var Ue=at((Le,Ae)=>{(function(a){"use strict";var c=a.setTimeout,w=a.clearTimeout,g=a.XMLHttpRequest,W=a.XDomainRequest,q=a.ActiveXObject,B=a.EventSource,O=a.document,A=a.Promise,G=a.fetch,ue=a.Response,R=a.TextDecoder,N=a.TextEncoder,K=a.AbortController;if(typeof window!="undefined"&&typeof O!="undefined"&&!("readyState"in O)&&O.body==null&&(O.readyState="loading",window.addEventListener("load",function(e){O.readyState="complete"},!1)),g==null&&q!=null&&(g=function(){return new q("Microsoft.XMLHTTP")}),Object.create==null&&(Object.create=function(e){function r(){}return r.prototype=e,new r}),Date.now||(Date.now=function(){return new Date().getTime()}),K==null){var F=G;G=function(e,r){var n=r.signal;return F(e,{headers:r.headers,credentials:r.credentials,cache:r.cache}).then(function(t){var f=t.body.getReader();return n._reader=f,n._aborted&&n._reader.cancel(),{status:t.status,statusText:t.statusText,headers:t.headers,body:{getReader:function(){return f}}}})},K=function(){this.signal={_reader:null,_aborted:!1},this.abort=function(){this.signal._reader!=null&&this.signal._reader.cancel(),this.signal._aborted=!0}}}function re(){this.bitsNeeded=0,this.codePoint=0}re.prototype.decode=function(e){function r(p,y,d){if(d===1)return p>=128>>y&&p<<y<=2047;if(d===2)return p>=2048>>y&&p<<y<=55295||p>=57344>>y&&p<<y<=65535;if(d===3)return p>=65536>>y&&p<<y<=1114111;throw new Error}function n(p,y){if(p===6*1)return y>>6>15?3:y>31?2:1;if(p===6*2)return y>15?3:2;if(p===6*3)return 3;throw new Error}for(var t=65533,f="",i=this.bitsNeeded,u=this.codePoint,E=0;E<e.length;E+=1){var v=e[E];i!==0&&(v<128||v>191||!r(u<<6|v&63,i-6,n(i,u)))&&(i=0,u=t,f+=String.fromCharCode(u)),i===0?(v>=0&&v<=127?(i=0,u=v):v>=192&&v<=223?(i=6*1,u=v&31):v>=224&&v<=239?(i=6*2,u=v&15):v>=240&&v<=247?(i=6*3,u=v&7):(i=0,u=t),i!==0&&!r(u,i,n(i,u))&&(i=0,u=t)):(i-=6,u=u<<6|v&63),i===0&&(u<=65535?f+=String.fromCharCode(u):(f+=String.fromCharCode(55296+(u-65535-1>>10)),f+=String.fromCharCode(56320+(u-65535-1&1023))))}return this.bitsNeeded=i,this.codePoint=u,f};var _e=function(){try{return new R().decode(new N().encode("test"),{stream:!0})==="test"}catch(e){console.debug("TextDecoder does not support streaming option. Using polyfill instead: "+e)}return!1};(R==null||N==null||!_e())&&(R=re);var x=function(){};function b(e){this.withCredentials=!1,this.readyState=0,this.status=0,this.statusText="",this.responseText="",this.onprogress=x,this.onload=x,this.onerror=x,this.onreadystatechange=x,this._contentType="",this._xhr=e,this._sendTimeout=0,this._abort=x}b.prototype.open=function(e,r){this._abort(!0);var n=this,t=this._xhr,f=1,i=0;this._abort=function(d){n._sendTimeout!==0&&(w(n._sendTimeout),n._sendTimeout=0),(f===1||f===2||f===3)&&(f=4,t.onload=x,t.onerror=x,t.onabort=x,t.onprogress=x,t.onreadystatechange=x,t.abort(),i!==0&&(w(i),i=0),d||(n.readyState=4,n.onabort(null),n.onreadystatechange())),f=0};var u=function(){if(f===1){var d=0,m="",Y=void 0;if("contentType"in t)d=200,m="OK",Y=t.contentType;else try{d=t.status,m=t.statusText,Y=t.getResponseHeader("Content-Type")}catch(ge){d=0,m="",Y=void 0}d!==0&&(f=2,n.readyState=2,n.status=d,n.statusText=m,n._contentType=Y,n.onreadystatechange())}},E=function(){if(u(),f===2||f===3){f=3;var d="";try{d=t.responseText}catch(m){}n.readyState=3,n.responseText=d,n.onprogress()}},v=function(d,m){if((m==null||m.preventDefault==null)&&(m={preventDefault:x}),E(),f===1||f===2||f===3){if(f=4,i!==0&&(w(i),i=0),n.readyState=4,d==="load")n.onload(m);else if(d==="error")n.onerror(m);else if(d==="abort")n.onabort(m);else throw new TypeError;n.onreadystatechange()}},p=function(d){t!=null&&(t.readyState===4?(!("onload"in t)||!("onerror"in t)||!("onabort"in t))&&v(t.responseText===""?"error":"load",d):t.readyState===3?"onprogress"in t||E():t.readyState===2&&u())},y=function(){i=c(function(){y()},500),t.readyState===3&&E()};"onload"in t&&(t.onload=function(d){v("load",d)}),"onerror"in t&&(t.onerror=function(d){v("error",d)}),"onabort"in t&&(t.onabort=function(d){v("abort",d)}),"onprogress"in t&&(t.onprogress=E),"onreadystatechange"in t&&(t.onreadystatechange=function(d){p(d)}),("contentType"in t||!("ontimeout"in g.prototype))&&(r+=(r.indexOf("?")===-1?"?":"&")+"padding=true"),t.open(e,r,!0),"readyState"in t&&(i=c(function(){y()},0))},b.prototype.abort=function(){this._abort(!1)},b.prototype.getResponseHeader=function(e){return this._contentType},b.prototype.setRequestHeader=function(e,r){var n=this._xhr;"setRequestHeader"in n&&n.setRequestHeader(e,r)},b.prototype.getAllResponseHeaders=function(){return this._xhr.getAllResponseHeaders!=null&&this._xhr.getAllResponseHeaders()||""},b.prototype.send=function(){if((!("ontimeout"in g.prototype)||!("sendAsBinary"in g.prototype)&&!("mozAnon"in g.prototype))&&O!=null&&O.readyState!=null&&O.readyState!=="complete"){var e=this;e._sendTimeout=c(function(){e._sendTimeout=0,e.send()},4);return}var r=this._xhr;"withCredentials"in r&&(r.withCredentials=this.withCredentials);try{r.send(void 0)}catch(n){throw n}};function le(e){return e.replace(/[A-Z]/g,function(r){return String.fromCharCode(r.charCodeAt(0)+32)})}function P(e){for(var r=Object.create(null),n=e.split(`\r
`),t=0;t<n.length;t+=1){var f=n[t],i=f.split(": "),u=i.shift(),E=i.join(": ");r[le(u)]=E}this._map=r}P.prototype.get=function(e){return this._map[le(e)]},g!=null&&g.HEADERS_RECEIVED==null&&(g.HEADERS_RECEIVED=2);function me(){}me.prototype.open=function(e,r,n,t,f,i,u){e.open("GET",f);var E=0;e.onprogress=function(){var p=e.responseText,y=p.slice(E);E+=y.length,n(y)},e.onerror=function(p){p.preventDefault(),t(new Error("NetworkError"))},e.onload=function(){t(null)},e.onabort=function(){t(null)},e.onreadystatechange=function(){if(e.readyState===g.HEADERS_RECEIVED){var p=e.status,y=e.statusText,d=e.getResponseHeader("Content-Type"),m=e.getAllResponseHeaders();r(p,y,d,new P(m))}},e.withCredentials=i;for(var v in u)Object.prototype.hasOwnProperty.call(u,v)&&e.setRequestHeader(v,u[v]);return e.send(),e};function ve(e){this._headers=e}ve.prototype.get=function(e){return this._headers.get(e)};function be(){}be.prototype.open=function(e,r,n,t,f,i,u){var E=null,v=new K,p=v.signal,y=new R;return G(f,{headers:u,credentials:i?"include":"same-origin",signal:p,cache:"no-store"}).then(function(d){return E=d.body.getReader(),r(d.status,d.statusText,d.headers.get("Content-Type"),new ve(d.headers)),new A(function(m,Y){var ge=function(){E.read().then(function(k){if(k.done)m(void 0);else{var M=y.decode(k.value,{stream:!0});n(M),ge()}}).catch(function(k){Y(k)})};ge()})}).catch(function(d){if(d.name!=="AbortError")return d}).then(function(d){t(d)}),{abort:function(){E!=null&&E.cancel(),v.abort()}}};function ne(){this._listeners=Object.create(null)}function Se(e){c(function(){throw e},0)}ne.prototype.dispatchEvent=function(e){e.target=this;var r=this._listeners[e.type];if(r!=null)for(var n=r.length,t=0;t<n;t+=1){var f=r[t];try{typeof f.handleEvent=="function"?f.handleEvent(e):f.call(this,e)}catch(i){Se(i)}}},ne.prototype.addEventListener=function(e,r){e=String(e);var n=this._listeners,t=n[e];t==null&&(t=[],n[e]=t);for(var f=!1,i=0;i<t.length;i+=1)t[i]===r&&(f=!0);f||t.push(r)},ne.prototype.removeEventListener=function(e,r){e=String(e);var n=this._listeners,t=n[e];if(t!=null){for(var f=[],i=0;i<t.length;i+=1)t[i]!==r&&f.push(t[i]);f.length===0?delete n[e]:n[e]=f}};function te(e){this.type=e,this.target=void 0}function he(e,r){te.call(this,e),this.data=r.data,this.lastEventId=r.lastEventId}he.prototype=Object.create(te.prototype);function o(e,r){te.call(this,e),this.status=r.status,this.statusText=r.statusText,this.headers=r.headers}o.prototype=Object.create(te.prototype);function s(e,r){te.call(this,e),this.error=r.error}s.prototype=Object.create(te.prototype);var h=-1,l=0,V=1,S=2,T=-1,C=0,z=1,oe=2,pe=3,we=/^text\/event\-stream(;.*)?$/i,Ge=1e3,Ke=18e6,Fe=function(e,r){var n=e==null?r:parseInt(e,10);return n!==n&&(n=r),xe(n)},xe=function(e){return Math.min(Math.max(e,Ge),Ke)},se=function(e,r,n){try{typeof r=="function"&&r.call(e,n)}catch(t){Se(t)}};function J(e,r){ne.call(this),r=r||{},this.onopen=void 0,this.onmessage=void 0,this.onerror=void 0,this.url=void 0,this.readyState=void 0,this.withCredentials=void 0,this.headers=void 0,this._close=void 0,We(this,e,r)}function ze(){return g!=null&&"withCredentials"in g.prototype||W==null?new g:new W}var Je=G!=null&&ue!=null&&"body"in ue.prototype;function We(e,r,n){r=String(r);var t=Boolean(n.withCredentials),f=n.lastEventIdQueryParameterName||"lastEventId",i=xe(1e3),u=Fe(n.heartbeatTimeout,45e3),E="",v=i,p=!1,y=0,d=n.headers||{},m=n.Transport,Y=Je&&m==null?void 0:new b(m!=null?new m:ze()),ge=m!=null&&typeof m!="string"?new m:Y==null?new be:new me,k=void 0,M=0,X=h,fe="",Te="",Q="",Ce="",H=C,Ve=0,ae=0,Ye=function(D,I,U,$){if(X===l)if(D===200&&U!=null&&we.test(U)){X=V,p=Date.now(),v=i,e.readyState=V;var L=new o("open",{status:D,statusText:I,headers:$});e.dispatchEvent(L),se(e,e.onopen,L)}else{var _="";D!==200?(I&&(I=I.replace(/\s+/g," ")),_="EventSource's response has a status "+D+" "+I+" that is not 200. Aborting the connection."):_="EventSource's response has a Content-Type specifying an unsupported type: "+(U==null?"-":U.replace(/\s+/g," "))+". Aborting the connection.",Me();var L=new o("error",{status:D,statusText:I,headers:$});e.dispatchEvent(L),se(e,e.onerror,L),console.error(_)}},Qe=function(D){if(X===V){for(var I=-1,U=0;U<D.length;U+=1){var $=D.charCodeAt(U);($===`
`.charCodeAt(0)||$==="\r".charCodeAt(0))&&(I=U)}var L=(I!==-1?Ce:"")+D.slice(0,I+1);Ce=(I===-1?Ce:"")+D.slice(I+1),D!==""&&(p=Date.now(),y+=D.length);for(var _=0;_<L.length;_+=1){var $=L.charCodeAt(_);if(H===T&&$===`
`.charCodeAt(0))H=C;else if(H===T&&(H=C),$==="\r".charCodeAt(0)||$===`
`.charCodeAt(0)){if(H!==C){H===z&&(ae=_+1);var Z=L.slice(Ve,ae-1),ee=L.slice(ae+(ae<_&&L.charCodeAt(ae)===" ".charCodeAt(0)?1:0),_);Z==="data"?(fe+=`
`,fe+=ee):Z==="id"?Te=ee:Z==="event"?Q=ee:Z==="retry"?(i=Fe(ee,i),v=i):Z==="heartbeatTimeout"&&(u=Fe(ee,u),M!==0&&(w(M),M=c(function(){ye()},u)))}if(H===C){if(fe!==""){E=Te,Q===""&&(Q="message");var de=new he(Q,{data:fe.slice(1),lastEventId:Te});if(e.dispatchEvent(de),Q==="open"?se(e,e.onopen,de):Q==="message"?se(e,e.onmessage,de):Q==="error"&&se(e,e.onerror,de),X===S)return}fe="",Q=""}H=$==="\r".charCodeAt(0)?T:C}else H===C&&(Ve=_,H=z),H===z?$===":".charCodeAt(0)&&(ae=_+1,H=oe):H===oe&&(H=pe)}}},je=function(D){if(X===V||X===l)X=h,M!==0&&(w(M),M=0),M=c(function(){ye()},v),v=xe(Math.min(i*16,v*2)),e.readyState=l;else if(X===S&&D!=null){console.error(D);var I=new s("error",{error:D});e.dispatchEvent(I),se(e,e.onerror,I)}},Me=function(){X=S,k!=null&&(k.abort(),k=void 0),M!==0&&(w(M),M=0),e.readyState=S},ye=function(){if(M=0,X!==h){if(!p&&k!=null)je(new Error("No activity within "+u+" milliseconds. "+(X===l?"No response received.":y+" chars received.")+" Reconnecting.")),k!=null&&(k.abort(),k=void 0);else{var D=Math.max((p||Date.now())+u-Date.now(),1);p=!1,M=c(function(){ye()},D)}return}p=!1,y=0,M=c(function(){ye()},u),X=l,fe="",Q="",Te=E,Ce="",Ve=0,ae=0,H=C;var I=r;if(r.slice(0,5)!=="data:"&&r.slice(0,5)!=="blob:"&&E!==""){var U=r.indexOf("?");I=U===-1?r:r.slice(0,U+1)+r.slice(U+1).replace(/(?:^|&)([^=&]*)(?:=[^&]*)?/g,function(ee,de){return de===f?"":ee}),I+=(r.indexOf("?")===-1?"?":"&")+f+"="+encodeURIComponent(E)}var $=e.withCredentials,L={};L.Accept="text/event-stream";var _=e.headers;if(_!=null)for(var Z in _)Object.prototype.hasOwnProperty.call(_,Z)&&(L[Z]=_[Z]);try{k=ge.open(Y,Ye,Qe,je,I,$,L)}catch(ee){throw Me(),ee}};e.url=r,e.readyState=l,e.withCredentials=t,e.headers=d,e._close=Me,ye()}J.prototype=Object.create(ne.prototype),J.prototype.CONNECTING=l,J.prototype.OPEN=V,J.prototype.CLOSED=S,J.prototype.close=function(){this._close()},J.CONNECTING=l,J.OPEN=V,J.CLOSED=S,J.prototype.withCredentials=void 0;var Pe=B;g!=null&&(B==null||!("withCredentials"in B.prototype))&&(Pe=J),function(e){if(typeof Ae=="object"&&typeof Ae.exports=="object"){var r=e(Le);r!==void 0&&(Ae.exports=r)}else typeof define=="function"&&define.amd?define(["exports"],e):e(a)}(function(e){e.EventSourcePolyfill=J,e.NativeEventSource=B,e.EventSource=Pe})})(typeof globalThis=="undefined"?typeof window!="undefined"?window:typeof self!="undefined"?self:Le:globalThis)});ke(exports);it(exports,{Event:()=>j,initialize:()=>ct});var Be=He(require("jwt-decode")),Xe=He(require("mitt")),qe=He(Ue());var j;(function(a){a.READY="ready",a.CONNECTED="connected",a.DISCONNECTED="disconnected",a.RECONNECTED="reconnected",a.CHANGED="changed",a.ERROR="error"})(j||(j={}));var $e={debug:!1,baseUrl:"https://config.ff.harness.io/api/1.0",eventUrl:"https://events.ff.harness.io/api/1.0",streamEnabled:!0,allAttributesPrivate:!1,privateAttributeNames:[]},ce=(a,...c)=>console.error(`[FF-SDK] ${a}`,...c),De=30*1e3;var st="1.4.2",ft=500,Oe=globalThis.fetch,dt=qe.EventSourcePolyfill,Ee=!!globalThis.Proxy,Ne=a=>{let{value:c}=a;try{switch(a.kind.toLowerCase()){case"int":case"number":c=Number(c);break;case"boolean":c=c.toString().toLowerCase()==="true";break;case"json":c=JSON.parse(c);break}}catch(w){ce(w)}return c},ct=(a,c,w)=>{let g,W,q,B,O,A=!0,G=()=>{A=!1},ue=()=>{A=!0},R=[],N=(0,Xe.default)(),K=ie(ie({},$e),w),F=(o,...s)=>{K.debug&&console.debug(`[FF-SDK] ${o}`,...s)},re=o=>{if(A){let s=Date.now();s-o.lastAccessed>ft&&(o.count++,o.lastAccessed=s)}};globalThis.onbeforeunload=()=>{R.length&&globalThis.localStorage&&(G(),globalThis.localStorage.HARNESS_FF_METRICS=JSON.stringify(R),ue())};let _e=(o,s)=>Ie(void 0,null,function*(){return(yield(yield Oe(`${s.baseUrl}/client/auth`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:o,target:c})})).json()).authToken}),x=()=>{if(R.length){F("Sending metrics...",{metrics:R,evaluations:b});let o={metricsData:R.map(s=>({timestamp:Date.now(),count:s.count,metricsType:"FFMETRICS",attributes:[{key:"featureIdentifier",value:s.featureIdentifier},{key:"featureName",value:s.featureIdentifier},{key:"variationIdentifier",value:s.variationIdentifier},{key:"target",value:c.identifier},{key:"SDK_NAME",value:"JavaScript"},{key:"SDK_TYPE",value:"client"},{key:"SDK_VERSION",value:st}]}))};Oe(`${K.eventUrl}/metrics/${g}?cluster=${W}`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${B}`},body:JSON.stringify(o)}).then(()=>{R=[]}).catch(s=>{F(s)}).finally(()=>{O=window.setTimeout(x,De)})}else O=window.setTimeout(x,De)},b={},le=function(){return Ee?new Proxy({},{get(o,s){var l,V,S;let h=o[s];if(o.hasOwnProperty(s)){let T=o[s],C=R.find(z=>z.featureIdentifier===s&&T===z.featureValue);C?(C.variationIdentifier=((l=b[s])==null?void 0:l.identifier)||"",re(C)):R.push({featureIdentifier:s,featureValue:T,variationIdentifier:((V=b[s])==null?void 0:V.identifier)||"",count:A?1:0,lastAccessed:Date.now()}),F("Metrics event: Flag:",s,"has been read with value:",T,"variationIdentifier:",(S=b[s])==null?void 0:S.identifier)}return h}}):{}},P=le();_e(a,K).then(o=>{B=o;let s=(0,Be.default)(o);if(F("Authenticated",s),globalThis.localStorage&&globalThis.localStorage.HARNESS_FF_METRICS)try{delete globalThis.localStorage.HARNESS_FF_METRICS,F("Picking up metrics from previous session")}catch(h){}O=window.setTimeout(x,De),g=s.environment,W=s.clusterIdentifier,me().then(()=>{F("Fetch all flags ok",P)}).then(()=>{be()}).then(()=>{F("Event stream ready",{storage:P}),N.emit(j.READY,P),Ee||Object.keys(P).forEach(h=>{var l;R.push({featureIdentifier:h,featureValue:P[h],variationIdentifier:((l=b[h])==null?void 0:l.identifier)||"",count:A?1:0,lastAccessed:Date.now()})})}).catch(h=>{N.emit(j.ERROR,h)})}).catch(o=>{ce("Authentication error: ",o),N.emit(j.ERROR,o)});let me=()=>Ie(void 0,null,function*(){try{(yield(yield Oe(`${K.baseUrl}/client/env/${g}/target/${c.identifier}/evaluations?cluster=${W}`,{headers:{Authorization:`Bearer ${B}`}})).json()).forEach(h=>{let l=Ne(h);P[h.flag]=l,b[h.flag]=ie(ie({},h),{value:l})})}catch(o){return ce("Features fetch operation error: ",o),N.emit(j.ERROR,o),o}}),ve=o=>Ie(void 0,null,function*(){var s;try{let h=yield Oe(`${K.baseUrl}/client/env/${g}/target/${c.identifier}/evaluations/${o}?cluster=${W}`,{headers:{Authorization:`Bearer ${B}`}});if(h.ok){let l=yield h.json(),V=Ne(l);if(G(),P[o]=V,b[o]=ie(ie({},l),{value:V}),ue(),N.emit(j.CHANGED,Ee?new Proxy(l,{get(S,T){var C;if(S.hasOwnProperty(T)&&T==="value"){let z=S.flag,oe=l.value,pe=R.find(we=>we.featureIdentifier===z&&we.featureValue===oe);pe?(re(pe),pe.variationIdentifier=((C=b[z])==null?void 0:C.identifier)||""):R.push({featureIdentifier:z,featureValue:String(oe),variationIdentifier:b[z].identifier||"",count:A?1:0,lastAccessed:Date.now()}),F("Metrics event: Flag",T,"has been read with value via stream update",oe)}return T==="value"?Ne(l):l[T]}}):{deleted:l.deleted,flag:l.flag,value:Ne(l)}),!Ee){let S=l.flag,T=R.find(C=>C.featureIdentifier===S&&C.featureValue===l.value);T?(re(T),T.variationIdentifier=((s=b[S])==null?void 0:s.identifier)||""):R.push({featureIdentifier:S,featureValue:String(l.value),variationIdentifier:b[S].identifier||"",count:A?1:0,lastAccessed:Date.now()})}}else N.emit(j.ERROR,h)}catch(h){ce("Feature fetch operation error: ",h),N.emit(j.ERROR,h)}}),be=()=>{if(!K.streamEnabled){F("Stream is disabled by configuration. Note: Polling is not yet supported");return}q=new dt(`${K.baseUrl}/stream`,{headers:{Authorization:`Bearer ${B}`,"API-Key":a}}),q.onopen=o=>{F("Stream connected",o),N.emit(j.CONNECTED)},q.onclose=o=>{F("Stream disconnected"),N.emit(j.DISCONNECTED)},q.onerror=o=>{ce("Stream has issue",o),N.emit("error",o)},q.addEventListener("*",o=>{let s=JSON.parse(o.data);switch(F("Received event from stream: ",s),s.event){case"create":setTimeout(()=>ve(s.identifier),1e3);break;case"patch":ve(s.identifier);break;case"delete":delete P[s.identifier],N.emit(j.CHANGED,{flag:s.identifier,value:void 0,deleted:!0}),F("Evaluation deleted",{message:s,storage:P});break}})},ne=(o,s)=>N.on(o,s),Se=(o,s)=>{o?N.off(o,s):he()},te=(o,s)=>{var l;let h=P[o];if(!Ee&&h!==void 0){let V=h,S=o,T=R.find(C=>C.featureIdentifier===S&&C.featureValue===V);T?(re(T),T.variationIdentifier=((l=b[S])==null?void 0:l.identifier)||""):R.push({featureIdentifier:S,featureValue:V,count:A?1:0,variationIdentifier:b[S].identifier||"",lastAccessed:Date.now()})}return h!==void 0?h:s},he=()=>{F("Closing event stream"),P=le(),b={},clearTimeout(O),N.all.clear(),q.close()};return{on:ne,off:Se,variation:te,close:he}};
/** @license
 * eventsource.js
 * Available under MIT License (MIT)
 * https://github.com/Yaffle/EventSource/
 */
//# sourceMappingURL=sdk.cjs.js.map
