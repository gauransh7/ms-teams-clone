(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[1],{12:function(e,t,n){"use strict";n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i})),n.d(t,"f",(function(){return u}));var c="SET_USER_DATA",a="SET_TOKEN",o="IS_LOGGED_IN",r="LOGIN_PENDING",i="GET_USER_DATA_PENDING",u="USER_API_ERROR"},140:function(e,t,n){},141:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(8),r=n.n(o),i=n(16),u=n(26),s=n(54),l=n(30),f=n(31),d=n(43),h=n(42),b=n(10),j=n(97),O=n(181),g=n(32),p=n(5),m=n(49),v=n(171),x=n(2),y=function(){return Object(x.jsx)("div",{style:{height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(x.jsx)("div",{children:Object(x.jsx)(v.a,{})})})},k=["component"],T=["layout","component"],I=function(e){var t=e.component,n=Object(m.a)(e,k);return Object(x.jsx)(t,Object(p.a)({},n))},_=function(e){var t=e.layout,n=e.component,a=Object(m.a)(e,T),o=Object(c.useState)(!0),r=Object(g.a)(o,2),u=r[0],s=r[1],l=Object(c.useRef)(!0),f=Object(i.c)((function(e){return e.auth.isLoggedIn})),d=Object(i.c)((function(e){return e.auth.getUserDataPending}));return Object(c.useLayoutEffect)((function(){l.current?l.current=!1:d||s(!1)}),[d]),Object(c.useEffect)((function(){f&&s(!1)}),[f]),Object(x.jsx)(b.b,{path:a.path,exact:a.exact,component:function(e){return!0===u?Object(x.jsx)(y,{}):f?Object(x.jsx)(t,Object(p.a)(Object(p.a)({},e),{},{noNavbar:a.noNavbar,navbar:a.navbar,navItems:a.navItems,homeIcon:a.homeIcon,children:Object(x.jsx)(c.Suspense,{fallback:Object(x.jsx)("div",{className:"text-primary"}),children:Object(x.jsx)(I,Object(p.a)({component:n},e))})})):Object(x.jsx)(b.a,{to:"/login"})}})},C=n(175),N=n(176),R=n(177),S=n(178),E=n(179),P=n(93),w=n.n(P),L=n(147),D=n(29),A=n(184),G=n(183),M=n(62),U=function(e){return console.log(e),{type:M.a,theme:e}},z=n(68),F=Object(C.a)((function(e){return{AppBar:{backgroundColor:e.secondary},title:{flexGrow:1},menuButtonHidden:{display:"none"}}})),B=Object(b.h)(Object(i.b)((function(e){return{user:e.auth.user,currentTheme:e.theme.theme,darkTheme:"dark"==e.theme.theme||"solarizedDark"==e.theme.theme||"palpatine"==e.theme.theme||"dracula"==e.theme.theme}}),(function(e){return{logout:function(){return e(Object(D.c)())},changeTheme:function(t){return console.log("hrere"),e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";return console.log(e),function(t){t(U(e)),localStorage.setItem("theme",e)}}(t))}}}))((function(e){var t=F(),n=Object(c.useState)(null),a=Object(g.a)(n,2),o=a[0],r=a[1],i=Object(c.useState)(null),u=Object(g.a)(i,2),s=u[0],l=u[1],f=function(){r(null)};return Object(x.jsx)(N.a,{position:"static",children:Object(x.jsxs)(R.a,{children:[Object(x.jsx)(S.a,{variant:"h6",className:t.title,children:"MS TEAMS"}),Object(x.jsx)(E.a,{"aria-controls":"simple-theme-menu",content:"themes","aria-haspopup":"true",color:"inherit",className:"header-title-button",onClick:function(e){r(e.currentTarget)},startIcon:Object(x.jsx)(w.a,{}),children:"Themes"}),Object(x.jsxs)(L.a,{id:"simple-theme-menu",anchorEl:o,keepMounted:!0,open:Boolean(o),onClose:f,style:{marginTop:"30px"},children:[Object(x.jsx)(A.a,{className:"default"===e.currentTheme&&"active-menu-option",onClick:function(){f(),e.changeTheme("default")},children:"Light"}),Object(x.jsx)(A.a,{className:"dark"===e.currentTheme&&"active-menu-option",onClick:function(){f(),e.changeTheme("dark")},children:"Dark"}),Object(x.jsx)(A.a,{className:"solarizedLight"===e.currentTheme&&"active-menu-option",onClick:function(){f(),e.changeTheme("solarizedLight")},children:"Solarized Light"}),Object(x.jsx)(A.a,{className:"solarizedDark"===e.currentTheme&&"active-menu-option",onClick:function(){f(),e.changeTheme("solarizedDark")},children:"Solarized Dark"}),Object(x.jsx)(A.a,{className:"dracula"===e.currentTheme&&"active-menu-option",onClick:function(){f(),e.changeTheme("dracula")},children:"Dracula"})]}),e.user?Object(x.jsxs)("div",{children:[Object(x.jsx)(E.a,{"aria-controls":"avatar-dropdown",content:"avatar","aria-haspopup":"true",color:"inherit",onClick:function(e){console.log(e.currentTarget),l(e.currentTarget)},startIcon:Object(x.jsx)(G.a,{color:"inherit",className:t.avatar,children:Object(z.b)(e.user.first_name+" "+e.user.last_name).reduce((function(e,t){return e+t}),"").substr(0,2)}),children:e.user.first_name}),Object(x.jsx)(L.a,{id:"avatar-dropdown",anchorEl:s,open:Boolean(s),onClose:function(){console.log("close"),l(null)},style:{marginTop:"30px"},onClick:function(){return e.logout},children:Object(x.jsx)(A.a,{onClick:e.logout,children:"Logout"})})]}):""]})})}))),H=function(e){var t=e.children,n=localStorage.getItem("theme");return Object(x.jsx)("div",{children:Object(x.jsxs)("main",{style:{height:"100vh",overflow:"hidden",display:"flex",flexDirection:"column"},children:[Object(x.jsx)(B,{}),Object(x.jsx)("div",{style:{height:"100vh",backgroundColor:{default:"#ffffff",dark:"#242526",palpatine:"#ffffff",solarizedLight:"#eee8d5",solarizedDark:"#0e2a35",dracula:"#282a36"}[n],display:"grid",alignContent:"space-around"},className:"w-100 fg-100 overflow-auto position-relative",children:t})]})})},J=n(180),W=n(144),X=n(56),q=(Object(b.h)(Object(i.b)((function(e){return{user:e.auth.user}}),(function(e){return{createChatRoom:function(t,n){return e(Object(X.a)(t,n))}}}))((function(e){Object(b.g)();return Object(x.jsx)("div",{children:"Auth Guide"})}))),n(182)),K=n(94),V=n.n(K),Y=n(74),Q=n.n(Y),Z=n(95),$=n(35),ee=n.n($),te=function(){var e=Object(Z.a)(Q.a.mark((function e(t,n){var c;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee.a.post("http://localhost:8000/rest-auth/facebook/",{access_token:t,code:n});case 2:return c=e.sent,console.log(c),e.next=6,c.status;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ne=(n(86),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return Object(x.jsx)(V.a,{textButton:"LOGIN WITH FACEBOOK",appId:"514560663329207",fields:"name,email,picture",callback:function(e){console.log(e),te(e.accessToken,e.userId)}})}}]),n}(c.Component)),ce=n(96),ae=n.n(ce),oe=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){var e=this,t=function(t){console.log("success"),console.log(t);var n={access_token:t.accessToken,code:t.googleId};n=JSON.stringify(n),e.props.GoogleLoginFtn(n)};return Object(x.jsx)(ae.a,{clientId:"505402258596-eo28agt8peogpfa7hp10s0dv7r5555ag.apps.googleusercontent.com",buttonText:"LOGIN WITH GOOGLE",onSuccess:t,onFailure:t})}}]),n}(c.Component),re=Object(i.b)((function(e){return{user:e.auth.user,loginPending:e.auth.loginPending}}),(function(e){return{GoogleLoginFtn:function(t){return e(Object(D.a)(t))}}}))(oe),ie=Object(W.a)((function(e){return{createRoomButton:{margin:e.spacing(2)},buttonsDiv:{marginTop:e.spacing(2)},authDiv:{marginTop:e.spacing(2),display:"flex"}}})),ue=Object(b.h)(Object(i.b)((function(e){return{user:e.auth.user}}),(function(e){return{createChatRoom:function(t,n){return e(Object(X.a)(t,n))}}}))((function(e){Object(b.g)();var t=ie();return Object(x.jsxs)(J.a,{children:[Object(x.jsx)(q.a,{children:"We provide premium quality video calls."}),Object(x.jsx)(q.a,{children:"Enjoy video calling with different themes. You are just a click away."}),Object(x.jsxs)("div",{className:t.authDiv,children:[Object(x.jsx)(ne,{}),Object(x.jsx)(re,{})]})]})}))),se=Object(W.a)((function(e){return{Login:{display:"grid",gridAutoFlow:"column",justifyContent:"space-around"}}})),le=Object(i.b)((function(e){return{user:e.auth.user}}),(function(e){return{logoutUser:function(){return e(Object(D.c)())}}}))((function(e){var t=se();return Object(x.jsx)(J.a,{className:t.Login,children:Object(x.jsx)(ue,{})})})),fe=a.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,258))})),de=a.a.lazy((function(){return Promise.all([n.e(0),n.e(4),n.e(6)]).then(n.bind(null,259))})),he=[{path:"/",exact:!0,layout:H,component:function(){return Object(x.jsx)(fe,{})}},{path:"/video/:id/:code",exact:!0,layout:H,component:function(){return Object(x.jsx)(de,{})}}],be=[{path:"/login",exact:!0,layout:H,component:function(){return Object(x.jsx)(le,{})},strictlyPublic:!0}],je=(n(34),["component"]),Oe=["layout","component","strictlyPublic"],ge=function(e){var t=e.component,n=Object(m.a)(e,je);return Object(x.jsx)(t,Object(p.a)({},n))},pe=function(e){var t=e.layout,n=e.component,a=e.strictlyPublic,o=void 0!==a&&a,r=Object(m.a)(e,Oe),u=Object(i.c)((function(e){return e.auth.isLoggedIn}));return Object(x.jsx)(b.b,{path:r.path,exact:r.exact,component:function(e){return o&&!0===u?Object(x.jsx)(b.a,{to:"/"}):Object(x.jsx)(t,Object(p.a)(Object(p.a)({},e),{},{noNavbar:r.noNavbar,navbar:r.navbar,navItems:r.navItems,homeIcon:r.homeIcon,children:Object(x.jsx)(c.Suspense,{fallback:Object(x.jsx)("div",{className:"text-primary"}),children:Object(x.jsx)(ge,Object(p.a)({component:n},e))})}))}})},me={solarizedDark:{type:"dark",primary:{main:"#002b36",contrastText:"#eee8d5"},secondary:{main:"#eee8d5",contrastText:"#0e2a35"},background:{default:"#09232c",paper:"#002b36"}},solarizedLight:{type:"light",primary:{main:"#fff7dd",contrastText:"#002b36"},secondary:{main:"#002b36",contrastText:"#eee8d5"},background:{default:"#eee8d5",paper:"#fff7dd"}},palpatine:{type:"dark",primary:{main:"#1a1a1a",contrastText:"#ffffff"},secondary:{main:"#e04035",contrastText:"#ffffff"},background:{default:"#101010",paper:"#1b1b1b"}},default:{type:"light",primary:{main:"#ffffff",contrastText:"#000000"},secondary:{main:"#356fff",contrastText:"#ffffff"},background:{default:"#f0f2f5",paper:"#ffffff"}},dark:{type:"dark",primary:{main:"#282828",contrastText:"#ffffff"},secondary:{main:"#757575",contrastText:"#ffffff"},background:{default:"#18191a",paper:"#242526"}},dracula:{type:"dark",primary:{main:"#44475a",contrastText:"#bd93f9"},secondary:{main:"#bd93f9",contrastText:"#f8f8f2"},background:{default:"#20222c",paper:"#282a36"}}},ve=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.props.getUser()}},{key:"render",value:function(){return Object(x.jsx)(O.a,{theme:(e=this.props.currentTheme,Object(j.a)({palette:me[e]})),children:Object(x.jsx)(u.a,{children:Object(x.jsxs)(b.d,{children:[be.map((function(e,t){return Object(x.jsx)(pe,{strictlyPublic:e.strictlyPublic,layout:e.layout,path:e.path,exact:e.exact,component:e.component},t)})),he.map((function(e,t){return Object(x.jsx)(_,{layout:e.layout,path:e.path,exact:e.exact,component:e.component},t)}))]})})});var e}}]),n}(c.Component),xe=Object(i.b)((function(e){return{user:e.auth.user,isLoggedIn:e.auth.isLoggedIn,loginPending:e.auth.loginPending,currentTheme:e.theme.theme}}),(function(e){return{getUser:function(){return e(Object(D.b)())}}}))(ve);n(140);r.a.render(Object(x.jsx)(i.a,{store:s.a,children:Object(x.jsx)(u.a,{children:Object(x.jsx)(xe,{})})}),document.getElementById("root"))},29:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return h}));var c=n(35),a=n.n(c),o=n(38),r=n(92),i=n.n(r),u=n(12),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return{type:e,payload:t}},l=function(e){return{type:u.f,error:e}},f=function(e){return function(t){a()({method:"POST",url:"/rest-auth/google/",data:e,headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){console.log("done"),console.log(e),t(s(u.d,e.data.key)),i.a.set("token",e.data.key,{expires:7}),t(d())})).catch((function(e){t(l(e)),t(s(u.b,!1))}))}},d=function(){console.log("fetch data");return function(e){e(s(u.a,!0)),o.a.get("/rest-auth/user/").then((function(t){console.log(t.data),e(s(u.e,t.data)),e(s(u.b,!0)),e(s(u.a,!1))})).catch((function(t){e(l(t)),e(s(u.a,!1)),e(s(u.e,null)),e(s(u.d,"")),localStorage.removeItem("token"),e(s(u.b,!1))}))}},h=function(){console.log("fetch data");return function(e){o.a.post("/rest-auth/logout/").then((function(t){console.log(t.data),e(s(u.b,!1)),e(s(u.e,null)),e(s(u.d,"")),localStorage.removeItem("token")})).catch((function(t){e(l(t))}))}}},34:function(e,t,n){"use strict";var c=n(5),a=n(30),o=n(31),r=n(54),i=function(){function e(){Object(a.a)(this,e),this.stream=null,this.token=null,this.config=null,this.callbacks={},this.socketRef=null,console.log(r.a.getState().auth)}return Object(o.a)(e,[{key:"connect",value:function(e){var t=this;console.log("chat url "+e),this.socketRef=new WebSocket(e),this.socketRef.onopen=function(){console.log("websocket open")},this.socketRef.onmessage=function(e){t.socketNewMessage(e.data)},this.socketRef.onerror=function(e){console.log(e)},this.socketRef.onclose=function(){console.log("websockets closed lets reopen")}}},{key:"close",value:function(){this.socketRef.close()}},{key:"on",value:function(e,t){this.callbacks[e]=t}},{key:"socketNewMessage",value:function(e){var t=JSON.parse(e),n=(t.peer,t.action),c=t.message;0!=Object.keys(this.callbacks).length&&this.callbacks[n](c)}},{key:"getSteam",value:function(){return this.stream}},{key:"sendMessage",value:function(e){try{this.socketRef.send(JSON.stringify(Object(c.a)({},e)))}catch(t){console.log(t.message)}}},{key:"sendSignal",value:function(e,t){var n=JSON.stringify({peer:r.a.getState().auth.user,action:e,message:t});this.socketRef.send(n)}},{key:"state",value:function(){return this.socketRef.readyState}},{key:"waitForSocketConnection",value:function(e){var t=this;setTimeout((function(){if(1===u.state())return console.log("Connection is made"),e(),void console.log(this);console.log("wait for connection..."),console.log(this),t.waitForSocketConnection(e)}),100)}}],[{key:"getInstance",value:function(){return e.instance||(e.instance=new e),e.instance}}]),e}();i.instance=null;var u=i.getInstance();t.a=u},38:function(e,t,n){"use strict";var c=n(35),a=n.n(c),o=n(68),r=a.a.create({withCredentials:!0,headers:{"Content-Type":"application/json","Cache-Control":"no-cache"}});r.interceptors.request.use((function(e){return e.headers["X-CSRFToken"]=Object(o.a)("teams_csrftoken"),e})),t.a=r},54:function(e,t,n){"use strict";var c=n(48),a=n(87),o=n(5),r=n(12),i=Object(o.a)(Object(o.a)({},{loginPending:!1,getUserDataPending:!1}),{},{user:{},token:"",isLoggedIn:!1,error:null});var u=n(62),s={theme:localStorage.getItem("theme")||"default"},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.theme;switch(n){case u.a:return console.log(c),Object(o.a)(Object(o.a)({},e),{},{theme:c});default:return e}},f=n(71),d=n(9),h=Object(o.a)(Object(o.a)({},{createChatRoomPending:!1,getAllRommsPending:!1}),{},{currentRoom:{},rooms:[],error:null});var b=Object(c.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(t.error,n){case r.d:return Object(o.a)(Object(o.a)({},e),{},{token:c});case r.e:return Object(o.a)(Object(o.a)({},e),{},{user:c});case r.c:return Object(o.a)(Object(o.a)({},e),{},{loginPending:c});case r.a:return Object(o.a)(Object(o.a)({},e),{},{getUserDataPending:c});case r.b:return Object(o.a)(Object(o.a)({},e),{},{isLoggedIn:c});case r.f:return Object(o.a)(Object(o.a)({},e),{},{error:c});default:return e}},theme:l,room:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(t.error,n){case d.f:return Object(o.a)(Object(o.a)({},e),{},{currentRoom:c,rooms:[c].concat(Object(f.a)(e.rooms))});case d.e:return Object(o.a)(Object(o.a)({},e),{},{rooms:Object(f.a)(c)});case d.b:return Object(o.a)(Object(o.a)({},e),{},{createChatRoomPending:c});case d.c:return Object(o.a)(Object(o.a)({},e),{},{getAllRommsPending:c});case d.a:return Object(o.a)(Object(o.a)({},e),{},{error:c});default:return e}}}),j=function(e,t){return b(e,t)},O=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.c,g=Object(c.d)(j,O(Object(c.a)(a.a)));t.a=g},56:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return l}));n(35);var c=n(38),a="/call/room/",o=n(9),r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return{type:e,payload:t}},i=function(e){return{type:o.a,error:e}},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=a;return function(a){a(r(o.d,!0)),a(r(o.b,!0)),c.a.post(n,e).then((function(e){console.log(e),a(r(o.f,e.data)),a(r(o.d,!1)),a(r(o.b,!1)),t(e.data.id,e.data.sharing_id)})).catch((function(e){a(i(e)),a(r(o.d,!1)),a(r(o.b,!1))}))}},s=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},u=a+t+"/update_room_users/";return function(t){t(r(o.d,!0)),t(r(o.b,!0)),c.a.patch(u,e).then((function(e){console.log(e),t(r(o.f,e.data)),t(r(o.d,!1)),t(r(o.b,!1)),n()})).catch((function(e){t(i(e)),t(r(o.d,!1)),t(r(o.b,!1))}))}},l=function(){return function(e){e(r(o.c,!0)),c.a.get("/call/room/").then((function(t){console.log(t),e(r(o.e,t.data)),e(r(o.c,!1))})).catch((function(t){e(i(t)),e(r(o.c,!1))}))}}},62:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c="CHANGE_THEME"},68:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return a}));var c=function(e){for(var t=e+"=",n=decodeURIComponent(document.cookie).split(";"),c=0;c<n.length;c++){for(var a=n[c];" "==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(t))return a.substring(t.length,a.length)}return""},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.split(" ").map((function(e){return e?e[0].toUpperCase():""}))}},86:function(e,t,n){},9:function(e,t,n){"use strict";n.d(t,"e",(function(){return c})),n.d(t,"f",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return u}));var c="SET_ALL_ROOMS",a="SET_CURRENT_ROOM",o="CREATE_CHAT_ROOM_PENDING",r="GET_ALL_ROOMS_PENDING",i="GET_CURRENT_CHAT_ROOM_PENDING",u="CHATROOM_API_ERROR"}},[[141,2,3]]]);
//# sourceMappingURL=main.9fab2d15.chunk.js.map