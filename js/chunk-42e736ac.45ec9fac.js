(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42e736ac"],{4233:function(e,t,n){var c={"./blender/_index.json":["7340","chunk-2d0d674e"],"./browsers/_index.json":["a303","chunk-2d207e6b"],"./browsers/common.json":["69b5","chunk-2d0d0f0c"],"./paint-dot-net/_index.json":["c5f6","chunk-2d217538"],"./paint-dot-net/main.json":["0a27","chunk-2d0ae52c"],"./sublime-text/_index.json":["1970","chunk-2d0ac3f7"],"./sublime-text/main.json":["9fce","chunk-2d0f1565"],"./usual/_index.json":["e782","chunk-2d225fe2"],"./usual/old.json":["a618","chunk-2d2089d2"],"./usual/text.json":["c6e8","chunk-2d2178dc"],"./usual/usual.json":["51cd","chunk-2d0c7cf3"],"./usual/windowing.json":["0f98","chunk-2d0af8cb"],"./usual/windows.json":["91c6","chunk-2d0e4e41"]};function r(e){if(!n.o(c,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=c[e],r=t[0];return n.e(t[1]).then((function(){return n.t(r,3)}))}r.keys=function(){return Object.keys(c)},r.id="4233",e.exports=r},4534:function(e,t,n){"use strict";n("5cb9")},5377:function(e,t,n){var c=n("83ab"),r=n("9bf2"),s=n("ad6d"),u=n("d039"),a=RegExp.prototype,o=c&&u((function(){return"sy"!==Object.getOwnPropertyDescriptor(a,"flags").get.call({dotAll:!0,sticky:!0})}));o&&r.f(a,"flags",{configurable:!0,get:s})},"5cb9":function(e,t,n){},"69d0":function(e,t,n){"use strict";n("84fe")},"84fe":function(e,t,n){},"98b9":function(e,t,n){"use strict";n.r(t);n("a4d3"),n("e01a"),n("d3b7"),n("ddb0"),n("5377");var c=n("7a23"),r=function(e){return Object(c["v"])("data-v-371874ea"),e=e(),Object(c["t"])(),e},s=["innerHTML"],u={class:"table table-responsive"},a=r((function(){return Object(c["g"])("tr",null,[Object(c["g"])("th",null,"Raccourci"),Object(c["g"])("th",null,"Description")],-1)})),o={key:0},b=["src","alt","title"];function i(e,t,n,r,i,l){var d=Object(c["z"])("KeyCode");return Object(c["s"])(),Object(c["f"])(c["a"],null,[Object(c["g"])("h2",null,Object(c["B"])(i.app.title),1),(Object(c["s"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(i.groups,(function(e){return Object(c["s"])(),Object(c["f"])("details",{key:e,open:""},[Object(c["g"])("summary",null,[Object(c["g"])("h3",null,Object(c["B"])(e.title),1)]),Object(c["g"])("p",{innerHTML:e.description},null,8,s),Object(c["g"])("table",u,[a,(Object(c["s"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(e.shortcuts,(function(e){return Object(c["s"])(),Object(c["f"])("tr",{key:e},[Object(c["g"])("td",null,[Object(c["j"])(d,{keys:e.keys},null,8,["keys"])]),Object(c["g"])("td",null,Object(c["B"])(e.description),1),e.flags?(Object(c["s"])(),Object(c["f"])("td",o,[(Object(c["s"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(e.flags,(function(e){return Object(c["s"])(),Object(c["f"])("img",{key:e,src:"/medias/misc/shortcuts/flags/"+e+".png",alt:i.flags[e],title:i.flags[e]},null,8,b)})),128))])):Object(c["e"])("",!0)])})),128))])])})),128))],64)}var l=n("b85c"),d=n("1da1"),j=(n("96cf"),n("3ca3"),function(e){return Object(c["v"])("data-v-74172a50"),e=e(),Object(c["t"])(),e}),f={key:1},O={key:2},p=j((function(){return Object(c["g"])("br",null,null,-1)})),k=Object(c["i"])("ou"),h=j((function(){return Object(c["g"])("br",null,null,-1)})),y=[p,k,h],g={key:3},v={key:0};function m(e,t,n,r,s,u){var a=Object(c["z"])("KeyCode",!0);return Object(c["s"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(n.keys,(function(e,t){return Object(c["s"])(),Object(c["f"])("span",{key:e,class:"shortcut"},[Array.isArray(e)?(Object(c["s"])(),Object(c["d"])(a,{key:0,keys:e},null,8,["keys"])):"&&"==e?(Object(c["s"])(),Object(c["f"])("span",f,", ")):"||"==e?(Object(c["s"])(),Object(c["f"])("span",O,y)):(Object(c["s"])(),Object(c["f"])("span",g,[t>0?(Object(c["s"])(),Object(c["f"])("span",v," + ")):Object(c["e"])("",!0),Object(c["g"])("kbd",null,Object(c["B"])(u.format(e)),1)]))])})),128)}var x={name:"KeyCode",props:{keys:Array},methods:{format:function(e){switch(e){case"Shift":return"⇧Shift";case"Caps Lock":return"⇪Caps Lock";case"Tab":return"Tab↹";case"Enter":return"Enter↵";case"Backspace":return"Backspace⇤";case"Del":return"Del⌦";default:return e}}}},w=(n("4534"),n("d959")),_=n.n(w);const C=_()(x,[["render",m],["__scopeId","data-v-74172a50"]]);var D=C,E={name:"Shortcuts",components:{KeyCode:D},data:function(){return{app:"",groups:[],flags:{"no-ubuntu":"Indisponible sous Ubuntu"}}},created:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var c,r,s,u,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return c=e.$route.params.app,t.next=3,n("c41b")("./".concat(c,"/_index.json"));case 3:e.app=t.sent.data,document.title+=" - "+e.app.title,r=Object(l["a"])(e.app.groups),t.prev=6,r.s();case 8:if((s=r.n()).done){t.next=16;break}return u=s.value,t.next=12,n("4233")("./".concat(u,".json"));case 12:a=t.sent,e.groups.push(a);case 14:t.next=8;break;case 16:t.next=21;break;case 18:t.prev=18,t.t0=t["catch"](6),r.e(t.t0);case 21:return t.prev=21,r.f(),t.finish(21);case 24:case"end":return t.stop()}}),t,null,[[6,18,21,24]])})))()}};n("69d0");const B=_()(E,[["render",i],["__scopeId","data-v-371874ea"]]);t["default"]=B},c41b:function(e,t,n){var c={"./blender/_index.json":["7340","chunk-2d0d674e"],"./browsers/_index.json":["a303","chunk-2d207e6b"],"./paint-dot-net/_index.json":["c5f6","chunk-2d217538"],"./sublime-text/_index.json":["1970","chunk-2d0ac3f7"],"./usual/_index.json":["e782","chunk-2d225fe2"]};function r(e){if(!n.o(c,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=c[e],r=t[0];return n.e(t[1]).then((function(){return n.t(r,3)}))}r.keys=function(){return Object.keys(c)},r.id="c41b",e.exports=r}}]);
//# sourceMappingURL=chunk-42e736ac.45ec9fac.js.map