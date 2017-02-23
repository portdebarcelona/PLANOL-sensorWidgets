define("SensorWidget",["i18n","css!SensorWidgets.css"],function(e){"use strict";var t={},i=function(e){return function(){return"SensorWidgetTarget-"+ ++e}}(0);return function(n,r,o){function a(e,t,i){var n="";t&&(n="["+t+"] "),i&&i.request&&(n+=i.request+": "),e&&(n+=e),o.innerHTML='<div class="text-danger">'+n+"</div>"}function s(t,i,n){var r=[];for(var o in i){var s=i[o];n.hasOwnProperty(s)||r.push(s)}return r.length&&a(e.t("The '{name}' widget is missing some mandatory parameters: ",{name:t})+r.join(", ")),!r.length}return o||(o=document.body),n&&r?(o.id||(o.id=i()),r.service||(r.service="/52n-sos/sos/json"),require(["widget/"+n],function(e){o.innerHTML="",t.hasOwnProperty(o.id)&&t[o.id]&&t[o.id].hasOwnProperty("destroy")&&(console.debug("Destroying previous widget on ElementId="+o.id),t[o.id].destroy(),delete t[o.id]),s(n,e.inputs,r)&&(console.debug("Creating new "+n+" widget on ElementId="+o.id),t[o.id]=e.init(r,o,a))},function(){a(e.t("Widget '{name}' cannot be found",{name:n}))})):n||a(e.t("No widget name specified")),{name:n,config:r,renderTo:o,inspect:function(e){require(["widget/"+n],function(t){e.call(this,t.inputs,t.optional_inputs,t.preferredSizes)})},url:function(){function t(e){var t=[];return e.replace(/^(\.\.?(\/|$))+/,"").replace(/\/(\.(\/|$))+/g,"/").replace(/\/\.\.$/,"/../").replace(/\/?[^\/]*/g,function(e){"/.."===e?t.pop():t.push(e)}),t.join("").replace(/^\//,"/"===e.charAt(0)?"/":"")}var i=t(require.toUrl("../widget/"))+"?";return i+="name="+encodeURIComponent(n)+"&",i+=Object.keys(r).map(function(e){var t=r[e];return"object"==typeof r[e]&&(t=JSON.stringify(r[e])),e+"="+encodeURIComponent(t)}).join("&"),i+="&lang="+e.getLang()},iframe:function(e,t){return e=e?e:"100%",t=t?t:"100%",'<iframe src="'+this.url()+'" width="'+e+'" height="'+t+'" frameBorder="0"></iframe>'},javascript:function(){return"SensorWidget('"+n+"', "+JSON.stringify(r,null,3)+", document.getElementById('"+n+"-container'));"}}}}),define("widget/map",["SOS","leaflet","SensorWidget","widget-common","leaflet-label"],function(e,t,i,n){"use strict";return{inputs:n.inputs.concat(["features","properties"]),optional_inputs:["permanent_tooltips","popup_widget","swap_axis","max_initial_zoom","base_layer"].concat(n.optional_inputs),preferredSizes:[{w:550,h:400}],init:function(r,o,a){function s(){e.getCapabilities(function(n){function o(e){var n=t.geoJson(c(e),{onEachFeature:function(e,t){var n="map-tooltip-"+e.id;t.bindLabel('<div id="'+n+'">'+e.properties.name+"</div>",{noHide:!0}).addTo(m);var o=document.getElementById(n);if(r.properties&&"[]"!=r.properties&&r.properties.length&&new i("panel",{service:r.service,offering:r.offering,feature:e.id,properties:r.properties,refresh_interval:"60",title:e.properties.name},o),!r.permanent_tooltips&&t.setLabelNoHide&&t.setLabelNoHide(!1),r.popup_widget){var a=document.createElement("div"),s=JSON.parse(JSON.stringify(r.popup_widget)),p=s.name;delete s.name,s.service=r.service,s.offering=r.offering,new i(p).inspect(function(n,r,o){-1!=n.indexOf("feature")?s.feature=e.id:-1!=n.indexOf("features")&&(s.features=[e.id]),t.bindPopup(a,{minWidth:o[0].w,minHeight:o[0].h}),a.setAttribute("style","width:"+o[0].w+"px;height:"+o[0].h+"px;"),new i(p,s,a)})}}});m.fitBounds(n.getBounds(),{maxZoom:r.max_initial_zoom?parseInt(r.max_initial_zoom):14})}for(var s in n){var p=n[s];p.identifier==r.offering&&e.getFeatureOfInterest(p.procedure[0],o,a)}},a)}function p(e){return"[object Array]"===Object.prototype.toString.call(e)}function u(e,t){return t.indexOf(e)>-1}function d(e){for(var t=[],i=0;i<e.length;i++)p(e[i])?t[i]=d(e[i]):!i%2&&(t[i]=e[i+1],t[i+1]=e[i]);return t}function c(e){var t=p(r.features)?r.features:JSON.parse(r.features),i=[];for(var n in e){var o=e[n];if(o.geometry&&(!t.length||u(o.identifier.value,r.features))){r.swap_axis||(o.geometry.coordinates=d(o.geometry.coordinates));var a={type:"Feature",geometry:o.geometry,id:o.identifier.value,properties:{name:o.name?o.name.value:o.identifier.value}};i.push(a)}}var s={type:"FeatureCollection",features:i};return s}var f=document.createElement("div");f.className="map widget",o.appendChild(f),n.init(r,o);var l;if(r.base_layer){var g="string"==typeof r.base_layer||r.base_layer instanceof String?JSON.parse(r.base_layer):r.base_layer;l=g.type&&"WMS"===g.type.toUpperCase()?t.tileLayer.wms(g.url,g.options):t.tileLayer(g.url,g.options)}else l=t.tileLayer("http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",{attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',subdomains:"abcd",maxZoom:19});r.footnote&&(l.options.attribution+=" | <b>"+r.footnote+"</b>"),("string"==typeof r.popup_widget||r.popup_widget instanceof String)&&(r.popup_widget=JSON.parse(r.popup_widget));var m=t.map(f,{layers:[l]}).setView([0,0],2);e.setUrl(r.service),s()}}});