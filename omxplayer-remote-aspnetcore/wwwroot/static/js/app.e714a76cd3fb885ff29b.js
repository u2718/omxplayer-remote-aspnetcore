webpackJsonp([0],[,,function(t,e,n){"use strict";var a=n(0),o=n(13),s=n(10),i=n.n(s);a.a.use(o.a),e.a=new o.a({routes:[{path:"/",name:"Hello",component:i.a}]})},function(t,e,n){function a(t){n(8)}var o=n(1)(n(6),n(11),a,null,null);t.exports=o.exports},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),o=n(3),s=n.n(o),i=n(2),p=n(4);a.a.use(p.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:i.a,template:"<App/>",components:{App:s.a}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App",films:{}}},methods:{open:function(t){this.$http.post("/api/omxplayer/play",{path:t.target.dataset.path})},playStream:function(t){console.log(document.getElementById("stream").value),this.$http.post("/api/livestreamer/play",{path:document.getElementById("stream").value})},stop:function(t){this.$http.post("/api/omxplayer/stop"),this.$http.post("/api/livestreamer/stop")},pause:function(t){this.$http.post("/api/omxplayer/pause"),this.$http.post("/api/livestreamer/pause")}},created:function(){var t=this;this.$http.get("/api/home/getsource").then(function(e){t.films=e.body}).catch(function(t){return console.log(t)})}}},function(t,e){},function(t,e){},function(t,e,n){function a(t){n(9)}var o=n(1)(n(7),n(12),a,"data-v-5e07f68e",null);t.exports=o.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("div",{staticClass:"films"},[n("h1",[t._v("Films")]),t._v(" "),n("ul",t._l(t.films,function(e){return n("li",[n("a",{attrs:{href:"javascript:void(0);","data-path":e.path},on:{click:t.open}},[t._v(t._s(e.title))])])})),t._v(" "),n("button",{on:{click:t.stop}},[t._v("Stop")]),t._v(" "),n("button",{on:{click:t.pause}},[t._v("Pause")])]),t._v(" "),n("div",{staticClass:"streams"},[n("h1",[t._v("Streams")]),t._v(" "),n("input",{attrs:{id:"stream",type:"text"}}),t._v(" "),n("button",{on:{click:t.playStream}},[t._v("Play")])])])},staticRenderFns:[]}},,,,function(t,e){}],[5]);
//# sourceMappingURL=app.e714a76cd3fb885ff29b.js.map