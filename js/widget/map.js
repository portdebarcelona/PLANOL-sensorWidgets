define("SensorWidget",[],function(){"use strict";function e(e,t){return e.replace(/^(?=.)/gm,new Array(t+1).join(" "))}var t={},n=function(e){return function(){return"SensorWidgetTarget-"+ ++e}}(0);return function(r,i,o){function a(e,t,n){var r="";t&&(r="["+t+"] "),n&&n.request&&(r+=n.request+": "),e&&(r+=e),o.innerHTML='<div class="text-danger">'+r+"</div>"}function s(e,t,n){var r=[];for(var i in t){var o=t[i];n.hasOwnProperty(o)||r.push(o)}return r.length&&a("The '"+e+"' widget is missing some mandatory parameters: "+r.join(", ")),!r.length}return o||(o=document.body),r&&i?(o.id||(o.id=n()),i.service||(i.service="/52n-sos/sos/json"),require(["widget/"+r],function(e){o.innerHTML="",t.hasOwnProperty(o.id)&&t[o.id]&&t[o.id].hasOwnProperty("destroy")&&(console.debug("Destroying previous widget on ElementId="+o.id),t[o.id].destroy(),delete t[o.id]),s(r,e.inputs,i)&&(console.debug("Creating new "+r+" widget on ElementId="+o.id),t[o.id]=e.init(i,o,a))},function(){a("Widget '"+r+"' cannot be found")})):r||a("No widget name specified"),{name:r,config:i,renderTo:o,inspect:function(e){require(["widget/"+r],function(t){e.call(this,t.inputs,t.optional_inputs,t.preferredSizes)})},url:function(){function e(e){var t=[];return e.replace(/^(\.\.?(\/|$))+/,"").replace(/\/(\.(\/|$))+/g,"/").replace(/\/\.\.$/,"/../").replace(/\/?[^\/]*/g,function(e){"/.."===e?t.pop():t.push(e)}),t.join("").replace(/^\//,"/"===e.charAt(0)?"/":"")}var t=e(require.toUrl("../widget/"))+"?";return t+="name="+encodeURIComponent(r)+"&",t+=Object.keys(i).map(function(e){var t=i[e];return"object"==typeof i[e]&&(t=JSON.stringify(i[e])),e+"="+encodeURIComponent(t)}).join("&")},iframe:function(e,t){return e=e?e:"100%",t=t?t:"100%",'<iframe src="'+this.url()+'" width="'+e+'" height="'+t+'" frameBorder="0"></iframe>'},javascript:function(){var t="SensorWidget('"+r+"', "+JSON.stringify(i,null,3)+",\r\ndocument.getElementById('"+r+"-container'));\r\n";return"require(['SensorWidget'], function(SensorWidget) {\r\n"+e(t,3)+"});"}}}}),define("widget/map",["SOS","leaflet","SensorWidget","widget-common","leaflet-label"],function(e,t,n,r){"use strict";return{inputs:r.inputs.concat(["features"]),optional_inputs:["max_initial_zoom","base_layer"].concat(r.optional_inputs),preferredSizes:[{w:550,h:400}],init:function(n,i,o){function a(){e.getCapabilities(function(r){function i(e){var r=t.geoJson(c(e));r.addTo(l),l.fitBounds(r.getBounds(),{maxZoom:n.max_initial_zoom?parseInt(n.max_initial_zoom):14})}for(var a in r){var s=r[a];s.identifier==n.offering&&e.getFeatureOfInterest(s.procedure[0],i,o)}},o)}function s(e){return"[object Array]"===Object.prototype.toString.call(e)}function u(e,t){return t.indexOf(e)>-1}function c(e){var t=s(n.features)?n.features:JSON.parse(n.features),r=[];for(var i in e){var o=e[i];if(o.geometry&&(!t.length||u(o.identifier.value,n.features))){var a={type:"Feature",geometry:o.geometry,id:o.identifier.value,properties:{name:o.name.value}};r.push(a)}}var c={type:"FeatureCollection",features:r};return c}var d=document.createElement("div");d.className="map widget",i.appendChild(d),r.init(n,i);var p;if(n.base_layer){var f="string"==typeof n.base_layer||n.base_layer instanceof String?JSON.parse(n.base_layer):n.base_layer;p=f.type&&"WMS"===f.type.toUpperCase()?t.tileLayer.wms(f.url,f.options):t.tileLayer(f.url,f.options)}else p=t.tileLayer("http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",{attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',subdomains:"abcd",maxZoom:19});n.footnote&&(p.options.attribution+=" | <b>"+n.footnote+"</b>");var l=t.map(d,{layers:[p]});e.setUrl(n.service),a()}}});