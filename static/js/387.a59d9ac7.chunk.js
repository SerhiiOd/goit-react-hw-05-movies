"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{387:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var r,a=n(861),c=n(439),u=n(687),s=n.n(u),i=n(689),o=n(791),p=n(168),f=n(686).Z.ul(r||(r=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n\n  gap: 25px;\n"]))),h=n(867),l=n(14),d=n(273),v=n(184);function m(){var t=(0,o.useState)([]),e=(0,c.Z)(t,2),n=e[0],r=e[1],u=(0,o.useState)(!1),p=(0,c.Z)(u,2),m=p[0],g=p[1],x=(0,o.useState)(!0),w=(0,c.Z)(x,2),_=w[0],k=w[1],y=(0,i.UO)().movieId;return(0,o.useEffect)((function(){function t(){return(t=(0,a.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,d._r)(y);case 3:if(0!==(e=t.sent).length){t.next=7;break}return g(!0),t.abrupt("return",(0,l.Am)("Ooops, there are no cast! Please, try again later"));case 7:r(e),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:return t.prev=13,k(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[y]),(0,v.jsxs)(v.Fragment,{children:[n&&(0,v.jsx)(f,{children:n.map((function(t){return(0,v.jsxs)("li",{children:[(0,v.jsx)("img",{src:t.profile_path?"https://image.tmdb.org/t/p/w500".concat(t.profile_path):"https://via.placeholder.com/100x150?text=Photo+Not+Found",alt:t.name,width:"100"}),(0,v.jsx)("h4",{children:t.name}),(0,v.jsxs)("p",{children:["Character: ",t.character]})]},t.cast_id)}))}),m&&(0,v.jsx)("p",{children:"We don't have cast for this movie "}),_&&(0,v.jsx)(h.a,{})]})}},273:function(t,e,n){n.d(e,{D$:function(){return h},_r:function(){return f},bI:function(){return l},wr:function(){return o},zU:function(){return p}});var r=n(861),a=n(687),c=n.n(a),u=n(243),s="https://api.themoviedb.org/3/",i="b5ec273f41ed5d13bd669af204d5b017",o=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"trending/movie/day"),{params:{api_key:i,language:"en-US"}});case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"movie/").concat(e),{params:{api_key:i,language:"en-US"}});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"movie/").concat(e,"/credits"),{params:{api_key:i,language:"en-US"}});case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"movie/").concat(e,"/reviews"),{params:{api_key:i,language:"en-US"}});case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"search/movie"),{params:{api_key:i,language:"en-US",query:e}});case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=387.a59d9ac7.chunk.js.map