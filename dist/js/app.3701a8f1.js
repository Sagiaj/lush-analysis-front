(function(t){function e(e){for(var r,s,o=e[0],c=e[1],u=e[2],l=0,v=[];l<o.length;l++)s=o[l],n[s]&&v.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(v.length)v.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},i=[];function s(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"3765e4a2"}[t]+".js"}function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise(function(e,r){a=n[t]=[e,r]});e.push(a[2]=r);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=s(t),i=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=n[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+r+": "+i+")");s.type=r,s.request=i,a[1](s)}n[t]=void 0}};var u=setTimeout(function(){i({type:"timeout",target:c})},12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var p=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"33b9":function(t,e,a){"use strict";var r=a("96a2"),n=a.n(r);n.a},"96a2":function(t,e,a){},cd49:function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),n=a("ce5b"),i=a.n(n);a("da64");r["default"].use(i.a,{iconfont:"md"});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{dark:""}},[a("v-toolbar",{attrs:{app:"",color:"purple lighten-1"}},[a("v-toolbar-title",{staticClass:"headline text-uppercase"},[a("v-btn",{attrs:{flat:"",icon:"",color:"purple lighten-3"},on:{click:function(e){t.drawer=!0}}},[a("v-icon",[t._v("menu")])],1),a("span",[t._v("Lush Analysis")])],1)],1),a("v-navigation-drawer",{attrs:{absolute:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-toolbar",{staticClass:"transparent",attrs:{flat:""}},[a("v-btn",{attrs:{flat:"",icon:"",color:"purple lighten-3"},on:{click:function(e){t.drawer=!1}}},[a("v-icon",[t._v("cancel")])],1),a("v-list",{staticClass:"pa-0"},[a("v-list-tile",{attrs:{avatar:""}},[a("v-list-tile-avatar",[a("img",{attrs:{src:"src"}})]),a("v-list-tile-content",[a("v-list-tile-title",[t._v("Text")])],1)],1)],1)],1),a("v-list",{staticClass:"pt-0",attrs:{dense:""}})],1),a("v-content",[a("router-view")],1)],1)},o=[],c={name:"App",components:{},data:function(){return{drawer:!1}}},u=c,l=a("2877"),p=a("6544"),v=a.n(p),d=a("7496"),f=a("8336"),h=a("549c"),b=a("132d"),m=a("8860"),g=a("ba95"),y=a("c954"),D=a("5d23"),O=a("f774"),w=a("71d9"),x=a("2a7f"),V=Object(l["a"])(u,s,o,!1,null,null,null),j=V.exports;v()(V,{VApp:d["a"],VBtn:f["a"],VContent:h["a"],VIcon:b["a"],VList:m["a"],VListTile:g["a"],VListTileAvatar:y["a"],VListTileContent:D["a"],VListTileTitle:D["b"],VNavigationDrawer:O["a"],VToolbar:w["a"],VToolbarTitle:x["a"]});var T=a("8c4f"),_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-xs":""}},[a("StatusCardList"),a("v-tabs",{attrs:{centered:"","show-arrows":"",dark:"","icons-and-text":"","slider-color":"purple lighten-3"},model:{value:t.tabsValue,callback:function(e){t.tabsValue=e},expression:"tabsValue"}},[a("v-tabs-slider",{attrs:{color:"purple lighten-3"}}),a("v-tab",{attrs:{ripple:""}},[t._v("\n            data table\n        ")]),a("v-tab",{attrs:{ripple:""}},[t._v("\n            visitors graph\n        ")]),a("v-tab-item",[a("VisitorsTable")],1),a("v-tab-item",[a("VisitorsGraph")],1)],1),a("v-divider"),a("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[a("v-flex",{attrs:{xs12:"","text-xs-center":""}},[t.chooseDateRange?a("transition",{attrs:{name:"slide-fade",mode:"out-in"}},[a("div",[a("DateChoice",{on:{finishDateChoice:t.terminateDateChoice}})],1)]):a("v-btn",{attrs:{flat:"",icon:"",color:"purple lighten-3"},on:{click:function(e){t.chooseDateRange=!0}}},[a("v-icon",[t._v("date_range")])],1)],1)],1)],1)},P=[],k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-card",{staticClass:"mt-3 mx-auto"},[a("v-sheet",{staticClass:"v-sheet--offset mx-auto",attrs:{elevation:"12",color:"grey darken-2","max-width":"calc(100% - 32px)"}},t._l(t.chosenGraphsProperties,function(t,e){return a("v-sparkline",{key:e,style:t.style,attrs:{gradient:[t.gradient],gradientDirection:"bottom","line-width":2,smooth:10,padding:10,"auto-draw":"",value:t.values}})}),1),a("v-card-title",{attrs:{"primary-title":""}},[a("v-toolbar",{attrs:{color:"purple lighten-2"}},[a("h1",[t._v("Visitors Traffic")])])],1),a("v-divider"),a("v-card-text",[t._v("\n            Generic site traffic data regardless of click sources\n        ")]),a("v-card-actions",[a("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[t.chosenGraphsProperties.length?a("v-flex",{attrs:{xs12:"","text-xs-center":""}},t._l(t.chosenGraphsProperties,function(e,r){return a("v-chip",{key:r,attrs:{close:"",color:e.gradient},on:{input:function(e){return t.removeGraph(r)}}},[t._v("\n                        "+t._s(e.name)+"\n                    ")])}),1):a("v-flex",{attrs:{xs12:""}},[a("v-btn",{attrs:{color:"purple lighten-1"},on:{click:function(e){t.chosenGraphsProperties=[].concat(t.graphsProperties)}}},[t._v("\n                        Restore All Graphs\n                    ")])],1)],1)],1)],1)],1)},C=[],S=(a("8e6e"),a("75fc")),E=(a("6b54"),a("456d"),a("ac6a"),a("bd86")),G=a("2f62");function R(t){for(var e=1;e<arguments.length;e++)if(e%2){var a=null!=arguments[e]?arguments[e]:{},r=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),r.forEach(function(e){Object(E["a"])(t,e,a[e])})}else Object.defineProperties(t,Object.getOwnPropertyDescriptors(arguments[e]));return t}var L={name:"VisitorsGraph",computed:R({},Object(G["c"])(["siteData"])),watch:{siteData:function(){this.updateGraph(this.siteData)}},methods:R({},Object(G["b"])([]),{removeGraph:function(t){this.chosenGraphsProperties.splice(t,1),this.chosenGraphsProperties.forEach(function(t,e){var a="";e>0&&(a="margin-top: -25%; top: -".concat(20*e,"px")),t.style=a,console.log("curgraphstyle:",t.style)}),console.log("after removing:",this.chosenGraphsProperties)},convertSiteDataToGraph:function(t){var e=[],a=t.reduce(function(t,e){var a=e.site,r=e.visits;return t[a]={},r.forEach(function(e){var r=e.date,n=e.visits;t[a][r]={visits:n}}),t},{}),r=t.reduce(function(t,e){var a=e.site,r=e.visits;return r.forEach(function(e){var r=e.date,n=e.visits;void 0===t[r]&&(t[r]={}),t[r][a]={visits:n}}),t},{}),n={};for(var i in a){var s=a[i];for(var o in n[i]=[],r)void 0!==s[o]?n[i].push(s[o].visits):n[i].push(0)}return Object.keys(n).forEach(function(t,a){var r="#"+Math.floor(16777215*Math.random()).toString(16),i="";a>0&&(i="margin-top: -25%; top: -".concat(20*a,"px")),e.push({name:t,values:n[t],style:i,gradient:r})}),e},updateGraph:function(){var t=this.convertSiteDataToGraph(this.siteData);this.graphsProperties=Object(S["a"])(t),this.chosenGraphsProperties=Object(S["a"])(t)}}),mounted:function(){this.updateGraph()},data:function(){return{graphsProperties:[{values:[],gradient:[""],style:""}],chosenGraphsProperties:[]}}},B=L,A=a("b0af"),M=a("99d9"),$=a("12b2"),H=a("cc20"),I=a("a523"),F=a("ce7e"),U=a("0e8f"),J=a("a722"),N=a("8dd9"),q=a("7f2e"),z=Object(l["a"])(B,k,C,!1,null,null,null),Y=z.exports;v()(z,{VBtn:f["a"],VCard:A["a"],VCardActions:M["a"],VCardText:M["b"],VCardTitle:$["a"],VChip:H["a"],VContainer:I["a"],VDivider:F["a"],VFlex:U["a"],VLayout:J["a"],VSheet:N["a"],VSparkline:q["a"],VToolbar:w["a"]});var K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","grid-list-xs":""}},[a("v-data-iterator",{attrs:{"content-tag":"v-layout",row:"",wrap:"",items:t.siteData,"rows-per-page-items":[3,6,9,15,21]},scopedSlots:t._u([{key:"item",fn:function(t){return a("v-flex",{attrs:{xs4:""}},[a("StatusCard",{attrs:{item:t.item}})],1)}}])})],1)},Q=[],W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-xs":""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card",[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("div",{staticClass:"headline"},[t._v(t._s(t.domain))]),a("span",{staticClass:"pink--text"},[t._v("Top site")])])]),a("v-card-text",[a("v-divider")],1),a("v-card-actions",[a("span",[t._v("Show total visits")]),a("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){t.showTotalVisits=!t.showTotalVisits}}},[a("v-icon",[t._v(t._s(t.showTotalVisits?"keyboard_arrow_up":"keyboard_arrow_down"))])],1)],1),a("v-slide-y-transition",[a("v-card-text",{directives:[{name:"show",rawName:"v-show",value:t.showTotalVisits,expression:"showTotalVisits"}]},[t._v("\n                    "+t._s(t.totalVisits)+"\n                ")])],1)],1)],1)],1)},X=[],Z={name:"StatusCard",props:["item"],computed:{},methods:{calculateTotalVisits:function(){var t=this.item,e=t.visits,a=t.site;console.log("item:",e,a),this.domain=a,this.totalVisits=e.reduce(function(t,e){var a=e.visits;return t+a},0)}},mounted:function(){console.log("mounted"),this.calculateTotalVisits()},data:function(){return{domain:"",totalVisits:0,showTotalVisits:!1}}},tt=Z,et=a("0789"),at=Object(l["a"])(tt,W,X,!1,null,null,null),rt=at.exports;function nt(t){for(var e=1;e<arguments.length;e++)if(e%2){var a=null!=arguments[e]?arguments[e]:{},r=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),r.forEach(function(e){Object(E["a"])(t,e,a[e])})}else Object.defineProperties(t,Object.getOwnPropertyDescriptors(arguments[e]));return t}v()(at,{VBtn:f["a"],VCard:A["a"],VCardActions:M["a"],VCardText:M["b"],VCardTitle:$["a"],VContainer:I["a"],VDivider:F["a"],VFlex:U["a"],VIcon:b["a"],VSlideYTransition:et["d"]});var it={name:"StatusCardList",components:{StatusCard:rt},computed:nt({},Object(G["c"])(["siteData"])),mounted:function(){},data:function(){return{}}},st=it,ot=a("c377"),ct=Object(l["a"])(st,K,Q,!1,null,null,null),ut=ct.exports;v()(ct,{VContainer:I["a"],VDataIterator:ot["a"],VFlex:U["a"]});var lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",[t._v(t._s(e.item.name))]),t._l(e.item.visitsByDates,function(e,r){return a("td",{key:r},[t._v("\n            "+t._s(e)+"\n        ")])})]}}])})},pt=[];function vt(t){for(var e=1;e<arguments.length;e++)if(e%2){var a=null!=arguments[e]?arguments[e]:{},r=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),r.forEach(function(e){Object(E["a"])(t,e,a[e])})}else Object.defineProperties(t,Object.getOwnPropertyDescriptors(arguments[e]));return t}var dt={name:"VisitorsTable",watch:{siteData:function(){this.updateTable()}},methods:{convertSiteDataToTable:function(t){var e={headers:[{text:"Site name",value:"name",align:"left",sortable:!1}],items:[]},a=t.reduce(function(t,e){var a=e.site,r=e.visits;return t[a]={},r.forEach(function(e){var r=e.date,n=e.visits;t[a][r]={visits:n}}),t},{}),r=t.reduce(function(t,a){var r=a.site,n=a.visits;return n.forEach(function(a){var n=a.date,i=a.visits;void 0===t[n]&&(t[n]={},e.headers.push({text:n,value:n})),t[n][r]={visits:i}}),t},{}),n={};for(var i in r){var s=r[i];for(var o in a){var c=n[o],u=s[o]||{},l=u.visits,p=void 0===l?0:l;if(void 0!==c)e.items[c-1].visitsByDates[i]=p,e.items[c-1][i]=p;else{var v=e.items.push({name:o,visitsByDates:Object(E["a"])({},i,p)});e.items[v-1][i]=p,n[o]=v}}}return e},updateTable:function(){var t=this.convertSiteDataToTable(this.siteData),e=t.headers,a=t.items;this.items=Object(S["a"])(a),this.headers=Object(S["a"])(e)}},computed:vt({},Object(G["c"])(["siteData"])),mounted:function(){this.updateTable()},data:function(){return{headers:[],items:[]}}},ft=dt,ht=a("8fea"),bt=Object(l["a"])(ft,lt,pt,!1,null,null,null),mt=bt.exports;v()(bt,{VDataTable:ht["a"]});var gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","grid-list-xs":""}},[a("v-layout",{attrs:{row:"",wrap:"","text-xs-center":""}},[a("v-flex",{attrs:{xs6:""}},[a("v-date-picker",{attrs:{color:"purple lighten-3",landscape:!0,reactive:!0},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}})],1),a("v-flex",{attrs:{xs6:""}},[a("v-date-picker",{attrs:{color:"purple lighten-3",landscape:!0,reactive:!0},model:{value:t.endDate,callback:function(e){t.endDate=e},expression:"endDate"}})],1)],1),a("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[a("v-flex",{attrs:{xs1:"","text-xs-center":""}},[a("h1",[t._v("Go!")]),a("v-divider"),a("v-btn",{attrs:{flat:"","x-large":"",icon:""},nativeOn:{click:function(e){return t.applyDateChoice()}}},[a("v-divider"),a("v-icon",{attrs:{"x-large":"",color:"purple lighten-3"}},[t._v("done_all")])],1)],1)],1)],1)},yt=[],Dt=(a("96cf"),a("3b8d"));function Ot(t){for(var e=1;e<arguments.length;e++)if(e%2){var a=null!=arguments[e]?arguments[e]:{},r=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),r.forEach(function(e){Object(E["a"])(t,e,a[e])})}else Object.defineProperties(t,Object.getOwnPropertyDescriptors(arguments[e]));return t}var wt={name:"DateChoice",props:[],methods:Ot({},Object(G["b"])(["getDataByDateRange"]),{applyDateChoice:function(){var t=Object(Dt["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getDataByDateRange({startDate:this.startDate,endDate:this.endDate});case 2:this.$emit("finishDateChoice");case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}),data:function(){return{startDate:"",endDate:""}}},xt=wt,Vt=a("2e4b"),jt=Object(l["a"])(xt,gt,yt,!1,null,null,null),Tt=jt.exports;v()(jt,{VBtn:f["a"],VContainer:I["a"],VDatePicker:Vt["a"],VDivider:F["a"],VFlex:U["a"],VIcon:b["a"],VLayout:J["a"]});var _t={name:"LushDashboardView",components:{StatusCardList:ut,VisitorsGraph:Y,VisitorsTable:mt,DateChoice:Tt},watch:{startDate:function(){console.log("changed!",this.startDate)}},computed:{},methods:{terminateDateChoice:function(){this.chooseDateRange=!1}},data:function(){return{startDate:null,endDate:null,tabsValue:0,chooseDateRange:!1}}},Pt=_t,kt=(a("33b9"),a("71a3")),Ct=a("c671"),St=a("fe57"),Et=a("9a96"),Gt=Object(l["a"])(Pt,_,P,!1,null,null,null),Rt=Gt.exports;v()(Gt,{VBtn:f["a"],VContainer:I["a"],VDivider:F["a"],VFlex:U["a"],VIcon:b["a"],VLayout:J["a"],VTab:kt["a"],VTabItem:Ct["a"],VTabs:St["a"],VTabsSlider:Et["a"]}),r["default"].use(T["a"]);var Lt=new T["a"]({routes:[{path:"/",name:"LushDashboardView",component:Rt},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),Bt="SET_SITE_DATA",At=a("d225"),Mt=a("b0b4"),$t=a("308d"),Ht=a("6bb5"),It=a("4e2b"),Ft=a("bc3a"),Ut=a.n(Ft),Jt=Ut.a.create({baseURL:"http://localhost:3000"}),Nt=function(){function t(){Object(At["a"])(this,t)}return Object(Mt["a"])(t,null,[{key:"send",value:function(){var e=Object(Dt["a"])(regeneratorRuntime.mark(function e(a,r){var n,i,s=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:s.length>2&&void 0!==s[2]?s[2]:"",n=s.length>3&&void 0!==s[3]?s[3]:{},s.length>4&&void 0!==s[4]?s[4]:{},e.prev=3,i=null,e.t0=r,e.next=e.t0===t.HTTP_METHODS.get?8:e.t0===t.HTTP_METHODS.post?12:16;break;case 8:return e.next=10,this.axios.get(a);case 10:return i=e.sent,e.abrupt("break",18);case 12:return e.next=14,this.axios.post(a,n);case 14:return i=e.sent,e.abrupt("break",18);case 16:return e.abrupt("return",Promise.reject("Unrecorgnized method ".concat(r)));case 18:if(i&&200==i.status){e.next=20;break}return e.abrupt("return",Promise.reject("Error retrieving user"));case 20:return e.abrupt("return",Promise.resolve(i.data));case 23:return e.prev=23,e.t1=e["catch"](3),e.abrupt("return",Promise.reject(e.t1));case 26:case"end":return e.stop()}},e,this,[[3,23]])}));function a(t,a){return e.apply(this,arguments)}return a}()}]),t}();Nt.axios=Jt,Nt.HTTP_METHODS={get:"GET",post:"POST",put:"PUT",delete:"DELETE"};var qt=Nt,zt=function(t){function e(){return Object(At["a"])(this,e),Object($t["a"])(this,Object(Ht["a"])(e).call(this))}return Object(It["a"])(e,t),Object(Mt["a"])(e,null,[{key:"getDataByDateRange",value:function(){var t=Object(Dt["a"])(regeneratorRuntime.mark(function t(e,a){var r,n,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,r="analysis/getDataByDateRange",n={startDate:e,endDate:a},t.next=5,this.send(r,qt.HTTP_METHODS.post,null,n);case 5:return i=t.sent,t.abrupt("return",i);case 9:return t.prev=9,t.t0=t["catch"](0),t.abrupt("return",Promise.reject(t.t0));case 12:case"end":return t.stop()}},t,this,[[0,9]])}));function e(e,a){return t.apply(this,arguments)}return e}()}]),e}(qt),Yt={siteData:[{site:"bli.com",visits:[{date:"7-10-2019",visits:1},{date:"7-11-2019",visits:1}]},{site:"co.il",visits:[{date:"7-13-2019",visits:5}]},{site:"dudu.com",visits:[{date:"7-13-2019",visits:2}]},{site:"www.google.com",visits:[{date:"7-11-2019",visits:1}]},{site:"xample.com",visits:[{date:"7-13-2019",visits:4}]}],startDate:"",endDate:""},Kt=Object(E["a"])({},Bt,function(t,e){t.siteData=e}),Qt={getDataByDateRange:function(){var t=Object(Dt["a"])(regeneratorRuntime.mark(function t(e,a){var r,n,i,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,n=a.startDate,i=a.endDate,t.prev=2,t.next=5,zt.getDataByDateRange(n,i);case 5:s=t.sent,r(Bt,s),t.next=12;break;case 9:return t.prev=9,t.t0=t["catch"](2),t.abrupt("return",Promise.reject(t.t0));case 12:case"end":return t.stop()}},t,null,[[2,9]])}));function e(e,a){return t.apply(this,arguments)}return e}()},Wt={siteData:function(t){return t.siteData},startDate:function(t){return t.startDate},endDate:function(t){return t.endDate}},Xt={state:Yt,mutations:Kt,actions:Qt,getters:Wt};r["default"].use(G["a"]);var Zt=new G["a"].Store({modules:{clientData:Xt}});r["default"].config.productionTip=!1,new r["default"]({router:Lt,store:Zt,render:function(t){return t(j)}}).$mount("#app")}});
//# sourceMappingURL=app.3701a8f1.js.map