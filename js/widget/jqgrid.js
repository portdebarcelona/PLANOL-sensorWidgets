define("widget/jqgrid",["i18n","sos-data-access","locale-date","widget-common","jqgrid","css!widget/jqgrid.css"],function(t,i,e,n){"use strict";var d=0;return{inputs:n.inputs.concat(["features","properties","time_start","time_end","title"]),optional_inputs:n.optional_inputs,preferredSizes:[{w:530,h:440}],init:function(a,r,o){function s(i){$("#grid"+d).first().jqGrid({datatype:"local",height:"auto",width:"100%",caption:t.t("Results"),data:i,pager:"#pager"+d,rowNum:12,sortname:"time",autowidth:!0,colNames:[t.t("Time"),t.t("Feature"),t.t("Property"),t.t("Value"),t.t("Unit")],colModel:[{name:"time",index:"time",width:"160",formatter:function(t){return e.display(t)}},{name:"feature",index:"feature",width:"150"},{name:"property",index:"property",width:"150"},{name:"value",index:"value",width:"80",align:"right"},{name:"uom",index:"uom",width:"60"}]}),$(window).bind("resize",u),u()}function u(){$(".grid").setGridWidth($(window).width()-2)}r.innerHTML=['<div class="jqgrid widget">','<h1 class="title"></h1>','<table id="grid',++d,'"></table>','<div id="pager',d,'"></div>','<div><span class="footnote"></span></div>',"</div>"].join(""),r.querySelector(".title").innerHTML=a.title,n.init(a,r);var l=i(a,s,o);l.read()}}});