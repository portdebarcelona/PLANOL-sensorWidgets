(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r={read(e,t){const n={at:t?"":"@",cleanName:e=>t&&e.split(/:(.+)/)[1]||e,toObj(e){let r={};if(1===e.nodeType){if(e.attributes.length)for(let o=0;o<e.attributes.length;o+=1){const{name:s}=e.attributes[o],{value:i}=e.attributes[o],a=0===s.lastIndexOf("xmlns:",0);t&&a||(r[n.at+n.cleanName(s)]=(i||"").toString())}if(e.firstChild){let t=0,o=0,s=!1;for(let n=e.firstChild;n;n=n.nextSibling)1===n.nodeType?s=!0:3===n.nodeType&&n.nodeValue.match(/[^ \f\n\r\t\v]/)?t+=1:4===n.nodeType&&(o+=1);if(s)if(t<2&&o<2){n.removeWhite(e);for(let t=e.firstChild;t;t=t.nextSibling)3===t.nodeType?r["#text"]=n.escape(t.nodeValue):4===t.nodeType?r["#cdata"]=n.escape(t.nodeValue):r[t.nodeName]?r[t.nodeName]instanceof Array?r[t.nodeName][r[t.nodeName].length]=n.toObj(t):r[t.nodeName]=[r[t.nodeName],n.toObj(t)]:r[t.nodeName]=n.toObj(t)}else e.attributes.length?r["#text"]=n.escape(n.innerXml(e)):r=n.escape(n.innerXml(e));else if(t)e.attributes.length?r["#text"]=n.escape(n.innerXml(e)):r=n.escape(n.innerXml(e));else if(o)if(o>1)r=n.escape(n.innerXml(e));else for(let t=e.firstChild;t;t=t.nextSibling)r["#cdata"]=n.escape(t.nodeValue)}e.attributes.length||e.firstChild||(r=null)}else if(9===e.nodeType)r=n.toObj(e.documentElement);else if(8===e.nodeType)return e.data;return r},innerXml(e){let t="";if("innerHTML"in e)t=e.innerHTML;else{const n=e=>{let t="";if(1===e.nodeType){t+="<"+e.nodeName;for(let n=0;n<e.attributes.length;n+=1){const{name:r}=e.attributes[n];t+=` ${r}="${(e.attributes[n].value||"").toString()}"`}if(e.firstChild){t+=">";for(let r=e.firstChild;r;r=r.nextSibling)t+=n(r);t+=`</${e.nodeName}>`}else t+="/>"}else 3===e.nodeType?t+=e.nodeValue:4===e.nodeType&&(t+=`<![CDATA[${e.nodeValue}]]>`);return t};for(let r=e.firstChild;r;r=r.nextSibling)t+=n(r)}return t},escape:e=>e.replace(/[\\]/g,"\\\\").replace(/["]/g,'\\"').replace(/[\n]/g,"\\n").replace(/[\r]/g,"\\r"),removeWhite(e){e.normalize();for(let t=e.firstChild;t;)if(3===t.nodeType)if(t.nodeValue.match(/[^ \f\n\r\t\v]/))t=t.nextSibling;else{const n=t.nextSibling;e.removeChild(t),t=n}else 1===t.nodeType?(n.removeWhite(t),t=t.nextSibling):t=t.nextSibling;return e}},r=t?e.replace(/<(\/?)([^:>\s]*:)?([^>]+)>/g,"<$1$3>"):e,o=(new DOMParser).parseFromString(r,"text/xml"),s=9===o.nodeType?o.documentElement:o,i={};return i[s.nodeName]=n.toObj(n.removeWhite(s)),i},write(e){const t=(e,n,r)=>{let o="";if(e instanceof Array)for(let s=0,i=e.length;s<i;s+=1)o+=r+t(e[s],n,""+r)+"\n";else if("object"==typeof e){let s=!1;o+=`${r}<${n}`,Object.keys(e).forEach(t=>{"@"===t.charAt(0)?o+=` ${t.substr(1)}="${e[t].toString()}"`:s=!0}),o+=s?">":"/>",s&&(Object.keys(e).forEach(n=>{"#text"===n?o+=e[n]:"#cdata"===n?o+=`<![CDATA[${e[n]}]]>`:"@"!==n.charAt(0)&&(o+=t(e[n],n,""+r))}),o+=`${"\n"===o.charAt(o.length-1)?r:""}</${n}>`)}else o+=`${r}<${n}>${e.toString()}</${n}>`;return o};let n="";return Object.keys(e).forEach(r=>{n+=t(e[r],r,"")}),n}};const o=e=>"[object Array]"===Object.prototype.toString.call(e),s=e=>o(e)?e:[e];function i(e,t,n,s){const i=new XMLHttpRequest;i.onreadystatechange=()=>{if(4===i.readyState){let a=i.responseText;try{a=r.read(a,!0)}catch(e){}if(200!==i.status||a.ExceptionReport){if(s){const n=a.ExceptionReport?a.ExceptionReport.Exception.ExceptionText:i.statusText;s.call(null,n,e,t,a)}}else n.call(null,function(e){const t={},n=e=>{if(o(e))return e.map(e=>n(e));if("object"!=typeof e)return e;const r={};return Object.entries(e).forEach(([e,o])=>{if(o.id&&(t[o.id]={[e]:n(o)}),o.href&&o.href.startsWith("#")){const{href:n,...s}=o;r[e]={...s,...t[n.substring(1)]}}else r[e]=n(o)}),r};return n(e)}(a))}},i.open("POST",e,!0),i.setRequestHeader("Content-Type","application/xml"),i.setRequestHeader("Accept","application/xml"),i.send(r.write(t))}t.a={_url:null,setUrl(e){return this._url=e,this},getCapabilities(e,t){return i(this._url,{"sos:GetCapabilities":{"@xmlns:sos":"http://www.opengis.net/sos/2.0","@xmlns:ows":"http://www.opengis.net/ows/1.1","@service":"SOS","ows:AcceptVersions":{"ows:Version":"2.0.0"},"ows:Sections":{"ows:Section":"Contents"}}},t=>{const n=t.Capabilities.contents.Contents.offering.map(e=>e.ObservationOffering).map(e=>({...e,name:e.name["#text"],procedure:s(e.procedure),procedureDescriptionFormat:s(e.procedureDescriptionFormat),observableProperty:s(e.observableProperty),relatedFeature:e.relatedFeature?s(e.relatedFeature).map(e=>({featureOfInterest:e.FeatureRelationship.target.href,role:[]})):void 0,observedArea:{lowerLeft:e.observedArea.Envelope.lowerCorner.split(" ").map(e=>Number(e)),upperRight:e.observedArea.Envelope.upperCorner.split(" ").map(e=>Number(e)),crs:{type:"link",properties:{href:e.observedArea.Envelope.srsName}}},phenomenonTime:[e.phenomenonTime.TimePeriod.beginPosition,e.phenomenonTime.TimePeriod.endPosition],resultTime:[e.resultTime.TimePeriod.beginPosition,e.resultTime.TimePeriod.endPosition],responseFormat:s(e.responseFormat),observationType:s(e.observationType),featureOfInterestType:s(e.featureOfInterestType)}));e(n)},t),this},describeSensor(e,t,n){return i(this._url,{"swes:DescribeSensor":{"@xmlns:swes":"http://www.opengis.net/swes/2.0","@service":"SOS","@version":"2.0.0","swes:procedure":"http://sensors.portdebarcelona.cat/def/weather/procedure","swes:procedureDescriptionFormat":"http://www.opengis.net/sensorML/1.0.1"}},e=>{const n=e.DescribeSensorResponse.description.SensorDescription.data.SensorML.member;t(n)},n),this},getFeatureOfInterest(e,t,n){return i(this._url,{"sos:GetFeatureOfInterest":{"@xmlns:sos":"http://www.opengis.net/sos/2.0","@service":"SOS","@version":"2.0.0","sos:procedure":"http://sensors.portdebarcelona.cat/def/weather/procedure"}},e=>{const n=s(e.GetFeatureOfInterestResponse.featureMember).map(e=>e.SF_SpatialSamplingFeature).map(e=>({identifier:{codespace:"",value:e.identifier["#text"]},name:{codespace:e.name.codeSpace,value:e.name["#text"]},sampledFeature:e.sampledFeature.href,geometry:{type:Object.keys(e.shape)[0],coordinates:Object.values(e.shape)[0].pos["#text"].split(" ").map(e=>Number(e))}}));t(n)},n),this},getDataAvailability(e,t,n,r,o,a){const l={"gda:GetDataAvailability":{"@xmlns:gda":"http://www.opengis.net/sosgda/1.0","@service":"SOS","@version":"2.0.0",...e&&{"gda:procedure":e},...t&&{"gda:offering":t},...n&&n.length&&{"gda:featureOfInterest":n},...r&&r.length&&{"gda:observedProperty":r}}};return i(this._url,l,e=>{const t=s(e.GetDataAvailabilityResponse.dataAvailabilityMember).map(e=>({featureOfInterest:e.featureOfInterest.href,procedure:e.procedure.href,observedProperty:e.observedProperty.href,phenomenonTime:[e.phenomenonTime.TimePeriod.beginPosition,e.phenomenonTime.TimePeriod.endPosition]}));o(t)},a),this},getObservation(e,t,n,r,o,a){let l;r&&(l=r.length&&2===r.length?{"fes:During":{"fes:ValueReference":"resultTime","gml:TimePeriod":{"@gml:id":"tp_1","gml:beginPosition":r[0],"gml:endPosition":r[1]}}}:{"fes:TEquals":{"fes:ValueReference":"resultTime","gml:TimeInstant":{"@gml:id":"ti_1","gml:timePosition":r}}});const p={"sos:GetObservation":{"@xmlns:sos":"http://www.opengis.net/sos/2.0","@xmlns:fes":"http://www.opengis.net/fes/2.0","@xmlns:gml":"http://www.opengis.net/gml/3.2","@service":"SOS","@version":"2.0.0",...e&&{"sos:offering":e},...n&&n.length&&{"sos:observedProperty":n},...l&&{"sos:temporalFilter":l},...t&&t.length&&{"sos:featureOfInterest":t}}};return i(this._url,p,e=>{if(e.GetObservationResponse.observationData){const t=s(e.GetObservationResponse.observationData).map(e=>e.OM_Observation).map(e=>({procedure:e.procedure.href,observableProperty:e.observedProperty.href,featureOfInterest:{identifier:{codespace:"http://www.opengis.net/def/nil/OGC/0/unknown",value:e.featureOfInterest.href},name:{codespace:"http://www.opengis.net/def/nil/OGC/0/unknown",value:e.featureOfInterest.title}},phenomenonTime:e.phenomenonTime.TimeInstant?e.phenomenonTime.TimeInstant.timePosition:[e.phenomenonTime.TimePeriod.beginPosition,e.phenomenonTime.TimePeriod.endPosition],resultTime:e.resultTime.TimeInstant.timePosition,result:{uom:e.result.uom,value:Number(e.result["#text"])}}));o(t)}else o([])},a),this}}},212:function(e,t,n){"use strict";var r=n(28);t.a={inputs:["service","offering"],optional_inputs:["footnote","custom_css_url","display_utc_times"],init(e,t){void 0!==e.custom_css_url&&function(e){const t=document.createElement("link");t.setAttribute("rel","stylesheet"),t.setAttribute("type","text/css"),t.setAttribute("href",e),void 0!==t&&document.getElementsByTagName("head")[0].appendChild(t)}(e.custom_css_url),void 0!==e.footnote&&t.querySelector(".footnote")&&(t.querySelector(".footnote").innerHTML=e.footnote),e.display_utc_times&&r.a.utc(!0)}}},28:function(e,t,n){"use strict";var r=n(1);const o={utc:!1,locale:navigator.language||navigator.browserLanguage};t.a={display:e=>e?o.utc?e.toLocaleString(o.locale,{timeZone:"UTC"})+" UTC":e.toLocaleString(o.locale):r.a.t("(no date)"),locale:e=>(e&&(o.locale=e),o.locale),utc:e=>(void 0!==e&&(o.utc=e),o.utc)}}}]);
//# sourceMappingURL=widget-compass-js~widget-gauge-js~widget-jqgrid-js~widget-map-js~widget-panel-js~widget-progressbar-~bc566e36.chunk.js.map