"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[742],{742:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var r,a,i,c,o,s,u=t(861),p=t(439),l=t(687),f=t.n(l),d=t(168),g=t(686),h=t(87),x=g.Z.button(r||(r=(0,d.Z)(["\n  font-family: inherit;\n\n  padding: 10px 5px;\n  margin-right: 10px;\n\n  cursor: pointer;\n\n  border-radius: 10px;\n\n  border: none;\n\n  background-image: radial-gradient(\n    circle farthest-corner at 10% 20%,\n    rgba(100, 43, 115, 1) 0%,\n    rgba(4, 0, 4, 1) 90%\n  );\n\n  color: #fff;\n\n  &:hover {\n    color: #ff4500;\n  }\n"]))),v=g.Z.h3(a||(a=(0,d.Z)(["\n  font-weight: 600;\n  font-size: 24px;\n  line-height: calc(16 / 24);\n\n  text-align: center;\n\n  margin-bottom: 25px;\n"]))),m=g.Z.div(i||(i=(0,d.Z)(["\n  text-align: center;\n\n  margin-bottom: 25px;\n"]))),b=(0,g.Z)(h.OL)(c||(c=(0,d.Z)(["\n  font-family: 'Permanent Marker', cursive;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: calc(16 / 24);\n\n  text-decoration: none;\n\n  background-color: #4158d0;\n  background-image: linear-gradient(\n    43deg,\n    #4158d0 0%,\n    #c850c0 46%,\n    #ffcc70 100%\n  );\n\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n\n  &:not(:last-child) {\n    margin-right: 100px;\n  }\n\n  &:hover {\n    background-color: #4158d0;\n    background-image: linear-gradient(\n      290deg,\n      #4158d0 0%,\n      #c850c0 46%,\n      #ffcc70 100%\n    );\n\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n"]))),k=t(791),w=t(689),Z=t(14),j=t(867),y=g.Z.div(o||(o=(0,d.Z)(["\n  display: flex;\n  margin-bottom: 25px;\n"]))),_=g.Z.div(s||(s=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  text-align: initial;\n\n  max-width: 450px;\n\n  margin-left: 20px;\n"]))),S=t(184),U=function(n){var e=n.poster,t=n.title,r=n.year,a=n.vote,i=n.overview,c=n.genres;return(0,S.jsxs)(y,{children:[(0,S.jsx)("img",{src:e,alt:t,width:"250"}),(0,S.jsxs)(_,{children:[(0,S.jsxs)("h2",{children:[t," (",r,")"]}),(0,S.jsxs)("p",{children:["User Score: ",a,"%"]}),(0,S.jsx)("h3",{children:"Overview"}),(0,S.jsx)("p",{children:i}),(0,S.jsx)("h3",{children:"Genres"}),(0,S.jsx)("p",{children:c})]})]})},z=t(273);function C(){var n=(0,k.useState)({backdrop_path:"",genres:[],overview:"",poster_path:"",release_date:"",title:"",vote_average:""}),e=(0,p.Z)(n,2),t=e[0],r=e[1],a=(0,k.useState)(!0),i=(0,p.Z)(a,2),c=i[0],o=i[1],s=(0,w.UO)().movieId;(0,k.useEffect)((function(){function n(){return(n=(0,u.Z)(f().mark((function n(){var e;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,z.zU)(s);case 3:if(e=n.sent,0!==Object.keys(e).length){n.next=6;break}return n.abrupt("return",(0,Z.Am)("Sorry, movie not found! Please try again later"));case 6:r(e),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:return n.prev=12,o(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[s]);var l=(0,w.s0)(),d=t.poster_path,g=t.title,h=t.release_date,y=t.vote_average,_=t.overview,C=t.genres,O=d?"https://image.tmdb.org/t/p/w500".concat(d):"https://via.placeholder.com/200x300?text=Poster+Not+Found",P=h.slice(0,4),A=Math.floor(10*y),F=C.map((function(n){return n.name})).join(", ");return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("main",{children:[(0,S.jsx)(x,{type:"button",onClick:function(){return l(-2)},children:"Back to"}),t&&(0,S.jsx)(U,{title:g,year:P,poster:O,vote:A,overview:_,genres:F}),(0,S.jsx)(v,{children:"Additional information"}),(0,S.jsxs)(m,{children:[(0,S.jsx)(b,{to:"cast",children:"Cast"}),(0,S.jsx)(b,{to:"reviews",children:"Reviews"})]}),(0,S.jsx)(k.Suspense,{fallback:(0,S.jsx)(j.a,{}),children:(0,S.jsx)(w.j3,{})})]}),c&&(0,S.jsx)(j.a,{})]})}},273:function(n,e,t){t.d(e,{D$:function(){return f},_r:function(){return l},bI:function(){return d},wr:function(){return u},zU:function(){return p}});var r=t(861),a=t(687),i=t.n(a),c=t(243),o="https://api.themoviedb.org/3/",s="b5ec273f41ed5d13bd669af204d5b017",u=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o,"trending/movie/day"),{params:{api_key:s,language:"en-US"}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o,"movie/").concat(e),{params:{api_key:s,language:"en-US"}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o,"movie/").concat(e,"/credits"),{params:{api_key:s,language:"en-US"}});case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o,"movie/").concat(e,"/reviews"),{params:{api_key:s,language:"en-US"}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o,"search/movie"),{params:{api_key:s,language:"en-US",query:e}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=742.d068cb64.chunk.js.map