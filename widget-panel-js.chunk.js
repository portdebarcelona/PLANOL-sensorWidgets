(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{211:function(e,t,r){"use strict";var a=r(11);const o={},n={},s={};t.a=(e,t,r)=>{function i(e){e.length||t([]);const i=[];function l(r,a){const o=a.featureOfInterest;i.push({time:new Date(a.resultTime),value:Object.prototype.hasOwnProperty.call(a.result,"value")?a.result.value:a.result,feature:o.name?o.name.value:o.identifier?o.identifier.value:o,property:r,uom:Object.prototype.hasOwnProperty.call(a.result,"uom")?a.result.uom:"(N/A)"}),i.length===e.length&&t(i)}Object.values(e).forEach(e=>{var t,i,c,u;t=e.procedure,i=e.observableProperty,c=l,u=e,o[t]?c(o[t][i],u):(s[t]||(s[t]=[]),s[t].push({callback:c,id:i,context:u}),n[t]||(n[t]=!0,a.a.describeSensor(t,e=>{let r=Object.prototype.hasOwnProperty.call(e,"ProcessModel")?e.ProcessModel.outputs.OutputList.output:e.System.outputs.OutputList.output;r=r instanceof Array?r:[r];const a=["Quantity","Count","Boolean","Category","Text","ObservableProperty"],n=[];for(Object.values(r).forEach(e=>{Object.values(a).forEach(t=>{Object.prototype.hasOwnProperty.call(e,t)&&(e.id=e[t].definition)}),n[e.id]=e.name}),o[t]=n;s[t].length;){const e=s[t].shift();e.callback.call(void 0,o[t][e.id],e.context)}},r)))})}return a.a.setUrl(e.service),{read:function(){const{offering:t,feature:o,property:n,features:s,properties:l,time_start:c,time_end:u}=e,p=o?[o]:Object(a.b)(s)?s:s?JSON.parse(s):void 0,d=n?[n]:Object(a.b)(l)?l:l?JSON.parse(l):void 0,f=c&&u?[c,u]:"latest";a.a.getObservation(t,p,d,f,i,r)}}}},32:function(e,t,r){"use strict";r.r(t);var a=r(1),o=r(211),n=r(28),s=r(212);const i=['<div class="panel widget">',"<h2></h2>","<h3>",a.a.t("Loading..."),"</h3>",'<dl class="dl-horizontal"></dl>','<div><span class="footnote"></span></div>',"</div>"].join("");t.default={inputs:s.a.inputs.concat(["feature","properties","refresh_interval"]),optional_inputs:["title"].concat(s.a.optional_inputs),preferredSizes:[{w:400,h:400}],init(e,t,r){t.innerHTML=i;const l=t.querySelector("h2"),c=t.querySelector("h3"),u=t.querySelector("dl");s.a.init(e,t);const p=Object(o.a)(e,(function(t){if(!t.length)return l.innerHTML=e.title||"",void(c.innerHTML=a.a.t("(no data)"));const r=new Date(Math.max(...t.map(e=>e.time)));t.sort((e,t)=>e.property.localeCompare(t.property)),l.innerHTML=e.title||`${a.a.t("Last measures from")} ${t[0].feature}`,c.innerHTML=n.a.display(r);let o="";Object.keys(t).forEach(e=>{const a=t[e];o+=`<dt>${a.property}</dt>`,a.time.getTime()===r.getTime()?o+=`<dd>${a.value} ${a.uom}</dd>`:o+=`<dd class='outdated'>${a.value} ${a.uom}* <span>*(${n.a.display(a.time)})</span></dd>`}),u.innerHTML=o}),r),d=setInterval(p.read,1e3*e.refresh_interval);return p.read(),{destroy(){clearInterval(d)}}}}}}]);
//# sourceMappingURL=widget-panel-js.chunk.js.map