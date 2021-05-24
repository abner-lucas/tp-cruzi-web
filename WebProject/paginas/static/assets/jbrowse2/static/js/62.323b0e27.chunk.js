(this["webpackJsonp@jbrowse/web"]=this["webpackJsonp@jbrowse/web"]||[]).push([[62],{2507:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return k}));var n=a(82),r=a(88),s=a(87),i=a.n(s),c=a(91),u=a(86),o=a(90),f=a(93),d=a(95),l=a(127),h=a(352),p=a(129),b=a(140),v=a(135),g=a(816),j=a(2280),O=a.n(j),m=a(81),k=function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(e){var n;Object(u.a)(this,a),(n=t.call(this,e)).gff=void 0,n.dontRedispatch=void 0;var r=Object(m.readConfObject)(e,"gffGzLocation"),s=Object(m.readConfObject)(e,["index","indexType"]),i=Object(m.readConfObject)(e,["index","location"]),c=Object(m.readConfObject)(e,"dontRedispatch");return n.dontRedispatch=c||["chromosome","contig","region"],n.gff=new g.TabixIndexedFile({filehandle:Object(p.openLocation)(r),csiFilehandle:"CSI"===s?Object(p.openLocation)(i):void 0,tbiFilehandle:"CSI"!==s?Object(p.openLocation)(i):void 0,chunkCacheSize:50*Math.pow(2,20),renameRefSeqs:function(e){return e}}),n}return Object(o.a)(a,[{key:"getRefNames",value:function(){var e=Object(c.a)(i.a.mark((function e(){var t,a=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{},e.abrupt("return",this.gff.getReferenceSequenceNames(t));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getHeader",value:function(){var e=Object(c.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.gff.getHeader());case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getFeatures",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(b.ObservableCreate)(function(){var n=Object(c.a)(i.a.mark((function n(r){var s;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.gff.getMetadata();case 2:s=n.sent,t.getFeaturesHelper(e,a,s,r,!0);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),a.signal)}},{key:"getFeaturesHelper",value:function(){var e=Object(c.a)(i.a.mark((function e(t){var a,n,s,c,u,o,f,d,l,p=this,b=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=b.length>1&&void 0!==b[1]?b[1]:{},n=b.length>2?b[2]:void 0,s=b.length>3?b[3]:void 0,c=b.length>4?b[4]:void 0,u=b.length>5&&void 0!==b[5]?b[5]:t,e.prev=5,o=[],e.next=9,this.gff.getLines(t.refName,t.start,t.end,(function(e,t){o.push(p.parseLine(n.columnNumbers,e,t))}));case 9:if(!c||!o.length){e.next=16;break}if(f=1/0,d=-1/0,o.forEach((function(e){var t=e.fields[2];if(!p.dontRedispatch.includes(t)){var a=e.start-1;a<f&&(f=a),e.end>d&&(d=e.end)}})),!(d>t.end||f<t.start)){e.next=16;break}return this.getFeaturesHelper(Object(r.a)(Object(r.a)({},t),{},{start:f,end:d}),a,n,s,!1,t),e.abrupt("return");case 16:l=o.map((function(e){return e.fields[8]&&"."!==e.fields[8]?e.fields[8].includes("_lineHash")||(e.fields[8]+=";_lineHash=".concat(e.lineHash)):e.fields[8]="_lineHash=".concat(e.lineHash),e.fields.join("\t")})).join("\n"),O.a.parseStringSync(l,{parseFeatures:!0,parseComments:!1,parseDirectives:!1,parseSequences:!1}).forEach((function(e){return p.formatFeatures(e).forEach((function(e){Object(h.a)(e.get("start"),e.get("end"),u.start,u.end)&&s.next(e)}))})),s.complete(),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(5),s.error(e.t0);case 25:case"end":return e.stop()}}),e,this,[[5,22]])})));return function(t){return e.apply(this,arguments)}}()},{key:"parseLine",value:function(e,t,a){var n=t.split("\t");return{start:+n[e.start-1],end:+n[e.end-1],lineHash:a,fields:n}}},{key:"formatFeatures",value:function(e){var t=this;return e.map((function(e){return new v.a({data:t.featureData(e),id:"".concat(t.id,"-offset-").concat(e.attributes._lineHash[0])})}))}},{key:"featureData",value:function(e){var t=this,a=Object(r.a)({},e);a.start-=1,a.strand={"+":1,"-":-1,".":0,"?":void 0}[e.strand],a.phase=Number(e.phase),a.refName=e.seq_id,null===e.score&&delete a.score,null===e.phase&&delete a.score;var s=["start","end","seq_id","score","type","source","phase","strand"];return Object.keys(e.attributes).forEach((function(t){var r=t.toLowerCase();if(s.includes(r)&&(r+="2"),null!==e.attributes[t]){var i=e.attributes[t];if(Array.isArray(i)&&1===i.length){var c=i;i=Object(n.a)(c,1)[0]}a[r]=i}})),a.refName=a.seq_id,e.child_features&&e.child_features.length&&(a.subfeatures=e.child_features.map((function(e){return e.map((function(e){return t.featureData(e)}))})).flat()),delete a.child_features,delete a.data,delete a.derived_features,delete a._linehash,delete a.attributes,delete a.seq_id,a}},{key:"freeResources",value:function(){}}]),a}(l.BaseFeatureDataAdapter)}}]);
//# sourceMappingURL=62.323b0e27.chunk.js.map