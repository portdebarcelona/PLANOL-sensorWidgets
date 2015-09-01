define("home",["i18n","SensorWidget","bootstrap"],function(e,r){"use strict";function a(r){return e.t(r.charAt(0).toUpperCase()+r.slice(1))}function t(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}var n={"Toggle navigation":{es:"Conmutar navegación",ca:"Commuta la navegació"},"GitHub Repo":{es:"Repo GitHub",ca:"Repo GitHub"},"Examples ":{es:"Ejemplos ",ca:"Exemples "},"Usage in Javascript":{es:"Uso en Javascript",ca:"Ús des de Javascript"},"Advanced Composition":{es:"Composición avanzada",ca:"Composició avançada"},Documentation:{es:"Documentación",ca:"Documentació"},"Configurable graphical components for your ":{es:"Componentes gráficos configurables para tus datos de sensores ",ca:"Components gràfics configurables per a les teves dades de sensors "}," sensor data.":{es:".",ca:"."},"100% Javascript. Extensible. MIT licensed.":{es:"100% Javascript. Extensible. Licencia MIT.",ca:"100% Javascript. Extensible. Llicència MIT."},"  Build your own  »":{es:"  Crea tu widget  »",ca:"  Crea el teu widget  »"}};e.addTranslations(n),e.translateDocTree(),document.getElementById("wizard-link").href="wizard?lang="+e.getLang();var i='<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">'+e.langs()[e.getLang()]+' <span class="caret"></span></a>';i+='<ul class="dropdown-menu">';for(var s in e.langs())s!=e.getLang()&&(i+='<li><a href="?lang='+s+'">'+e.langs()[s]+"</a></li>");i+="</ul>",document.getElementById("lang-selector").innerHTML=i;var o=15,l=120,p=new Date,d=new Date(p.getTime()-108e5),c=new Date(p.getTime()-864e5),f={service:function(){return"http://sensors.portdebarcelona.cat/sos/json"},offering:function(e){return"http://sensors.portdebarcelona.cat/def/weather/offerings#"+e},feature:function(e){return"http://sensors.portdebarcelona.cat/def/weather/features#"+e},property:function(e){return"http://sensors.portdebarcelona.cat/def/weather/properties#"+e}};p=p.toISOString().substring(0,19)+"Z",d=d.toISOString().substring(0,19)+"Z",c=c.toISOString().substring(0,19)+"Z";var u={compass:{service:f.service(),offering:f.offering("1m"),feature:f.feature("02"),property:f.property("31"),refresh_interval:o},gauge:{service:f.service(),offering:f.offering("10m"),feature:f.feature("02"),property:f.property("33"),refresh_interval:l},inspector:{service:f.service(),offering:f.offering("30m")},jqgrid:{service:f.service(),offering:f.offering("30m"),title:e.t("jqGrid Example"),features:[f.feature("02"),f.feature("01")],properties:[f.property("32")],time_start:d,time_end:p},map:{service:f.service(),offering:f.offering("30m"),features:[f.feature("01"),f.feature("02"),f.feature("03"),f.feature("P4"),f.feature("10"),f.feature("P5"),f.feature("P6")]},panel:{title:e.t("Last observations"),service:f.service(),offering:f.offering("1m"),feature:f.feature("02"),properties:[f.property("30"),f.property("31"),f.property("32"),f.property("33"),f.property("34"),f.property("35"),f.property("36")],refresh_interval:o},progressbar:{service:f.service(),offering:f.offering("10m"),feature:f.feature("01"),property:f.property("34"),min_value:"900",max_value:"1100",refresh_interval:l},table:{title:e.t("Data Table - last 3 hours"),service:f.service(),offering:f.offering("30m"),feature:f.feature("02"),properties:[f.property("30"),f.property("31"),f.property("32"),f.property("33"),f.property("34"),f.property("36")],time_start:d,time_end:p},thermometer:{service:f.service(),offering:f.offering("10m"),feature:f.feature("01"),property:f.property("32"),refresh_interval:l},timechart:{service:f.service(),offering:f.offering("30m"),title:"Temperatures",features:[f.feature("02"),f.feature("01")],properties:[f.property("32")],time_start:c,time_end:p},windrose:{title:e.t("Sirena Windrose"),subtitle:e.t("Last 3 hours of wind observations"),service:f.service(),offering:f.offering("1m"),feature:f.feature("02"),properties:[f.property("30"),f.property("31")],time_start:d,time_end:p,refresh_interval:l}},g="",m="";for(var v in u)g+='<li><a href="#'+v+'">'+a(v)+"</a></li>",m+=['<div class="anchor" id="'+v+'"></div>','<h1><i class="flaticon-'+v+'"></i>&nbsp;&nbsp;'+a(v)+"</h1>",'<div class="row">','<div class="col-md-6">','<div class="thumbnail widget-container" id="'+v+'-container"></div>',"</div>",'<div class="col-md-6">','<div id="'+v+'-inputs"></div>','<ul class="nav nav-tabs nav-justified">','<li class=""><a href="#'+v+'-code" data-toggle="tab" aria-expanded="true">',e.t("Code"),"</a></li>",'<li class=""><a href="#'+v+'-iframe" data-toggle="tab" aria-expanded="false">',e.t("Embed"),"</a></li>",'<li class="active"><a href="#'+v+'-url" data-toggle="tab" aria-expanded="false">',e.t("Link"),"</a></li>","</ul>",'<div id="myTabContent" class="tab-content">','<div class="tab-pane fade" id="'+v+'-code"></div>','<div class="tab-pane fade" id="'+v+'-iframe"></div>','<div class="tab-pane fade active in" id="'+v+'-url"></div>',"</div>","</div>","</div>"].join("");document.getElementById("widget-menu").innerHTML=g,document.getElementById("widget-list").innerHTML=m;var b=function(r,t,n){var i="<h4><strong> "+e.t("{name} Configuration Parameters",{name:a(this.name)})+"</strong>:</h4><dl class='dl-horizontal'>";i+="<dt>"+e.t("Mandatory")+":</dt> <dd><span class='label label-primary'>"+r.join("</span> <span class='label label-primary'>")+"</span></dd>",i+="<dt>"+e.t("Optional")+":</dt> <dd><span class='label label-info'>"+t.join("</span> <span class='label label-info'>")+"</span></dd>",i+="<dt>"+e.t("Suggested Sizes")+":</dt> <dd><span class='label label-default'>"+n.map(function(e){return e.w+" x "+e.h+" px"}).join("</span> <span class='label label-default'>")+"</dd>",i+="</dl>",document.getElementById(this.name+"-inputs").innerHTML=i};for(v in u){u[v].footnote=e.t("A sample footnote for {name} widget",{name:a(v)});var y=new r(v,u[v],document.getElementById(v+"-container"));y.inspect(b.bind({name:v})),document.getElementById(v+"-url").innerHTML='<pre><a href="'+y.url()+'" target="_blank">'+y.url()+"</a></pre>",document.getElementById(v+"-iframe").innerHTML="<pre>"+t(y.iframe())+"</pre>",document.getElementById(v+"-code").innerHTML="<pre>"+y.javascript()+"</pre>"}}),requirejs(["home"]);